import { Pill } from "@/components/ui/pill";

export function TrustSection() {
  return (
    <section className="bg-bg-sunken py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Pill variant="success" className="mb-4">
          Suporte de verdade
        </Pill>
        <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
          Fala direto com quem faz
        </h2>

        <div className="flex gap-4 rounded-2xl border border-border bg-bg-elev p-5">
          <div className="h-11 w-11 flex-shrink-0 rounded-full bg-gradient-to-br from-primary to-primary-2" />
          <div>
            <h3 className="text-sm font-bold text-ink">
              Sem central de atendimento genérica
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-2">
              Dúvida ou problema? Você fala com quem desenvolve o sistema —
              resposta no mesmo dia, geralmente em minutos.
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-border bg-bg-elev p-4 text-center">
            <div className="num text-xl font-extrabold text-primary">&lt; 2h</div>
            <div className="mt-1 text-xs text-ink-3">tempo médio de resposta</div>
          </div>
          <div className="rounded-xl border border-border bg-bg-elev p-4 text-center">
            <div className="num text-xl font-extrabold text-primary">WhatsApp</div>
            <div className="mt-1 text-xs text-ink-3">canal direto de suporte</div>
          </div>
        </div>
      </div>
    </section>
  );
}
