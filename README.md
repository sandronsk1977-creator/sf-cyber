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
| `pnpm dev`      | Servidor de desenvolvimento (Vite)       |
| `pnpm build`    | Build de produção (saída em `dist/`)     |
| `pnpm check`    | Typecheck com `tsc --noEmit`             |
| `pnpm preview`  | Pré-visualização do build                |

## Funcionalidades

- Landing page em tema dark com animação de "destrinchamento" de título e trilha de contatos flutuante (LinkedIn, GitHub, WhatsApp) com pulsação.
- **Simulador de VLANs Switch Cisco** integrado em `/simulador-vlan` (8 níveis, testes de ping e certificado de conclusão).
- Cards de áreas da plataforma ("Áreas da Plataforma") revelados pelo botão do hero.
- Planos de pré-lançamento: **FREE**, **MEMBROS** (R$ 89,90/mês) e **MEMBROS VITALÍCIO** (R$ 499,00).
- Modal de pré-lançamento em Acesso/Registro e nos CTAs dos planos, com captura de e-mail (visual) e atalho para o simulador gratuito.

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
  src/
    App.tsx           # Rotas e providers globais
    pages/            # Home, SimuladorVlan, NotFound
    components/       # Navbar, Hero, Pricing, PreLaunchModal, ContactRail etc.
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