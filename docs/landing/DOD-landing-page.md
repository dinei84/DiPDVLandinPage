# DiPDV Landing Page — Definition of Done (DOD)

**Data:** 2026-08-04
**Branch:** `main` (commit inicial do projeto landing page)
**Status:** ✅ Concluído — 9 seções implementadas, build + lint verdes, validação em navegador com screenshots.

---

## 1. Decisões da Fase 0 (investigação)

1. **Onde a landing mora:** projeto Next.js 15 separado (este repositório `DiPDVLandinPage`), standalone (`output: "standalone"`), pronto para deploy em Vercel/Render. Não há integração com o `frontend/` do app principal — decisão tomada pelo executor anterior e mantida.
2. **Design tokens:** os tokens oklch (fundo, tinta, primário, accent, success, fontes Plus Jakarta Sans/JetBrains Mono, raios, sombras) foram reaproveitados em `src/styles/tokens.css`, espelhando os valores de `Landing_Cards.html`. Zero cores hex hardcoded no código de componentes (apenas `#fff` via utilidades Tailwind `text-white`/`bg-white`, alinhado à referência que usa branco para texto sobre o fundo primário).
3. **Destino dos leads:** implementado via **Resend (e-mail)** em `src/app/api/contact/route.ts`, com fallback de **modo desenvolvimento** quando `RESEND_API_KEY`/`RESEND_TO_EMAIL` não estão preenchidos (loga o lead no servidor e responde 200). Config via `.env.example`/`.env.local`. Sem CRM/backend externo — dentro do escopo autorizado.

## 2. O que foi implementado

As 9 seções na ordem do `PROJECT_SPEC.md` §7, com copy literal de `LANDING_COPY.md` e layout de `Landing_Cards.html`:

| # | Seção | Arquivo |
|---|---|---|
| 1 | Hero (pill, H1, subtítulo, CTA duplo, mockup) | `src/components/sections/hero.tsx` |
| 2 | Problema/Dor (3 cards) | `src/components/sections/problem.tsx` |
| 3 | Como funciona (3 passos + print) | `src/components/sections/how-it-works.tsx` |
| 4 | Módulos (grid 7 itens) | `src/components/sections/modules.tsx` |
| 5 | Preços (Base R$89, add-ons R$29, Completo R$179 + badge 39%) | `src/components/sections/pricing.tsx` |
| 6 | Confiança (stats <2h / WhatsApp) | `src/components/sections/trust.tsx` |
| 7 | FAQ (acordeão, 4 perguntas) | `src/components/sections/faq.tsx` |
| 8 | CTA final (dois caminhos) | `src/components/sections/cta-final.tsx` |
| 9 | Contato/Orçamento (formulário com validação) | `src/components/sections/contact.tsx` |

Componentes de UI: `src/components/ui/button.tsx`, `src/components/ui/pill.tsx`. SEO completo em `src/app/layout.tsx` (title, description, keywords, Open Graph, Twitter Card, robots index/follow, `lang="pt-BR"`).

### CTAs
- Seções 1 e 8 → CTA primário faz scroll suave para `#contato` (seção 9); CTA secundário abre `https://wa.me/47999527711` em nova aba. Rodapé do formulário também linka WhatsApp.

### Formulário (seção 9)
- Campos: nome, estabelecimento, WhatsApp, interesse (pills Plano Base/Plano Completo/Ainda não sei), mensagem opcional.
- Validação client-side: nome e WhatsApp obrigatórios, com mensagens de erro inline; estados idle/submitting/success/error.

## 3. Correções feitas nesta sessão (para fechar a implementação)

### 3.1 `src/app/api/contact/route.ts` — instância do Resend era criada no topo do módulo
`new Resend(process.env.RESEND_API_KEY || "")` lançava erro na *module load* (build quebrava com chave vazia). Agora a instância é criada dentro do handler, apenas quando há chave.

```diff
-import { NextRequest, NextResponse } from "next/server";
-import { Resend } from "resend";
-
-const resend = new Resend(process.env.RESEND_API_KEY || "");
-
-export async function POST(request: NextRequest) {
+import { NextRequest, NextResponse } from "next/server";
+import { Resend } from "resend";
+
+export async function POST(request: NextRequest) {

-    const { data, error } = await resend.emails.send({
+    const resend = new Resend(process.env.RESEND_API_KEY);
+    const { data, error } = await resend.emails.send({
```

