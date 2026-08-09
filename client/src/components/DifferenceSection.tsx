import React from "react";
import { Compass, FlaskConical, Target, Bot, Settings, Coins, Award, Users } from "lucide-react";

const DIFFERENTIALS = [
  {
    icon: Compass,
    title: "Rutas estructuradas",
    description: "Caminos organizados por nivel y objetivo. Sabes exactamente qué estudiar hoy y qué viene después, sin improvisar.",
  },
  {
    icon: FlaskConical,
    title: "+150 laboratorios prácticos",
    description: "Entornos reales donde ejecutas ataques, configuras defensas y aplicas lo aprendido, no solo ves cómo se hace.",
  },
  {
    icon: Target,
    title: "Simulaciones de examen",
    description: "Preparación basada en experiencias reales de personas que ya aprobaron certificaciones. Llegas listo, no a probar suerte.",
  },
  {
    icon: Bot,
    title: "Hixec AI",
    description: "Asistente de inteligencia artificial especializado en ciberseguridad, integrado directo en la plataforma para resolver dudas en tiempo real.",
  },
  {
    icon: Settings,
    title: "Hixec Code",
    description: "Herramientas propias para auditorías de seguridad reales. No busques en internet, las tienes dentro de la plataforma.",
  },
  {
    icon: Coins,
    title: "HIX: te pagamos por aprender",
    description: "Cada avance genera HIX, nuestra moneda interna. Canjéalos por productos y beneficios exclusivos, aquí entrenar tiene recompensa real.",
  },
  {
    icon: Award,
    title: "Certificados verificables",
    description: "Cada curso completado genera un certificado oficial con QR de verificación. Evidencia real de tus habilidades para tu CV o LinkedIn.",
  },
  {
    icon: Users,
    title: "Comunidad activa",
    description: "Conecta con profesionales y estudiantes del sector. Soporte real, networking genuino y ayuda de personas que ya pasaron donde estás tú.",
  },
];

export function DifferenceSection() {
  return (
    <section className="py-20 bg-slate-950 text-slate-100">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono font-semibold">
            Por qué hixec es diferente
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
            No somos otra más, aquí no hay humo.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Cada componente está diseñado para que avances, practiques y te certifiques de verdad con conocimiento proveniente de experiencia real.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS.map((d, idx) => {
            const Icon = d.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{d.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{d.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
