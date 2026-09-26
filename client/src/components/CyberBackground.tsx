import { useEffect, useRef } from "react";

const GLYPHS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン" +
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+=<>/\\";

export function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const fontSize = 16;
    let cols = 0;
    let drops: number[] = [];
    let raf = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.floor(window.innerWidth / fontSize);
      const active = Math.floor(cols * 0.55);
      drops = Array.from({ length: cols }, (_, i) =>
        i < active ? Math.random() * -80 : -1000
      );
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < cols; i++) {
        const y = drops[i];
        if (y <= 0) continue;
        const x = i * fontSize;
        const char = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

        ctx.fillStyle = "rgba(190, 242, 255, 0.9)";
        ctx.fillText(char(), x, y * fontSize);
        ctx.fillStyle = "rgba(34, 211, 238, 0.5)";
        ctx.fillText(char(), x, (y - 1) * fontSize);
        ctx.fillStyle = "rgba(34, 211, 238, 0.22)";
        ctx.fillText(char(), x, (y - 2) * fontSize);

        if (y * fontSize > window.innerHeight && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 1;
      }
      raf = requestAnimationFrame(drawFrame);
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < cols; i++) {
        const x = i * fontSize;
        ctx.fillStyle = "rgba(34, 211, 238, 0.18)";
        ctx.fillText(GLYPHS[Math.floor(Math.random() * GLYPHS.length)], x, fontSize * 3);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    if (prefersReduced) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(drawFrame);
    }

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !prefersReduced) {
        raf = requestAnimationFrame(drawFrame);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[25] pointer-events-none select-none" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full mix-blend-screen"
      />
      <div className="absolute inset-0 cyber-grid" />
      <div className="absolute inset-0 cyber-scanlines" />
      <div className="absolute inset-0 cyber-vignette" />
    </div>
  );
}