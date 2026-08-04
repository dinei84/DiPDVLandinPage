# Prompt para o Executor — Implementação da Landing Page DiPDV

Você vai implementar a landing page institucional do DiPDV. Este é um projeto de marketing/aquisição, separado do produto em si, mas deve reaproveitar o design system já existente (Sprint 10) para manter consistência visual entre landing page e aplicação.

## Documentos de referência (leia todos antes de começar)

1. `PROJECT_SPEC.md` — contexto de negócio, pricing, posicionamento, diretrizes de marca
2. `Landing_Cards.html` — referência visual **aprovada** de cada uma das 9 seções (abra no navegador para ver o layout, cores e tipografia exatos)
3. `LANDING_COPY.md` — texto final e definitivo de cada seção. Use este copy literalmente, não parafraseie.

## Fase 0 — Investigação (obrigatória antes de codar)

Antes de escrever qualquer código, investigue e reporte de volta:

1. Onde a landing page deve morar: nova rota dentro do `frontend/` existente (Next.js 15) ou projeto separado? Verifique a estrutura atual do repositório e proponha a opção mais simples de manter — mas **não decida sozinho, pergunte antes de prosseguir se não estiver óbvio**.
2. Os tokens de design (cores oklch, fontes Plus Jakarta Sans/JetBrains Mono) já existem em algum arquivo de configuração do Tailwind/CSS do projeto atual? Reaproveite-os em vez de recriar.
3. Para onde os leads do formulário de contato (seção 9) devem ir? Não implemente um backend de verdade sem confirmação — proponha uma opção simples (ex: endpoint que envia e-mail, ou grava numa tabela) e pergunte antes de implementar.

## Fase 1 — Implementação

- Implemente as 9 seções na ordem definida em `PROJECT_SPEC.md` (seção 7), usando o layout de `Landing_Cards.html` como referência visual exata e o texto de `LANDING_COPY.md` como copy final.
- Responsivo mobile-first — os cards de referência são desktop, adapte para telas pequenas mantendo a hierarquia visual.
- Zero cores hardcoded em hex — usar os tokens oklch do design system.
- Formulário da seção 9 (Contato/Orçamento): implementar validação básica de campos (nome, WhatsApp obrigatórios) antes de decidir o destino dos dados na Fase 0.
- CTAs das seções 1 e 8 devem levar para a seção 9 (scroll suave) ou para o link de WhatsApp, conforme o botão.
- SEO básico: meta tags, title, description, Open Graph — landing page precisa ser indexável.

## Padrões de qualidade (não negociáveis)

- **Nunca** entregue como "pronto" com mudanças apenas staged — commit antes de reportar.
- Todo report de conclusão deve vir como arquivo `.md` (ex: `docs/landing/DOD-landing-page.md`), acompanhado de diff literal (`git diff` ou `git show`), não resumo em prosa.
- Validação em navegador com screenshots de cada seção antes de considerar qualquer parte concluída — inclua os screenshots (ou descrição detalhada do que foi visto) no report.
- Se algo do `Landing_Cards.html` for ambíguo ou não fizer sentido técnico, pare e pergunte — não invente comportamento não especificado.
- Não presuma autorização para decisões de escopo não documentadas aqui ou em `PROJECT_SPEC.md`.

## Fora de escopo (não fazer sem autorização explícita)

- Integração real com CRM/e-mail para os leads (aguardar decisão da Fase 0)
- Qualquer alteração na aplicação principal do DiPDV (`/pdv`, `/gestao`, etc.)
- Deploy em produção — isso será decidido separadamente
