import { Pill } from "@/components/ui/pill";

const items = [
  {
    icon: "📝",
    title: "Pedido errado, cliente irritado",
    body: "Comanda de papel some, letra ilegível, item esquecido. O prejuízo é na hora.",
  },
  {
    icon: "🧾",
    title: "Caixa que nunca fecha certo",
    body: "Dinheiro, Pix e cartão anotados em lugares diferentes. No fim do dia, ninguém sabe o número real.",
  },
  {
    icon: "📱",
    title: "WhatsApp e iFood bagunçados",
    body: "Pedido chega em 3 telas diferentes e alguém esquece de confirmar. Vendas se perdem.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-bg-elev py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Pill variant="accent" className="mb-4">
          O problema todo dia
        </Pill>
        <h2 className="mb-8 text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
          Isso te é familiar?
        </h2>

        <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 rounded-2xl border border-border bg-bg-sunken p-5"
            >
              <div className="flex-shrink-0 text-2xl">{item.icon}</div>
              <div>
                <h3 className="text-sm font-bold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-2">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
