import React from "react";
import { Check, X } from "lucide-react";

export function AudienceSection() {
  const pros = [
    {
      title: "Você está começando do zero",
      desc: "Não é preciso experiência prévia. As trilhas levam você do zero à sua primeira certificação passo a passo.",
    },
    {
      title: "Já tentou estudar antes e ficou perdido",
      desc: "Cansou de cursos maçantes onde o instrutor só quer aparecer. Você precisa de um método estruturado, não de excesso de teoria.",
    },
    {
      title: "Quer certificações reconhecidas globalmente",
      desc: "eJPT, CompTIA, CEH ou OSCP no seu horizonte. Nossos laboratórios preparam você para passar de verdade.",
    },
    {
      title: "Quer entrar no mercado de trabalho em cibersegurança",
      desc: "Busca sua primeira oportunidade ou transição de carreira. Nossos certificados e habilidades práticas abrem portas.",
    },
    {
      title: "Tem tempo limitado e precisa de eficiência",
      desc: "As trilhas diretas ao ponto maximizam cada minuto dedicado aos estudos.",
    },
  ];

  const cons = [
    {
      title: "Procura apenas conteúdo gratuito sem compromisso",
      desc: "Oferecemos introduções gratuitas, mas se você não está disposto a investir na sua carreira, os resultados serão limitados.",
    },
    {
      title: "Espera resultados sem esforço",
      desc: "Fornecemos estrutura, laboratórios e mentoria, mas o trabalho pesado é seu. Não existem atalhos mágicos em cibersegurança.",
    },
  ];

  return (
    <section className="py-20 bg-slate-900/60 border-t border-b border-slate-800 text-slate-100">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
            Encontre seu lugar
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
            Isso é para você?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A SF Cyber não é para todo mundo, e isso é ótimo. Se você se identifica com os perfis abaixo, este é o seu lugar.
          </p>
        </div>

        {/* 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* For You */}
          <div className="p-8 rounded-3xl bg-slate-950 border border-cyan-500/30 shadow-xl shadow-cyan-500/5">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">A SF Cyber é para você se...</h3>
            </div>

            <div className="space-y-6">
              {pros.map((p, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white mb-1">{p.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Not For You */}
          <div className="p-8 rounded-3xl bg-slate-950 border border-rose-500/30 shadow-xl shadow-rose-500/5">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-400">
                <X className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">A SF Cyber NÃO é para você se...</h3>
            </div>

            <div className="space-y-6">
              {cons.map((c, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white mb-1">{c.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
