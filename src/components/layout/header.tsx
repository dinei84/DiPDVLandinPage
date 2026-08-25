"use client";

import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/layout/social-links";

const NAV_LINKS = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#modulos", label: "Módulos" },
  { href: "#precos", label: "Preços" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg-elev/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <a
          href="#top"
          className="focusable rounded-md"
          aria-label="DiPDV — início"
        >
          <Logo size="lg" />
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-ink-2 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <SocialLinks className="hidden sm:flex" />
          <Button
            variant="accent"
            className="px-4 py-2 text-xs"
            onClick={() => {
              document
                .getElementById("contato")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Agendar demonstração
          </Button>
        </div>
      </div>
    </header>
  );
}
