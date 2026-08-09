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
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                <Shield className="w-5 h-5 fill-slate-950 text-emerald-400" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-mono">
                Hixec<span className="text-emerald-400">.</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-900"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>No hay productos en el carrito.</span>
            </button>

            <div className="h-4 w-[1px] bg-slate-800" />

            <button
              onClick={() => setAuthModalState({ isOpen: true, mode: "login" })}
              className="text-slate-300 hover:text-white font-medium transition-colors"
            >
              Acceso
            </button>

            <span className="text-slate-600">|</span>

            <Button
              onClick={() => setAuthModalState({ isOpen: true, mode: "register" })}
              className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-4 py-2 rounded-lg shadow-lg shadow-emerald-500/20 transition-all hover:shadow-emerald-500/40"
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
            <div className="text-xs text-slate-400 italic">No hay productos en el carrito.</div>
            <div className="flex flex-col gap-2 pt-2">
              <Button
                variant="outline"
                className="w-full border-slate-800 text-slate-200 justify-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAuthModalState({ isOpen: true, mode: "login" });
                }}
              >
                Acceso
              </Button>
              <Button
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold justify-center"
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
