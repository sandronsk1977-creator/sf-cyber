#!/usr/bin/env node
/**
 * Emissao de certificados SF Cyber Academy.
 *
 * Roda SOMENTE na maquina do responsavel. E a unica coisa que assina
 * certificado, porque a chave privada nunca vai para o repositorio nem para
 * o navegador do aluno.
 *
 * Uso:
 *   node emitir-certificado.mjs --iniciar
 *   node emitir-certificado.mjs --nome "Maria Souza" --curso vlan --aproveitamento 87.5
 *   node emitir-certificado.mjs   (sem argumentos, modo interativo)
 */

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import readline from "node:readline/promises";
import QRCode from "qrcode";

import {
  ALGORITMO,
  CHAVE_ID,
  VERSAO_REGISTRO,
  RESPONSAVEL,
  PADRAO_CODIGO,
  canonicalizarEntrada,
  canonicalizarRegistro,
  ordenarEntradas,
  dataConclusion,
  agora,
} from "../shared/certificado.js";

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const RAIZ = path.resolve(AQUI, "..");
const DIR_CERTIFICADOS = path.join(RAIZ, "client", "public", "certificados");
const ARQ_REGISTRO = path.join(DIR_CERTIFICADOS, "registro.json");
const ARQ_CHAVE_PUBLICA = path.join(DIR_CERTIFICADOS, "chave-publica.json");
const DIR_SAIDA = path.join(AQUI, "saida");
const BASE_SITE = "https://sfcyber.projetosdisruptivos.com.br";

/** A chave privada fica fora do repositorio, num diretorio irmao. */
const CHAVE_PRIVADA_PADRAO = path.join(RAIZ, "..", "chaveiro-sfc", "chave-privada-sfc.pem");

/** Catalogo de cursos. A carga horaria vive aqui porque nao ha no simulador. */
export const CATALOGO = Object.freeze({
  vlan: {
    nome: "Configuração de VLANs em Switch Cisco",
    horas: 1,
    rotulo: "Laboratório de Redes · Simulador de VLANs",
  },
  soc: {
    nome: "Análise de Segurança e Hacker Ético (SOC)",
    horas: 1,
    rotulo: "Laboratório de Cibersegurança · Simulador SOC",
  },
  web: {
    nome: "Segurança Web (SQL Injection | XSS)",
    horas: 1,
    rotulo: "Laboratório de Cibersegurança · Simulador Web",
  },
  dns: {
    nome: "Redes · Servidor DNS (resolução, AXFR e DNSSEC)",
    horas: 1,
    rotulo: "Laboratório de Redes · Simulador DNS",
  },
});

/** Nota minima de aprovacao. 6 de 8 perguntas. */
export const APROVACAO_MINIMA = 70;

/** Declaração de natureza exigida no rodapé de todo certificado. */
const DECLARACAO =
  "Certificado de curso livre e capacitação profissional, emitido pela SF Cyber Academy. " +
  "Este certificado comprova a participação e aprovação no curso realizado e não corresponde " +
  "a diploma de graduação, pós-graduação ou curso técnico.";

const TEXTO_CERTIFICAMOS =
  "Certificamos que <b>NOME</b> concluiu com aproveitamento o curso livre de capacitação " +
  "professional <b>CURSO</b>, com carga horária de <b>CARGA</b>, tendo realizado os " +
  "conteúdos, as atividades práticas em laboratório virtual e a avaliação final previstos no " +
  "programa, obtendo aproveitamento de <b>APROV</b>.";

/** Concordancia de "hora": 1 hora, 2 horas. */
function cargaTexto(horas) {
  const n = Number(horas);
  return n === 1 ? "1 hora" : `${n} horas`;
}