### 3.2 `src/components/ui/button.tsx` + `src/components/sections/cta-final.tsx` — Client/Server Component boundary
`Button` (que recebe `onClick`) não era client component e `cta-final.tsx` (server) passava handler de evento para ele → erro de prerender "Event handlers cannot be passed to Client Component props". Adicionado `"use client"` em ambos.

```diff
+ "use client";
+
  import { cn } from "@/lib/utils";   // button.tsx

+ "use client";
+
  import { Pill } from "@/components/ui/pill";
  import { Button } from "@/components/ui/button";  // cta-final.tsx
```

### 3.3 `src/components/sections/contact.tsx` — `e.currentTarget` nulo em handler async
Após o `await fetch`, `e.currentTarget` é null no React (o handler já retornou). `e.currentTarget.reset()` lançava `TypeError`, capturado pelo `catch`, que sobrescrevia o estado de sucesso com erro — o formulário nunca mostrava "Mensagem enviada". Corrigido capturando `const form = e.currentTarget` antes do `await`.

```diff
   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
     e.preventDefault();
+    const form = e.currentTarget;
     setStatus("submitting");
     setErrors({});
 
-    const formData = new FormData(e.currentTarget);
+    const formData = new FormData(form);

       if (!res.ok) throw new Error("Erro ao enviar");
       setStatus("success");
-      e.currentTarget.reset();
+      form.reset();
       setInteresse("Plano Completo");
```

### 3.4 Configuração de lint
`next lint` estava deprecado e abria prompt interativo (quebrado em CI). Criado `eslint.config.mjs` (flat config `next/core-web-vitals` + `next/typescript`) e script `lint` alterado para `eslint src`.

## 4. Validação

### Build (`npm run build`) — ✅
```
Route (app)                        Size  First Load JS
┌ ○ /                            11.9 kB         114 kB
├ ○ /_not-found                    994 B         103 kB
└ ƒ /api/contact                   123 B         103 kB
✓ Generating static pages (5/5)
```
Página `/` estática, `/api/contact` dinâmica.

### Lint (`npm run lint`) — ✅ sem warnings/erros.

### Navegador (headless Chrome, desktop 1280px e mobile 390px) — ✅
- **9 seções renderizadas em ordem**, sem overflow horizontal (`scrollWidth === clientWidth === 1265` no desktop).
- **FAQ:** acordeão alterna — ao clicar na 2ª pergunta abre "Sim. O DiPDV roda no navegador..." e fecha a 1ª.
- **CTA scroll:** botão "Começar agora →" rola suavemente até o topo de `#contato` (scrollY final 4330 ≈ topo da seção).
- **Formulário (vazio):** mostra "Informe seu nome." e "Informe seu WhatsApp." inline.
- **Formulário (válido):** POST 200 em modo dev, mostra "Mensagem enviada! Entraremos em contato em até 2h.".
- **API:** `POST /api/contact` com dados → `200 {"ok":true,"dev":true,...}`; sem nome/whatsapp → `400`.
- **SEO:** `<title>`, `meta description`, `robots index/follow`, `og:*`, `twitter:*`, `lang="pt-BR"` presentes no HTML.

### Screenshots (evidência)
`docs/landing/screenshots/` — 9 seções × desktop(1280) + mobile(390), mais `fullpage.png`:

`01-hero`, `02-problema`, `03-como-funciona`, `04-modulos`, `05-precos`, `06-confianca`, `07-faq`, `08-cta-final`, `09-contato`.

## 5. Observações / pendências fora do escopo

- ⚠️ **FAQ "Precisa de internet o tempo todo?"** — usado o texto conservador do `LANDING_COPY.md` (rascunho). Confirmar com o Dinei antes de publicar (o produto não expõe comportamento offline nesta versão).
- **Screenshots mockup/print** das seções 1 e 3 são placeholders ("[ mockup da tela do PDV ]" / "[ print real da tela do sistema ]") — aguardando artes reais.
- **Leads:** em produção, preencher `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_TO_EMAIL` no `.env.local`.
- Deploy em produção **não** feito (fora do escopo).
