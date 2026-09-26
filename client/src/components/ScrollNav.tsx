import React, { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export function ScrollNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollDownOneViewport = () => {
    window.scrollTo({ top: window.scrollY + window.innerHeight * 0.9, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed right-4 md:right-5 bottom-6 z-40 flex flex-col items-center gap-2 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        title="Voltar ao topo"
        className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/90 border border-cyan-500/50 text-cyan-400 shadow-lg shadow-cyan-500/20 backdrop-blur transition-all duration-300 hover:bg-cyan-500 hover:text-slate-950 hover:scale-110 hover:border-cyan-400"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
      <button
        onClick={scrollDownOneViewport}
        aria-label="Rolar para baixo"
        title="Rolar para baixo"
        className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/90 border border-cyan-500/50 text-cyan-400 shadow-lg shadow-cyan-500/20 backdrop-blur transition-all duration-300 hover:bg-cyan-500 hover:text-slate-950 hover:scale-110 hover:border-cyan-400"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </div>
  );
}