import { Pill } from "@/components/ui/pill";

const items = [
  { icon: "💠", title: "Pix", body: "Recebe na hora, sem maquininha extra" },
  { icon: "💳", title: "Cartão", body: "Pagamento integrado direto no caixa" },
  { icon: "📊", title: "Relatórios", body: "Saiba o que vende mais, sem esforço" },
  { icon: "📦", title: "Estoque", body: "Alerta antes de faltar produto" },
  { icon: "💬", title: "Pedidos WhatsApp", body: "Chega direto na comanda" },
  { icon: "🛵", title: "Integração iFood", body: "Sem digitar pedido 2 vezes" },
  { icon: "⭐", title: "Fidelidade", body: "Cliente que volta, vale mais" },
];

export function ModulesSection() {
  return (
    <section className="bg-bg-elev py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Pill variant="primary" className="mb-4">
          Módulos
        </Pill>
        <h2 className="mb-8 text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
          Cresça na medida certa
        </h2>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border bg-bg-elev p-4"
            >
              <div className="mb-2 text-xl">{item.icon}</div>
              <h3 className="text-sm font-bold text-ink">{item.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-ink-3">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
