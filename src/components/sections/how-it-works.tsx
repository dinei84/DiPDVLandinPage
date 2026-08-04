import { Pill } from "@/components/ui/pill";

const steps = ["Fazer pedido", "Gerar comanda", "Fechar caixa"];

export function HowItWorksSection() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Pill variant="primary" className="mb-4">
          Simples assim
        </Pill>
        <h2 className="text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
          Como funciona
        </h2>
        <p className="mt-2 text-sm text-ink-3">
          Do pedido ao dinheiro no bolso, sem planilha.
        </p>

        <div className="mt-8 grid grid-cols-3 gap-3 md:max-w-lg">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-extrabold text-white">
                {idx + 1}
              </div>
              <div className="mt-2 text-xs font-bold text-ink-2">{step}</div>
            </div>
          ))}
        </div>

        <div className="gradient-mockup mt-8 flex h-60 items-center justify-center rounded-2xl border border-dashed border-border text-sm font-bold text-primary-ink md:h-72">
          [ print real da tela do sistema ]
        </div>
      </div>
    </section>
  );
}
