import React from "react";
import { Link } from "wouter";
import { ShieldCheck, ArrowLeft, Scale, FileText, ListChecks, Building2 } from "lucide-react";

const SFCyber = () => (
  <span className="inline-flex items-center gap-1 align-middle text-cyan-400 font-bold animate-logo-text-pulse whitespace-nowrap">
    <ShieldCheck className="w-4 h-4" />
    SF Cyber
  </span>
);

const fatos = [
  "O projeto é particular e independente.",
  "Não possui finalidade comercial atualmente.",
  "Os laboratórios são gratuitos.",
  "O desenvolvimento ocorre fora do expediente.",
  "São utilizados recursos próprios.",
  "Não representa a universidade.",
];

export default function Independencia() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans">
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao portal
          </Link>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
            <Scale className="w-3.5 h-3.5" />
            Independência
          </span>
        </div>
      </header>

      <main className="flex-1 container py-14">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Declaração de Independência Institucional e Natureza Educacional
          </h1>
          <p className="text-sm text-slate-500 mb-2">
            <SFCyber /> Academy | Projeto independente de educação tecnológica
          </p>
          <p className="text-slate-400 text-base mb-10 leading-relaxed">
            Esta declaração torna públicos os fatos que caracterizam a{" "}
            <SFCyber /> Academy como uma iniciativa particular, independente e de natureza
            educacional, para que visitantes, parceiros e instituições compreendam a natureza do
            projeto.
          </p>

          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 px-5 py-4 mb-10">
            <p className="text-sm text-cyan-100 leading-relaxed">
              <strong className="text-cyan-300">Em resumo:</strong> a{" "}
              <SFCyber /> Academy é uma iniciativa particular e independente, sem vínculo
              institucional, comercial ou acadêmico com a universidade em que seu idealizador
              exerce atividade profissional, e não representa essa instituição.
            </p>
          </div>

          <div className="space-y-9">
            <section>
              <h2 className="text-xl font-extrabold text-white mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-400" />
                Natureza do projeto
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                A <SFCyber /> Academy é uma iniciativa independente de educação tecnológica,
                criada com o propósito de democratizar o acesso ao conhecimento em Redes de
                Computadores e Cibersegurança por meio de laboratórios práticos e gratuitos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-white mb-3 flex items-center gap-2">
                <ListChecks className="w-5 h-5 text-cyan-400" />
                Fatos verificáveis
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                A independência do projeto se apoia em fatos objetivos e verificáveis:
              </p>
              <ul className="space-y-2">
                {fatos.map((fato) => (
                  <li key={fato} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                    <span className="text-cyan-400 mt-0.5">•</span>
                    <span>{fato}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-white mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-cyan-400" />
                Ausência de vínculo institucional
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                A plataforma não possui vínculo institucional, comercial ou acadêmico com a
                universidade em que seu idealizador exerce atividade profissional.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <p className="text-xs text-slate-500 leading-relaxed">
              Esta declaração tem caráter informativo e busca esclarecer a independência do
              projeto. Ela não substitui a análise das circunstâncias reais de cada situação
              concreta.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
