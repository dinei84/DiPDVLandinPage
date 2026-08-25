import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Watermark } from "@/components/ui/watermark";
import { BackToTop } from "@/components/ui/back-to-top";
import "@/styles/globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DiPDV — Sistema de PDV para lanchonete, café e snack bar",
  description:
    "Sistema de PDV simples, sem curva de aprendizado. Comanda digital, caixa, catálogo, Pix, cartão, iFood, WhatsApp e fidelidade. Preço transparente, sem fidelidade.",
  keywords: [
    "PDV",
    "ponto de venda",
    "lanchonete",
    "café",
    "snack bar",
    "comanda digital",
    "controle de caixa",
    "iFood",
    "WhatsApp",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://dipdv.com.br",
    siteName: "DiPDV",
    title: "DiPDV — Sua comanda de papel vira venda registrada em segundos",
    description:
      "Sistema de PDV simples para lanchonete, café e snack bar. Preço transparente, modular e sem fidelidade.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DiPDV — Sistema de PDV para lanchonete, café e snack bar",
    description:
      "Sua comanda de papel vira venda registrada em segundos. Preço transparente, modular e sem fidelidade.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fontSans.variable} ${fontMono.variable}`}>
      <body className="antialiased">
        <Watermark />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
