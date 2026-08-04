import { Pill } from "@/components/ui/pill";

const addons = [
  "Pix",
  "Cartão",
  "Relatórios",
  "Estoque",
  "WhatsApp",
  "iFood",
  "Fidelidade",
];

export function PricingSection() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Pill variant="accent" className="mb-4">
          Modular de verdade
        </Pill>
        <h2 className="text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
          Pague só o que usa
        </h2>
        <p className="mt-2 text-sm text-ink-3">
          Sem pacote fechado escondendo preço.
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {/* Plano Base */}
          <div className="rounded-2xl border border-border bg-bg-elev p-6">
            <h3 className="text-sm font-bold text-ink">Plano Base</h3>
            <div className="num mt-1 text-3xl font-extrabold text-ink">
              R$ 89<span className="text-base font-semibold text-ink-3">/mês</span>
            </div>
            <p className="mt-1 text-sm text-ink-3">Comanda, caixa, catálogo</p>
          </div>

          {/* Plano Completo */}
          <div className="relative rounded-2xl bg-primary p-6 text-white">
            <span className="absolute -top-3 right-4 rounded-full bg-accent px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide">
              Economiza 39%
            </span>
            <h3 className="text-sm font-bold">Plano Completo</h3>
            <div className="num mt-1 text-3xl font-extrabold">
              R$ 179<span className="text-base font-semibold opacity-80">/mês</span>
            </div>
            <p className="mt-1 text-sm opacity-85">Tudo incluso, sem surpresa</p>
          </div>
        </div>

        {/* Add-ons */}
        <div className="mt-6">
          <p className="mb-3 text-sm font-bold text-ink">Add-ons</p>
          <div className="flex flex-wrap gap-2">
            {addons.map((addon) => (
              <div
                key={addon}
                className="rounded-xl border border-dashed border-border px-3 py-2 text-center"
              >
                <div className="text-[11px] font-bold text-ink-2">{addon}</div>
                <div className="num text-xs font-extrabold text-ink">+R$29</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-ink-3">
            mesmo preço pra todos os módulos, sem letra miúda
          </p>
        </div>
      </div>
    </section>
  );
}
