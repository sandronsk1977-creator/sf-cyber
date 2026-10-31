import React from "react";
import { Link } from "wouter";
import {
  ShieldCheck,
  ArrowLeft,
  User,
  BookOpen,
  Target,
  Monitor,
  Github,
  Linkedin,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

const SFCyber = () => (
  <span className="inline-flex items-center gap-1 align-middle text-cyan-400 font-bold animate-logo-text-pulse whitespace-nowrap">
    <ShieldCheck className="w-4 h-4" />
    SF Cyber
  </span>
);

const stack = [
  "Zabbix",
  "Grafana",
  "GLPI",
  "Redes",
  "Defesa Cibernética",
  "FortiGate",
  "Linux",
  "Windows Server",
  "Azure",
  "Python",
  "PowerShell",
  "Gestão de Projetos",
];

const pilares = [
  {
    titulo: "Aprender fazendo",
    desc: "Simulações de ambientes reais de redes, servidores e segurança, em que cada decisão tem consequência e cada erro ensina.",
  },
  {
    titulo: "Progressão em 8 níveis",
    desc: "Cada laboratório avança do básico ao avançado, com prática guiada pelo SF Bot, avaliação e prova final.",
  },
  {
    titulo: "Certificado de conclusão",
    desc: "Ao concluir os níveis e ser aprovado na avaliação, você recebe um certificado de conclusão das atividades práticas.",
  },
  {
    titulo: "Acesso gratuito",
    desc: "Os laboratórios são gratuitos no modelo atualmente adotado, para ampliar o acesso ao conhecimento técnico.",
  },
];

const estudando = [
  "Python para automação, scripts e IA aplicada",
  "Automação com IA em rotinas de TI",
  "Cybersecurity e defesa da informação",
  "Cloud computing com Azure, identidade e serviços",
  "Observabilidade, métricas e logs",
  "DevOps e automação de infraestrutura",
  "Gestão de projetos, escopo e entrega",
];

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans">
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao portal
          </Link>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
            <User className="w-3.5 h-3.5" />
            Sobre
          </span>
        </div>
      </header>

      <main className="flex-1 container py-14">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Sobre a SF Cyber Academy
          </h1>
          <p className="text-sm text-slate-500 mb-2">
            Projeto Independente de Educação Tecnológica • Goiânia - GO
          </p>
          <p className="text-slate-400 text-base mb-10 leading-relaxed">
            A <SFCyber /> Academy nasceu da prática de quem trabalha todos os dias com
            infraestrutura, redes e cibersegurança e acredita que o conhecimento técnico se
            consolida quando é colocado em prática.
          </p>

          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 px-5 py-4 mb-10">
            <p className="text-sm text-cyan-100 leading-relaxed">
              <strong className="text-cyan-300">Em resumo</strong>, um projeto particular e
              independente, criado por um profissional de TI com mais de 20 anos de estrada, que
              oferece laboratórios gratuitos para quem quer aprender Redes e Cibersegurança na
              prática e continuar evoluindo.
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-extrabold text-white mb-3 flex items-center gap-2">
                <User className="w-5 h-5 text-cyan-400" />
                Backstage?
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Eu <span className="text-white font-semibold">Sandro Ferreira</span>, profissional
                de Tecnologia da Informação há mais de 20 anos, com atuação em ITSM,
                infraestrutura, redes, servidores, monitoramento, cibersegurança e automação.
                Transformo as necessidades do dia a dia da TI em soluções práticas, ferramentas e
                projetos que geram resultados reais.
              </p>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                A <SFCyber /> Academy nasceu de uma inquietação antiga. Nem sempre <strong> "Nós" </strong> os formandos saimos
                da faculdade prontos para o mercado de trabalho. Por isso idealizei um projeto que
                pudesse potencializar o conhecimento de forma prática, principalmente para alunos
                de cursos e recém-formados na área de tecnologia, que precisam transformar teoria
                em experiência antes de encarar o dia a dia profissional.
              </p>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                É dessa vivência, entre a operação e a visão de ensino prático, que nasce a{" "}
                <SFCyber /> Academy, um lugar para estudar sem medo de errar, porque o erro faz
                parte do aprendizado.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-slate-900/60 border border-slate-800 px-4 py-3 text-center">
                  <p className="text-xl font-extrabold text-cyan-400">20+</p>
                  <p className="text-xs text-slate-500 leading-snug">anos em TI</p>
                </div>
                <div className="rounded-2xl bg-slate-900/60 border border-slate-800 px-4 py-3 text-center">
                  <p className="text-xl font-extrabold text-cyan-400">4</p>
                  <p className="text-xs text-slate-500 leading-snug">laboratórios</p>
                </div>
                <div className="rounded-2xl bg-slate-900/60 border border-slate-800 px-4 py-3 text-center">
                  <p className="text-xl font-extrabold text-cyan-400">8</p>
                  <p className="text-xs text-slate-500 leading-snug">níveis por laboratório</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-slate-900/60 border border-slate-800 p-5">
                <h3 className="text-sm font-extrabold text-white mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  Formação
                </h3>
                <ul className="space-y-2 text-sm text-slate-400 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-cyan-400 mt-0.5">•</span>
                    <span>Graduado em Defesa Cibernética</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400 mt-0.5">•</span>
                    <span>Pós-graduado em Gestão de Projetos</span>
                  </li>
                </ul>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-semibold text-slate-300 bg-slate-900/60 border border-slate-800 px-3 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/sf-cyber-academia-digital-8725b9443/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1.5 rounded-full hover:bg-cyan-500/20 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/sandronsk1977-creator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1.5 rounded-full hover:bg-cyan-500/20 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-white mb-3 flex items-center gap-2">
                <Monitor className="w-5 h-5 text-cyan-400" />
                O projeto
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                A <SFCyber /> Academy é uma academia digital de Redes e Cibersegurança voltada
                para Cybersecurity e Redes, com uma plataforma de simulação prática. Em vez de só
                ler teoria, você opera ambientes que reproduzem o dia a dia da profissão.
              </p>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                São quatro laboratórios, com switch Cisco para criação de VLANs, análise SOC,
                segurança web com SQL Injection e XSS, e servidor DNS. Cada simulador tem 8 níveis,
                avaliação final e certificado de conclusão.
              </p>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                O projeto é particular e independente, idealizado e administrado por pessoa física,
                sem finalidade comercial no modelo atualmente adotado.{" "}
                <Link
                  href="/independencia"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                >
                  Veja a declaração de Independência Institucional
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-white mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                Educação contínua
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Tecnologia não se aprende de uma vez. Ferramentas mudam, ameaças evoluem e a
                prática precisa ser constante. Por isso a proposta é oferecer um caminho de
                aprendizagem contínua, em que você volta quantas vezes precisar, refaz níveis,
                testa outros caminhos e consolida o que aprendeu.
              </p>
              <ul className="space-y-2">
                {pilares.map((p) => (
                  <li key={p.titulo} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                    <span className="text-cyan-400 mt-0.5">•</span>
                    <span>
                      <span className="text-white font-semibold">{p.titulo}.</span> {p.desc}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl bg-slate-900/60 border border-slate-800 p-5">
                <h3 className="text-sm font-extrabold text-white mb-3">
                  O que estou estudando e praticando
                </h3>
                <p className="text-xs text-slate-500 mb-3">
                  Educação contínua também é sobre manter o estudo em movimento. Hoje meu foco está
                  nestas frentes.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-400 leading-relaxed">
                  {estudando.map((e) => (
                    <li key={e} className="flex gap-2">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-white mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-400" />
                Para quem é
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Para quem está começando e quer entender como as coisas funcionam na prática, para
                quem já trabalha em TI e precisa reforçar redes e segurança, e para estudantes e
                profissionais que buscam aprendizado contínuo fora da sala de aula. Não é preciso
                conhecimento avançado para começar, pois cada nível apresenta o conceito e propõe a
                prática.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Os laboratórios são gratuitos no modelo atualmente adotado. O certificado comprova a
              conclusão das atividades práticas realizadas e não tem valor acadêmico oficial.
            </p>
            <Link
              href="/parcerias"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Conheça as formas de apoiar o projeto
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
