"use client";

import { Pill } from "@/components/ui/pill";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "47999527711";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export function HeroSection() {
  return (
    <section className="gradient-hero">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Pill variant="primary" className="mb-5">
              Feito para lanchonete, café e snack bar
            </Pill>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[2.75rem]">
              Sua comanda de papel vira{" "}
              <span className="text-primary">venda registrada</span> em
              segundos.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-2">
              Sistema de PDV simples, sem curva de aprendizado, pra quem toca o
              negócio sozinho e não tem tempo pra planilha.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                variant="primary"
                onClick={() => {
                  document
                    .getElementById("contato")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Agendar demonstração
              </Button>
              <Button
                variant="success"
                onClick={() => window.open(WHATSAPP_LINK, "_blank")}
              >
                💬 Falar no WhatsApp
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-border bg-bg-sunken text-sm font-semibold text-ink-3 md:h-80">
              [ mockup da tela do PDV ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
