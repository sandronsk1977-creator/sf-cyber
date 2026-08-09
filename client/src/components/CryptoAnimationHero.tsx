import React, { useEffect, useState } from "react";
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const TARGET_TITLE = "SUA PRIMEIRA CERTIFICAÇÃO ESTÁ AGUARDANDO VOCÊ";
const CIPHER_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*!?<>{}[]|/\\+=-~^";

export function CryptoAnimationHero() {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"decrypting" | "holding" | "encrypting">("decrypting");

  useEffect(() => {
    let iteration = 0;
    let timer: NodeJS.Timeout;

    const runDecryptAnimation = () => {
      iteration = 0;
      setPhase("decrypting");

      const interval = setInterval(() => {
        setDisplayText(
          TARGET_TITLE.split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) {
                return TARGET_TITLE[index];
              }
              return CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)];
            })
            .join("")
        );

        if (iteration >= TARGET_TITLE.length) {
          clearInterval(interval);
          setPhase("holding");

          // Hold for 5 seconds, then encrypt back
          timer = setTimeout(() => {
            runEncryptAnimation();
          }, 5000);
        }

        iteration += 1 / 2; // speed factor
      }, 40);

      return () => clearInterval(interval);
    };

    const runEncryptAnimation = () => {
      iteration = TARGET_TITLE.length;
      setPhase("encrypting");

      const interval = setInterval(() => {
        setDisplayText(
          TARGET_TITLE.split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) {
                return CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)];
              }
              return CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)];
            })
            .join("")
        );

        if (iteration <= 0) {
          clearInterval(interval);
          // Wait a moment then decrypt again
          timer = setTimeout(() => {
            runDecryptAnimation();
          }, 500);
        }

        iteration -= 1 / 2;
      }, 30);

      return () => clearInterval(interval);
    };

    const cleanup = runDecryptAnimation();

    return () => {
      if (cleanup) clearInterval(cleanup as any);
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-slate-950 text-slate-100">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10 flex flex-col items-center text-center">
        
        {/* Badge tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-8 shadow-lg shadow-emerald-500/5">
          <ShieldCheck className="w-4 h-4" />
          <span>Formação em Ciberseguridad Ofensiva y Defensiva</span>
        </div>

        {/* Main Headline with Cryptographic Effect */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.15] mb-8 font-mono min-h-[140px] sm:min-h-[180px] flex items-center justify-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">
            {displayText || "SUA PRIMEIRA CERTIFICAÇÃO ESTÁ AGUARDANDO VOCÊ"}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mb-12 leading-relaxed">
          Trilhas de aprendizagem estruturadas por especialistas, mais de 150 laboratórios práticos e simulações de exames para ajudar você a obter sua primeira certificação, mesmo sem experiência prévia.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-6 rounded-xl shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02] text-base group"
            onClick={() => {
              const el = document.getElementById("planes");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Empieza gratis ahora
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-200 font-semibold px-8 py-6 rounded-xl text-base"
            onClick={() => {
              const el = document.getElementById("solucion");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ver os cursos →
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Sin tarjeta de crédito
          </span>
          <span className="hidden sm:inline text-slate-700">·</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Cancela cuando quieras
          </span>
          <span className="hidden sm:inline text-slate-700">·</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Acceso inmediato
          </span>
        </div>

        {/* Seen in / Social Proof Bar */}
        <div className="mt-20 w-full max-w-5xl pt-10 border-t border-slate-800/80">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-mono mb-6">NOS HAS VISTO EN</p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span className="text-lg font-bold font-mono tracking-wider text-slate-300">CYBERSEC LATAM</span>
            <span className="text-lg font-bold font-mono tracking-wider text-slate-300">HACKER_NEWS</span>
            <span className="text-lg font-bold font-mono tracking-wider text-slate-300">TECH_SPAIN</span>
            <span className="text-lg font-bold font-mono tracking-wider text-slate-300">PENTEST_MAG</span>
          </div>
        </div>

      </div>
    </section>
  );
}
