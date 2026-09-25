import React, { useState } from "react";
import { useLocation } from "wouter";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PreLaunchModal } from "./PreLaunchModal";

export function PricingSection() {
  const [preLaunchOpen, setPreLaunchOpen] = useState(false);
  const [, navigate] = useLocation();

  const plans = [
    {
      name: "FREE",
      icon: "🛡️",
      subtitle: "Para começar a praticar agora mesmo.",
      price: "Grátis",
      period: "",
      badge: null,
      highlight: false,
      simulator: true,
      features: [
        "Simulador de VLANs Switch Cisco (8 níveis)",
        "Teste de conectividade e prova final",
        "Certificado de conclusão",
        "Progresso salvo automaticamente",
      ],
      cta: "Começar Grátis",
      to: "/simulador-vlan",
    },
    {
      name: "MEMBROS",
      icon: "👑",
      subtitle: "Acesso total a tudo. Um único investimento.",
      price: "R$ 39,90",
      period: "/mês",
      badge: null,
      highlight: false,
      features: [
        "Todos os cursos e trilhas sem restrições",
        "Todos os laboratórios práticos",
        "Simulados de exames de certificação",
        "Certificados verificáveis por curso",
        "SF Cyber AI (assistente inteligente)",
        "Novos cursos e simuladores incluídos",
        "Suporte humano dedicado",
      ],
      cta: "Seja Membro",
    },
    {
      name: "MEMBROS VITALÍCIO",
      icon: "💎",
      subtitle: "Pague uma vez, use para sempre.",
      price: "R$ 499,00",
      period: "/pagamento único",
      badge: "Mais escolhido",
      highlight: true,
      features: [
        "Acesso vitalício a todos os cursos",
        "Todos os simuladores e laboratórios",
        "Simulados de exames de certificação",
        "Certificados verificáveis por curso",
        "SF Cyber AI incluída no vitalício",
        "Novos cursos e simuladores inclusos",
        "Suporte prioritário vitalício",
      ],
      cta: "Seja Membro Vitalício",
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
              Plano FREE... comece agora
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Acesso imediato. Simulador de Criação de VLan
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
                    {p.period && <span className="text-slate-400 text-sm">{p.period}</span>}
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
                  onClick={() => (p.simulator ? navigate("/simulador-vlan") : setPreLaunchOpen(true))}
                  className={`w-full font-bold py-6 rounded-xl transition-all shadow-lg ${
                    p.highlight
                      ? "bg-cyan-500 hover:bg-cyan-600 text-slate-950 shadow-cyan-900/30"
                      : "bg-slate-800 hover:bg-slate-700 text-white"
                  } ${p.simulator ? "animate-seal-pulse" : ""}`}
                >
                  {p.cta}
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-slate-400">
            Sem compromisso · Cancele quando quiser · Acesso imediato
          </div>

        </div>
      </section>

      <PreLaunchModal isOpen={preLaunchOpen} onClose={() => setPreLaunchOpen(false)} />
    </>
  );
}
