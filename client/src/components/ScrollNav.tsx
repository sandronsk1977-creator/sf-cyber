import React, { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

function getSections() {
  return Array.from(document.querySelectorAll("main section")) as HTMLElement[];
}

function currentIndex(sections: HTMLElement[]) {
  const pos = window.scrollY + window.innerHeight * 0.35;
  let idx = 0;
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].offsetTop <= pos) idx = i;
  }
  return idx;
}

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

  const scrollToSection = (index: number) => {
    const sections = getSections();
    if (sections.length === 0) return;
    const target = Math.max(0, Math.min(sections.length - 1, index));
    sections[target].scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goNext = () => {
    const sections = getSections();
    if (sections.length === 0) {
      window.scrollTo({ top: window.scrollY + window.innerHeight * 0.9, behavior: "smooth" });
      return;
    }
    scrollToSection(currentIndex(sections) + 1);
  };

  const goPrev = () => {
    const sections = getSections();
    if (sections.length === 0) {
      window.scrollTo({ top: Math.max(0, window.scrollY - window.innerHeight * 0.9), behavior: "smooth" });
      return;
    }
    const idx = currentIndex(sections);
    if (idx <= 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      scrollToSection(idx - 1);
    }
  };

  return (
    <div
      className={`fixed right-4 md:right-5 bottom-6 z-40 flex flex-col items-center gap-2 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        onClick={goPrev}
        aria-label="Seção anterior"
        title="Seção anterior"
        className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/90 border border-cyan-500/50 text-cyan-400 shadow-lg shadow-cyan-500/20 backdrop-blur transition-all duration-300 hover:bg-cyan-500 hover:text-slate-950 hover:scale-110 hover:border-cyan-400"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
      <button
        onClick={goNext}
        aria-label="Próxima seção"
        title="Próxima seção"
        className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/90 border border-cyan-500/50 text-cyan-400 shadow-lg shadow-cyan-500/20 backdrop-blur transition-all duration-300 hover:bg-cyan-500 hover:text-slate-950 hover:scale-110 hover:border-cyan-400"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </div>
  );
}