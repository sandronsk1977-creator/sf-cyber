import React from "react";
import { Bot, Activity, Wrench, Route, Compass } from "lucide-react";

const diferenciais = [
  {
    icon: Activity,
    title: "Acompanha em tempo real",
    desc: "Enquanto você configura o switch, o firewall ou analisa logs, o SF Bot observa o que você faz e reage na hora.",
  },
  {
    icon: Wrench,
    title: "Sugere correções",
    desc: "Aponta o comando que falta, o erro de sintaxe e o ajuste que trava a configuração, sem entregar a resposta pronta.",
  },
  {
    icon: Route,
    title: "Aponta caminhos",
    desc: "Mostra o próximo passo da trilha quando você trava, com a ordem dos comandos na ordem em que o switch espera.",
  },
  {
    icon: Compass,
    title: "Faz curadoria do conteúdo",
    desc: "Indica o que estudar agora e o que já dominou, para você não perder tempo repetindo o que já sabe.",
  },
];

export function SFBotSection() {
  return (
    <section id="sfbot" className="py-20 bg-slate-950 text-slate-100 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[320px] h-[320px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[280px] h-[280px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
            Seu professor mediador
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-6 text-white">
            Você nunca mais vai ficar travado em um laboratório.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Estudar cibersegurança sozinho pode ser frustrante. Por isso criamos o SF Bot. Ele não é
            um chatbot comum: é o seu professor mediador inteligente 24/7. Enquanto você configura
            firewalls ou analisa vulnerabilidades nos laboratórios virtuais, o SF Bot acompanha o seu
            trabalho, sugere correções, aponta caminhos e faz uma curadoria inteligente dos conteúdos
            para acelerar o seu aprendizado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {diferenciais.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              style={{ "--neon": "#22d3ee" } as React.CSSProperties}
              className="sf-neon-card group relative p-6 pt-7 rounded-3xl bg-slate-900/60 border border-cyan-500/40 flex flex-col transition-all hover:-translate-y-1 hover:border-cyan-400"
            >
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-slate-950 text-cyan-400 text-xs font-bold uppercase tracking-wider border border-cyan-400/50 animate-neon-badge z-10">
                SF Bot
              </span>
              <div className="w-12 h-12 mb-4 rounded-2xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg mb-2 text-white font-mono leading-tight">
                {title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-300">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-slate-800">
            <Bot className="w-4 h-4 text-cyan-400" />
            Disponível nos 4 laboratórios
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-slate-800">
            <Activity className="w-4 h-4 text-cyan-400" />
            8 níveis por laboratório
          </span>
        </div>
      </div>
    </section>
  );
}
