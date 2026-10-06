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
- **Nome obrigatório**: os oito laboratórios exigem nome e sobrenome válidos (só letras, mínimo de 2 letras por parte e 6 caracteres no total, sem números, e-mails ou palavras genéricas) para entrar e emitir o certificado.
- **Simulador de VLANs Switch Cisco** integrado em `/simulador-vlan` (VLANs, trunk/access, teste de ping e certificado).
- **Simulador de Segurança (Analista SOC | Hacker Ético)** em `/simulador-seguranca` (nmap, firewall ufw, logs, bloqueio de atacante e hardening de SSH).
- **Simulador de Segurança Web (SQL Injection | XSS)** em `/simulador-web` (descoberta, SQLi, login bypass, UNION SELECT, XSS refletido e armazenado e correção da aplicação).
- **Simulador de Servidor DNS (Resolução | AXFR | DNSSEC)** em `/simulador-dns` (registros A/MX/NS, subdomínio exposto, transferência de zona, envenenamento de cache e proteção com AXFR restrito + DNSSEC).
- **Simulador de Pentest em E-commerce (IDOR | 2FA | Segredos)** em `/simulador-ecommerce` (API REST de loja fictícia: recon de endpoints, IDOR/BOLA em detalhe de pedido, enumeração em massa de clientes, bypass de segundo fator, segredo administrativo no front-end, escalonamento por mass assignment, laudo com CVSS/OWASP e correção da aplicação). Inclui guia IDOR + 2FA em três abas e aba de curadoria com escopo ético e divulgação responsável. Progresso em `localStorage["sfcyber-ecommerce-v1"]`.
- **Simulador de Endereçamento IP e Sub-redes (IPv4 | IPv6 | DHCP)** em `/ip-subnets` (leitura de interface, cálculo de sub-redes /24 e /26, faixa privada RFC 1918, IP estático, escopo DHCP, prefixo IPv6 /64 e correção de máscara, IP duplicado e rota IPv6). Progresso em `localStorage["sfcyber-ip-v1"]`.
- **Simulador de Ferramentas de Diagnóstico (ping | traceroute | nslookup | netstat)** em `/ferramentas` (medição de perda, salto que falha, caminho com traceroute, resolução de nome, divergência entre DNS local e público, portas em escuta e sockets acumulados, diagnóstico por camadas). Progresso em `localStorage["sfcyber-ferramentas-v1"]`.
- **Simulador de Ataques de Camada 2 (ARP Spoofing | DHCP | MitM)** em `/camada2` (tabela ARP, reconhecimento passivo, ARP Spoofing, MitM com repasse, rogue DHCP server, captura de tráfego em texto claro e ativação de Dynamic ARP Inspection, DHCP Snooping e Port Security). Ambiente 100% simulado e isolado, com curadoria sobre escopo legal e divulgação responsável. Progresso em `localStorage["sfcyber-camada2-v1"]`.
- **LabKit** (`client/public/labkit/labkit.js` e `labkit.css`): motor compartilhado por `ip-subnets`, `ferramentas` e `camada2`. Cada laboratório declara só conteúdo (níveis, teoria, quiz, comandos, cena do canvas) e o motor cuida de estado, terminal, SF Bot, pontuação, prova final, certificado, persistência e validação de nome obrigatório.
- **SF Bot**: assistente robô nos oito laboratórios para guiar o aluno etapa por etapa.
- Cards de áreas da plataforma ("Escolha sua área e comece agora") com acesso direto aos oito laboratórios.
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

Os oito laboratórios possuem testes automatizados de fluxo completo (8 níveis -> prova final -> certificado), executados com Node no jogo emulado:

```text
C:\Users\Sandro\AppData\Local\Temp\opencode\ecom\soc_test.cjs            (fluxo SOC)
C:\Users\Sandro\AppData\Local\Temp\opencode\ecom\web_test.cjs            (fluxo Segurança Web)
C:\Users\Sandro\AppData\Local\Temp\opencode\ecom\dns_test.cjs            (fluxo DNS)
C:\Users\Sandro\AppData\Local\Temp\opencode\ecom\vlan_test.cjs           (fluxo VLAN, inclui XSS e pay-once)
C:\Users\Sandro\AppData\Local\Temp\opencode\ecom\test.cjs                (fluxo Pentest E-commerce, inclui guia IDOR/2FA)
C:\Users\Sandro\AppData\Local\Temp\opencode\ecom\labkit_flow_test.cjs     (motor LabKit, 24 checks por lab)
C:\Users\Sandro\AppData\Local\Temp\opencode\ecom\labkit_full_test.cjs     (LabKit: 8 níveis -> prova -> certificado)
```

Os testes garantem score determinístico (400 nos níveis + 800 na prova = 1200 nos simuladores SOC/Web/DNS/Ecommerce/LabKit; 580 + 160 = 740 no VLAN), que o certificado só sai após aprovação na prova e que payloads XSS não executam no terminal do VLAN. Validação em browser real é feita com Chrome headless via CDP contra o `dist/`.

## Deploy

O deploy é automático via **GitHub Actions** (`.github/../..`) a cada push para `main`:

Domínio customizado: `sfcyber.projetosdisruptivos.com.br` (via `CNAME` no repositório).

## Licença

Privado - todos os direitos reservados.
