import React, { useState } from "react";
import { useLocation } from "wouter";
import { X, Rocket } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

interface PreLaunchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PreLaunchModal({ isOpen, onClose }: PreLaunchModalProps) {
  const [email, setEmail] = useState("");
  const [, navigate] = useLocation();

  if (!isOpen) return null;

  const goToSimulator = () => {
    onClose();
    navigate("/simulador-vlan");
  };

  const notifyMe = () => {
    if (!email.trim()) {
      toast.error("Deixe seu e-mail para ser avisado quando abrirmos.");
      return;
    }
    toast.success(`Avisaremos você em ${email.trim()} quando a área de membros abrir.`);
    setEmail("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 p-4">
      <div className="relative w-full max-w-md p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl text-slate-100 animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4 uppercase tracking-widest font-mono">
          <Rocket className="w-3.5 h-3.5" />
          Pré-lançamento
        </div>

        <h2 className="text-2xl font-extrabold font-mono text-white mb-3">Em breve!</h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          A área de membros (cursos, laboratórios e certificações) estará disponível em breve.
          Enquanto isso, aproveite o{" "}
          <strong className="text-cyan-400">Simulador de VLANs Switch Cisco</strong> (grátis,
          com 8 níveis e certificado de conclusão).
        </p>

        <div className="mb-5">
          <label className="block text-xs text-slate-400 mb-2">
            Quer saber quando abrir? Deixe seu e-mail (opcional):
          </label>
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-cyan-500 outline-none text-sm"
            />
            <Button
              onClick={notifyMe}
              className="bg-slate-800 hover:bg-slate-700 text-white shrink-0"
            >
              Avise-me
            </Button>
          </div>
        </div>

        <Button
          onClick={goToSimulator}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-6 rounded-xl shadow-xl shadow-cyan-500/25"
        >
          Aproveitar o Simulador de VLANs Grátis
        </Button>

        <button
          onClick={onClose}
          className="mt-4 w-full text-center text-xs text-slate-500 hover:text-slate-300 transition-colors"
        >
          Agora não
        </button>
      </div>
    </div>
  );
}