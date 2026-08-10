import React from "react";
import { AlertTriangle, XCircle, Briefcase, Clock } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="py-20 bg-slate-900/60 border-t border-b border-slate-800 text-slate-100">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span>O ERRO QUE TODOS COMETEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Sem as bases você nunca vai conseguir emprego
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Muitos tentam aprender hacking ético diretamente pulando para técnicas avançadas sem entender o background. Você não pode hackear algo que não sabe como funciona, e sem fundamentos, você é apenas um script kiddie copiando comandos.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-cyan-500/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <XCircle className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-cyan-400 font-mono font-semibold">Sem bases — o grande problema</span>
            <h3 className="text-xl font-bold mt-2 mb-3 text-white">Você copia comandos sem entender nada</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Você executa Nmap, Metasploit, Burp Suite seguindo tutoriais. Quando algo falha, você não faz ideia do porquê. Isso não é hacking. É teatro.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-cyan-500/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <Briefcase className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-cyan-400 font-mono font-semibold">Entrevistas reprovadas</span>
            <h3 className="text-xl font-bold mt-2 mb-3 text-white">Nenhuma empresa vai te contratar</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Recrutadores de cibersegurança fazem perguntas sobre redes, Linux, Windows e procedimentos técnicos. Se você não sabe responder, a entrevista acaba em dois minutos.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-cyan-500/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-cyan-400 font-mono font-semibold">Tempo e dinheiro perdidos</span>
            <h3 className="text-xl font-bold mt-2 mb-3 text-white">Anos tentando e nunca terminando</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Você gasta dinheiro em cursos soltos, pós-graduações genéricas e materiais desatualizados. O problema é que ninguém te deu uma rota real, passo a passo.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
