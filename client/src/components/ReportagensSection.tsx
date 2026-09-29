import React, { useEffect } from "react";
import { Newspaper, Play, X, ExternalLink, ShieldCheck, Terminal } from "lucide-react";

declare global {
  interface Window {
    instgrm?: { Embeds?: { process: () => void } };
  }
}

const MATERIAS = [
  {
    icon: ShieldCheck,
    tag: "SF Cyber",
    title: "Guardião Cibernético",
    desc: "Apresentação do Guardião Cibernético do SF Cyber.",
    permalink: "https://www.instagram.com/reel/DduclrSADBX/",
  },
  {
    icon: Terminal,
    tag: "Reportagem",
    title: "A ferramenta nmap",
    desc: "Reportagem sobre a ferramenta nmap.",
    permalink: "https://www.instagram.com/reel/Dd2egTVjDs3/",
  },
];

export function ReportagensSection() {
  const [aberta, setAberta] = React.useState<string | null>(null);
  const materia = MATERIAS.find((m) => m.permalink === aberta);

  // O embed do Instagram processa blockquotes dinamicos apos a insercao no DOM
  useEffect(() => {
    if (!aberta) return;
    const timer = window.setTimeout(() => {
      window.instgrm?.Embeds?.process();
    }, 150);
    return () => window.clearTimeout(timer);
  }, [aberta]);

  useEffect(() => {
    document.body.style.overflow = aberta ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberta]);

  const fechar = () => setAberta(null);

  useEffect(() => {
    if (!aberta) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") fechar();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [aberta]);

  return (
    <section id="reportagens" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
            Reportagens
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
            Reportagens
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Conteúdo publicado abaixo, são vídeos oficiais do Instagram, com os devidos créditos aos autores da publicação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {MATERIAS.map(({ icon: Icon, tag, title, desc, permalink }) => (
            <div
              key={permalink}
              style={{ "--neon": "#22d3ee" } as React.CSSProperties}
              className="sf-neon-card relative rounded-3xl border border-cyan-500/40 bg-slate-900/60 p-6 pt-8 transition-all hover:-translate-y-1"
            >
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-1.5 z-10">
                <Icon className="w-3.5 h-3.5" />
                {tag}
              </span>

              <div className="w-12 h-12 mb-4 rounded-2xl bg-cyan-500/15 flex items-center justify-center text-cyan-400">
                <Newspaper className="w-6 h-6" />
              </div>

              <h3 className="font-extrabold text-xl mb-2 text-white font-mono leading-tight">
                {title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">{desc}</p>

              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => setAberta(permalink)}
                  className="inline-flex items-center justify-center gap-2 font-bold bg-cyan-500 hover:bg-cyan-600 text-slate-950 text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-cyan-500/25 transition-colors w-full"
                >
                  <Play className="w-4 h-4 fill-current" />
                  Assistir no Instagram
                </button>
                <a
                  href={permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Abrir publicação original
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal com o embed oficial do Instagram */}
      {materia && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={materia.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 p-4"
        >
          <div
            role="presentation"
            onClick={fechar}
            className="absolute inset-0"
          />

          <div className="relative w-full max-w-md">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={materia.permalink}
                data-instgrm-version="14"
              />
            </div>

            <button
              type="button"
              onClick={fechar}
              aria-label="Fechar vídeo"
              className="absolute -top-3 -right-3 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-slate-900 border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-300 shadow-lg shadow-black/50 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <a
              href={materia.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Ver no Instagram
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
