import React from "react";
import { X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl text-slate-100">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-cyan-400" />
            <h3 className="font-bold text-lg">Seu Carrinho</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-12 text-center flex flex-col items-center justify-center">
          <div className="w-16 h-16 mb-4 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400">
            <ShoppingCart className="w-8 h-8 opacity-60" />
          </div>
          <p className="text-slate-300 font-medium text-base">Não há produtos no carrinho.</p>
          <p className="text-slate-500 text-sm mt-1 max-w-xs">
            Explore nossos planos de assinatura ou cursos individuais e comece sua formação em cibersegurança.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <Button
            onClick={onClose}
            className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-6 shadow-lg shadow-cyan-500/20"
          >
            Continuar explorando
          </Button>
        </div>
      </div>
    </div>
  );
}
