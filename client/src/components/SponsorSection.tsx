import React from "react";
import { Building2, Briefcase, GraduationCap } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const PARTNERS = [
  {
    icon: Building2,
    title: "Empresas",
    desc: "Trilhas práticas em redes e Cibersegurança para capacitar sua equipe. Selo de patrocinador no portal.",
  },
  {
    icon: Briefcase,
    title: "Consultores Comerciais",
    desc: "Ofereça a plataforma aos seus clientes com condições especiais e convênio comercial.",
  },
  {
    icon: GraduationCap,
    title: "Faculdades e IES",
    desc: "Laboratório pronto para seus alunos praticarem, com relatório de progresso e certificado de conclusão.",
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
            Leve a SF Cyber para seus alunos, clientes e equipe
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Empresas, Consultores Acadêmicos, Professores, Escolas Técnicas e IES... Investir no futuro começa agora
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {PARTNERS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-white font-mono mb-2">{title}</h3>
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
            <WhatsAppIcon className="w-5 h-5" />
            Faça sua doação
          </a>
          <p className="mt-4 text-xs text-slate-500">
            Todo apoio é aplicado no crescimento do portal e em novos simuladores.
          </p>
        </div>
      </div>
    </section>
  );
}