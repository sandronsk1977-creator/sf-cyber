import React, { useState } from "react";
import { X, ShieldCheck, Lock, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: "login" | "register";
  onClose: () => void;
}

export function AuthModal({ isOpen, initialMode = "login", onClose }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "login") {
      toast.success("¡Login simulado com sucesso! Bem-vindo de volta à SF Cyber.");
    } else {
      toast.success("¡Conta criada com sucesso! Sua primeira certificação está te esperando.");
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl text-slate-100">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-cyan-400" />
            <h3 className="font-bold text-lg">
              {mode === "login" ? "Acesso SF Cyber" : "Registro SF Cyber"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          {mode === "register" && (
            <div className="space-y-2">
              <Label htmlFor="name" className="text-slate-300">Nome completo</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-9 bg-slate-950 border-slate-800 text-slate-100 focus-visible:ring-cyan-500"
                  required
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-300">Correio eletrônico</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
              <Input
                id="email"
                type="email"
                placeholder="seu@correio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-9 bg-slate-950 border-slate-800 text-slate-100 focus-visible:ring-cyan-500"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-slate-300">Senha</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-9 bg-slate-950 border-slate-800 text-slate-100 focus-visible:ring-cyan-500"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-2.5 mt-2 transition-all shadow-lg shadow-cyan-900/30"
          >
            {mode === "login" ? "Entrar na Plataforma" : "Criar Conta Gratuita"}
          </Button>

          <div className="text-center pt-2">
            {mode === "login" ? (
              <p className="text-sm text-slate-400">
                ¿Não tem conta?{" "}
                <button
                  type="button"
                  onClick={() => setMode("register")}
                  className="text-cyan-400 font-semibold hover:underline"
                >
                  Cadastre-se aqui
                </button>
              </p>
            ) : (
              <p className="text-sm text-slate-400">
                ¿Já tem uma conta?{" "}
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="text-cyan-400 font-semibold hover:underline"
                >
                  Faça login
                </button>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
