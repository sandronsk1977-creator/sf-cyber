import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CartModal } from "./CartModal";
import { PreLaunchModal } from "./PreLaunchModal";
import { SFCyberLogo } from "./SFCyberLogo";

export function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [preLaunchOpen, setPreLaunchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="group">
              <SFCyberLogo />
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 text-slate-600 hover:text-cyan-600 transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-100"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Não há produtos no carrinho.</span>
            </button>

            <div className="h-4 w-[1px] bg-slate-300" />

            <button
              onClick={() => setPreLaunchOpen(true)}
              className="text-slate-700 hover:text-black font-medium transition-colors"
            >
              Acesso
            </button>

            <span className="text-slate-400">|</span>

            <Button
              onClick={() => setPreLaunchOpen(true)}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded-lg shadow-lg shadow-cyan-500/20 transition-all hover:shadow-cyan-500/40"
            >
              Registro
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-slate-600 hover:text-black relative"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-black"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <div className="text-xs text-slate-500 italic">Não há produtos no carrinho.</div>
            <div className="flex flex-col gap-2 pt-2">
              <Button
                variant="outline"
                className="w-full border-slate-300 text-slate-700 justify-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setPreLaunchOpen(true);
                }}
              >
                Acesso
              </Button>
              <Button
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold justify-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setPreLaunchOpen(true);
                }}
              >
                Registro
              </Button>
            </div>
          </div>
        )}
      </header>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <PreLaunchModal isOpen={preLaunchOpen} onClose={() => setPreLaunchOpen(false)} />
    </>
  );
}
