import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, estabelecimento, whatsapp, interesse, mensagem } = body;

    if (!nome || !whatsapp) {
      return NextResponse.json(
        { error: "Nome e WhatsApp são obrigatórios." },
        { status: 400 }
      );
    }

    const from = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const to = process.env.RESEND_TO_EMAIL;

    if (!process.env.RESEND_API_KEY || !to) {
      // Modo de desenvolvimento: não envia e-mail real, apenas simula sucesso.
      console.log("[CONTACT LEAD - DEV MODE]", {
        nome,
        estabelecimento,
        whatsapp,
        interesse,
        mensagem,
      });
      return NextResponse.json(
        { ok: true, dev: true, message: "Lead recebido (modo desenvolvimento)." },
        { status: 200 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      subject: `Novo orçamento DiPDV — ${nome}`,
      text: [
        `Novo pedido de orçamento recebido pela landing page.`,
        ``,
        `Nome: ${nome}`,
        `Estabelecimento: ${estabelecimento || "Não informado"}`,
        `WhatsApp: ${whatsapp}`,
        `Interesse: ${interesse || "Não informado"}`,
        ``,
        `Mensagem:`,
        mensagem || "Nenhuma mensagem.",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Erro ao enviar e-mail." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Erro interno ao processar solicitação." },
      { status: 500 }
    );
  }
}
