import { useEffect, useState } from "react";
import { BadgeCheck, ShieldAlert, ShieldX, Loader2, Home } from "lucide-react";
import { useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  canonicalizarEntrada,
  canonicalizarRegistro,
  formatarAproveitamento,
  PADRAO_CODIGO,
} from "@shared/certificado.js";
import type {
  ChavePublica,
  EntradaCertificado,
  RegistroCertificados,
} from "@shared/certificado.js";

/**
 * Validação de certificado da SF Cyber Academy.
 *
 * A página não consulta servidor de emissão: ela lê o registro assinado que
 * está publicado no site e confere a assinatura Ed25519 no navegador. Se
 * alguém alterar nome, curso ou nota no arquivo, a assinatura deixa de
 * fechar e o certificado é recusado.
 */

type Estado =
  | { fase: "carregando" }
  | { fase: "valido"; entrada: EntradaCertificado; dataValidacao: string }
  | { fase: "naoEncontrado"; codigo: string }
  | { fase: "invalido"; motivo: string }
  | { fase: "incompativel"; motivo: string };

function b64ParaBytes(b64: string): Uint8Array {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i += 1) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

async function importarChave(publicaB64: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    b64ParaBytes(publicaB64),
    { name: "Ed25519" },
    false,
    ["verify"],
  );
}

async function conferirAssinatura(
  chave: CryptoKey,
  texto: string,
  assinaturaB64: string,
): Promise<boolean> {
  return crypto.subtle.verify(
    { name: "Ed25519" },
    chave,
    b64ParaBytes(assinaturaB64),
    new TextEncoder().encode(texto),
  );
}

function dataBr(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("pt-BR");
}

function linha(rotulo: string, valor: string) {
  return (
    <div className="flex flex-col gap-1 border-b border-slate-700/60 py-3 last:border-b-0 sm:flex-row sm:items-center sm:gap-4">
      <span className="w-full shrink-0 text-xs uppercase tracking-wider text-slate-400 sm:w-52">
        {rotulo}
      </span>
      <span className="text-sm font-semibold text-slate-100">{valor}</span>
    </div>
  );
}

