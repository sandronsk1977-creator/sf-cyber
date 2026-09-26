# AGENTS.md

## Diretrizes do projeto (sf-cyber)

Portal SF Cyber — landing dark com quatro simuladores (Redes: VLANs e Servidor DNS; Cibersegurança: SOC e Segurança Web), planos de pré-lançamento e deploy automático via GitHub Pages.

### Regras fixas de desenvolvimento

- **Sempre revisar o código em busca de bugs e vulnerabilidades, usando como referência o OWASP Top 10** (injeção, quebra de autenticação, XSS, CSRF, falhas de configuração, etc.). Antes de dar algo como pronto, verificar se o fluxo não deixa o usuário travado.
- **Se/integrar LLM/IA (ex.: "SF Cyber AI" prometida nos planos), revisar também contra o OWASP GenAI LLM Top 10 2026** (publicado 03/ago/2026 por genai.owasp.org): LLM01 Prompt Injection, LLM02 Sensitive Information Disclosure, LLM03 Excessive Agency, LLM04 Supply Chain, LLM05 Data and Model Poisoning, LLM06 Unbounded Consumption, LLM07 Misinformation, LLM08 Hidden Context Exposure (novo nome de System Prompt Leakage), LLM09 Vector and Embedding Weaknesses, LLM10 Improper Output Handling. Filosofia-chave: não construir um modelo que não possa ser enganado; construir o sistema assumindo que ele será ("blast-radius control"). Se o modelo virar ator com tools/memória/consequências, usar o OWASP Top 10 for Agentic Applications 2026.
- Nunca usar PowerShell para substituir texto em arquivos (corrompe encoding/acentos) — usar as ferramentas de edição.
- **Em simuladores estáticos, nunca escrever `</script>` literal dentro de strings JS** (ex.: payload de XSS `<script>alert('x')</script>`): o parser HTML do navegador encerra o bloco `<script>` no meio do arquivo, quebra o jogo e executa fragmentos soltos (sintomas: dialog nativo "store"/"x" e botão "Começar!" que não inicia). Escrever sempre `<\/script>` (o `\/` é idêntico a `/` em JS).
- Não usar em-dashes ("—") nos textos.
- Usar `corepack pnpm <cmd>` (Windows/PowerShell). Rodar `pnpm check` antes de commits com mudanças em TS.
- Push exibe "erro" no stderr (NativeCommandError) mas funciona — confirmar `main -> main` na saída.
- Manter "08 níveis" / "8 níveis" nos textos (padrão do produto).
- Todo push em `main` dispara GitHub Actions → deploy em https://sfcyber.projetosdisruptivos.com.br/.

### Estrutura relevante

- `client/public/vlans/index.html` — Simulador de VLANs (estático, SF Bot).
- `client/public/seguranca/index.html` — Simulador de Segurança SOC (estático, SF Bot). Teste automatizado de fluxo completo: `C:\Users\Family\AppData\Local\Temp\opencode\soc_test.cjs` (8 níveis → prova → certificado).
- `client/public/web/index.html` — Simulador de Segurança Web SQLi/XSS (estático, SF Bot). Teste automatizado de fluxo completo: `C:\Users\Family\AppData\Local\Temp\opencode\web_test.cjs` (8 níveis → prova → certificado).
- `client/public/dns/index.html` — Simulador de Servidor DNS (estático, SF Bot). Teste automatizado de fluxo completo: `C:\Users\Family\AppData\Local\Temp\opencode\dns_test.cjs` (8 níveis → prova → certificado). Repositório de progresso: `localStorage["sfcyber-dns-v1"]`.
- `client/public/404.html` — Fallback SPA do GitHub Pages: guarda a rota em `sessionStorage["sfcyberRoute"]` e redireciona para `/`; `App.tsx` restaura a rota via `useLocation`. Necessário para acesso direto aos `/simulador-*`.
- `client/src/` — React + wouter; páginas: Home, SimuladorVlan, SimuladorSecurity, SimuladorWeb, SimuladorDns; componentes: PricingSection, SponsorSection, SimulatorChoiceModal, PortalCardsSection, ContactRail, PreLaunchModal.