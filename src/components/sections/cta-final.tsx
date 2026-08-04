"use client";

import { Pill } from "@/components/ui/pill";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "47999527711";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export function CtaFinalSection() {
  return (
    <section className="gradient-cta py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Pill variant="ghost-light" className="mb-5">
          Pronto pra começar?
        </Pill>
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          Menos papel.
          <br />
          Mais controle.
          <br />
          Hoje mesmo.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/85">
          Escolha o caminho que preferir — testar sozinho ou conversar com a
          gente antes.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            variant="light"
            onClick={() => {
              document
                .getElementById("contato")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Começar agora →
          </Button>
          <Button
            variant="outline-light"
            onClick={() => window.open(WHATSAPP_LINK, "_blank")}
          >
            💬 Prefiro falar com alguém
          </Button>
        </div>
      </div>
    </section>
  );
}
