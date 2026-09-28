import React from "react";
import { Building2, Handshake, GraduationCap } from "lucide-react";

const PARTNERS = [
  {
    icon: Building2,
    title: "Empresas",
    subtitle: "Capacite sua equipe",
    desc: "Trilhas práticas de Redes e Cibersegurança para desenvolver habilidades aplicáveis ao dia a dia.",
  },
  {
    icon: Handshake,
    title: "Consultores e Parceiros",
    subtitle: "Amplie sua oferta",
    desc: "Leve laboratórios práticos aos seus clientes e agregue uma nova solução ao seu portfólio.",
  },
  {
    icon: GraduationCap,
    title: "Faculdades e IES",
    subtitle: "Coloque seus alunos para praticar",
    desc: "Laboratórios interativos para complementar as aulas, acompanhar o progresso e reconhecer a conclusão.",
  },
];

const SPONSOR_WHATSAPP =
  "https://api.whatsapp.com/send/?phone=5562999693469&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20da%20p%C3%A1gina%20e%20gostaria%20de%20saber%20mais%20sobre%20patroc%C3%ADnio%20e%20parcerias%20com%20a%20SF%20Cyber.";

export function SponsorSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider font-mono">
            Patrocínio · Parcerias
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-mono mb-4">
            LEVE A SF CYBER PARA QUEM PRECISA APRENDER NA PRÁTICA
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Laboratórios de Redes e Cibersegurança para transformar conhecimento em experiência.
          </p>
        </div>

        <p className="text-center text-lg text-cyan-400 font-bold font-mono mb-10">
          Não entregue apenas conteúdo. Entregue experiência.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {PARTNERS.map(({ icon: Icon, title, subtitle, desc }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-white font-mono mb-1">{title}</h3>
              <p className="text-cyan-400 text-sm font-bold mb-2">{subtitle}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={SPONSOR_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold font-mono uppercase tracking-wider shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition-all"
          >
            <Handshake className="w-5 h-5" />
            Quero ser parceiro
          </a>
          <p className="mt-4 text-xs text-slate-500">
            Vamos construir juntos novas experiências de aprendizagem em Redes e Cibersegurança.
          </p>
        </div>
      </div>
    </section>
  );
}