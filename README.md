# SF Cyber Academy

Portal de pré-lançamento da **SF Cyber** - formação prática em Redes e Cibersegurança (ofensiva e defensiva) por meio de simuladores, trilhas e certificações.

Site: [sfcyber.projetosdisruptivos.com.br](https://sfcyber.projetosdisruptivos.com.br)

## Início rápido

Pré-requisitos: Node.js 24+ e pnpm 10+.

```bash
pnpm install
pnpm dev
```

Abra http://localhost:3000

## Scripts

| Comando         | Descrição                               |
| --------------- | --------------------------------------- |
| `pnpm dev`      | Servidor de desenvolvimento (Vite).      |
| `pnpm build`    | Build de produção (saída em `dist/`)     |
| `pnpm check`    | Typecheck com `tsc --noEmit`             |
| `pnpm preview`  | Pré-visualização do build                |

## Funcionalidades

- Landing page em tema dark com animação de "destrinchamento" de título e trilha de contatos flutuante (LinkedIn, Projetos Disruptivos e WhatsApp) com pulsação.
- **Simulador de VLANs Switch Cisco** integrado em `/simulador-vlan` (8 níveis, testes de ping e certificado de conclusão).
- **Simulador de Segurança (Analista SOC | Hacker Ético)** em `/simulador-seguranca` (8 níveis: nmap, firewall ufw, logs, bloqueio de atacante e hardening de SSH; certificado de conclusão).
- **Simulador de Segurança Web (SQL Injection | XSS)** em `/simulador-web` (8 níveis: descoberta, SQLi, login bypass, UNION SELECT, XSS refletido e armazenado e correção da aplicação; certificado de conclusão).
- **SF Bot**: assistente robô nos três simuladores para guiar o aluno etapa por etapa.
- Cards de áreas da plataforma ("Escolha sua área e comece agora") com acesso direto aos três simuladores.
- Planos de pré-lançamento: **FREE** (grátis), **MEMBROS** (R$ 39,90/mês) e **MEMBROS VITALÍCIO** (R$ 499,00, pagamento único).
- Modal de escolha de simulador ao clicar em "Começar Grátis" (plano FREE).
- Modal de pré-lançamento em Acesso/Registro e nos CTAs dos planos pagos, com captura de e-mail (visual).
- Links diretos para as rotas dos simuladores funcionam no GitHub Pages via fallback SPA (`404.html` + restauração de rota com `sessionStorage`).
- Seção **Patrocínio · Parcerias** para empresas, consultores, professores, escolas técnicas e IES, com contato via WhatsApp.

## Tecnologias

- Vite + React + TypeScript
- Tailwind CSS v4 + shadcn/ui (Radix)
- wouter (roteamento SPA)
- sonner (toasts)

## Estrutura

```
client/
  index.html          # Entrada da aplicação
  public/vlans/       # Simulador de VLANs (página estática embutida)
  public/seguranca/   # Simulador de Segurança SOC (página estática embutida)
  public/web/         # Simulador de Segurança Web SQLi/XSS (página estática embutida)
  src/
    App.tsx           # Rotas e providers globais
    pages/            # Home, SimuladorVlan, SimuladorSeguranca, SimuladorWeb, NotFound
    components/       # Navbar, Hero, Pricing, SponsorSection, Modais, ContactRail, etc.
    components/ui/    # Componentes shadcn/ui
    index.css         # Tema, animações e utilitários custom
.github/workflows/    # Deploy para GitHub Pages
```

## Deploy

O deploy é automático via **GitHub Actions** (`.github/workflows/deploy.yml`) a cada push para `main`:

1. `pnpm install --frozen-lockfile`
2. `pnpm build`
3. `cp CNAME dist/CNAME` (mantém o domínio customizado)
4. Publica `dist/` em GitHub Pages (`upload-pages-artifact` + `deploy-pages`)

Domínio customizado: `sfcyber.projetosdisruptivos.com.br` (via `CNAME` no repositório).

## Licença

Privado - todos os direitos reservados.
