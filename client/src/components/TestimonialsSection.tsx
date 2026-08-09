import React from "react";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Aprobé el eJPTv2 a la primera gracias a la simulación de Hixec",
    author: "Luis Alfonso",
    role: "Junior Penetration Tester",
    location: "Australia",
    initials: "LA",
    featured: true,
  },
  {
    quote: "Tras más de seis meses en la academia y haber probado algunas otras (Udemy, Mastermind...) tengo que reconocer que es la mejor plataforma a día de hoy para aprender de hacking ético. Además se actualiza de manera periódica.",
    author: "Jota Santas",
    role: "Director de Ingresos",
    location: "España",
    initials: "JS",
    featured: true,
  },
  {
    quote: "Creo que Martín se explica de una forma única, no es aburrido de escuchar y los vídeos parecen más bien una serie o una película porque terminas uno y quieres seguir viendo el otro.",
    author: "Rodrigo",
    role: "Estudiante de Ciberseguridad",
    location: "Mexico",
    initials: "R",
    featured: false,
  },
  {
    quote: "Me está encantando el contenido, ví algunos de los videos en YouTube y en cuanto pude comprar la suscripción lo hice para seguir aprendiendo ciberseguridad desde 0.",
    author: "Milagros",
    role: "Estudiante",
    location: "Argentina",
    initials: "M",
    featured: false,
  },
  {
    quote: "Descubrí Hixec porque estaba intentando encontrar un curso sobre ciberseguridad para principiantes y conseguí su curso gratis en YouTube. No me arrepiento de haber comprado un año.",
    author: "Andrés",
    role: "Pentester Junior",
    location: "Estados Unidos",
    initials: "A",
    featured: false,
  },
  {
    quote: "Hixec es muy dinámico y entretenido explicando ciberseguridad, busca hacer de algo complejo un mundo fácil, solo Hixec.",
    author: "Agustin",
    role: "Entusiasta de Seguridad",
    location: "Chile",
    initials: "AG",
    featured: false,
  },
  {
    quote: "Me gusta Hixec porque el método de enseñanza se siente de persona a persona y no como si le hablaran a una máquina.",
    author: "Lautaro",
    role: "Estudiante",
    location: "Argentina",
    initials: "L",
    featured: false,
  },
  {
    quote: "Me encanta porque puedes empezar desde cero y explican todo de una forma que puedes entender totalmente. El profesor tiene una forma de enseñanza diferente que me motiva mucho.",
    author: "Camilo",
    role: "Analista SOC",
    location: "Colombia",
    initials: "C",
    featured: false,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-900/40 text-slate-100">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono font-semibold">
            Resultados reales
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
            Personas reales. Resultados verificables.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            No vendemos promesas. Estas son las personas reales que ya avanzaron — con nombres, certificados y logros concretos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-slate-950 border transition-all flex flex-col justify-between ${
                t.featured
                  ? "border-emerald-500/40 shadow-lg shadow-emerald-500/5 md:col-span-2 lg:col-span-1"
                  : "border-slate-800/80 hover:border-slate-700"
              }`}
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  {t.featured && (
                    <span className="ml-2 text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-mono font-medium">
                      Destacado
                    </span>
                  )}
                </div>

                <p className="text-slate-300 text-sm sm:text-base italic mb-6 leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-900">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center font-mono text-sm">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">{t.author}</h4>
                  <p className="text-xs text-slate-400">
                    {t.role} · <span className="text-emerald-400">{t.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
