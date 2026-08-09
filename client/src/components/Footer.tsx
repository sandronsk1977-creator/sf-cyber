import React from "react";
import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-16">
      <div className="container">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-12 border-b border-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-emerald-500/20">
              <Shield className="w-5 h-5 fill-slate-950 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-white font-mono">
                Hixec<span className="text-emerald-400">.</span>
              </h3>
              <p className="text-xs text-slate-500">Ciberseguridad simple, así de simple.</p>
            </div>
          </div>

          <div className="text-xs text-slate-500 md:text-right">
            907 Encanto Circle, Deming, NM 88030 – United States.
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-6">
            <a href="https://youtube.com/@hixec/" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">Youtube</a>
            <a href="https://www.instagram.com/hixec_com/" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">Instagram</a>
            <a href="https://www.tiktok.com/@hixec_com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">Tiktok</a>
            <a href="https://es.linkedin.com/company/hixec/" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">Linkedin</a>
            <a href="https://t.me/hixec/" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">Telegram</a>
            <a href="https://discord.com/invite/bMWXR6Z" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">Discord</a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-center">
            <span>Términos y condiciones</span>
            <span>·</span>
            <span>Política de privacidad</span>
            <span>·</span>
            <span>Política de cookies</span>
            <span>·</span>
            <span>Política de reembolso</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
