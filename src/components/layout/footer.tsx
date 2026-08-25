import { Logo } from "@/components/ui/logo";
import { SocialLinks } from "@/components/layout/social-links";

const NAV_LINKS = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#modulos", label: "Módulos" },
  { href: "#precos", label: "Preços" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elev py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <Logo size="lg" />
          <p className="max-w-xs text-sm leading-relaxed text-ink-3">
            Sistema de PDV simples pra lanchonete, café e snack bar. Sua
            comanda de papel vira venda registrada em segundos.
          </p>
          <SocialLinks />
        </div>

        <nav className="flex flex-col gap-2">
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
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-border px-6 pt-6">
        <p className="text-xs text-ink-4">
          © {new Date().getFullYear()} DiPDV. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
