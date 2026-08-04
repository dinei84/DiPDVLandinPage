# DiPDV — Landing Page & Pricing — Project Spec

> Documento vivo. Toda decisão de copy, visual e pricing da landing page deve remeter a este spec. Atualizar sempre que houver mudança de direção.

**Status:** Pricing aprovado ✅ | Referências visuais aprovadas ✅ (`Landing_Cards.html`) | Copy final ✅ (`LANDING_COPY.md`) | Handoff pra dev em andamento 🟡 (`EXECUTOR_PROMPT.md`)

**Documentos do projeto:**
- `PROJECT_SPEC.md` — este arquivo, fonte única de verdade sobre contexto/estratégia/pricing
- `Landing_Cards.html` — referência visual aprovada dos 9 cards de seção
- `LANDING_COPY.md` — copy final aprovado de cada seção
- `EXECUTOR_PROMPT.md` — prompt de implementação para o executor (Claude Code)

---

## 1. Contexto do Produto

DiPDV é um sistema de PDV (ponto de venda) SaaS multi-tenant B2B, voltado para pequenos negócios de food service — lanchonetes, snack bars, cafeterias. Em fase de validação comercial inicial, com 1-3 clientes reais ativos e outros na fila de espera.

**Stack:** Java 21 + Spring Boot (backend), Next.js 15 + Tailwind v4 (frontend), PostgreSQL com Row-Level Security, deploy em Render + Vercel + Supabase.

**Papéis de usuário no sistema:** SUPER_ADMIN, ADMIN, MANAGER, CASHIER.

---

## 2. Objetivos da Landing Page

Todos os três, simultaneamente:
1. **Captação de leads** — formulário/contato para demo
2. **Autoatendimento** — cadastro direto, sem intervenção manual
3. **Institucional/branding** — construir credibilidade de marca desde já

---

## 3. Público-alvo

Donos/gestores de lanchonetes, snack bars e cafeterias pequenas — geralmente 1 loja, operação enxuta, pouca ou nenhuma equipe de TI, decisão de compra centralizada no próprio dono.

**Dores típicas:**
- Comanda de papel, erro de pedido, retrabalho
- Falta de controle de caixa/estoque
- Dificuldade em atender pedido via WhatsApp/iFood sem sistema integrado
- Medo de trocar de sistema ("vai ser complicado migrar?")

---

## 4. Estágio do Negócio (contexto de tom)

**1-3 clientes reais** — ainda não há escala para "prova social de volume". A narrativa de confiança deve se apoiar em:
- Proximidade e atenção direta do fundador/dev (suporte pessoal, não terceirizado)
- Transparência total de preço (diferencial forte vs. concorrentes que escondem tabela)
- Demonstração real do produto (prints/fluxo real, não mockup genérico)

Evitar qualquer copy que sugira escala que ainda não existe (ex: "centenas de lanchonetes confiam"). Honestidade de estágio > exagero.

---

## 5. Estrutura de Pricing (Híbrido) — ✅ Aprovado (v2 — números redondos, alinhados às referências visuais)

| Item | Preço | Racional |
|---|---|---|
| **Plano Base** (`PDV_BASIC` + `CATALOG_MANAGEMENT`) | **R$ 89/mês** | Número redondo, ainda abaixo do Goomer Básico (R$99,90) |
| Cada add-on avulso (`PAYMENT_PIX`, `PAYMENT_CARD`, `REPORTS`, `INVENTORY`, `WHATSAPP_ORDERS`, `IFOOD_INTEGRATION`, `LOYALTY`) | **R$ 29/mês cada** | Preço único simplificado — mais fácil de comunicar e vender que faixa variável por módulo |
| **Plano Completo** (todos os módulos) | **R$ 179/mês** | Soma avulsa seria R$ 292 (89 + 7×29) → desconto real de **~39%**. Badge de marketing deve comunicar o valor real da economia, não um número arredondado pra baixo tipo "20%" |

> Nota: versão anterior (R$79 base / R$19-39 por módulo / R$229 completo) foi substituída por esta, mais simples de comunicar visualmente. Manter esta tabela como fonte única de verdade — qualquer card, copy ou tela de checkout deve refletir estes valores.

**Políticas:**
- Desconto anual: 15-20% (mais conservador que os 40% do Goomer, para não descapitalizar cedo)
- **Oferta de fundador**: primeiros clientes trancam preço vitalício ou desconto permanente — usar como gatilho de marketing ("condição especial para quem entra agora")
- Sem multa de cancelamento, sem fidelidade — diferencial direto vs. reclamações de reajuste "escondido" do Anota AI

