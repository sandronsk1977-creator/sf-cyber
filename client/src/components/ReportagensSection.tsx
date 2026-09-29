import React, { useRef, useState } from "react";
import { Play, Newspaper, ShieldCheck, Terminal } from "lucide-react";

const MATERIAS = [
  {
    icon: ShieldCheck,
    tag: "Guardião Cibernético",
    title: "Conheça o Guardião Cibernético do SF Cyber",
    desc: "Seu mentor de laboratório, disponível 24h para orientar sua jornada — do primeiro comando ao certificado.",
    src: "/images/guardiao.mp4",
    poster: "/images/cyber-hero.jpg",
  },
  {
    icon: Terminal,
    tag: "Laboratório SOC",
    title: "Analista SOC na prática: nmap, firewall e logs",
    desc: "Veja como funciona a análise de rede no simulador: escaneie, proteja o firewall e bloqueie o atacante.",
    src: "/images/nmap.mp4",
    poster: "/images/cyber-hero.jpg",
  },
];

function VideoCard({ materia }: { materia: (typeof MATERIAS)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const Icon = materia.icon;

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => setPlaying(false));
      setPlaying(true);
      return;
    }

    video.pause();
    setPlaying(false);
  };

  return (
    <div
      style={{ "--neon": "#22d3ee" } as React.CSSProperties}
      className="sf-neon-card group relative rounded-3xl border border-cyan-500/40 bg-slate-900/60 p-3 transition-all hover:-translate-y-1"
    >
      <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
        <video
          ref={videoRef}
          className="w-full aspect-video object-cover"
          src={materia.src}
          muted
          loop
          playsInline
          preload="none"
          poster={materia.poster}
          onClick={togglePlay}
        />

        {!playing && (
          <button
            type="button"
            onClick={togglePlay}
            aria-label={`Reproduzir ${materia.title}`}
            className="absolute inset-0 flex items-center justify-center bg-slate-950/55 backdrop-blur-[2px] transition-colors hover:bg-slate-950/40"
          >
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500 text-slate-950 shadow-xl shadow-cyan-500/40 transition-transform group-hover:scale-110">
              <Play className="w-7 h-7 ml-1 fill-current" />
            </span>
          </button>
        )}

        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 text-[11px] font-bold uppercase tracking-wider font-mono pointer-events-none">
          <Icon className="w-3.5 h-3.5" />
          {materia.tag}
        </span>
      </div>

      <div className="px-3 pt-4 pb-3 flex flex-col gap-2 text-left">
        <h3 className="font-extrabold text-lg text-white font-mono leading-tight">
          {materia.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">{materia.desc}</p>
      </div>
    </div>
  );
}

export function ReportagensSection() {
  return (
    <section id="reportagens" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
            Reportagens
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
            Veja o SF Cyber na prática
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Vídeos dos laboratórios reais: veja o Guardião Cibernético orientando você e o
            Analista SOC trabajando no simulador de Segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {MATERIAS.map((materia) => (
            <VideoCard key={materia.src} materia={materia} />
          ))}
        </div>
      </div>
    </section>
  );
}
