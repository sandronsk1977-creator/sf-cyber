# Especificação de Clone: Hixec (hixec.com)

## Referência Ground-Truth
- **Site Referência**: https://hixec.com/
- **Objetivo**: Clonar fielmente a landing page do Hixec, replicando com alta fidelidade a identidade visual (tema escuro com detalhes em cibersegurança, verde terminal/azul elétrico), a navegação, as seções institucionais (problema, solução, estatísticas, depoimentos, diferenciais, público-alvo, planos de assinatura) e, principalmente, a **animação criptográfica interativa no topo do hero** (texto gerado com caracteres de criptografia/cifra em tempo real).

## Diretrizes de Implementação
1. **Animação Criptográfica (Hero Header)**: Componente interativo em React/Canvas que simula texto cifrado se decodificando e embaralhando caracteres (ex: `; Q * | U . M = & 2 W L + Z % ...`).
2. **Design System & Cores**: Fundo escuro profundo (`#0B0F17` / `#0f172a`), tipografia moderna (Poppins / Inter), acentos em verde terminal (`#10b981`), azul cibersegurança (`#3b82f6`) e cinzas refinados.
3. **Seções Completas**:
   - Barra de Navegação (Logo, Acesso, Registro, Carrinho)
   - Hero com Animação Criptográfica, Título Principal ("TU PRIMERA CERTIFICACIÓN TE ESPERA"), CTAs e selos de confiança.
   - Seção "El error que todos cometen" (3 cards de problemas)
   - Seção "Con Hixec — La solución definitiva" (3 cards de solução + tecnologias suportadas)
   - Barra de Estatísticas (+5,000 estudantes, +110h, +25 cursos, +150 labs)
   - Seção de Depoimentos (Cards com avaliações reais e distintivos de alunos)
   - Seção "Por qué Hixec es diferente" (Rutas, labs, Hixec AI, Hixec Code, HIX moneda)
   - Seção Público-Alvo ("¿Esto es para ti?") (Checklist para quem é e para quem não é)
   - Seção de Preços / Planos (Premium, Prime, Premium Prime com badges de desconto e CTAs)
   - Rodapé completo com links e informações legais.
