import React from "react";
import { Rocket, Mail, ShieldCheck, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PreLaunchCtaSection({ onOpenPreLaunch }: { onOpenPreLaunch: () => void }) {
  return (
    <section id="acesso" className="py-20 bg-slate-900/60 border-t border-b border-slate-800 text-slate-100">
      <div className="container">
        <div
          style={{ "--neon": "#22d3ee" } as React.CSSProperties}
          className="sf-neon-card relative max-w-4xl mx-auto rounded-3xl bg-slate-950 border border-cyan-500/40 px-6 py-12 sm:px-12 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6">
            <Rocket className="w-4 h-4" />
            Pré-lançamento
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Garanta seu acesso antecipado
          </h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Junte-se à lista de espera do pré-lançamento e garanta bônus inéditos na abertura da
            plataforma.
          </p>

          <Button
            size="lg"
            className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-8 py-6 rounded-xl shadow-xl shadow-cyan-500/25 transition-all hover:scale-[1.02] text-base"
            onClick={onOpenPreLaunch}
          >
            <Mail className="w-5 h-5 mr-2" />
            Quero Acesso Antecipado e Condições Exclusivas
          </Button>

          <p className="text-xs text-slate-500 mt-4">
            Sem cartão de crédito. Sem compromisso. Você sai quando quiser.
          </p>

          <div className="mt-10 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white">Sem custo</p>
                <p className="text-xs text-slate-400 mt-1">Os laboratórios são gratuitos.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white">Acesso imediato</p>
                <p className="text-xs text-slate-400 mt-1">Pratique agora, sem espera.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white">Só o seu e-mail</p>
                <p className="text-xs text-slate-400 mt-1">
                  Usamos para avisar da abertura. Nada de spam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
