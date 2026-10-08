import React, { useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PreLaunchModal } from "./PreLaunchModal";
import { SFCyberLogo } from "./SFCyberLogo";

export function Navbar() {
  const [preLaunchOpen, setPreLaunchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="group">
              <SFCyberLogo />
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href="/privacidade"
              title="Política de Privacidade"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1.5 rounded-full hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-colors animate-neon-badge"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Privacidade
            </Link>

            <span className="text-slate-700">|</span>

            <button
              onClick={() => setPreLaunchOpen(true)}
              className="text-slate-300 hover:text-white font-medium transition-colors"
            >
              Acesso
            </button>

            <span className="text-slate-600">|</span>

            <Button
              onClick={() => setPreLaunchOpen(true)}
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-4 py-2 rounded-lg shadow-lg shadow-cyan-500/20 transition-all hover:shadow-cyan-500/40"
            >
              Registro
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center gap-3">
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
            <div className="flex flex-col gap-2 pt-2">
              <Button
                variant="outline"
                className="w-full border-slate-800 text-slate-200 justify-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setPreLaunchOpen(true);
                }}
              >
                Acesso
              </Button>
              <Button
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold justify-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setPreLaunchOpen(true);
                }}
              >
                Registro
              </Button>
              <Link
                href="/privacidade"
                title="Política de Privacidade"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-slate-800 text-cyan-400 text-sm py-2.5 hover:text-cyan-300 transition-colors animate-neon-badge"
              >
                <ShieldCheck className="w-4 h-4" />
                Política de Privacidade
              </Link>
            </div>
          </div>
        )}
      </header>

      <PreLaunchModal isOpen={preLaunchOpen} onClose={() => setPreLaunchOpen(false)} />
    </>
  );
}
