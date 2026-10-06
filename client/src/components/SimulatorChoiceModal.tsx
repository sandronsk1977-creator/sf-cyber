import React, { useEffect } from "react";
import { X, Network, ShieldHalf, Bug, Globe, ShoppingCart, Terminal, ArrowRight } from "lucide-react";

interface SimulatorChoiceProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mantido em sincronia com os cards da Home e com os botoes do PreLaunchModal.
const LAB_ITEMS = [
  {
    href: "/vlans/index.html",
    icon: Network,
    iconClass: "bg-cyan-500/15 text-cyan-400",
    title: "Laboratório de VLANs",
    desc: "Configure um Switch Cisco: crie VLANs, atribua portas, teste a conectividade.",
  },
  {
    href: "/seguranca/index.html",
    icon: ShieldHalf,
    iconClass: "bg-blue-600/15 text-blue-400",
    title: "Laboratório SOC",
    desc: "Seja um Analista SOC: escaneie, proteja o firewall e bloqueie o atacante.",
  },
  {
    href: "/web/index.html",
    icon: Bug,
    iconClass: "bg-emerald-600/15 text-emerald-400",
    title: "Laboratório de Segurança Web",
    desc: "Descubra SQL Injection e XSS numa aplicação web e depois corrija a falha.",
  },
  {
    href: "/dns/index.html",
    icon: Globe,
    iconClass: "bg-violet-600/15 text-violet-400",
    title: "Laboratório de Servidor DNS",
    desc: "Resolva registros com dig, descubra o AXFR aberto e aplique DNSSEC.",
  },
  {
    href: "/ecommerce/index.html",
    icon: ShoppingCart,
    iconClass: "bg-amber-600/15 text-amber-400",
    title: "Pentest em E-commerce",
    desc: "Audite a API da loja: IDOR, bypass de 2FA, segredo no front-end e escalonamento.",
  },
  {
    href: "/ip-subnets/index.html",
    icon: Network,
    iconClass: "bg-cyan-500/15 text-cyan-400",
    title: "Endereçamento IP e Sub-redes",
    desc: "Calcule sub-redes IPv4/IPv6, configure IP estático e DHCP e corrija a máscara.",
  },
  {
    href: "/ferramentas/index.html",
    icon: Terminal,
    iconClass: "bg-cyan-500/15 text-cyan-400",
    title: "Ferramentas de Diagnóstico",
    desc: "Isole a camada da falha com ping, traceroute, nslookup e netstat.",
  },
  {
    href: "/camada2/index.html",
    icon: ShieldHalf,
    iconClass: "bg-rose-600/15 text-rose-400",
    title: "Ataques de Camada 2",
    desc: "ARP Spoofing, DHCP rogue e MitM em laboratório isolado, com defesa em profundidade.",
  },
];

export function SimulatorChoiceModal({ isOpen, onClose }: SimulatorChoiceProps) {
  // ESC fecha e o corpo nao rola por tras do modal.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="simulator-choice-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[calc(100dvh-2rem)] flex flex-col bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl text-slate-100 animate-in zoom-in-95 duration-200"
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 z-10 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="px-6 pt-6 shrink-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4 uppercase tracking-widest font-mono">
            <Network className="w-3.5 h-3.5" />
            Plano FREE · Grátis
          </div>

          <h2 id="simulator-choice-title" className="text-2xl font-extrabold font-mono text-white mb-3 pr-8">
            Escolha seu laboratório
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-5">
            Comece a praticar agora mesmo. Todos os {LAB_ITEMS.length} laboratórios são{" "}
            <strong className="text-cyan-400">grátis</strong>, com 8 níveis e certificado de conclusão.
          </p>
        </div>

        {/* area rolavel: com muitos labs o modal passa da altura da tela */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-2 -mx-1 px-1">
          <div className="grid sm:grid-cols-2 gap-4">
            {LAB_ITEMS.map((lab) => {
              const Icon = lab.icon;
              return (
                <a
                  key={lab.href}
                  href={lab.href}
                  onClick={onClose}
                  className="group p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all hover:-translate-y-0.5 flex flex-col"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={`w-12 h-12 mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${lab.iconClass}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold font-mono text-white mb-2">{lab.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{lab.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-cyan-400">
                    Acessar
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="px-6 pt-3 pb-6 shrink-0">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-colors"
          >
            Fechar
          </button>
          <button
            onClick={onClose}
            className="mt-2 w-full text-center text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            Agora não
          </button>
        </div>
      </div>
    </div>
  );
}