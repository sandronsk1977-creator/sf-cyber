import React, { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PreLaunchModal } from "./PreLaunchModal";
import { SimulatorChoiceModal } from "./SimulatorChoiceModal";

export function PricingSection() {
  const [preLaunchOpen, setPreLaunchOpen] = useState(false);
  const [choiceOpen, setChoiceOpen] = useState(false);

  const WHATSAPP_NUMBER = "5562999693469";

const plans = [
    {
      name: "FREEMIUM",
      icon: "🛡️",
      subtitle: "Comece a praticar agora mesmo.",
      price: "Grátis",
      period: "",
      badge: "Disponível",
      highlight: false,
      simulator: true,
      features: [
        "Laboratório de VLANs Switch Cisco",
        "Laboratório de Segurança (Analista SOC | Hacker Ético)",
        "Laboratório de Segurança Web (SQL Injection | XSS)",
        "Laboratório de Servidor DNS (Resolução | AXFR | DNSSEC)",
        "Teste de conectividade",
        "Certificado de conclusão (período de avaliação)",
        "Progresso salvo automaticamente",
      ],
      cta: "Começar Grátis",
    },
    {
      name: "MEMBRO PARCEIRO",
      icon: "👑",
      subtitle: "Projeto aguardando parcerias",
      price: "Em breve",
      period: "",
      badge: null,
      highlight: true,
      features: [
        "Todos os laboratórios práticos",
        "Teste de conectividade",
        "Progresso salvo automaticamente",
        "Prova + Certificado de conclusão",
      ],
      cta: "QUERO SER PARCEIRO",
      whatsapp: "Olá, gostaria de mais informações, QUERO SER PARCEIRO",
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
              Acesso imediato aos quatro laboratórios: VLANs, SOC, Segurança Web e Servidor DNS
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {plans.map((p, idx) => (
              <div
                key={idx}
                style={p.highlight ? ({ "--neon": "#3b82f6" } as React.CSSProperties) : undefined}
                className={`relative p-5 rounded-3xl bg-slate-900/60 border flex flex-col justify-between transition-all ${
                  p.highlight
                    ? "sf-neon-card border-blue-500"
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                {p.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider animate-badge-green-pulse">
                    {p.badge}
                  </div>
                )}

<div>
<div className="flex items-center gap-3 mb-2">
                <span className="text-xl">{p.icon}</span>
                <div>
                  <h3 className="font-extrabold text-base text-white font-mono">{p.name}</h3>
                  <p className="text-[11px] text-slate-400">{p.subtitle}</p>
                </div>
              </div>

              {p.price && (
                <div className="my-3 pb-3 border-b border-slate-800 flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-black text-white font-mono">{p.price}</span>
                  {p.period && <span className="text-slate-400 text-xs">{p.period}</span>}
                </div>
              )}

              <ul className="space-y-1.5 mb-4">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {p.whatsapp ? (
                  <a
                    href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(p.whatsapp)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center font-bold py-3 rounded-xl transition-all shadow-lg ${
                      p.highlight
                        ? "bg-blue-500 hover:bg-blue-600 text-white shadow-blue-900/30"
                        : "bg-slate-800 hover:bg-slate-700 text-white"
                    }`}
                  >
                    {p.cta}
                  </a>
                ) : (
                  <Button
                    onClick={() => (p.simulator ? setChoiceOpen(true) : setPreLaunchOpen(true))}
                    className={`w-full font-bold py-3 rounded-xl transition-all shadow-lg ${
                      p.highlight
                        ? "bg-blue-500 hover:bg-blue-600 text-white shadow-blue-900/30"
                        : "bg-slate-800 hover:bg-slate-700 text-white"
                    } ${p.simulator ? "animate-seal-pulse" : ""}`}
                  >
                    {p.cta}
                  </Button>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-slate-400">
          </div>

        </div>
      </section>

      <PreLaunchModal isOpen={preLaunchOpen} onClose={() => setPreLaunchOpen(false)} />
      <SimulatorChoiceModal isOpen={choiceOpen} onClose={() => setChoiceOpen(false)} />
    </>
  );
}