---

## 6. Mapeamento Módulo → Benefício de Marketing

| Módulo técnico | Benefício em linguagem de cliente |
|---|---|
| `PDV_BASIC` | Venda no balcão sem complicação, comanda digital |
| `CATALOG_MANAGEMENT` | Cardápio sempre atualizado, sem retrabalho |
| `PAYMENT_PIX` | Recebe Pix direto no sistema, sem conferência manual |
| `PAYMENT_CARD` | Pagamento com cartão integrado ao caixa |
| `REPORTS` | Enxerga o que vende mais, quando vende mais |
| `INVENTORY` | Nunca mais é pego de surpresa sem insumo |
| `WHATSAPP_ORDERS` | Pedido do WhatsApp cai direto no sistema, sem digitar de novo |
| `IFOOD_INTEGRATION` | iFood e balcão no mesmo lugar, sem tablet extra |
| `LOYALTY` | Cliente volta mais — fidelidade automática |

---

## 7. Estrutura da Landing Page (9 seções)

1. **Hero** — dor + promessa direta + CTA duplo (demo / WhatsApp direto)
2. **Problema/Contexto** — 3 dores centrais (comanda de papel, caixa sem controle, pedido via WhatsApp/iFood bagunçado)
3. **Como funciona** — telas reais do produto, fluxo PDV → comanda → fechamento de caixa
4. **Módulos/Funcionalidades** — grid conectando direto com a tabela de preços (seção 5)
5. **Preços** — tabela híbrida, toggle mensal/anual
6. **Prova de confiança** (substitui "cases") — história do fundador, atenção direta, tempo de resposta
7. **FAQ** — objeções: troca de sistema, funciona no celular, precisa de internet, suporte
8. **CTA final** — reforço da chamada, dois caminhos (autoatendimento / falar com alguém)
9. **Contato/Orçamento** — formulário real de captação de lead (nome, estabelecimento, WhatsApp, interesse no plano, mensagem opcional) — é onde o objetivo de "captação de leads" de fato se concretiza; CTAs das seções 1 e 8 devem levar pra cá

---

## 8. Diretrizes de Marca/Visual

**Reaproveitar o design system já estabelecido no Sprint 10 da aplicação**, para consistência entre produto e landing page:
- Tipografia: Plus Jakarta Sans (texto), JetBrains Mono (dados/números)
- Cores: espaço oklch, sem hex hardcoded
- Tom visual: clean, direto, "premium mas acessível" — não corporativo genérico, não "startup fofa"

**Tom de voz (copy):** direto, confiante, sem jargão técnico. Fala com o dono da lanchonete, não com um gerente de TI. Português brasileiro coloquial-profissional (nem formal demais, nem gírias).

---

## 9. Posicionamento Competitivo

| Concorrente | Fraqueza explorável |
|---|---|
| **Goomer** | Preço não é público, foco em totem/QR code, menos foco em PDV de balcão puro |
| **Anota AI** (grupo iFood) | Reclamações de reajuste pós-promoção, tabela cheia cara (R$219,99) |
| **Diggy** | Bom concorrente direto (transparência de preço) — diferenciar por modularidade real (paga só o que usa) |
| **VEX MENU** | Modelo de indicação/MLM pode gerar desconfiança |

**Diferenciais do DiPDV a martelar:** preço 100% transparente, modular de verdade (não pacote fechado disfarçado), sem fidelidade/multa, suporte direto do fundador.

---

## 10. Marketing / Canais (rascunho inicial — expandir depois)

A definir em sessão futura: grupos de WhatsApp de lojistas, indicação boca-a-boca entre lanchonetes da região, SEO local, possivelmente parceria com fornecedores de insumo (embalagens, distribuidoras) que já atendem esse público.

---

## 11. Checklist / Próximos Passos

- [x] Estrutura de pricing definida e aprovada
- [x] Estrutura de seções da landing page definida (9 seções)
- [x] Referências visuais geradas e aprovadas (`Landing_Cards.html`)
- [x] Copy final de cada seção (`LANDING_COPY.md`)
- [ ] ⚠️ Confirmar resposta do FAQ sobre "precisa de internet o tempo todo?" antes de publicar
- [ ] Decidir onde a landing page vai morar: rota nova no repo `frontend/` existente vs. projeto separado
- [ ] Implementação técnica (Next.js, reaproveitando design tokens do app)
- [ ] Definir destino dos leads do formulário (endpoint próprio, email, planilha, CRM)
- [ ] Validação em navegador com screenshots antes de considerar concluído
