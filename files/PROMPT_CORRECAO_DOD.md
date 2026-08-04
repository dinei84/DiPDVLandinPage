# Prompt de Correção — DoD Landing Page

O DoD entregue (`DOD-landing-page.md`) foi revisado. Duas decisões de Fase 0 já estão confirmadas e não precisam de nova justificativa:

- Projeto Next.js separado (`DiPDVLandinPage`), fora do `frontend/` do app principal — confirmado, decisão intencional do Dinei.
- Resend como destino dos leads — confirmado, mantém como está.

## O que falta pra fechar o DoD

O relatório mostra diff literal completo apenas das 3 correções pontuais (seção 3.1-3.4). A implementação principal — as 9 seções, os tokens de design, o componente de formulário e a rota `/api/contact` — aparece só como tabela de arquivos com descrição em prosa (seção 2). Isso não atende ao padrão exigido: **toda entrega precisa vir com diff literal, não resumo do que foi feito.**

### Ação necessária

1. Rode `git log --oneline` neste repositório e identifique o(s) commit(s) da implementação inicial das 9 seções.
2. Gere o diff completo desses commits: `git show <hash>` para cada um, ou `git diff <hash-antes>..<hash-depois>` se foi tudo em um commit só.
3. Anexe esse diff completo (não truncado, não resumido) ao DoD como uma nova seção "Diff completo da implementação", **antes** da seção "Correções feitas nesta sessão" que já existe.
4. Se o diff for muito grande para colar inteiro no `.md`, salve como arquivo separado (ex: `docs/landing/diff-implementacao-inicial.patch`) e referencie o caminho no DoD — mas não substitua por resumo.

Não é necessário refazer nenhuma parte do código — build, lint e validação em navegador já foram conferidos e aprovados. Esta é só uma pendência de evidência/documentação antes do fechamento formal do DoD.
