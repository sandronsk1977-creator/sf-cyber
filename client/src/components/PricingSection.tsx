import React, { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthModal } from "./AuthModal";

export function PricingSection() {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const plans = [
    {
      name: "PREMIUM",
      icon: "👽",
      subtitle: "Para começar a aprender agora mesmo.",
      price: "R$ 89,90",
      period: "/mês",
      badge: null,
      highlight: false,
      features: [
        "Todos os cursos sem restrições",
        "Certificados verificáveis por curso",
        "Acesso à SF Cyber+",
        "Acesso ao SF Cyber Code",
        "Acesso ao SF Cyber Shields",
        "Suporte humano dedicado",
        "+150 laboratórios práticos",
      ],
      cta: "Ativar Plano Premium",
    },
    {
      name: "PRIME",
      icon: "🕵️‍♂️",
      subtitle: "O plano favorito de quem vai em busca da vaga.",
      price: "R$ 249,90",
      period: "/3 meses",
      badge: "Mais escolhido",
      highlight: true,
      features: [
        "Tudo incluído no plano PREMIUM",
        "Simulados de exames de certificação",
        "Acesso à SF Cyber AI",
        "Suporte prioritário 24/7",
        "Cashback em créditos na plataforma",
      ],
      cta: "Começar com Prime",
    },
    {
      name: "PREMIUM PRIME",
      icon: "🥷",
      subtitle: "Para profissionais que querem dominar o setor.",
      price: "R$ 899,90",
      period: "/ano",
      badge: "2 meses grátis inclusos",
      highlight: false,
      features: [
        "Tudo incluído no plano PRIME",
        "Suporte VIP prioritário",
        "Mentoria coletiva mensal ao vivo",
      ],
      cta: "Acessar Plano Anual",
    },
  ];

  return (
    <>
      <section id="planos" className="py-20 bg-slate-950 text-slate-100 relative">
        <div className="container">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
              Planos e Assinaturas
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
              Escolha seu plano e comece hoje
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Acesso imediato. Treinamento de altíssimo nível em cibersegurança e redes.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((p, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-3xl bg-slate-900/60 border flex flex-col justify-between transition-all ${
                  p.highlight
                    ? "border-cyan-500 shadow-2xl shadow-cyan-500/10 lg:-translate-y-2"
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                {p.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-500 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg">
                    {p.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{p.icon}</span>
                    <div>
                      <h3 className="font-extrabold text-xl text-white font-mono">{p.name}</h3>
                      <p className="text-xs text-slate-400">{p.subtitle}</p>
                    </div>
                  </div>

                  <div className="my-6 pb-6 border-b border-slate-800 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-white font-mono">{p.price}</span>
                    <span className="text-slate-400 text-sm">{p.period}</span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() => setAuthModalOpen(true)}
                  className={`w-full font-bold py-6 rounded-xl transition-all shadow-lg ${
                    p.highlight
                      ? "bg-cyan-500 hover:bg-cyan-600 text-slate-950 shadow-cyan-900/30"
                      : "bg-slate-800 hover:bg-slate-700 text-white"
                  }`}
                >
                  {p.cta}
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-slate-400">
            Curso introdutório de Cibersegurança e Redes 101 incluso · Sem compromisso · Cancele quando quiser
          </div>

        </div>
      </section>

      <AuthModal isOpen={authModalOpen} initialMode="register" onClose={() => setAuthModalOpen(false)} />
    </>
  );
}
