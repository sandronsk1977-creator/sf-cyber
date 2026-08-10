import React from "react";
import { Compass, FlaskConical, Target, Bot, Settings, Coins, Award, Users } from "lucide-react";

const DIFFERENTIALS = [
  {
    icon: Compass,
    title: "Trilhas estruturadas",
    description: "Caminhos organizados por nível e objetivo. Você sabe exatamente o que estudar hoje e o que vem depois, sem improvisar.",
  },
  {
    icon: FlaskConical,
    title: "+150 laboratórios práticos",
    description: "Ambientes reais onde você executa ataques, configura defesas e aplica o aprendizado, indo muito além da teoria.",
  },
  {
    icon: Target,
    title: "Simulados de exame",
    description: "Preparação baseada em experiências reais de quem já foi aprovado nas principais certificações do mercado.",
  },
  {
    icon: Bot,
    title: "SF Cyber AI",
    description: "Assistente de inteligência artificial especializado em cibersegurança, integrado diretamente para tirar dúvidas em tempo real.",
  },
  {
    icon: Settings,
    title: "SF Cyber Code",
    description: "Ferramentas próprias para auditorias de segurança reais prontas para uso dentro da plataforma.",
  },
  {
    icon: Coins,
    title: "SF Tokens: ganhe para estudar",
    description: "Cada avanço gera tokens internos. Troque por produtos, mentorias e benefícios exclusivos.",
  },
  {
    icon: Award,
    title: "Certificados verificáveis",
    description: "Cada curso concluído gera um certificado oficial com QR code de validação para seu currículo e LinkedIn.",
  },
  {
    icon: Users,
    title: "Comunidade ativa",
    description: "Conecte-se com profissionais e estudantes do setor. Networking genuíno e suporte de quem já passou pelo mesmo estágio.",
  },
];

export function DifferenceSection() {
  return (
    <section className="py-20 bg-slate-950 text-slate-100">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
            Por que a SF Cyber é diferente
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
            Não somos mais um curso genérico. Aqui é prática real.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Cada componente foi desenhado para que você avance, pratique e se certifique com conhecimento fundamentado na realidade do mercado.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS.map((d, idx) => {
            const Icon = d.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{d.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{d.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
