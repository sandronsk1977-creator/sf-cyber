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
  <div className="flex flex-col gap-4">
    <div className="flex flex-wrap items-center gap-2">{metaChips}</div>
    <span className="inline-flex items-center justify-center gap-2 font-bold bg-cyan-500 hover:bg-cyan-600 text-slate-950 text-sm px-5 py-3 rounded-xl shadow-xl shadow-cyan-500/25 transition-colors w-full">
      Acessar Simulador
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
            Ferramentas práticas e trilhas de aprendizagem em cibersegurança e redes, construídas para colocar você em ação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Card 01 - Redes | Simulador VLAN */}
          <Link
            href="/simulador-vlan"
            className="group relative p-8 rounded-3xl bg-slate-900/60 border border-cyan-500/40 shadow-2xl shadow-cyan-500/10 flex flex-col justify-between transition-all hover:-translate-y-1 hover:border-cyan-400"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Network className="w-7 h-7" />
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                Disponível
              </span>
            </div>

            <h3 className="font-extrabold text-2xl mb-3 text-white font-mono">
              Redes · Simulador de VLANs
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Switch Cisco virtual com terminal de comandos reais para criar e atribuir VLANs. Comece a praticar agora mesmo, sem precisar de equipamento físico.
            </p>

            {cardFooter}
          </Link>

          {/* Card 02 - Cibersegurança | Simulador de Segurança */}
          <Link
            href="/simulador-seguranca"
            className="group relative p-8 rounded-3xl bg-slate-900/60 border border-cyan-500/40 shadow-2xl shadow-cyan-500/10 flex flex-col justify-between transition-all hover:-translate-y-1 hover:border-cyan-400"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/15 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <ShieldHalf className="w-7 h-7" />
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                Disponível
              </span>
            </div>

            <h3 className="font-extrabold text-2xl mb-3 text-white font-mono">
              Cibersegurança · Simulador SOC
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Assuma o papel de um Analista SOC: escaneie com nmap, aplique firewall, analise logs, bloqueie o atacante e reforce o SSH.
            </p>

            {cardFooter}
          </Link>

          {/* Card 03 - Segurança Web | SQL Injection | XSS */}
          <Link
            href="/simulador-web"
            className="group relative p-8 rounded-3xl bg-slate-900/60 border border-cyan-500/40 shadow-2xl shadow-cyan-500/10 flex flex-col justify-between transition-all hover:-translate-y-1 hover:border-cyan-400"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600/15 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Bug className="w-7 h-7" />
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                Disponível
              </span>
            </div>

            <h3 className="font-extrabold text-2xl mb-3 text-white font-mono">
              Cibersegurança · Segurança Web (SQLi | XSS)
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Analise a Lojinha Online como um pentester: SQL Injection, extração de dados via UNION, XSS refletido e armazenado e correção da aplicação.
            </p>

            {cardFooter}
          </Link>

          {/* Card 04 - Redes | Simulador de DNS */}
          <Link
            href="/simulador-dns"
            className="group relative p-8 rounded-3xl bg-slate-900/60 border border-cyan-500/40 shadow-2xl shadow-cyan-500/10 flex flex-col justify-between transition-all hover:-translate-y-1 hover:border-cyan-400"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-violet-600/15 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7" />
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                Disponível
              </span>
            </div>

            <h3 className="font-extrabold text-2xl mb-3 text-white font-mono">
              Redes · Simulador de Servidor DNS
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Audite o servidor DNS como um Administrador de Redes: resolva registros A, MX e NS com dig, descubra a transferência de zona (AXFR) e proteja a zona com DNSSEC.
            </p>

            {cardFooter}
          </Link>
        </div>
      </div>
    </section>
  );
}