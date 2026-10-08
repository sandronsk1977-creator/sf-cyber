import type { CSSProperties } from "react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="py-6 bg-slate-950 border-t border-slate-800 text-slate-400">
      <div className="container flex flex-col items-center justify-center gap-1 text-center">
        <a
          href="https://projetosdisruptivos.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ "--neon": "#22d3ee" } as CSSProperties}
          className="sf-credit text-xs sm:text-sm font-medium px-3 py-1"
        >
          Developed by <span className="text-cyan-400 font-bold">SF</span>
          <span className="text-slate-600"> + </span>
          <span className="text-cyan-400 font-bold" title="Automação Sofisticada">AS</span>
          </a>
        <span className="text-xs text-slate-600">
          © {new Date().getFullYear()} SF Cyber · Laboratórios de Redes e Cibersegurança
        </span>
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <Link href="/privacidade" className="hover:text-cyan-400 transition-colors">
            Política de Privacidade
          </Link>
          <span className="text-slate-700">·</span>
          <span>Seus dados ficam no seu navegador</span>
        </div>
      </div>
    </footer>
  );
}
