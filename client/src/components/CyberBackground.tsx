import { useEffect, useRef } from "react";

interface Flake {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  phase: number;
}

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
    let flakes: Flake[] = [];
    let raf = 0;

    const spawn = (w: number, h: number): Flake => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 2.2 + 0.8,
      speed: Math.random() * 0.6 + 0.25,
      drift: Math.random() * 0.5 + 0.15,
      phase: Math.random() * Math.PI * 2,
    });

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.floor((window.innerWidth * window.innerHeight) / 12000);
      flakes = Array.from({ length: count }, () => spawn(window.innerWidth, window.innerHeight));
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const f of flakes) {
        f.y += f.speed;
        f.phase += 0.02;
        f.x += Math.sin(f.phase) * f.drift;

        if (f.y > canvas.height + 4) {
          f.y = -4;
          f.x = Math.random() * canvas.width;
        }
        if (f.x > canvas.width + 4) f.x = -4;
        else if (f.x < -4) f.x = canvas.width + 4;

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 242, 254, ${f.size > 2 ? 0.85 : 0.6})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(drawFrame);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!prefersReduced) {
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
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 cyber-scanlines" />
      <div className="absolute inset-0 cyber-vignette" />
    </div>
  );
}