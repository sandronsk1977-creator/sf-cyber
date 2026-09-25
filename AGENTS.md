# AGENTS.md

## Diretrizes do projeto (sf-cyber)

Portal SF Cyber — landing dark com dois simuladores (VLANs e Segurança/Analista SOC), planos de pré-lançamento e deploy automático via GitHub Pages.

### Regras fixas de desenvolvimento

- **Sempre revisar o código em busca de bugs e vulnerabilidades, usando como referência o OWASP Top 10** (injeção, quebra de autenticação, XSS, CSRF, falhas de configuração, etc.). Antes de dar algo como pronto, verificar se o fluxo não deixa o usuário travado.
- Nunca usar PowerShell para substituir texto em arquivos (corrompe encoding/acentos) — usar as ferramentas de edição.
- Não usar em-dashes ("—") nos textos.
- Usar `corepack pnpm <cmd>` (Windows/PowerShell). Rodar `pnpm check` antes de commits com mudanças em TS.
- Push exibe "erro" no stderr (NativeCommandError) mas funciona — confirmar `main -> main` na saída.
- Manter "08 níveis" / "8 níveis" nos textos (padrão do produto).
- Todo push em `main` dispara GitHub Actions → deploy em https://sfcyber.projetosdisruptivos.com.br/.

### Estrutura relevante

- `client/public/vlans/index.html` — Simulador de VLANs (estático, SF Bot).
- `client/public/seguranca/index.html` — Simulador de Segurança SOC (estático, SF Bot). Teste automatizado de fluxo completo: `C:\Users\Family\AppData\Local\Temp\opencode\soc_test.cjs` (8 níveis → prova → certificado).
- `client/src/` — React + wouter; páginas: Home, SimuladorVlan, SimuladorSecurity; componentes: PricingSection, SponsorSection, SimulatorChoiceModal, PortalCardsSection, ContactRail, PreLaunchModal.