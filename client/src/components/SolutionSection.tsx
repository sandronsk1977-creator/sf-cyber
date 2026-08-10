import React from "react";
import { CheckCircle2, ShieldCheck, Cpu, Terminal, Award } from "lucide-react";

const TECHS = [
  "Linux", "Windows", "Python", "Redes TCP/IP", "Bancos de dados", "Bash scripting",
  "Privacidade", "Anonimato", "Segurança wireless", "Virtualização", "Programação ofensiva",
  "JavaScript", "Docker", "Nmap", "Metasploit", "Burp Suite", "Hashcat", "Wireshark",
  "John the Ripper", "OSINT", "Bug Bounty", "Kali Linux", "E muito mais"
];

export function SolutionSection() {
  return (
    <section id="solucao" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Com SF Cyber — A SOLUÇÃO DEFINITIVA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Aprenda como um profissional real
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Um sistema estruturado do zero ao nível avançado, com laboratórios reais e simulados de exame para garantir sua colocação no mercado.
          </p>
        </div>

        {/* 3 Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <Terminal className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-cyan-400 font-mono font-semibold">Fundamentos sólidos</span>
            <h3 className="text-xl font-bold mt-2 mb-3 text-white">Do zero à construção real</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Cibersegurança geral, redes, Linux, Windows, programação, bancos de dados, Docker, virtualização e muito mais. Tudo conectado e orientado a hacking ético profissional.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-cyan-400 font-mono font-semibold">Laboratórios reais</span>
            <h3 className="text-xl font-bold mt-2 mb-3 text-white">Pratique em ambientes reais, sem CTFs vazios</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              +150 laboratórios onde você executa ataques reais. Ao terminar, você sabe explicar exatamente o que fez, por que funcionou e como defender (que é o que o mercado paga).
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-cyan-400 font-mono font-semibold">Empregabilidade</span>
            <h3 className="text-xl font-bold mt-2 mb-3 text-white">Conquiste certificações e empregos</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Nossos alunos passam em entrevistas porque dominam a prática. Eles não blefam. Eles entendem. Essa é a diferença entre conseguir a vaga ou ser rejeitado.
            </p>
          </div>

        </div>

        {/* Technologies Grid / List */}
        <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 text-center">
          <h3 className="text-xl font-bold mb-6 text-white">
            Tudo isso você vai dominar como um hacker profissional
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {TECHS.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs sm:text-sm font-mono font-medium hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
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
