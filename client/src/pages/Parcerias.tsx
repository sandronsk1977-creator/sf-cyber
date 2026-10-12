import React from "react";
import { Link } from "wouter";
import { ArrowLeft, Handshake, ShieldCheck, Check, Award, Users, FileText, MessageCircle, Github, Linkedin } from "lucide-react";

const WHATSAPP_NUMBER = "5562999693469";
const MENSAGEM_PARCERIA =
  "Olá! Vim pelo site da SF Cyber Academy. Gostaria de conversar sobre PARCERIA e PATROCÍNIO. " +
  "Meu interesse é: ( ) patrocinar um laboratório; ( ) parceria em conteúdo técnico; " +
  "( ) apoio para escolas, técnicos e alunos. Podemos falar?";

const faixas = [
  {
    nome: "PARCEIRO",
    preco: "a partir de R$ 490/mês",
    icone: Handshake,
    cor: "#22d3ee",
    itens: [
      "Selo de parceiro no rodapé do portal, com link para o seu site",
      "Menção na página de parcerias e nos materiais de divulgação",
      "Relatório mensal agregado: alunos ativos, conclusões e aproveitamento médio",
      "Convite para a lista de espera do pré-lançamento",
    ],
  },
  {
    nome: "PATROCINADOR",
    preco: "a partir de R$ 1.490/mês",
    icone: Award,
    cor: "#3b82f6",
    destaque: true,
    itens: [
      "Tudo da faixa Parceiro",
      "Selo “Laboratório patrocinado” no laboratório escolhido",
      "Menção no certificado de conclusão dos alunos que concluem o laboratório",
      "Um workshop ao vivo por ano para alunos ou equipes",
    ],
  },
  {
    nome: "PARCEIRO MASTER",
    preco: "a partir de R$ 3.900/mês",
    icone: ShieldCheck,
    cor: "#8b5cf6",
    itens: [
      "Tudo da faixa Patrocinador",
      "Aula inaugural ao vivo no laboratório patrocinado",
      "Destaque na página inicial do portal",
      "Acesso antecipado aos novos laboratórios",
    ],
  },
];

const outrasFormas = [
  {
    titulo: "Conteúdo técnico",
    desc: "Sua ferramenta vira cenário de um nível do laboratório, com menção para o seu produto dentro da prática.",
  },
  {
    titulo: "Convênio com escolas",
    desc: "Acesso facilitado para alunos de cursos técnicos, escolas de referência e instituições parceiras.",
  },
  {
    titulo: "Infraestrutura e créditos",
    desc: "Servidores, créditos de nuvem ou equipamentos cedidos em troca de selo de parceiro.",
  },
  {
    titulo: "Indicação e co-marketing",
    desc: "Divulgação conjunta nas redes e nos eventos do setor que você já participa.",
  },
];

const passos = [
  {
    numero: "1",
    titulo: "Você escolhe a faixa",
    desc: "Define o valor e o que a sua marca recebe: selo no site, selo no laboratório, menção no certificado e relatório de uso.",
  },
  {
    numero: "2",
    titulo: "A parceria entra no ar",
    desc: "O selo e a menção aparecem no portal, no laboratório patrocinado e no certificado de conclusão dos alunos, sempre com link para o seu site.",
  },
  {
    numero: "3",
    titulo: "Você acompanha o resultado",
    desc: "Recebe um relatório mensal agregado, com alunos ativos, conclusões e aproveitamento médio por laboratório. Sem nenhum dado pessoal de aluno.",
  },
];

const faq = [
  {
    p: "A menção aparece no certificado?",
    r: "Sim. Na faixa Patrocinador e Master, a sua empresa aparece no certificado de conclusão dos alunos que concluem o laboratório patrocinado.",
  },
  {
    p: "Posso cancelar quando quiser?",
    r: "Sim, sem fidelidade. Com 30 dias de antecedência, o selo sai no ciclo seguinte.",
  },
  {
    p: "Os dados dos alunos são compartilhados?",
    r: "Não. O relatório é agregado e nenhum dado pessoal de aluno é compartilhado, conforme a nossa política de privacidade.",
  },
  {
    p: "Existe exclusividade?",
    r: "Só na faixa Master, e apenas um patrocinador por laboratório.",
  },
];

