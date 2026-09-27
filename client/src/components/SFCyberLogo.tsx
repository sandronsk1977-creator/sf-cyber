import React from "react";

export function SFCyberLogo() {
  return (
    <div className="flex items-center gap-3 group">
      {/* Escudo SF Cyber - vidro neon */}
      <div className="relative w-14 h-14 shrink-0">
        {/* Brilho externo do escudo */}
        <div className="absolute inset-0 drop-shadow-[0_0_10px_rgba(34,211,238,0.45)] group-hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.7)] transition-[filter]" />

        {/* Pulso neon azul */}
        <div
          className="absolute -inset-1.5 pointer-events-none animate-logo-shield-pulse"
          style={{ clipPath: "polygon(50% 0%, 100% 17%, 97% 55%, 78% 86%, 50% 100%, 22% 86%, 3% 55%, 0% 17%)" }}
        />

        {/* Escudo com borda neon + vidro */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-cyan-400/25 via-slate-900/50 to-slate-950/60 backdrop-blur-[6px] border border-blue-500/70 shadow-[inset_0_2px_10px_rgba(59,130,246,0.3),inset_0_-6px_14px_rgba(2,6,23,0.6)]"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 17%, 97% 55%, 78% 86%, 50% 100%, 22% 86%, 3% 55%, 0% 17%)",
          }}
        >
          {/* Reflexo de vidro diagonal */}
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background:
                "linear-gradient(115deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 22%, transparent 40%, transparent 60%, rgba(59,130,246,0.15) 80%, transparent 100%)",
            }}
          />
        </div>

        {/* Trail na borda superior (linha neon animada) */}
        <div
          className="absolute inset-0 pointer-events-none border border-blue-500/30"
          style={{ clipPath: "polygon(50% 0%, 100% 17%, 97% 55%, 78% 86%, 50% 100%, 22% 86%, 3% 55%, 0% 17%)" }}
        />

        {/* SF */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="relative font-mono font-black text-lg tracking-tighter text-white drop-shadow-[0_0_10px_rgba(59,130,246,1)]">
            SF
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <span className="text-[24px] leading-none font-mono tracking-[0.04em] animate-logo-text-pulse">
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400">
            Cyber
          </span>
        </span>
        <span className="text-[10px] text-slate-400 tracking-[0.28em] uppercase font-mono mt-1.5">
          Academia Digital
        </span>
      </div>
    </div>
  );
}