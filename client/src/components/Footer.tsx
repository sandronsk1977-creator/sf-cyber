export function Footer() {
  return (
    <footer className="py-6 bg-slate-950 border-t border-slate-800 text-slate-400">
      <div className="container flex flex-col items-center justify-center gap-1 text-center">
        <span className="text-xs sm:text-sm font-medium">
          Developed by <span className="text-cyan-400 font-bold">Sandro Ferreira</span>
        </span>
        <span className="text-xs text-slate-600">
          © {new Date().getFullYear()} SF Cyber · Laboratórios de Redes e Cibersegurança
        </span>
      </div>
    </footer>
  );
}