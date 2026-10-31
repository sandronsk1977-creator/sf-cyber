import React from "react";
import { Link } from "wouter";
import { ArrowLeft, Handshake, ShieldCheck, Check, Award, Users, FileText, MessageCircle, Github, Linkedin } from "lucide-react";

const WHATSAPP_NUMBER = "5562999693469";
const MENSAGEM_PARCERIA =
  "Olá! Vim pelo site da SF Cyber Academy e gostaria de apresentar uma proposta de colaboração. " +
  "Tenho interesse em uma das seguintes modalidades: apoio técnico, conteúdo educacional, " +
  "infraestrutura, equipamentos, parceria com escolas ou patrocínio de laboratório. Podemos conversar?";

const faixas = [
  {
    nome: "PARCEIRO",
    preco: "Condições a definir",
    icone: Handshake,
    cor: "#22d3ee",
    itens: [
      "Reconhecimento como apoiador no portal, mediante autorização",
      "Link para o site ou canal institucional do apoiador",
      "Menção na página de parcerias e nos materiais de divulgação acordados",
      "Relatório estatístico agregado de utilização dos laboratórios, quando disponível",
      "Possibilidade de participação em iniciativas educacionais",
    ],
  },
  {
    nome: "PATROCINADOR",
    preco: "Condições a definir",
    icone: Award,
    cor: "#3b82f6",
    destaque: true,
    itens: [
      "Benefícios da modalidade Parceiro",
      "Identificação de laboratório apoiado, conforme acordo",
      "Menção institucional nos materiais de conclusão, quando aplicável e previamente acordada",
      "Divulgação da contribuição realizada",
    ],
  },
  {
    nome: "APOIADOR MASTER",
    preco: "Condições a definir",
    icone: ShieldCheck,
    cor: "#8b5cf6",
    itens: [
      "Benefícios da modalidade Patrocinador",
      "Possibilidade de participação em atividade educacional de abertura",
      "Destaque institucional na página inicial, conforme acordo",
      "Possibilidade de conhecer antecipadamente novos laboratórios",
    ],
  },
];

const outrasFormas = [
  {
    titulo: "Conteúdo técnico",
    desc: "Colaboração na criação de conteúdos, materiais didáticos, demonstrações e experiências práticas relacionadas a produtos e tecnologias, contribuindo para a aprendizagem dos usuários.",
  },
  {
    titulo: "Colaboração com escolas",
    desc: "Propostas de colaboração educacional com escolas, instituições de ensino, estudantes e profissionais interessados em ampliar o acesso à aprendizagem prática em tecnologia.",
  },
  {
    titulo: "Infraestrutura e recursos tecnológicos",
    desc: "Apoio por meio de disponibilização ou doação de equipamentos, servidores, créditos de nuvem, ferramentas e outros recursos que possam contribuir para o desenvolvimento dos laboratórios.",
  },
  {
    titulo: "Divulgação e colaboração institucional",
    desc: "Possibilidades de divulgação conjunta, indicação de iniciativas educacionais e colaboração em eventos e atividades relacionadas à tecnologia, conforme as condições acordadas entre as partes.",
  },
];

const passos = [
  {
    numero: "1",
    titulo: "Apresente sua proposta",
    desc: "Você apresenta sua proposta de apoio, indicando os recursos, conteúdos, equipamentos ou modalidade de colaboração de seu interesse.",
  },
  {
    numero: "2",
    titulo: "Avaliação e alinhamento",
    desc: "A proposta é avaliada individualmente, considerando a finalidade educacional, a viabilidade técnica e as condições de colaboração.",
  },
  {
    numero: "3",
    titulo: "Acompanhamento dos resultados",
    desc: "Quando aplicável, o apoiador poderá receber informações estatísticas agregadas sobre a utilização dos laboratórios, sem exposição de dados pessoais dos alunos.",
  },
];

const faq = [
  {
    p: "A menção aparece no certificado?",
    r: "A menção institucional nos materiais de conclusão é prevista na modalidade Patrocinador, quando aplicável e previamente acordada entre as partes.",
  },
  {
    p: "Como são definidas as condições da colaboração?",
    r: "As condições são definidas individualmente, conforme a modalidade de apoio, o escopo e as possibilidades de cada proposta, e formalizadas no instrumento aplicável.",
  },
  {
    p: "Os dados dos alunos são compartilhados?",
    r: "Não. O relatório é agregado e nenhum dado pessoal de aluno é compartilhado, conforme a nossa política de privacidade.",
  },
  {
    p: "Existe exclusividade?",
    r: "A exclusividade pode ser avaliada caso a caso, conforme a modalidade e o escopo acordados entre as partes.",
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
            Parcerias e Apoio
          </span>
        </div>
      </header>

      <main className="flex-1 container py-14">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
              Parcerias e Apoio
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-3 mb-5">
              Parcerias e Apoio à Educação Tecnológica
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              A SF Cyber Academy é um projeto independente que democratiza o acesso ao
              conhecimento em Redes de Computadores e Cibersegurança. Estamos abertos ao diálogo
              com empresas, profissionais, escolas e instituições interessadas em apoiar
              iniciativas de educação tecnológica.
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
              Modalidades de apoio
            </h2>
            <p className="text-center text-slate-400 text-sm mb-10">
              Condições de colaboração definidas individualmente, conforme a modalidade de apoio,
              o escopo e as possibilidades de cada proposta.
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

            <p className="mt-8 text-center text-xs text-slate-500 leading-relaxed max-w-2xl mx-auto">
              As modalidades acima são propostas de colaboração, sujeitas a avaliação, negociação e
              formalização das condições aplicáveis. Nenhum benefício é garantido antes da
              formalização da respectiva colaboração.
            </p>
          </section>

          {/* Formas de apoio */}
          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-4">
              Formas de apoio
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
                Entre em contato para apresentar sua proposta de colaboração. Estamos abertos a
                iniciativas de apoio técnico, conteúdo educacional, infraestrutura, equipamentos e
                patrocínio de laboratórios.
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
                Quero apresentar uma proposta
              </a>
              <p className="text-xs text-slate-500 mt-4">Sem compromisso.</p>

              <div className="mt-10 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
                <a
                  href="https://www.linkedin.com/in/sf-cyber-academia-digital-8725b9443/"
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

          {/* Informações institucionais */}
          <section className="mt-16 pt-10 border-t border-slate-800">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
              Informações institucionais
            </h2>
            <div className="space-y-3 text-xs text-slate-500 leading-relaxed">
              <p>
                A SF Cyber Academy é uma iniciativa particular e independente de educação
                tecnológica, idealizada e administrada por pessoa física, atualmente sem CNPJ.
              </p>
              <p>
                Os laboratórios são disponibilizados gratuitamente aos usuários no modelo
                atualmente adotado.
              </p>
              <p>
                As modalidades de apoio e patrocínio apresentadas nesta página representam
                possibilidades de colaboração, sujeitas à avaliação, disponibilidade e formalização
                das condições aplicáveis.
              </p>
              <p>
                A eventual realização de atividades remuneradas, recebimento de patrocínios ou
                estabelecimento de parcerias será avaliada individualmente, observando as
                obrigações legais, fiscais e contratuais pertinentes.
              </p>
              <p>
                A SF Cyber Academy não possui vínculo institucional, comercial ou acadêmico com a
                universidade em que seu idealizador exerce atividade profissional, não
                representando essa instituição.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
