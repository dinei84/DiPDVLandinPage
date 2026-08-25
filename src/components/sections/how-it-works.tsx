"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Pill } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    id: "gestao",
    number: 1,
    label: "Cadastrar produtos",
    title: "Cadastre uma vez, venda sempre",
    description:
      "Produtos, categorias, preços e estoque num só lugar. Cadastre o cardápio uma vez e ele já aparece pronto na tela de venda.",
    image: "/screenshots/gestao.png",
  },
  {
    id: "pedido",
    number: 2,
    label: "Fazer pedido",
    title: "Monte o pedido em segundos",
    description:
      "Toque nos produtos organizados por categoria e monte o pedido direto na tela do caixa — sem digitar código, sem procurar em planilha.",
    image: "/screenshots/pdv-grid.png",
  },
  {
    id: "comanda",
    number: 3,
    label: "Gerar comanda",
    title: "Todas as comandas num painel só",
    description:
      "Mesa, balcão ou delivery — acompanhe tempo aberto, total e itens de cada comanda em um único painel, sem perder o fio da meada.",
    image: "/screenshots/comandas.png",
  },
  {
    id: "caixa",
    number: 4,
    label: "Fechar caixa",
    title: "Caixa fechado com resumo automático",
    description:
      "Suprimentos, sangrias e mix de pagamento calculados sozinhos — você só confere o saldo esperado e fecha.",
    image: "/screenshots/caixa-resumo.png",
    insight: "📈 Pix já é a forma de pagamento favorita — 51% das vendas",
  },
  {
    id: "relatorios",
    number: 5,
    label: "Ver relatórios",
    title: "Saiba o que vende, na hora",
    description:
      "Vendas por hora, ticket médio, mix de pagamento e top produtos — tudo atualizado ao vivo, sem precisar fechar o caixa pra saber como o dia está indo.",
    image: "/screenshots/relatorios.png",
    insight: "📊 Chope Pilsen 500ml lidera as vendas — 38% do faturamento",
  },
];

const STEP_MAGNETIC_STRENGTH = 0.16;
const STEP_MAGNETIC_MAX = 5;

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function StepButton({
  step,
  active,
  onClick,
}: {
  step: (typeof STEPS)[number];
  active: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const cx = clamp(x * STEP_MAGNETIC_STRENGTH, -STEP_MAGNETIC_MAX, STEP_MAGNETIC_MAX);
    const cy = clamp(y * STEP_MAGNETIC_STRENGTH, -STEP_MAGNETIC_MAX, STEP_MAGNETIC_MAX);
    ref.current.style.transform = `translate(${cx}px, ${cy}px)`;
  }

  function handleMouseLeave() {
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <button
      ref={ref}
      type="button"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "flex flex-shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-[background-color,transform] duration-150 ease-out",
        active ? "bg-primary-3" : "hover:bg-bg-sunken"
      )}
    >
      <span
        className={cn(
          "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-extrabold transition-colors",
          active ? "bg-primary text-white" : "bg-bg-sunken text-ink-3"
        )}
      >
        {step.number}
      </span>
      <span
        className={cn(
          "whitespace-nowrap text-sm font-bold",
          active ? "text-primary-ink" : "text-ink-2"
        )}
      >
        {step.label}
      </span>
    </button>
  );
}

export function HowItWorksSection() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <section id="como-funciona" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <Pill variant="primary" className="mb-4">
            Simples assim
          </Pill>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
            Como funciona
          </h2>
          <p className="mt-2 text-sm text-ink-3">
            Do pedido ao dinheiro no bolso, sem planilha. Clique em cada
            passo pra ver a tela real.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 grid gap-6 lg:grid-cols-[220px_1fr] lg:gap-8">
            <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
              {STEPS.map((s, i) => (
                <StepButton
                  key={s.id}
                  step={s}
                  active={i === active}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>

            <div key={step.id} className="step-fade-in">
              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-border bg-bg-elev shadow-md">
                  <div className="flex items-center gap-1.5 border-b border-border bg-bg-sunken px-4 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-danger-3" />
                    <span className="h-2.5 w-2.5 rounded-full bg-warning-3" />
                    <span className="h-2.5 w-2.5 rounded-full bg-success-3" />
                    <span className="ml-2 text-[10px] font-bold text-ink-3">
                      app.dipdv.com.br
                    </span>
                  </div>
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={1914}
                    height={1021}
                    className="h-auto w-full"
                  />
                </div>
                {step.insight && (
                  <div className="absolute -top-4 right-4 hidden max-w-[220px] rounded-xl border border-border bg-bg-elev px-4 py-3 text-xs font-bold text-ink shadow-lg sm:block">
                    {step.insight}
                  </div>
                )}
              </div>
              <div className="mt-4 rounded-xl border border-border bg-bg-sunken p-4">
                <h3 className="text-sm font-bold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-2">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
