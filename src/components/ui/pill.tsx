import { cn } from "@/lib/utils";

interface PillProps {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "success" | "ghost-light";
  className?: string;
}

export function Pill({ children, variant = "primary", className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold tracking-wide",
        variant === "primary" && "bg-primary-3 text-primary-ink",
        variant === "accent" && "bg-accent-3 text-accent-ink",
        variant === "success" && "bg-success-3 text-success-ink",
        variant === "ghost-light" && "bg-white/15 text-white",
        className
      )}
    >
      {children}
    </span>
  );
}