export default function ValidarCertificado() {
  const { codigo = "" } = useParams<{ codigo: string }>();
  const [estado, setEstado] = useState<Estado>({ fase: "carregando" });

  useEffect(() => {
    let cancelado = false;
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");

    async function validar() {
      const alvo = (codigo ?? "").trim().toUpperCase();
      if (!PADRAO_CODIGO.test(alvo)) {
        if (!cancelado)
          setEstado({
            fase: "invalido",
            motivo:
              "O código informado não segue o formato SFC-AAAA-NNNNNN. Confira o certificado e tente de novo.",
          });
        return;
      }

      try {
        const [respRegistro, respChave] = await Promise.all([
          fetch(`${base}/certificados/registro.json`, { cache: "no-store" }),
          fetch(`${base}/certificados/chave-publica.json`, { cache: "no-store" }),
        ]);
        if (!respRegistro.ok || !respChave.ok) {
          throw new Error("não foi possível baixar o registro de certificados");
        }

        const chave = (await respChave.json()) as ChavePublica;
        const registro = (await respRegistro.json()) as RegistroCertificados;

        const publica = await importarChave(chave.publicaB64);

        const registroOk = await conferirAssinatura(
          publica,
          canonicalizarRegistro(registro),
          registro.assinatura,
        );
        if (!registroOk) {
          if (!cancelado)
            setEstado({
              fase: "invalido",
              motivo:
                "A assinatura do registro não confere. O registro foi alterado fora da ferramenta de emissão, então nenhum certificado pode ser validado.",
            });
          return;
        }

        const entrada = registro.entradas.find((e) => e.codigo === alvo);
        if (!entrada) {
          if (!cancelado) setEstado({ fase: "naoEncontrado", codigo: alvo });
          return;
        }

        const entradaOk = await conferirAssinatura(
          publica,
          canonicalizarEntrada(entrada),
          entrada.assinatura,
        );
        if (!entradaOk) {
          if (!cancelado)
            setEstado({
              fase: "invalido",
              motivo:
                "A assinatura deste certificado não confere. Os dados do certificado foram modificados após a emissão.",
            });
          return;
        }

        if (!cancelado)
          setEstado({
            fase: "valido",
            entrada,
            dataValidacao: new Date().toISOString(),
          });
      } catch (erro) {
        if (cancelado) return;
        const mensagem =
          erro instanceof Error ? erro.message : "falha inesperada na validação";
        if (/Ed25519|NOT_SUPPORTED|not supported/i.test(mensagem)) {
          setEstado({
            fase: "incompativel",
            motivo:
              "Seu navegador não confere assinaturas Ed25519. Atualize o navegador ou valide em um navegador atual para confirmar a autenticidade.",
          });
          return;
        }
        setEstado({ fase: "invalido", motivo: `Não foi possível validar: ${mensagem}` });
      }
    }

    void validar();
    return () => {
      cancelado = true;
    };
  }, [codigo]);

  const codigoLimpo = (codigo ?? "").trim().toUpperCase();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-10">
      <Card className="w-full max-w-2xl border-slate-700/60 bg-slate-900/70 shadow-2xl backdrop-blur">
        <CardContent className="p-6 sm:p-8">
          <div className="mb-6 flex flex-col items-center text-center">
            <div className="mb-3 flex items-center gap-2 text-sky-400">
              <BadgeCheck className="h-6 w-6" />
              <span className="text-xs uppercase tracking-[0.3em]">
                SF Cyber Academy
              </span>
            </div>
            <h1 className="text-2xl font-bold text-slate-50">
              Validação de Certificado
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Confirme a autenticidade de um certificado de curso livre e
              capacitação profissional.
            </p>
            <p className="mt-3 font-mono text-xs text-slate-300">
              {codigoLimpo || "sem código"}
            </p>
          </div>

          {estado.fase === "carregando" && (
            <div className="flex items-center justify-center gap-3 py-10 text-slate-400">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span className="text-sm">Conferindo assinatura...</span>
            </div>
          )}

          {estado.fase === "valido" && (
            <>
              <div className="mb-6 flex flex-col items-center rounded-xl border border-emerald-500/40 bg-emerald-500/10 py-6 text-center">
                <ShieldCheckIcon />
                <p className="mt-3 text-xl font-bold tracking-wider text-emerald-400">
                  CERTIFICADO VÁLIDO
                </p>
                <p className="mt-1 text-xs text-emerald-300/80">
                  Autenticidade confirmada por assinatura digital
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-950/40 px-4">
                {linha("Aluno", estado.entrada.nome)}
                {linha("Curso livre", estado.entrada.curso)}
                {linha("Carga horária", `${estado.entrada.cargaHoraria} horas`)}
                {linha("Data de conclusão", dataBr(estado.entrada.dataConclusao))}
                {linha(
                  "Aproveitamento",
                  `${formatarAproveitamento(estado.entrada.aproveitamento)}%`,
                )}
                {linha("Código do certificado", estado.entrada.codigo)}
                {linha("Data de emissão", dataBr(estado.entrada.emitidoEm))}
                {linha("Data desta validação", dataBr(estado.dataValidacao))}
              </div>

              <div className="mt-6 rounded-xl border border-slate-700/60 bg-slate-950/40 p-4">
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Responsável pela emissão
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-100">
                  {estado.entrada.responsavelNome}
                </p>
                <p className="text-sm text-slate-300">
                  {estado.entrada.responsavelFormacao}
                </p>
                <p className="text-sm text-slate-300">
                  {estado.entrada.responsavelEspecialidade}
                </p>
                <p className="text-sm text-sky-400">
                  {estado.entrada.responsavelPapel}
                </p>
              </div>

              <p className="mt-6 text-center text-[11px] leading-relaxed text-slate-500">
                Certificado de curso livre e capacitação profissional, emitido
                pela SF Cyber Academy. Este certificado comprova a participação e
                aprovação no curso realizado e não corresponde a diploma de
                graduação, pós-graduação ou curso técnico.
              </p>
            </>
          )}

          {estado.fase === "naoEncontrado" && (
            <Aviso
              icone={<ShieldX className="h-14 w-14 text-amber-400" />}
              titulo="CERTIFICADO NÃO ENCONTRADO"
              texto={`O código ${estado.codigo} não consta no registro de certificados da SF Cyber Academy. Verifique se o número foi digitado por completo.`}
            />
          )}

          {estado.fase === "invalido" && (
            <Aviso
              icone={<ShieldAlert className="h-14 w-14 text-red-500" />}
              titulo="CERTIFICADO INVÁLIDO"
              texto={estado.motivo}
            />
          )}

          {estado.fase === "incompativel" && (
            <Aviso
              icone={<ShieldAlert className="h-14 w-14 text-slate-400" />}
              titulo="NÃO FOI POSSÍVEL CONFERIR"
              texto={estado.motivo}
            />
          )}

          <div className="mt-8 flex justify-center">
            <Button
              onClick={() => {
                window.location.href = import.meta.env.BASE_URL || "/";
              }}
              variant="outline"
              className="border-slate-600 text-slate-200 hover:bg-slate-800"
            >
              <Home className="mr-2 h-4 w-4" />
              Voltar ao site
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ShieldCheckIcon() {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping" />
      <BadgeCheck className="relative h-14 w-14 text-emerald-400" />
    </div>
  );
}

function Aviso({
  icone,
  titulo,
  texto,
}: {
  icone: React.ReactNode;
  titulo: string;
  texto: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-red-500/30 bg-red-500/10 py-6 text-center">
      {icone}
      <p className="mt-3 text-lg font-bold tracking-wider text-red-400">
        {titulo}
      </p>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-300">
        {texto}
      </p>
    </div>
  );
}