export default function Parcerias() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans">
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao portal
          </Link>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full animate-neon-badge">
            <Handshake className="w-3.5 h-3.5" />
            Parcerias e Patrocínio
          </span>
        </div>
      </header>

      <main className="flex-1 container py-14">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
              Parcerias e Patrocínio
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-3 mb-5">
              Sua marca nos laboratórios e nos certificados
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              A SF Cyber Academy forma quem cuida de redes e cibersegurança na prática. Empresas,
              escolas técnicas, provedores e fabricantes apoiam esse trabalho e aparecem para
              quem está aprendendo: selo no portal, selo no laboratório e menção no certificado
              de conclusão.
            </p>
          </div>

          {/* Como funciona */}
          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-10">
              Como funciona
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {passos.map((p) => (
                <div
                  key={p.numero}
                  style={{ "--neon": "#22d3ee" } as React.CSSProperties}
                  className="sf-neon-card relative rounded-3xl bg-slate-900/60 border border-cyan-500/30 p-6 pt-8"
                >
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-cyan-500 text-slate-950 font-mono font-bold flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    {p.numero}
                  </span>
                  <h3 className="font-extrabold text-lg text-white font-mono mb-2">{p.titulo}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Faixas */}
          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-4">
              Faixas de parceria
            </h2>
            <p className="text-center text-slate-400 text-sm mb-10">
              Valores de referência, ajustados conforme o escopo e o período contratado.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {faixas.map((f) => {
                const Icone = f.icone;
                return (
                  <div
                    key={f.nome}
                    style={{ "--neon": f.cor } as React.CSSProperties}
                    className={`sf-neon-card relative rounded-3xl p-6 pt-8 flex flex-col bg-slate-900/60 border ${
                      f.destaque ? "border-blue-500/60" : "border-slate-800"
                    }`}
                  >
                    {f.destaque && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                        Mais procurado
                      </span>
                    )}
                    <div className="w-12 h-12 mb-4 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${f.cor}22`, color: f.cor }}>
                      <Icone className="w-6 h-6" />
                    </div>
                    <h3 className="font-extrabold text-lg font-mono text-white mb-1">{f.nome}</h3>
                    <p className="text-sm font-bold mb-5" style={{ color: f.cor }}>{f.preco}</p>
                    <ul className="space-y-2.5 mb-6">
                      {f.itens.map((i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-slate-300 leading-relaxed">
                          <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: f.cor }} />
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Outras formas */}
          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-4">
              Outras formas de apoiar
            </h2>
            <p className="text-center text-slate-400 text-sm mb-10">
              Sem custo financeiro, para quem prefere apoiar com estrutura, conteúdo ou
              indicação.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {outrasFormas.map((o) => (
                <div key={o.titulo} className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
                  <h3 className="font-bold text-white mb-2">{o.titulo}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{o.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-10">
              Perguntas frequentes
            </h2>
            <div className="space-y-4">
              {faq.map((f) => (
                <div key={f.p} className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
                  <h3 className="font-bold text-white mb-2">{f.p}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.r}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section id="contato-parceria">
            <div
              style={{ "--neon": "#22d3ee" } as React.CSSProperties}
              className="sf-neon-card rounded-3xl bg-slate-900/60 border border-cyan-500/40 px-6 py-12 sm:px-12 text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6">
                <MessageCircle className="w-4 h-4" />
                Fale com o criador
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Quer apoiar a SF Cyber Academy?
              </h2>
              <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Chame no WhatsApp contando o que você busca: patrocinar um laboratório, apoiar
                com conteúdo ou convênio com escolas. Você recebe a proposta completa em 1 dia útil.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MENSAGEM_PARCERIA)}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Falar no WhatsApp sobre parceria e patrocínio"
                aria-label="Falar no WhatsApp sobre parceria e patrocínio com a SF Cyber Academy"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-xl shadow-cyan-500/25 transition-all hover:scale-[1.02] text-base"
              >
                <MessageCircle className="w-5 h-5" />
                Quero ser parceiro
              </a>
              <p className="text-xs text-slate-500 mt-4">Resposta em até 1 dia útil. Sem compromisso.</p>

              <div className="mt-10 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
                <a
                  href="https://www.linkedin.com/in/sandro-ferreira-8725b9443/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/sandronsk1977-creator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <span className="inline-flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  Resposta direta do criador
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FileText className="w-4 h-4" />
                  Proposta em 1 página
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}