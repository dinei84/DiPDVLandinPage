"use client";

import Image from "next/image";
import { Pill } from "@/components/ui/pill";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "47999527711";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const HEADLINE_WORDS = [
  { text: "Sua", highlight: false },
  { text: "comanda", highlight: false },
  { text: "de", highlight: false },
  { text: "papel", highlight: false },
  { text: "vira", highlight: false },
  { text: "venda", highlight: true },
  { text: "registrada", highlight: true },
  { text: "em", highlight: false },
  { text: "segundos.", highlight: false },
];

export function HeroSection() {
  return (
    <section className="relative gradient-hero overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: "url(/screenshots/pdv-grid.png)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          opacity: 0.06,
          filter: "blur(30px)",
          transform: "scale(1.1)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Pill variant="primary" className="mb-5">
              Feito para lanchonete, café e snack bar
            </Pill>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[2.75rem]">
              {HEADLINE_WORDS.map((word, i) => (
                <span key={i}>
                  <span
                    className={
                      word.highlight ? "word-reveal text-primary" : "word-reveal"
                    }
                    style={{ animationDelay: `${i * 55}ms` }}
                  >
                    {word.text}
                  </span>{" "}
                </span>
              ))}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-2">
              Sistema de PDV simples, sem curva de aprendizado, pra quem toca o
              negócio sozinho e não tem tempo pra planilha.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                variant="accent"
                className="cta-pulse"
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
            <div
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] blur-2xl"
              style={{
                background:
                  "radial-gradient(closest-side, var(--primary-3), transparent)",
              }}
            />
            <div className="overflow-hidden rounded-2xl border border-border bg-bg-elev shadow-lg">
              <div className="flex items-center gap-1.5 border-b border-border bg-bg-sunken px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-danger-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-warning-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-success-3" />
                <span className="ml-2 text-[10px] font-bold text-ink-3">
                  app.dipdv.com.br
                </span>
              </div>
              <Image
                src="/screenshots/pdv-grid.png"
                alt="Tela do PDV DiPDV com produtos e comanda aberta"
                width={1914}
                height={1021}
                className="h-auto w-full"
                priority
              />
            </div>
            <p className="mt-3 text-center text-[11px] text-ink-4">
              Captura de tela real do DiPDV em uso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
