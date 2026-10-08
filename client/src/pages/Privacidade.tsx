import React from "react";
import { Link } from "wouter";
import { ShieldCheck, ArrowLeft, Github } from "lucide-react";

const SFCyber = () => (
  <span className="inline-flex items-center gap-1 align-middle text-cyan-400 font-bold animate-logo-text-pulse whitespace-nowrap">
    <ShieldCheck className="w-4 h-4" />
    SF Cyber
  </span>
);

const NeonWhite = ({ children }: { children: React.ReactNode }) => (
  <span className="text-white font-semibold animate-hero-white-pulse">{children}</span>
);

const GaLink = () => (
  <a
    href="https://tools.google.com/dlpage/gaoptout"
    target="_blank"
    rel="noopener noreferrer"
    title="Desativar a coleta pelo Google Analytics"
    className="text-white font-semibold animate-hero-white-pulse hover:text-cyan-200 transition-colors"
  >
    Google
  </a>
);

const secoes: { titulo: string; texto: React.ReactNode; itens?: React.ReactNode[]; extra?: React.ReactNode }[] = [
  {
    titulo: "1. Quem é o controlador dos seus dados",
    texto: (
      <>
        Este site é mantido pela <SFCyber />{" "}
        <span className="text-white font-semibold animate-hero-white-pulse">Academia Digital</span>,
        projeto de{" "}
        <a
          href="https://github.com/sandronsk1977-creator"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub: sandronsk1977-creator"
          className="inline-flex items-center gap-1 align-middle text-cyan-400 font-bold animate-logo-text-pulse hover:text-cyan-300 transition-colors whitespace-nowrap"
        >
          <Github className="w-4 h-4" />
          SandroNSK1977
        </a>
        , com sede em Goiânia, Goiás, Brasil. Para qualquer questão sobre privacidade e dados
        pessoais, fale com a gente pelos canais indicados no fim desta política.
      </>
    ),
  },
  {
    titulo: "2. Dados que coletamos",
    texto:
      "Coletamos o mínimo necessário para o site funcionar:",
    itens: [
      "Nome do aluno: você digita voluntariamente no início de cada laboratório, apenas para emitir o seu certificado de conclusão. Ele fica salvo apenas no seu próprio navegador (localStorage), não em um servidor nosso.",
      "Endereço de e-mail: só se você se cadastrar na lista de espera do pré-lançamento ou usar o formulário de contato. É usado para avisar sobre a abertura da plataforma.",
      <>
        Dados de navegação: métricas anônimas de acesso e uso (páginas visitadas, origem do acesso,
        tipo de dispositivo) coletadas pelo <NeonWhite>Google Analytics 4</NeonWhite>.
      </>,
      "Progresso do laboratório: nível concluído, pontuação e preferências, salvos no seu navegador para você continuar de onde parou.",
    ],
  },
  {
    titulo: "3. Por que usamos os dados",
    texto:
      "Usamos seus dados exclusivamente para: emitir e exibir o seu certificado de conclusão; enviar avisos sobre a abertura da plataforma e bônus do pré-lançamento; entender o uso do site para melhorar os laboratórios; e cumprir obrigações legais, quando aplicável.",
    extra:
      "Não vendemos, alugamos nem cedemos seus dados pessoais a terceiros para fins publicitários.",
  },
  {
    titulo: "4. Onde os dados ficam",
    texto: (
      <>
        O nome que você digita no laboratório e o seu progresso ficam armazenados no localStorage do
        seu navegador, ou seja, no seu próprio dispositivo. Não enviamos essa informação para os
        nossos servidores. Já o e-mail da lista de espera é armazenado no serviço que hospeda o site,
        assim como as métricas de navegação, processadas pelo <NeonWhite>Google Analytics 4</NeonWhite>.
      </>
    ),
  },
  {
    titulo: "5. Cookies e tecnologias de rastreamento",
    texto: (
      <>
        Utilizamos cookies apenas do <NeonWhite>Google Analytics 4</NeonWhite> para medir o uso do
        site de forma agregada. Você pode desativá-los nas configurações do seu navegador ou usar o
        painel de privacidade do <GaLink />, e a navegação continua funcionando normalmente.
      </>
    ),
  },
  {
    titulo: "6. Compartilhamento",
    texto: (
      <>
        Seus dados podem ser processados por fornecedores de infraestrutura que hospedam o site e
        pelo <NeonWhite>Google (Analytics 4)</NeonWhite>. Esses fornecedores agem como operadores,
        tratando os dados conforme as nossas instruções e as políticas de privacidade deles. Não há
        compartilhamento com redes sociais nem com bases de terceiros.
      </>
    ),
  },
  {
    titulo: "7. Retenção",
    texto: (
      <>
        Nome e progresso do laboratório permanecem no seu navegador até você limpar os dados do site.
        Os e-mails da lista de espera são mantidos enquanto a lista estiver ativa ou até você solicitar
        a remoção. As métricas agregadas de navegação podem ser mantidas por até 14 meses, conforme a
        configuração padrão do <NeonWhite>Google Analytics 4</NeonWhite>.
      </>
    ),
  },
  {
    titulo: "8. Seus direitos como titular (Lei nº 13.709/2018, LGPD)",
    texto:
      "Você pode, a qualquer momento e gratuitamente, solicitar: confirmação da existência de tratamento; acesso aos seus dados; correção de dados incompletos ou desatualizados; anonimização, bloqueio ou eliminação de dados desnecessários; portabilidade; informação sobre compartilhamentos; e revogação do consentimento. Basta entrar em contato pelos canais abaixo. Respondemos em prazo razoável, conforme a legislação.",
  },
  {
    titulo: "9. Segurança",
    texto:
      "Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados contra acesso não autorizado, perda ou alteração, como o uso de conexão criptografada (HTTPS) em todas as páginas e a escolha de não armazenar o nome do aluno em nossos servidores.",
  },
  {
    titulo: "10. Sobre o certificado de conclusão",
    texto:
      "O certificado é um documento de conclusão de curso livre, emitido no seu navegador ao final dos níveis do laboratório. Ele comprova a conclusão das atividades práticas por você realizadas e não tem valor acadêmico oficial.",
  },
  {
    titulo: "11. Alterações desta política",
    texto:
      "Podemos atualizar esta política para refletir mudanças no site ou na legislação. A data da última atualização é sempre indicada no topo desta página.",
  },
  {
    titulo: "12. Contato",
    texto:
      "Dúvidas, solicitações de titularidade ou pedidos de exclusão de dados: fale conosco pelos canais de contato do portal (WhatsApp e redes sociais).",
  },
];