function escaparHtml(valor) {
  return String(valor)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Remove controles e normaliza espacos do nome do aluno. */
function normalizarNome(nome) {
  const limpo = String(nome)
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (limpo.length < 3 || limpo.length > 120) {
    throw new RangeError("Nome do aluno deve ter entre 3 e 120 caracteres");
  }
  return limpo;
}

/** Garante que o arquivo de chave privada nunca fique dentro do repo. */
function caminhoDaChave(arg) {
  const escolhido = arg ? path.resolve(arg) : path.resolve(CHAVE_PRIVADA_PADRAO);
  const relativo = path.relative(RAIZ, escolhido);
  if (!relativo.startsWith("..")) {
    throw new Error(
      `A chave privada nao pode ficar dentro do repositorio: ${escolhido}`,
    );
  }
  return escolhido;
}

function carregarChavePrivada(caminho) {
  if (!fs.existsSync(caminho)) {
    throw new Error(
      `Chave privada nao encontrada em ${caminho}\n` +
        `Gere o chaveiro com:  node tools/emitir-certificado.mjs --gerar-chaveiro`,
    );
  }
  return crypto.createPrivateKey(fs.readFileSync(caminho, "utf8"));
}

function assinar(privada, texto) {
  return crypto.sign(null, Buffer.from(texto, "utf8"), privada).toString("base64");
}

function verificar(publica, texto, assinaturaB64) {
  try {
    return crypto.verify(
      null,
      Buffer.from(texto, "utf8"),
      publica,
      Buffer.from(assinaturaB64, "base64"),
    );
  } catch {
    return false;
  }
}

/** Alloc o proximo codigo sequencial do ano corrente, sem reusar nenhum. */
function proximoCodigo(registro, ano) {
  let maior = 0;
  for (const entrada of registro.entradas) {
    const m = PADRAO_CODIGO.exec(entrada.codigo);
    if (!m) throw new Error(`Codigo invalido no registro: ${entrada.codigo}`);
    if (Number(m[1]) === ano && Number(m[2]) > maior) maior = Number(m[2]);
  }
  return `SFC-${ano}-${String(maior + 1).padStart(6, "0")}`;
}

/** Le o registro e confere a assinatura antes de confiar no arquivo. */
function lerRegistro(publica) {
  if (!fs.existsSync(ARQ_REGISTRO)) return null;
  const registro = JSON.parse(fs.readFileSync(ARQ_REGISTRO, "utf8"));
  const ok = verificar(publica, canonicalizarRegistro(registro), registro.assinatura);
  if (!ok) {
    throw new Error(
      "A assinatura do registro nao confere. O arquivo registro.json foi alterado " +
        "fora da ferramenta. Nao emita nada antes de investigar.",
    );
  }
  for (const entrada of registro.entradas) {
    if (!verificar(publica, canonicalizarEntrada(entrada), entrada.assinatura)) {
      throw new Error(`Entrada ${entrada.codigo} com assinatura invalida`);
    }
  }
  return registro;
}

function salvarRegistro(registro, privada) {
  registro.atualizadoEm = agora();
  registro.entradas = ordenarEntradas(registro.entradas);
  registro.assinatura = assinar(privada, canonicalizarRegistro(registro));
  fs.mkdirSync(DIR_CERTIFICADOS, { recursive: true });
  fs.writeFileSync(ARQ_REGISTRO, `${JSON.stringify(registro, null, 2)}\n`, "utf8");
  return registro;
}

/** Monta o HTML do certificado: A4 paisagem, pronto para imprimir ou PDF. */
async function montarCertificado(entrada, urlValidacao) {
  const qrSvg = await QRCode.toString(urlValidacao, {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 0,
    width: 132,
    color: { dark: "#0B1220", light: "#00000000" },
  });

  const texto = TEXTO_CERTIFICAMOS.replace("NOME", escaparHtml(entrada.nome))
    .replace("CURSO", escaparHtml(entrada.curso))
    .replace("CARGA", escaparHtml(cargaTexto(entrada.cargaHoraria)))
    .replace("APROV", `${escaparHtml(entrada.aproveitamento.toFixed(1))}%`);

  const linha = (rotulo, valor, extra = "") =>
    `<div class="dado"><span class="rot">${rotulo}</span><span class="val ${extra}">${valor}</span></div>`;

  const dados = [
    linha("Curso", escaparHtml(entrada.curso)),
    linha("Carga horária", cargaTexto(entrada.cargaHoraria)),
    linha("Data de conclusão", escaparHtml(entrada.dataConclusao.split("-").reverse().join("/"))),
    linha("Aproveitamento", `${entrada.aproveitamento.toFixed(1)}%`, "destaque"),
  ].join("\n      ");

  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Certificado ${escaparHtml(entrada.codigo)} · ${escaparHtml(entrada.nome)}</title>
<style>
  @page { size: A4 landscape; margin: 0; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: #dde6f0; }
  body {
    font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #0B1220;
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  .folha {
    width: 297mm; height: 210mm; margin: 12px auto; background: #fff;
    display: flex; flex-direction: column; position: relative; overflow: hidden;
  }
  .moldura { position: absolute; inset: 8mm; border: 1px solid #B9D3EC; }
  .moldura::before {
    content: ""; position: absolute; inset: 2.5mm; border: 3px solid #0F6CBD;
  }
  .trama {
    position: absolute; inset: 0; opacity: .05;
    background-image:
      linear-gradient(#0F6CBD 1px, transparent 1px),
      linear-gradient(90deg, #0F6CBD 1px, transparent 1px);
    background-size: 9mm 9mm;
  }
  header { background: #0B1220; color: #fff; padding: 9mm 18mm 6mm; }
  header .marca { font-size: 20pt; font-weight: 700; letter-spacing: 3px; }
  header .marca span { color: #4FC3F7; }
  header .sub { font-size: 8.5pt; letter-spacing: 2.4px; color: #9FC7EA; margin-top: 1.5mm; }
  header .faixa { height: 1.4mm; background: linear-gradient(90deg, #0F6CBD, #4FC3F7, #0F6CBD); }
  main { flex: 1; padding: 7mm 18mm 0; position: relative; }
  h1 {
    margin: 0; font-size: 21pt; letter-spacing: 5px; text-align: center;
    color: #0F6CBD; font-weight: 700;
  }
  .subtitulo {
    text-align: center; font-size: 8.5pt; letter-spacing: 2.6px;
    color: #5B7A9A; margin: 1.5mm 0 4mm;
  }
  .texto { font-size: 11pt; line-height: 1.85; text-align: justify; }
  .texto b { color: #0B1220; }
  .grade { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 4mm; margin: 6mm 0 0; }
  .dado { border: 1px solid #CFE0F0; border-radius: 2mm; padding: 3mm 3.5mm; background: #F7FAFD; }
  .dado .rot { display: block; font-size: 7pt; letter-spacing: 1.6px; color: #5B7A9A; text-transform: uppercase; }
  .dado .val { display: block; font-size: 10pt; font-weight: 600; margin-top: 1mm; }
  .dado .val.destaque { color: #0F6CBD; font-size: 12pt; }
  .rodape { display: flex; align-items: flex-end; justify-content: space-between; padding: 0 18mm 8mm; position: relative; }
  .resp { font-size: 8.6pt; line-height: 1.6; }
  .resp .linha { border-top: 1px solid #0F6CBD; width: 62mm; margin-bottom: 1.5mm; }
  .resp b { display: block; font-size: 10pt; }
  .qr { text-align: center; }
  .qr svg { display: block; }
  .qr .cod { font-size: 8.5pt; font-weight: 700; letter-spacing: 1.2px; margin-top: 1mm; }
  .qr .val-msg { font-size: 6.6pt; color: #5B7A9A; margin-top: .6mm; }
  .declaracao {
    border-top: 1px solid #CFE0F0; margin: 0 18mm; padding: 2.5mm 0 6mm;
    font-size: 6.8pt; line-height: 1.55; color: #6B8299; text-align: center;
  }
  @media print {
    html, body { background: #fff; }
    .folha { margin: 0; box-shadow: none; }
  }
</style>
</head>
<body>
  <div class="folha">
    <div class="trama"></div>
    <div class="moldura"></div>
    <header>
      <div class="marca">SF CYBER <span>ACADEMY</span></div>
      <div class="sub">CURSO LIVRE DE CAPACITAÇÃO PROFISSIONAL</div>
      <div class="faixa"></div>
    </header>
    <main>
      <h1>CERTIFICADO DE CONCLUSÃO</h1>
      <div class="subtitulo">CERTIFICADO DE CURSO LIVRE E CAPACITAÇÃO PROFISSIONAL</div>
      <div class="texto">${texto}</div>
      <div class="grade">
      ${dados}
      </div>
    </main>
    <div class="rodape">
      <div class="resp">
        <div class="linha"></div>
        <b>${escaparHtml(entrada.responsavelNome)}</b>
        ${escaparHtml(entrada.responsavelFormacao)}<br>
        ${escaparHtml(entrada.responsavelEspecialidade)}<br>
        ${escaparHtml(entrada.responsavelPapel)}
      </div>
      <div class="qr">
        ${qrSvg}
        <div class="cod">${escaparHtml(entrada.codigo)}</div>
        <div class="val-msg">Valide em ${escaparHtml(urlValidacao.replace("https://", ""))}</div>
      </div>
    </div>
    <div class="declaracao">${escaparHtml(DECLARACAO)}</div>
  </div>
</body>
</html>
`;
}

function lerArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith("--")) continue;
    const chave = token.slice(2);
    const proximo = argv[i + 1];
    if (proximo === undefined || proximo.startsWith("--")) args[chave] = true;
    else { args[chave] = proximo; i += 1; }
  }
  return args;
}

async function gerarChaveiro() {
  const dir = path.join(RAIZ, "..", "chaveiro-sfc");
  fs.mkdirSync(dir, { recursive: true });
  const priv = path.join(dir, "chave-privada-sfc.pem");
  if (fs.existsSync(priv)) {
    throw new Error(`Ja existe chave privada em ${priv}. Nao gere outra: os certificados ja assinados deixariam de validar.`);
  }
  const { publicKey, privateKey } = crypto.generateKeyPairSync("ed25519");
  fs.writeFileSync(priv, privateKey.export({ type: "pkcs8", format: "pem" }), { mode: 0o600 });
  fs.writeFileSync(
    path.join(dir, "chave-publica-sfc.pem"),
    publicKey.export({ type: "spki", format: "pem" }),
  );
  const raw = publicKey.export({ type: "spki", format: "der" }).subarray(-32);
  fs.writeFileSync(path.join(dir, "chave-publica-sfc.raw.b64"), `${raw.toString("base64")}\n`);
  console.log(`Chaveiro criado em ${dir}`);
  console.log("Guarde a chave privada em local seguro. Sem ela nao da para emitir novos certificados.");
}

/** Cria a chave publica e o registro vazio, ja assinado. */
async function iniciar(args) {
  const chavePrivada = caminhoDaChave(args.chave);
  const privada = carregarChavePrivada(chavePrivada);
  const publica = crypto.createPublicKey(privada);

  const raw = publica.export({ type: "spki", format: "der" }).subarray(-32);
  fs.mkdirSync(DIR_CERTIFICADOS, { recursive: true });
  fs.writeFileSync(
    ARQ_CHAVE_PUBLICA,
    `${JSON.stringify(
      { chaveId: CHAVE_ID, algoritmo: ALGORITMO, publicaB64: raw.toString("base64"), criadoEm: agora() },
      null,
      2,
    )}\n`,
    "utf8",
  );

  const registro = salvarRegistro(
    { versao: VERSAO_REGISTRO, chaveId: CHAVE_ID, emissor: "SF Cyber Academy", atualizadoEm: agora(), entradas: [], assinatura: "" },
    privada,
  );
  console.log(`Registro criado e assinado: ${ARQ_REGISTRO}`);
  console.log(`Chave publica gravada:   ${ARQ_CHAVE_PUBLICA}`);
  console.log(`Entradas no registro:    ${registro.entradas.length}`);
}

async function emitir(args) {
  const chavePrivada = caminhoDaChave(args.chave);
  const privada = carregarChavePrivada(chavePrivada);
  const publica = crypto.createPublicKey(privada);

  const registro = lerRegistro(publica) ?? {
    versao: VERSAO_REGISTRO,
    chaveId: CHAVE_ID,
    emissor: "SF Cyber Academy",
    atualizadoEm: agora(),
    entradas: [],
    assinatura: "",
  };

  let nome = args.nome;
  let cursoId = args.curso;
  let aproveitamento = args.aproveitamento;
  let carga = args.carga;
  let data = args.data;

  const precisa = args.interativo !== undefined || (nome && cursoId);
  if (!precisa) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    console.log("Emissão de certificado SF Cyber Academy\n");
    nome = nome || (await rl.question("Nome completo do aluno: ")).trim();
    if (!cursoId) {
      console.log("\nCursos:");
      for (const [id, c] of Object.entries(CATALOGO)) console.log(`  ${id.padEnd(5)} ${c.nome}`);
      cursoId = (await rl.question("\nCódigo do curso: ")).trim();
    }
    if (aproveitamento === undefined) {
      aproveitamento = (await rl.question(`Aproveitamento em % (mínimo ${APROVACAO_MINIMA}): `)).trim();
    }
    if (data === undefined) data = (await rl.question("Data de conclusão (AAAA-MM-DD, vazio = hoje): ")).trim();
    rl.close();
  }

  const curso = CATALOGO[cursoId];
  if (!curso) throw new Error(`Curso desconhecido: ${cursoId}. Use: ${Object.keys(CATALOGO).join(", ")}`);
  if (carga === undefined || carga === "") carga = curso.horas;

  const aprove = Number(aproveitamento);
  if (!Number.isFinite(aprove)) throw new Error(`Aproveitamento invalido: ${aproveitamento}`);
  if (aprove < APROVACAO_MINIMA) {
    throw new Error(
      `Aproveitamento ${aprove}% abaixo do minimo de ${APROVACAO_MINIMA}%. O certificado so vale com aprovacao na avaliacao final.`,
    );
  }
  if (carga === true || Number(carga) <= 0) throw new Error(`Carga horaria invalida: ${carga}`);

  const dataConclusao = !data || data === true ? dataConclusion(new Date()) : dataConclusion(String(data));
  const hoje = new Date().getUTCFullYear();
  const codigo = args.codigo ? String(args.codigo) : proximoCodigo(registro, hoje);
  if (!PADRAO_CODIGO.test(codigo)) throw new Error(`Codigo fora do padrao SFC-AAAA-NNNNNN: ${codigo}`);
  if (registro.entradas.some((e) => e.codigo === codigo)) {
    throw new Error(`Codigo ${codigo} ja existe no registro. Codigo nunca pode ser reutilizado.`);
  }

  const entrada = {
    codigo,
    nome: normalizarNome(nome),
    curso: curso.nome,
    cargaHoraria: Number(carga),
    dataConclusao,
    aproveitamento: aprove,
    responsavelNome: RESPONSAVEL.nome,
    responsavelFormacao: RESPONSAVEL.formacao,
    responsavelEspecialidade: RESPONSAVEL.especialidade,
    responsavelPapel: RESPONSAVEL.papel,
    emitidoEm: agora(),
    assinatura: "",
  };
  entrada.assinatura = assinar(privada, canonicalizarEntrada(entrada));

  registro.entradas.push(entrada);
  salvarRegistro(registro, privada);

  const urlValidacao = `${BASE_SITE}/validar/${codigo}`;
  const html = await montarCertificado(entrada, urlValidacao);
  fs.mkdirSync(DIR_SAIDA, { recursive: true });
  const destino = path.join(DIR_SAIDA, `${codigo}-${entrada.nome.replace(/[^\p{L}\p{N}]+/gu, "-")}.html`);
  fs.writeFileSync(destino, html, "utf8");

  console.log("\nCertificado emitido e assinado\n");
  console.log(`  Codigo        ${codigo}`);
  console.log(`  Aluno         ${entrada.nome}`);
  console.log(`  Curso         ${entrada.curso}`);
  console.log(`  Carga         ${cargaTexto(entrada.cargaHoraria)}`);
  console.log(`  Conclusao     ${entrada.dataConclusao}`);
  console.log(`  Aproveitamento ${entrada.aproveitamento}%`);
  console.log(`\n  Registro      ${path.relative(RAIZ, ARQ_REGISTRO)}`);
  console.log(`  Certificado   ${destino}`);
  console.log(`  Validacao     ${urlValidacao}`);
  console.log("\nAbra o HTML e use Ctrl+P para salvar em PDF. Depois faca commit do registro.");
}

/** Confere a assinatura do registro e de cada entrada. Util para duvida. */
function conferir(args) {
  const privada = carregarChavePrivada(caminhoDaChave(args.chave));
  const publica = crypto.createPublicKey(privada);
  const registro = lerRegistro(publica);
  if (!registro) throw new Error("Registro ainda nao existe");
  console.log(`Registro assinado e integro: ${ARQ_REGISTRO}`);
  console.log(`Entradas: ${registro.entradas.length}`);
  for (const e of registro.entradas) {
    console.log(`  ${e.codigo}  ${String(e.aproveitamento).padStart(5)}%  ${e.nome}`);
  }
}

async function main() {
  const args = lerArgs(process.argv.slice(2));
  try {
    if (args["gerar-chaveiro"]) await gerarChaveiro();
    else if (args.iniciar) await iniciar(args);
    else if (args.conferir) conferir(args);
    else await emitir(args);
  } catch (erro) {
    console.error(`\nErro: ${erro.message}`);
    process.exitCode = 1;
  }
}

await main();