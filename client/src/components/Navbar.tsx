import React, { useState } from "react";
import { ShoppingCart, Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartModal } from "./CartModal";
import { AuthModal } from "./AuthModal";

export function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [authModalState, setAuthModalState] = useState<{ isOpen: boolean; mode: "login" | "register" }>({
    isOpen: false,
    mode: "login",
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2.5 group">
              {/* Escudo SF Cyber */}
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-700 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform border border-cyan-300/40">
                <Shield className="absolute inset-0 w-full h-full text-cyan-400/20 fill-cyan-500/10" />
                <span className="relative z-10 text-white font-mono text-base font-extrabold tracking-tighter">
                  SF
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white font-mono leading-none">
                  SF <span className="text-cyan-400">Academia CYBER</span>
                </span>
                <span className="text-[10px] text-slate-400 tracking-widest uppercase font-mono mt-0.5">
                  Segurança Digital & Redes
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-900"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Não há produtos no carrinho.</span>
            </button>

            <div className="h-4 w-[1px] bg-slate-800" />

            <button
              onClick={() => setAuthModalState({ isOpen: true, mode: "login" })}
              className="text-slate-300 hover:text-white font-medium transition-colors"
            >
              Acesso
            </button>

            <span className="text-slate-600">|</span>

            <Button
              onClick={() => setAuthModalState({ isOpen: true, mode: "register" })}
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-4 py-2 rounded-lg shadow-lg shadow-cyan-500/20 transition-all hover:shadow-cyan-500/40"
            >
              Registro
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-slate-300 hover:text-white relative"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <div className="text-xs text-slate-400 italic">Não há produtos no carrinho.</div>
            <div className="flex flex-col gap-2 pt-2">
              <Button
                variant="outline"
                className="w-full border-slate-800 text-slate-200 justify-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAuthModalState({ isOpen: true, mode: "login" });
                }}
              >
                Acesso
              </Button>
              <Button
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold justify-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAuthModalState({ isOpen: true, mode: "register" });
                }}
              >
                Registro
              </Button>
            </div>
          </div>
        )}
      </header>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <AuthModal
        isOpen={authModalState.isOpen}
        initialMode={authModalState.mode}
        onClose={() => setAuthModalState({ ...authModalState, isOpen: false })}
      />
    </>
  );
}
