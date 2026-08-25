"use client";

import { useState } from "react";
import { Pill } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";

const faqs = [
  {
    q: "Trocar de sistema é difícil?",
    a: "Não. A gente te ajuda a migrar o cardápio e configurar tudo — o processo é acompanhado pessoalmente, não é você sozinho lendo manual.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim. O DiPDV roda no navegador, funciona em celular, tablet ou computador, sem precisar instalar nada.",
  },
  {
    q: "Precisa de internet o tempo todo?",
    a: "O sistema funciona pela internet, o que mantém suas vendas sempre seguras e sincronizadas em qualquer dispositivo que você usar.",
  },
  {
    q: "Como funciona o suporte?",
    a: "Direto pelo WhatsApp, com quem desenvolve o sistema — sem fila, sem central terceirizada.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-bg-elev py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <Pill variant="primary" className="mb-4">
            Perguntas frequentes
          </Pill>
          <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
            Dúvidas comuns
          </h2>
        </Reveal>

        <div className="flex flex-col gap-3">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <Reveal key={idx} delay={idx * 70}>
                <div className="overflow-hidden rounded-xl border border-border">
                  <button
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between px-4 py-3.5 text-left"
                    style={{
                      backgroundColor: isOpen
                        ? "var(--primary-3)"
                        : "var(--bg-elev)",
                    }}
                  >
                    <span className="text-sm font-bold text-ink">{item.q}</span>
                    <span
                      className="text-ink-3 transition-transform"
                      style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
                    >
                      ▾
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1">
                      <p className="text-sm leading-relaxed text-ink-2">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
