import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { X, Rocket, CheckCircle2, Bot, Boxes, Bug } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const WAITLIST_KEY = "sfcyber-waitlist";

interface PreLaunchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function readSubscribedEmail(): string | null {
  try {
    const raw = localStorage.getItem(WAITLIST_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return typeof parsed.email === "string" ? parsed.email : null;
  } catch {
    return null;
  }
}

export function PreLaunchModal({ isOpen, onClose }: PreLaunchModalProps) {
  const [email, setEmail] = useState("");
  const [subscribedEmail, setSubscribedEmail] = useState<string | null>(() =>
    readSubscribedEmail()
  );
  const [, navigate] = useLocation();

  useEffect(() => {
    if (isOpen) setSubscribedEmail(readSubscribedEmail());
  }, [isOpen]);

  if (!isOpen) return null;

  const goToSimulator = (path: string) => {
    onClose();
    navigate(path);
  };

  const notifyMe = () => {
    const value = email.trim();
    if (!value) {
      toast.error("Deixe seu e-mail para ser avisado quando abrirmos.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      toast.error("Digite um e-mail válido (ex.: nome@email.com).");
      return;
    }
    try {
      localStorage.setItem(
        WAITLIST_KEY,
        JSON.stringify({ email: value, at: new Date().toISOString() })
      );
    } catch {
      // localStorage indisponível: segue sem persistir
    }
    setSubscribedEmail(value);
    setEmail("");
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

        {subscribedEmail ? (
          <div className="animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-10 h-10 text-cyan-400 shrink-0" />
              <h2 className="text-2xl font-extrabold font-mono text-white leading-tight">
                Você está na lista!
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Vamos te avisar em{" "}
              <strong className="text-cyan-400 break-all">{subscribedEmail}</strong> quando a
              área de membros (cursos, laboratórios e certificações) abrir.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Enquanto isso, já pode praticar nos simuladores grátis com 8 níveis e certificado
              de conclusão.
            </p>
            <div className="grid gap-3 mb-5">
              <Button
                onClick={() => goToSimulator("/simulador-seguranca")}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-5 rounded-xl shadow-xl shadow-cyan-500/25"
              >
                <Bot className="w-5 h-5 mr-2" />
                Testar o Simulador de Segurança (SOC)
              </Button>
              <Button
                onClick={() => goToSimulator("/simulador-vlan")}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-5 rounded-xl"
              >
                <Boxes className="w-5 h-5 mr-2" />
                Testar o Simulador de VLANs
              </Button>
              <Button
                onClick={() => goToSimulator("/simulador-web")}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-5 rounded-xl"
              >
                <Bug className="w-5 h-5 mr-2" />
                Testar o Simulador de Segurança Web
              </Button>
            </div>
            <button
              onClick={onClose}
              className="w-full text-center text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Fechar
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-extrabold font-mono text-white mb-3">Em breve!</h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-5">
              A área de membros (cursos, laboratórios e certificações) estará disponível em
              breve. Enquanto isso, aproveite o{" "}
              <strong className="text-cyan-400">Simulador de VLANs Switch Cisco</strong> grátis,
              com 8 níveis e certificado de conclusão.
            </p>

            <div className="mb-5">
              <label className="block text-xs text-slate-400 mb-2">
                Quer saber quando abrir? Deixe seu e-mail:
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") notifyMe();
                  }}
                  placeholder="seu@email.com"
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-cyan-500 outline-none text-sm"
                />
                <Button
                  onClick={notifyMe}
                  className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold shrink-0"
                >
                  Avise-me
                </Button>
              </div>
            </div>

            <Button
              onClick={() => goToSimulator("/simulador-vlan")}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-6 rounded-xl"
            >
              Aproveitar o Simulador de VLANs Grátis
            </Button>

            <button
              onClick={onClose}
              className="mt-4 w-full text-center text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Agora não
            </button>
          </>
        )}
      </div>
    </div>
  );
}