import React from "react";
import { Network, ShieldHalf, Bug, Globe, ArrowRight, Layers, Award } from "lucide-react";
import { Link } from "wouter";

const metaChips = (
  <>
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-full">
      <Layers className="w-3.5 h-3.5 text-cyan-400" />
      8 níveis
    </span>
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-full">
      <Award className="w-3.5 h-3.5 text-cyan-400" />
      Certificado
    </span>
  </>
);

const cardFooter = (
  <div className="flex flex-col gap-3">
    <div className="flex items-center justify-between gap-2">{metaChips}</div>
    <span className="inline-flex items-center justify-center gap-2 font-bold bg-cyan-500 hover:bg-cyan-600 text-slate-950 text-sm px-5 py-2.5 rounded-xl shadow-xl shadow-cyan-500/25 transition-colors w-full">
      Acessar
      <ArrowRight className="w-4 h-4 animate-arrow-pulse" />
    </span>
  </div>
);

export function PortalCardsSection() {
  return (
    <section id="portal" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
            Áreas da Plataforma
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
            Escolha sua área e comece agora
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Laboratórios para aprendizagem em Cibersegurança e Redes, feitos para colocar você em ação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Card 01 - Redes | Simulador VLAN */}
          <Link
            href="/simulador-vlan"
            style={{ "--neon": "#22d3ee" } as React.CSSProperties}
            className="sf-neon-card group relative p-6 pt-7 rounded-3xl bg-slate-900/60 border border-cyan-500/40 flex flex-col justify-between transition-all hover:-translate-y-1 hover:border-cyan-400"
          >
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-900 text-white text-xs font-bold uppercase tracking-wider border border-cyan-400/50 animate-neon-badge z-10">
              Redes
            </span>
            <div className="flex items-start justify-between mb-4">
              <div className="w-11 h-11 rounded-2xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Network className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                Disponível
              </span>
            </div>

            <h3 className="font-extrabold text-xl mb-2 text-white font-mono leading-tight min-h-[56px]">
              Laboratório de VLANs
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Switch Cisco virtual com terminal de comandos reais para criar e atribuir VLANs. Comece a praticar agora mesmo, sem precisar de equipamento físico.
            </p>

            {cardFooter}
          </Link>

          {/* Card 02 - Cibersegurança | Simulador de Segurança */}
          <Link
            href="/simulador-seguranca"
            style={{ "--neon": "#f43f5e" } as React.CSSProperties}
            className="sf-neon-card group relative p-6 pt-7 rounded-3xl bg-slate-900/60 border border-cyan-500/40 flex flex-col justify-between transition-all hover:-translate-y-1 hover:border-cyan-400"
          >
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-slate-800 text-white text-xs font-bold uppercase tracking-wider border border-rose-500/40 shadow-lg shadow-rose-500/40 z-10">
              Cibersegurança
            </span>
            <div className="flex items-start justify-between mb-4">
              <div className="w-11 h-11 rounded-2xl bg-blue-600/15 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <ShieldHalf className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                Disponível
              </span>
            </div>

            <h3 className="font-extrabold text-xl mb-2 text-white font-mono leading-tight min-h-[56px]">
              Laboratório SOC
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Assuma o papel de um Analista SOC: escaneie com nmap, aplique firewall, analise logs, bloqueie o atacante e reforce o SSH.
            </p>

            {cardFooter}
          </Link>

          {/* Card 03 - Segurança Web | SQL Injection | XSS */}
          <Link
            href="/simulador-web"
            style={{ "--neon": "#f43f5e" } as React.CSSProperties}
            className="sf-neon-card group relative p-6 pt-7 rounded-3xl bg-slate-900/60 border border-cyan-500/40 flex flex-col justify-between transition-all hover:-translate-y-1 hover:border-cyan-400"
          >
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-slate-800 text-white text-xs font-bold uppercase tracking-wider border border-rose-500/40 shadow-lg shadow-rose-500/40 z-10">
              Cibersegurança
            </span>
            <div className="flex items-start justify-between mb-4">
              <div className="w-11 h-11 rounded-2xl bg-emerald-600/15 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Bug className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                Disponível
              </span>
            </div>

            <h3 className="font-extrabold text-xl mb-2 text-white font-mono leading-tight min-h-[56px]">
              Segurança Web (SQLi | XSS)
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Analise a Lojinha Online como um pentester: SQL Injection, extração de dados via UNION, XSS refletido e armazenado e correção da aplicação.
            </p>

            {cardFooter}
          </Link>

          {/* Card 04 - Redes | Simulador de DNS */}
          <Link
            href="/simulador-dns"
            style={{ "--neon": "#22d3ee" } as React.CSSProperties}
            className="sf-neon-card group relative p-6 pt-7 rounded-3xl bg-slate-900/60 border border-cyan-500/40 flex flex-col justify-between transition-all hover:-translate-y-1 hover:border-cyan-400"
          >
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-900 text-white text-xs font-bold uppercase tracking-wider border border-cyan-400/50 animate-neon-badge z-10">
              Redes
            </span>
            <div className="flex items-start justify-between mb-4">
              <div className="w-11 h-11 rounded-2xl bg-violet-600/15 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                Disponível
              </span>
            </div>

            <h3 className="font-extrabold text-xl mb-2 text-white font-mono leading-tight min-h-[56px]">
              Laboratório de Servidor DNS
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Audite o servidor DNS como um Administrador de Redes: resolva registros A, MX e NS com dig, descubra a transferência de zona (AXFR) e proteja a zona com DNSSEC.
            </p>

            {cardFooter}
          </Link>
        </div>
      </div>
    </section>
  );
}