import { Pill } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";

const items = [
  {
    icon: "📝",
    title: "Pedido errado, cliente irritado",
    body: "Comanda de papel some, letra ilegível, item esquecido. O prejuízo é na hora.",
    tint: "var(--danger-3)",
  },
  {
    icon: "🧾",
    title: "Caixa que nunca fecha certo",
    body: "Dinheiro, Pix e cartão anotados em lugares diferentes. No fim do dia, ninguém sabe o número real.",
    tint: "var(--warning-3)",
  },
  {
    icon: "📱",
    title: "WhatsApp e iFood bagunçados",
    body: "Pedido chega em 3 telas diferentes e alguém esquece de confirmar. Vendas se perdem.",
    tint: "var(--accent-3)",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-bg-elev py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <Pill variant="accent" className="mb-4">
            O problema todo dia
          </Pill>
          <h2 className="mb-8 text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
            Isso te é familiar?
          </h2>
        </Reveal>

        <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 90}>
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-bg-sunken p-5">
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-xl shadow-sm"
                  style={{ backgroundColor: item.tint }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-2">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
