import React from "react";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Passei no eJPTv2 de primeira graças às simulações e laboratórios da plataforma.",
    author: "Luis Carlos",
    role: "Junior Penetration Tester",
    location: "Brasil",
    initials: "LC",
    featured: true,
  },
  {
    quote: "Depois de testar várias plataformas (Udemy, etc.), reconheço que esta é de longe a melhor para aprender cibersegurança prática. Conteúdo sempre atualizado!",
    author: "Jota Santos",
    role: "Diretor de TI",
    location: "Portugal",
    initials: "JS",
    featured: true,
  },
  {
    quote: "A didática é incrível, as aulas parecem uma série viciante onde você quer terminar um módulo para começar o próximo imediatamente.",
    author: "Rodrigo Silva",
    role: "Estudante de Cibersegurança",
    location: "Brasil",
    initials: "RS",
    featured: false,
  },
  {
    quote: "Estou adorando o conteúdo. Comecei do absoluto zero sem nenhuma experiência em tecnologia e hoje consigo navegar perfeitamente pelo Linux.",
    author: "Milena Souza",
    role: "Estudante",
    location: "Brasil",
    initials: "MS",
    featured: false,
  },
  {
    quote: "Descubri a SF Cyber procurando cursos para iniciantes. Assinei o plano anual e foi uma das melhores decisões da minha carreira.",
    author: "André Martins",
    role: "Pentester Júnior",
    location: "Estados Unidos",
    initials: "AM",
    featured: false,
  },
  {
    quote: "Muito dinâmico e direto ao ponto. Explicações complexas tornam-se simples de entender.",
    author: "Augusto Lima",
    role: "Entusiasta de Segurança",
    location: "Brasil",
    initials: "AL",
    featured: false,
  },
  {
    quote: "O método de ensino é humanizado, parece que o professor está conversando diretamente com você.",
    author: "Lucas Ferreira",
    role: "Estudante",
    location: "Brasil",
    initials: "LF",
    featured: false,
  },
  {
    quote: "Começar do zero parecia impossível até encontrar este método. Professor nota 10!",
    author: "Camila Ribeiro",
    role: "Analista SOC",
    location: "Brasil",
    initials: "CR",
    featured: false,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-900/40 text-slate-100">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
            Resultados Reais
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
            Pessoas reais. Resultados verificáveis.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Não vendemos promessas. Estas são pessoas reais que já avançaram — com nomes, certificados e conquistas concretas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-slate-950 border transition-all flex flex-col justify-between ${
                t.featured
                  ? "border-cyan-500/40 shadow-lg shadow-cyan-500/5 md:col-span-2 lg:col-span-1"
                  : "border-slate-800/80 hover:border-slate-700"
              }`}
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  {t.featured && (
                    <span className="ml-2 text-xs bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded font-mono font-medium">
                      Destaque
                    </span>
                  )}
                </div>

                <p className="text-slate-300 text-sm sm:text-base italic mb-6 leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-900">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center font-mono text-sm">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">{t.author}</h4>
                  <p className="text-xs text-slate-400">
                    {t.role} · <span className="text-cyan-400">{t.location}</span>
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