export default function Privacidade() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans">
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao portal
          </Link>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            Política de Privacidade
          </span>
        </div>
      </header>

      <main className="flex-1 container py-14">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Política de Privacidade
          </h1>
          <p className="text-sm text-slate-500 mb-2">Última atualização: 30 de setembro de 2026</p>
          <p className="text-slate-400 text-base mb-10 leading-relaxed">
            Nesta política explicamos, de forma simples e transparente, quais dados coletamos ao usar o
            portal da <SFCyber /> e como cuidamos deles. A ideia é que você possa usar os
            laboratórios com tranquilidade, inclusive sem se preocupar em informar o seu nome.
          </p>

          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 px-5 py-4 mb-10">
            <p className="text-sm text-cyan-100 leading-relaxed">
              <strong className="text-cyan-300">Em resumo:</strong> o nome que você digita no
              laboratório fica somente no seu navegador, não é enviado para os nossos servidores e
              não é compartilhado com ninguém.
            </p>
          </div>

          <div className="space-y-9">
            {secoes.map((s) => (
              <section key={s.titulo}>
                <h2 className="text-xl font-extrabold text-white mb-3">{s.titulo}</h2>
                <p className="text-slate-400 text-sm leading-relaxed">{s.texto}</p>
                {s.itens && (
                  <ul className="mt-3 space-y-2">
                    {s.itens.map((i, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {s.extra && <p className="mt-3 text-sm text-slate-400 leading-relaxed">{s.extra}</p>}
              </section>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-500 leading-relaxed">
              Autoridade Nacional de Proteção de Dados (ANPD):{" "}
              <a
                href="https://www.gov.br/anpd/pt-br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                gov.br/anpd
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
