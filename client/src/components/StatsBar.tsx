import React from "react";

export function StatsBar() {
  const stats = [
    { value: "+5,000", label: "Estudiantes en LatAm y España" },
    { value: "+110h", label: "De contenido estructurado" },
    { value: "+25", label: "Cursos con certificado verificable" },
    { value: "+150", label: "Laboratorios prácticos reales" },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 border-t border-b border-slate-800 text-slate-100">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
