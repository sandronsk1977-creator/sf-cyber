import React from "react";
import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-16">
      <div className="container">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-12 border-b border-slate-900">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-700 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-cyan-500/30 border border-cyan-300/40">
              <Shield className="absolute inset-0 w-full h-full text-cyan-400/20 fill-cyan-500/10" />
              <span className="relative z-10 text-white font-mono text-base font-extrabold tracking-tighter">
                SF
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-white font-mono">
                SF <span className="text-cyan-400">Cyber</span>
              </h3>
              <p className="text-xs text-slate-500">Cibersegurança e Redes com excelência técnica.</p>
            </div>
          </div>

          <div className="text-xs text-slate-500 md:text-right">
            São Paulo, SP – Brasil / Remoto Global
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">YouTube</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">TikTok</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Telegram</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Discord</a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-center">
            <span>Termos e Condições</span>
            <span>·</span>
            <span>Política de Privacidade</span>
            <span>·</span>
            <span>Política de Cookies</span>
            <span>·</span>
            <span>Política de Reembolso</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
