"use client";

import { useState } from "react";
import { Pill } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";

const BASE_PRICE = 89;
const COMPLETO_PRICE = 179;
const ADDON_PRICE = 29;

const addons = ["Pix", "Cartão", "Relatórios", "Estoque", "WhatsApp", "iFood", "Fidelidade"];

export function PricingSection() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function toggle(addon: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(addon)) {
        next.delete(addon);
      } else {
        next.add(addon);
      }
      return next;
    });
  }

  const total = BASE_PRICE + selected.size * ADDON_PRICE;
  const completoIsBetter = total > COMPLETO_PRICE;

  return (
    <section id="precos" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <Pill variant="accent" className="mb-4">
            Modular de verdade
          </Pill>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
            Pague só o que usa
          </h2>
          <p className="mt-2 text-sm text-ink-3">
            Sem pacote fechado escondendo preço.
          </p>
        </Reveal>

        <Reveal delay={80}>
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
              <span className="badge-wiggle absolute -top-3 right-4 rounded-full bg-accent px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-ink">
                Economiza 39%
              </span>
              <h3 className="text-sm font-bold">Plano Completo</h3>
              <div className="num mt-1 text-3xl font-extrabold">
                R$ 179<span className="text-base font-semibold opacity-80">/mês</span>
              </div>
              <p className="mt-1 text-sm opacity-85">Tudo incluso, sem surpresa</p>
            </div>
          </div>
        </Reveal>

        {/* Simulador de add-ons */}
        <Reveal delay={160}>
          <div className="mt-6">
            <p className="mb-1 text-sm font-bold text-ink">
              Monte seu plano: clique nos módulos que você precisa
            </p>
            <p className="mb-3 text-xs text-ink-3">
              mesmo preço pra todos os módulos, sem letra miúda
            </p>
            <div className="flex flex-wrap gap-2">
              {addons.map((addon) => {
                const checked = selected.has(addon);
                return (
                  <button
                    key={addon}
                    type="button"
                    onClick={() => toggle(addon)}
                    aria-pressed={checked}
                    className="rounded-xl border px-3 py-2 text-center transition-colors"
                    style={{
                      backgroundColor: checked ? "var(--primary-3)" : "transparent",
                      borderColor: checked ? "var(--primary)" : "var(--border)",
                      borderStyle: checked ? "solid" : "dashed",
                    }}
                  >
                    <div
                      className="text-[11px] font-bold"
                      style={{ color: checked ? "var(--primary-ink)" : "var(--ink-2)" }}
                    >
                      {checked ? "✓ " : ""}
                      {addon}
                    </div>
                    <div className="num text-xs font-extrabold text-ink">
                      +R$29
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex flex-col gap-2 rounded-xl border border-border bg-bg-sunken p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-xs font-bold text-ink-2">
                  Seu plano estimado
                </span>
                <div className="num text-2xl font-extrabold text-ink">
                  R$ {total}
                  <span className="text-sm font-semibold text-ink-3">/mês</span>
                </div>
              </div>
              {completoIsBetter && (
                <p className="text-xs font-semibold text-accent-ink">
                  A partir daqui o Plano Completo (R$179) sai mais barato →
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
