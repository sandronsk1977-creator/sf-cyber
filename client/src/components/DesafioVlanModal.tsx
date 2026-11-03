import { useEffect } from "react";
import { Trophy, Target, ArrowRight, X, ShieldCheck } from "lucide-react";

const SFCyber = () => (
  <span className="inline-flex items-center gap-1 align-middle text-cyan-400 font-bold animate-logo-text-pulse whitespace-nowrap">
    <ShieldCheck className="h-4 w-4" />
    SF Cyber
  </span>
);

interface DesafioVlanModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DesafioVlanModal({ open, onOpenChange }: DesafioVlanModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="desafio-vlan-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={() => onOpenChange(false)}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-amber-500/40 bg-slate-900 p-6 pt-8 text-slate-100 shadow-2xl shadow-amber-500/10"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          aria-label="Fechar"
          autoFocus
          className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-amber-300">
          <Trophy className="h-3.5 w-3.5" />
          Desafio
        </span>

        <h2
          id="desafio-vlan-title"
          className="mb-2 font-mono text-2xl font-extrabold text-white"
        >
         🧩 Desafio VLAN • Rede Virtual
        </h2>
        <p className="mb-5 text-sm leading-relaxed text-slate-300">
          A <SFCyber /> Academy cresceu. Agora é uma empresa com 03 Departamentos, todos conectados
          na mesma rede.  O time de T.I com 08 colaboradores, RH com 06 colaboradores e o MARKETING com 10 colaboradores. E agora? Precisamos disponibilizar
          recursos tecnológicos (Dispositivos e Sistemas), mas antes, organize a rede e resolva os desafios.
        </p>

        <div className="mb-6 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-semibold text-slate-300">
            <Target className="h-3.5 w-3.5 text-amber-400" />
            Cenário real
          </span>
        </div>

        <a
          href="https://desafiovlan.projetosdisruptivos.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => onOpenChange(false)}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/25 transition-colors hover:bg-amber-600"
        >
          Abrir desafio
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
