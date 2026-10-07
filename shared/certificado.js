/**
 * Canonicalizacao e verificacao de certificados SF Cyber Academy.
 *
 * Este arquivo e a UNICA fonte de verdade do formato assinado. Ele roda
 * identico no Node (ferramenta de emissao) e no navegador (pagina de
 * validacao). Se os dois divergirem, a validacao falha, entao qualquer
 * mudanca aqui precisa ser feita nos dois lados de uma vez.
 *
 * A chave privada NUNCA entra no repositorio nem no navegador. Ela fica em
 * C:\Users\Sandro\Documents\Default Project\chaveiro-sfc\ e so e usada pela
 * ferramenta local de emissao.
 */

/** Algoritmo de assinatura. Ed25519 over UTF-8 bytes. */
export const ALGORITMO = "Ed25519";

/** Identificador da chave, versiona o formato junto com a assinatura. */
export const CHAVE_ID = "sfc-ed25519-2026";

/** Versao do formato do registro. */
export const VERSAO_REGISTRO = 1;

/** Prefixo de versao da string canonica de uma entrada. */
const PREFIXO_ENTRADA = "SFC1";

/** Prefixo de versao da string canonica do registro. */
const PREFIXO_REGISTRO = "SFCREG1";

/** Campos de texto que nao podem conter quebra de linha, senao a canonizacao quebra. */
export const CAMPOS_TEXTO_ENTRADA = [
  "codigo",
  "nome",
  "curso",
  "dataConclusao",
  "responsavelNome",
  "responsavelFormacao",
  "responsavelEspecialidade",
  "responsavelPapel",
  "emitidoEm",
];

/**
 * Identificador do responsavel pela emissao. Fixo, porque a lei exige que
 * o certificado identifique quem emitiu e com que qualificacao.
 */
export const RESPONSAVEL = Object.freeze({
  nome: "Sandro Ferreira",
  formacao: "Graduado em Defesa Cibernética",
  especialidade: "Especialista em Gestão de Projetos",
  papel: "Criador e Instrutor da SF Cyber Academy",
});

/** Padrao de codigo unico e sequencial por ano. */
export const PADRAO_CODIGO = /^SFC-(\d{4})-(\d{6})$/;

/** Formata o aproveitamento com uma casa decimal, igual nos dois lados. */
export function formatarAproveitamento(valor) {
  const n = Number(valor);
  if (!Number.isFinite(n) || n < 0 || n > 100) {
    throw new RangeError(`Aproveitamento invalido: ${valor}`);
  }
  return (Math.round(n * 10) / 10).toFixed(1);
}

/** Valida que nenhum campo de texto quebra a canonizacao. */
export function validarCampos(entrada) {
  for (const campo of CAMPOS_TEXTO_ENTRADA) {
    const valor = entrada[campo];
    if (typeof valor !== "string" || valor.length === 0) {
      throw new TypeError(`Campo obrigatorio vazio: ${campo}`);
    }
    if (/[\r\n]/.test(valor)) {
      throw new TypeError(`Campo ${campo} nao pode conter quebra de linha`);
    }
  }
  if (!PADRAO_CODIGO.test(entrada.codigo)) {
    throw new TypeError(`Codigo fora do padrao SFC-AAAA-NNNNNN: ${entrada.codigo}`);
  }
  if (!Number.isInteger(entrada.cargaHoraria) || entrada.cargaHoraria <= 0) {
    throw new TypeError(`Carga horaria invalida: ${entrada.cargaHoraria}`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(entrada.dataConclusao)) {
    throw new TypeError(`Data de conclusao fora do formato AAAA-MM-DD: ${entrada.dataConclusao}`);
  }
  formatarAproveitamento(entrada.aproveitamento);
}

/**
 * Monta a string canonica de uma entrada. Determinista e sem dependencias,
 * para que Node e navegador produzam bytes identicos.
 */
export function canonicalizarEntrada(entrada) {
  validarCampos(entrada);
  return [
    PREFIXO_ENTRADA,
    entrada.codigo,
    entrada.nome,
    entrada.curso,
    String(entrada.cargaHoraria),
    entrada.dataConclusao,
    formatarAproveitamento(entrada.aproveitamento),
    entrada.responsavelNome,
    entrada.responsavelFormacao,
    entrada.responsavelEspecialidade,
    entrada.responsavelPapel,
    entrada.emitidoEm,
  ].join("\n");
}

/**
 * Monta a string canonica do registro. Inclui a assinatura de cada entrada em
 * ordem, entao remover ou adicionar uma entrada invalida o registro inteiro.
 */
export function canonicalizarRegistro(registro) {
  if (registro.versao !== VERSAO_REGISTRO) {
    throw new TypeError(`Versao de registro nao suportada: ${registro.versao}`);
  }
  if (registro.chaveId !== CHAVE_ID) {
    throw new TypeError(`Chave nao suportada: ${registro.chaveId}`);
  }
  if (!Array.isArray(registro.entradas)) {
    throw new TypeError("Registro sem lista de entradas");
  }
  const codigos = registro.entradas.map((e) => e.codigo);
  const unicos = new Set(codigos);
  if (unicos.size !== codigos.length) {
    throw new TypeError("Registro com codigo duplicado");
  }
  const assinaturas = [...registro.entradas]
    .sort((a, b) => (a.codigo < b.codigo ? -1 : a.codigo > b.codigo ? 1 : 0))
    .map((e) => e.assinatura);
  return [
    PREFIXO_REGISTRO,
    String(registro.versao),
    registro.chaveId,
    registro.atualizadoEm,
    ...assinaturas,
  ].join("\n");
}

/** Ordena entradas por codigo, para o arquivo ficar estavel no git. */
export function ordenarEntradas(entradas) {
  return [...entradas].sort((a, b) =>
    a.codigo < b.codigo ? -1 : a.codigo > b.codigo ? 1 : 0
  );
}

/** Normaliza uma data para o formato de conclusao AAAA-MM-DD. */
export function dataConclusion(date) {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) throw new TypeError(`Data invalida: ${date}`);
  return d.toISOString().slice(0, 10);
}

/** Timestamp ISO sem milissegundos, estavel entre os dois lados. */
export function agora(date = new Date()) {
  return new Date(date).toISOString().replace(/\.\d{3}Z$/, "Z");
}