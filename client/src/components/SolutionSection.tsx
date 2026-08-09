import React from "react";
import { CheckCircle2, ShieldCheck, Cpu, Terminal, Award } from "lucide-react";

const TECHS = [
  "Linux", "Windows", "Python", "Redes TCP/IP", "Bases de datos", "Bash scripting",
  "Privacidad", "Anonimato", "Seguridad wireless", "Virtualización", "Programación ofensiva",
  "JavaScript", "Docker", "Nmap", "Metasploit", "Burp Suite", "Hashcat", "Wireshark",
  "John the Ripper", "OSINT", "Bug Bounty", "Kali Linux", "Mucho más"
];

export function SolutionSection() {
  return (
    <section id="solucion" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Con Hixec — LA SOLUCIÓN DEFINITIVA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Aprende como un profesional real
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Un sistema estructurado desde cero hasta nivel experto, con laboratorios reales y simulaciones de examen para garantizar tu éxito laboral.
          </p>
        </div>

        {/* 3 Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Terminal className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-emerald-400 font-mono font-semibold">Fundamentos sólidos</span>
            <h3 className="text-xl font-bold mt-2 mb-3 text-white">Empiezas desde cero y construyes de verdad</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ciberseguridad general, redes, Linux, Windows, programación, bases de datos, Docker, virtualización y más. Todo en orden, todo conectado, todo orientado a hacking ético profesional.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-emerald-400 font-mono font-semibold">Laboratorios reales</span>
            <h3 className="text-xl font-bold mt-2 mb-3 text-white">Practicas en entornos reales, no en CTFs vacíos</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              +150 laboratorios donde ejecutas ataques reales. Cuando terminas, puedes explicar exactamente qué hiciste, por qué funcionó y cómo defenderlo (que es lo que paga).
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-emerald-400 font-mono font-semibold">Empleabilidad</span>
            <h3 className="text-xl font-bold mt-2 mb-3 text-white">Llegas a tu primera certificación y consigues empleo</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Nuestros alumnos pasan entrevistas porque saben lo que hacen. No bluffean. No copian. Entienden. Esa es la diferencia entre conseguir el trabajo o no en este sector.
            </p>
          </div>

        </div>

        {/* Technologies Grid / List */}
        <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 text-center">
          <h3 className="text-xl font-bold mb-6 text-white">
            Todo esto lo aprenderás a dominar como un hacker de verdad
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {TECHS.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs sm:text-sm font-mono font-medium hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
