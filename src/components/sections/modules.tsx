import { Pill } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";

const items = [
  { icon: "💠", title: "Pix", body: "Recebe na hora, sem maquininha extra", tint: "var(--primary-3)" },
  { icon: "💳", title: "Cartão", body: "Pagamento integrado direto no caixa", tint: "var(--accent-3)" },
  { icon: "📊", title: "Relatórios", body: "Saiba o que vende mais, sem esforço", tint: "var(--success-3)" },
  { icon: "📦", title: "Estoque", body: "Alerta antes de faltar produto", tint: "var(--warning-3)" },
  { icon: "💬", title: "Pedidos WhatsApp", body: "Chega direto na comanda", tint: "var(--primary-3)" },
  { icon: "🛵", title: "Integração iFood", body: "Sem digitar pedido 2 vezes", tint: "var(--accent-3)" },
  { icon: "⭐", title: "Fidelidade", body: "Cliente que volta, vale mais", tint: "var(--success-3)" },
];

export function ModulesSection() {
  return (
    <section id="modulos" className="bg-bg-elev py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <Pill variant="primary" className="mb-4">
            Módulos
          </Pill>
          <h2 className="mb-8 text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
            Cresça na medida certa
          </h2>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={(idx % 3) * 90}>
              <div className="h-full rounded-xl border border-border bg-bg-elev p-4">
                <div
                  className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl text-xl shadow-sm"
                  style={{ backgroundColor: item.tint }}
                >
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-ink">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-3">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
