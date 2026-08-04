"use client";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "success" | "light" | "outline-light" | "outline";
  asChild?: boolean;
}

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[10px] px-5 py-2.5 text-sm font-bold transition-transform active:scale-[0.98]",
        variant === "primary" && "bg-primary text-white hover:opacity-95",
        variant === "success" && "bg-success-3 text-success-ink hover:opacity-95",
        variant === "light" && "bg-white text-primary-ink hover:opacity-95",
        variant === "outline-light" &&
          "border border-white/30 bg-white/[0.12] text-white hover:bg-white/20",
        variant === "outline" &&
          "border border-border bg-bg-elev text-ink hover:bg-bg-sunken",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
