# 🛡️ SF Cyber Academia Digital

Portal de pré-lançamento da **SF Cyber** Laboratórios de Redes e Cibersegurança por meio de laboratórios virtuais, curadoria inteligente "SF Bot" que acompanha e orienta a jornada do aluno.

 👨🏻‍💻 [sfcyber.projetosdisruptivos.com.br](https://sfcyber.projetosdisruptivos.com.br)

## Início rápido

Pré-requisitos: Node.js 24+ e pnpm 10+.

## Scripts

| Comando         | Descrição                                    |
| --------------- | -------------------------------------------- |
| `pnpm dev`      | Servidor de desenvolvimento (Vite, porta 3000) |
| `pnpm build`    | Build de produção (saída em `dist/`)          |
| `pnpm check`    | Typecheck com `tsc --noEmit`                   |
| `pnpm preview`  | Pré-visualização do build                     |

## Funcionalidades

- Landing page em tema dark com animação de "destrinchamento" de título e trilha de contatos flutuante (LinkedIn, Projetos Disruptivos e WhatsApp) com pulsação.
- Todos os simuladores seguem o mesmo fluxo: **aprendizado -> prática -> avaliação -> aprovação -> certificado de conclusão**, com 8 níveis e prova final de 8 perguntas (aprovação exige 50%+). Após realizar a avaliação e atingir o critério de aprovação, você recebe seu certificado de conclusão. O progresso fica salvo no `localStorage`.
- **Nome obrigatório**: os cinco laboratórios exigem nome e sobrenome válidos (só letras, mínimo de 2 letras por parte e 6 caracteres no total, sem números, e-mails ou palavras genéricas) para entrar e emitir o certificado.
- **Simulador de VLANs Switch Cisco** integrado em `/simulador-vlan` (VLANs, trunk/access, teste de ping e certificado).
- **Simulador de Segurança (Analista SOC | Hacker Ético)** em `/simulador-seguranca` (nmap, firewall ufw, logs, bloqueio de atacante e hardening de SSH).
- **Simulador de Segurança Web (SQL Injection | XSS)** em `/simulador-web` (descoberta, SQLi, login bypass, UNION SELECT, XSS refletido e armazenado e correção da aplicação).
- **Simulador de Servidor DNS (Resolução | AXFR | DNSSEC)** em `/simulador-dns` (registros A/MX/NS, subdomínio exposto, transferência de zona, envenenamento de cache e proteção com AXFR restrito + DNSSEC).
- **Simulador de Pentest em E-commerce (IDOR | 2FA | Segredos)** em `/simulador-ecommerce` (API REST de loja fictícia: recon de endpoints, IDOR/BOLA em detalhe de pedido, enumeração em massa de clientes, bypass de segundo fator, segredo administrativo no front-end, escalonamento por mass assignment, laudo com CVSS/OWASP e correção da aplicação). Inclui guia IDOR + 2FA em três abas e aba de curadoria com escopo ético e divulgação responsável. Progresso em `localStorage["sfcyber-ecommerce-v1"]`.
- **SF Bot**: assistente robô nos cinco simuladores para guiar o aluno etapa por etapa.
- Cards de áreas da plataforma ("Escolha sua área e comece agora") com acesso direto aos cinco simuladores.
- Planos de pré-lançamento: **FREE** (grátis) e **MEMBROS PARCEIROS** 
- Modal de escolha de simulador ao clicar em "Começar Grátis" (plano FREE).
- Modal de pré-lançamento em Acesso/Registro e nos CTAs dos planos pagos, com captura de e-mail (visual).
- Links diretos para as rotas dos simuladores funcionam no GitHub Pages via fallback SPA (`404.html` + restauração de rota com `sessionStorage`).
- Seção **Patrocínio · Parcerias** para empresas, consultores, professores, escolas técnicas e IES, com contato via WhatsApp.

## Tecnologias

- Vite + React + TypeScript
- Tailwind CSS v4 + shadcn/ui (Radix)
- wouter (roteamento SPA)
- sonner (toasts)
- Express (servidor estático opcional, `pnpm start`)

## Testes

Os cinco simuladores possuem testes automatizados de fluxo completo (8 níveis -> prova final -> certificado), executados com Node no jogo emulado:

```text
C:\Users\Sandro\AppData\Local\Temp\opencode\ecom\soc_test.cjs    (fluxo SOC)
C:\Users\Sandro\AppData\Local\Temp\opencode\ecom\web_test.cjs    (fluxo Segurança Web)
C:\Users\Sandro\AppData\Local\Temp\opencode\ecom\dns_test.cjs    (fluxo DNS)
C:\Users\Sandro\AppData\Local\Temp\opencode\ecom\vlan_test.cjs   (fluxo VLAN, inclui XSS e pay-once)
C:\Users\Sandro\AppData\Local\Temp\opencode\ecom\test.cjs        (fluxo Pentest E-commerce, inclui guia IDOR/2FA)
```

Os testes garantem score determinístico (400 nos níveis + 800 na prova = 1200 nos simuladores SOC/Web/DNS/Ecommerce; 580 + 160 = 740 no VLAN), que o certificado só sai após aprovação na prova e que payloads XSS não executam no terminal do VLAN. Validação em browser real é feita com Chrome headless via CDP contra o `dist/`.

## Deploy

O deploy é automático via **GitHub Actions** (`.github/../..`) a cada push para `main`:

Domínio customizado: `sfcyber.projetosdisruptivos.com.br` (via `CNAME` no repositório).

## Licença

Privado - todos os direitos reservados.
