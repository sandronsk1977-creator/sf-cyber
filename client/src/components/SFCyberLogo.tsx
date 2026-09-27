import React from "react";

const MATRIX_COLS = [
  { left: "12%", delay: "0s", duration: "2.4s", chars: ["1", "0", "1", "0"] },
  { left: "38%", delay: "0.7s", duration: "2.9s", chars: ["0", "1", "0"] },
  { left: "62%", delay: "1.3s", duration: "2.6s", chars: ["1", "0", "1"] },
  { left: "86%", delay: "0.3s", duration: "3.1s", chars: ["0", "1", "0", "1"] },
];

export function SFCyberLogo() {
  return (
    <div className="flex items-center gap-2.5 group">
      {/* Ícone Terminal / Matrix */}
      <div className="relative w-10 h-10 rounded-xl bg-slate-950 border border-cyan-500/40 overflow-hidden shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/50 transition-shadow">
        {/* Chuva de dígitos matrix */}
        <div className="absolute inset-0 pointer-events-none">
          {MATRIX_COLS.map((col, i) => (
            <span
              key={i}
              className="cyber-matrix-col absolute top-0 text-[7px] leading-[1.1] font-mono text-cyan-500/60"
              style={{ left: col.left, animationDelay: col.delay, animationDuration: col.duration }}
            >
              {col.chars.join("\n")}
            </span>
          ))}
        </div>

        {/* Brilho de gradiente de fundo */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-600/25" />

        {/* Prompt do terminal ->_ */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="relative font-mono text-cyan-400 font-bold text-base tracking-tighter drop-shadow-[0_0_6px_rgba(34,211,238,0.9)]">
            <span className="opacity-90">&gt;</span>_
            {/* Cursor piscando */}
            <span className="inline-block w-[7px] h-[15px] bg-cyan-400 ml-0.5 animate-cursor-blink align-middle shadow-[0_0_8px_rgba(34,211,238,1)]" />
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-tight text-white font-mono leading-none">
          <span className="text-cyan-400">SF</span> Cyber
        </span>
        <span className="text-[10px] text-slate-400 tracking-widest uppercase font-mono mt-0.5">
          Academy Cibersegurança
        </span>
      </div>
    </div>
  );
}