import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { PreLaunchModal } from "./PreLaunchModal";
import { SFCyberLogo } from "./SFCyberLogo";

const LINKS = [
  { label: "Início", target: "inicio" },
  { label: "Sobre", target: "portal" },
  { label: "Planos", target: "planos" },
  { label: "Patrocínio", target: "parcerias" },
  { label: "Competências", target: "competencias" },
];

export function Navbar() {
  const [preLaunchOpen, setPreLaunchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const goToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (location !== "/") {
      // fora da home, volta primeiro e depois rola
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="site-navbar">
        <div className="site-navbar-inner">
          {/* Logo (esquerda) */}
          <Link
            href="/"
            className="absolute left-4 top-1/2 -translate-y-1/2 group"
            aria-label="SF Cyber — início"
          >
            <SFCyberLogo />
          </Link>

          {/* Menu centralizado */}
          <nav className="hidden md:flex items-center gap-0.5">
            {LINKS.map((link) => (
              <a
                key={link.target}
                href={`/#${link.target}`}
                className="nav-link"
                onClick={(e) => {
                  if (location === "/") {
                    e.preventDefault();
                    goToSection(link.target);
                  }
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Ações (direita) */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2">
            <button
              onClick={() => setPreLaunchOpen(true)}
              className="text-slate-300 hover:text-white font-medium transition-colors text-sm px-2 py-1"
            >
              Acesso
            </button>
            <Button
              onClick={() => setPreLaunchOpen(true)}
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-4 py-2 rounded-lg shadow-lg shadow-cyan-500/20 transition-all hover:shadow-cyan-500/40"
            >
              Registro
            </Button>
          </div>

          {/* Menu mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Dropdown mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 py-4 space-y-1">
            {LINKS.map((link) => (
              <a
                key={link.target}
                href={`/#${link.target}`}
                className="block text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-slate-900"
                onClick={() => {
                  setMobileMenuOpen(false);
                  goToSection(link.target);
                }}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-3">
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
            </div>
          </div>
        )}
      </header>

      <PreLaunchModal isOpen={preLaunchOpen} onClose={() => setPreLaunchOpen(false)} />
    </>
  );
}