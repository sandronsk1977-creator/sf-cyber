import React from "react";
import { Check, X, ShieldAlert } from "lucide-react";

export function AudienceSection() {
  const pros = [
    {
      title: "Empiezas desde cero",
      desc: "No necesitas experiencia previa. Las rutas están diseñadas para llevarte de cero a tu primera certificación paso a paso.",
    },
    {
      title: "Ya intentaste aprender y te perdiste",
      desc: "Viste cursos donde el instructor explica para llenarse el ego y no para que tú entiendas. Necesitas un sistema, no más contenido.",
    },
    {
      title: "Quieres una certificación reconocida",
      desc: "eJPT, CompTIA, CEH o OSCP en tu horizonte. Las simulaciones y labs de Hixec te preparan para aprobar de verdad.",
    },
    {
      title: "Quieres entrar al mercado laboral en ciberseguridad",
      desc: "Buscas tu primer empleo o transición de carrera. Los certificados verificables y las habilidades reales te abren puertas.",
    },
    {
      title: "Tienes tiempo limitado y necesitas avanzar eficiente",
      desc: "No puedes perder horas decidiendo qué estudiar. Las rutas estructuradas maximizan cada sesión que dedicas.",
    },
  ];

  const cons = [
    {
      title: "Buscas contenido gratis sin compromiso",
      desc: "El curso Ciberseguridad y Privacidad 101 es gratuito y un buen primer paso. Pero si no estás dispuesto a invertir en tu formación, los resultados serán limitados.",
    },
    {
      title: "Esperas resultados sin esfuerzo",
      desc: "Hixec da estructura, práctica y acompañamiento, pero el trabajo lo haces tú. No hay atajos reales en ciberseguridad, eso es humo y aquí no vendemos eso.",
    },
  ];

  return (
    <section className="py-20 bg-slate-900/60 border-t border-b border-slate-800 text-slate-100">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono font-semibold">
            Encuentra tu lugar
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
            ¿Esto es para ti?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Hixec no es para todos y eso es bueno. Si te identificas con alguno de estos perfiles, estás en el lugar correcto.
          </p>
        </div>

        {/* 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* For You */}
          <div className="p-8 rounded-3xl bg-slate-950 border border-emerald-500/30 shadow-xl shadow-emerald-500/5">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Hixec es para ti si...</h3>
            </div>

            <div className="space-y-6">
              {pros.map((p, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
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
              <h3 className="text-2xl font-bold text-white">Hixec no es para ti si...</h3>
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
