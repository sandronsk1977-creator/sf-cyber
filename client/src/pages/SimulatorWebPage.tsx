import React from "react";
import { Shield, ArrowLeft, ExternalLink, Bug } from "lucide-react";
import { Link } from "wouter";

export function SimulatorWebPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform border border-cyan-300/40">
                <Shield className="absolute inset-0 w-full h-full text-cyan-400/20 fill-cyan-500/10" />
                <span className="relative z-10 text-white font-mono text-base font-extrabold tracking-tighter">SF</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white font-mono leading-none">SF Cyber</span>
                <span className="text-[10px] text-slate-400 tracking-widest uppercase font-mono mt-0.5">Academia</span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
              <Bug className="w-3.5 h-3.5" />
              Simulador de Segurança Web
            </span>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao portal
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        <div className="container py-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold font-mono">Simulador de Segurança Web (SQL Injection | XSS)</h1>
            <p className="text-sm text-slate-400 mt-1">
              Teste uma aplicação web vulnerável com comandos reais. 8 níveis, SQL Injection, XSS e certificado de conclusão.
            </p>
          </div>
          <a
            href="/web/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors font-medium shrink-0"
          >
            Abrir em nova aba
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="flex-1 px-4 pb-6 sm:px-6">
          <iframe
            src="/web/index.html"
            title="Simulador de Segurança Web da SF Cyber"
            className="w-full h-full min-h-[70vh] rounded-2xl border border-slate-800 bg-white shadow-2xl shadow-cyan-500/5"
          />
        </div>
      </main>
    </div>
  );
}