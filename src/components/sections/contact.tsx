"use client";

import { useState } from "react";
import { Pill } from "@/components/ui/pill";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "47999527711";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export function ContactSection() {
  const [interesse, setInteresse] = useState("Plano Completo");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setErrors({});

    const formData = new FormData(form);
    const data = {
      nome: String(formData.get("nome") || "").trim(),
      estabelecimento: String(formData.get("estabelecimento") || "").trim(),
      whatsapp: String(formData.get("whatsapp") || "").trim(),
      interesse,
      mensagem: String(formData.get("mensagem") || "").trim(),
    };

    const nextErrors: Record<string, string> = {};
    if (!data.nome) nextErrors.nome = "Informe seu nome.";
    if (!data.whatsapp) nextErrors.whatsapp = "Informe seu WhatsApp.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Erro ao enviar");
      setStatus("success");
      form.reset();
      setInteresse("Plano Completo");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contato" className="bg-bg-elev py-14 md:py-20">
      <div className="mx-auto max-w-xl px-6">
        <Pill variant="primary" className="mb-4">
          Fale com a gente
        </Pill>
        <h2 className="text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
          Peça seu orçamento
        </h2>
        <p className="mt-2 text-sm text-ink-3">
          Resposta em até 2h, direto com quem desenvolve o sistema.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block text-xs font-bold text-ink-2">
              Seu nome
            </label>
            <input
              name="nome"
              type="text"
              placeholder="Como podemos te chamar?"
              className="w-full rounded-[10px] border border-border bg-bg-elev px-3.5 py-2.5 text-sm text-ink outline-none focus:border-primary"
            />
            {errors.nome && (
              <p className="mt-1 text-xs text-danger">{errors.nome}</p>
            )}
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-bold text-ink-2">
              Nome do estabelecimento
            </label>
            <input
              name="estabelecimento"
              type="text"
              placeholder="Ex: Lanchonete do Du"
              className="w-full rounded-[10px] border border-border bg-bg-elev px-3.5 py-2.5 text-sm text-ink outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-bold text-ink-2">
              WhatsApp
            </label>
            <input
              name="whatsapp"
              type="tel"
              placeholder="(00) 00000-0000"
              className="w-full rounded-[10px] border border-border bg-bg-elev px-3.5 py-2.5 text-sm text-ink outline-none focus:border-primary"
            />
            {errors.whatsapp && (
              <p className="mt-1 text-xs text-danger">{errors.whatsapp}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold text-ink-2">
              O que você precisa?
            </label>
            <div className="flex flex-wrap gap-2">
              {["Plano Base", "Plano Completo", "Ainda não sei"].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setInteresse(opt)}
                  className="rounded-full px-3.5 py-2 text-xs font-bold transition-colors"
                  style={{
                    backgroundColor:
                      interesse === opt ? "var(--primary-3)" : "var(--bg-elev)",
                    color:
                      interesse === opt ? "var(--primary-ink)" : "var(--ink-2)",
                    border:
                      interesse === opt
                        ? "1px solid var(--primary)"
                        : "1px solid var(--border)",
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-bold text-ink-2">
              Mensagem{" "}
              <span className="font-medium text-ink-3">(opcional)</span>
            </label>
            <textarea
              name="mensagem"
              rows={3}
              placeholder="Conta um pouco sobre o seu negócio..."
              className="w-full resize-none rounded-[10px] border border-border bg-bg-elev px-3.5 py-2.5 text-sm text-ink outline-none focus:border-primary"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            className="mt-1 w-full"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Enviando..." : "Solicitar orçamento →"}
          </Button>

          {status === "success" && (
            <p className="text-center text-sm text-success">
              Mensagem enviada! Entraremos em contato em até 2h.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-danger">
              Não foi possível enviar. Tente novamente ou fale pelo WhatsApp.
            </p>
          )}

          <p className="text-center text-xs text-ink-3">
            Ou prefere direto?{" "}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary hover:underline"
            >
              Chamar no WhatsApp →
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
