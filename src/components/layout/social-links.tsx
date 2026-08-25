import {
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/ui/social-icons";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "47999527711";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        title="Falar no WhatsApp"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-2 transition-colors hover:border-primary hover:text-primary"
      >
        <WhatsAppIcon className="h-4 w-4" />
      </a>
      <span
        aria-label="Instagram — em breve"
        title="Instagram — em breve"
        className="flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-full border border-border text-ink-4 opacity-60"
      >
        <InstagramIcon className="h-4 w-4" />
      </span>
      <span
        aria-label="Facebook — em breve"
        title="Facebook — em breve"
        className="flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-full border border-border text-ink-4 opacity-60"
      >
        <FacebookIcon className="h-4 w-4" />
      </span>
    </div>
  );
}
