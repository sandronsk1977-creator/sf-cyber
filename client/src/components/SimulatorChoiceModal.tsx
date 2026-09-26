import React from "react";
import { X, Network, ShieldHalf, Bug, Globe, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface SimulatorChoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SimulatorChoiceModal({ isOpen, onClose }: SimulatorChoiceModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 p-4">
      <div className="relative w-full max-w-3xl p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl text-slate-100 animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4 uppercase tracking-widest font-mono">
          <Network className="w-3.5 h-3.5" />
          Plano FREE · Grátis
        </div>

        <h2 className="text-2xl font-extrabold font-mono text-white mb-3">Escolha seu simulador</h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          Comece a praticar agora mesmo. Os quatro simuladores são{" "}
          <strong className="text-cyan-400">grátis</strong>, com 8 níveis e certificado de conclusão.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/simulador-vlan"
            onClick={onClose}
            className="group p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all hover:-translate-y-0.5 flex flex-col"
          >
            <div className="w-12 h-12 mb-4 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Network className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold font-mono text-white mb-2">Simulador de VLANs</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Configure um Switch Cisco: crie VLANs, atribua portas, teste a conectividade.
            </p>
            <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-cyan-400">
              Acessar
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/simulador-seguranca"
            onClick={onClose}
            className="group p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all hover:-translate-y-0.5 flex flex-col"
          >
            <div className="w-12 h-12 mb-4 rounded-xl bg-blue-600/15 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
              <ShieldHalf className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold font-mono text-white mb-2">Simulador SOC</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Seja um Analista SOC: escaneie, proteja o firewall e bloqueie o atacante.
            </p>
            <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-cyan-400">
              Acessar
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/simulador-web"
            onClick={onClose}
            className="group p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all hover:-translate-y-0.5 flex flex-col"
          >
            <div className="w-12 h-12 mb-4 rounded-xl bg-emerald-600/15 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Bug className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold font-mono text-white mb-2">Simulador de Segurança Web</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Descubra SQL Injection e XSS numa aplicação web e depois corrija a falha.
            </p>
            <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-cyan-400">
              Acessar
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/simulador-dns"
            onClick={onClose}
            className="group p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all hover:-translate-y-0.5 flex flex-col"
          >
            <div className="w-12 h-12 mb-4 rounded-xl bg-violet-600/15 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold font-mono text-white mb-2">Simulador de Servidor DNS</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Resolva registros com dig, descubra o AXFR aberto e aplique DNSSEC.
            </p>
            <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-cyan-400">
              Acessar
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full text-center text-xs text-slate-500 hover:text-slate-300 transition-colors"
        >
          Agora não
        </button>
      </div>
    </div>
  );
}