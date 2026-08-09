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
            <span>EL ERROR QUE TODOS COMETEN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Sin las bases nunca vas a conseguir empleo
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Son muchos los que intentan aprender hacking ético directamente aprendiendo "técnicas de hacking" sin entender el trasfondo. No puedes hackear algo que no sabes cómo funciona, y sin los fundamentos, eres un mono copiando comandos que otro escribió.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-rose-500/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 transition-transform">
              <XCircle className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-rose-400 font-mono font-semibold">Sin bases — el gran problema</span>
            <h3 className="text-xl font-bold mt-2 mb-3 text-white">Copias comandos sin entender nada</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ejecutas Nmap, Metasploit, Burp Suite u otra siguiendo un tutorial. Cuando algo falla, no sabes por qué. Eso no es hacking. Es teatro y es patético.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-rose-500/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 transition-transform">
              <Briefcase className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-rose-400 font-mono font-semibold">Entrevistas fallidas</span>
            <h3 className="text-xl font-bold mt-2 mb-3 text-white">Ninguna empresa te va a contratar</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Los recruiters de ciberseguridad hacen preguntas de redes, Linux, Windows y procedimientos técnicos. Si no sabes responderlas, la entrevista termina en dos minutos.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-rose-500/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-rose-400 font-mono font-semibold">Dinero y tiempo perdido</span>
            <h3 className="text-xl font-bold mt-2 mb-3 text-white">Llevas años empezando y nunca terminas</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Pagas 500 dólares por un curso que no te enseñó nada, luego un diplomado, luego un máster y más de lo mismo. El problema es que nadie te dio una ruta real probada.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
