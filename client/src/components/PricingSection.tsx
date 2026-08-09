import React, { useState } from "react";
import { Check, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthModal } from "./AuthModal";

export function PricingSection() {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const plans = [
    {
      name: "PREMIUM",
      icon: "👽",
      subtitle: "Para empezar ya mismo a aprender.",
      price: "$17.99",
      period: "/mes",
      badge: null,
      highlight: false,
      features: [
        "Todos los cursos sin restricciones",
        "Certificados verificables por curso",
        "Acceso a Hixec+",
        "Acceso a Hixec Code",
        "Acceso a Hixec Shields",
        "Soporte humano",
        "+150 laboratorios prácticos",
      ],
      cta: "Activar Premium",
    },
    {
      name: "PRIME",
      icon: "🕵️‍♂️",
      subtitle: "El plan que usan quienes van en serio.",
      price: "$49.99",
      period: "/3 meses",
      badge: "Más rentable",
      highlight: true,
      features: [
        "Todo lo incluido en PREMIUM",
        "Simulaciones de exámenes de certificación",
        "Acceso a Hixec AI",
        "Soporte prioritario",
        "Cashback por tu compra",
      ],
      cta: "Empezar con Prime",
    },
    {
      name: "PREMIUM PRIME",
      icon: "🥷",
      subtitle: "Para los que quieren trabajar en este sector.",
      price: "$189.99",
      period: "/año",
      badge: "Incluye 2 meses gratis",
      highlight: false,
      features: [
        "Todo lo incluido en PRIME",
        "Soporte VIP",
        "+2 meses gratis incluidos",
      ],
      cta: "Acceder al plan anual",
    },
  ];

  return (
    <>
      <section id="planes" className="py-20 bg-slate-950 text-slate-100 relative">
        <div className="container">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono font-semibold">
              Precios y planes
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
              Elige tu plan y empieza hoy
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Acceso inmediato. Entrenamiento de la más alta calidad en ciberseguridad.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((p, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-3xl bg-slate-900/60 border flex flex-col justify-between transition-all ${
                  p.highlight
                    ? "border-emerald-500 shadow-2xl shadow-emerald-500/10 lg:-translate-y-2"
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                {p.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg">
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
                    <span className="text-4xl sm:text-5xl font-black text-white font-mono">{p.price}</span>
                    <span className="text-slate-400 text-sm">{p.period}</span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() => setAuthModalOpen(true)}
                  className={`w-full font-bold py-6 rounded-xl transition-all shadow-lg ${
                    p.highlight
                      ? "bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-emerald-900/30"
                      : "bg-slate-800 hover:bg-slate-700 text-white"
                  }`}
                >
                  {p.cta}
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-slate-400">
            ¿Quieres probarlo antes de pagar? Curso de Ciberseguridad y Privacidad 101 incluido · Sin tarjeta · Sin compromisos
          </div>

        </div>
      </section>

      <AuthModal isOpen={authModalOpen} initialMode="register" onClose={() => setAuthModalOpen(false)} />
    </>
  );
}
