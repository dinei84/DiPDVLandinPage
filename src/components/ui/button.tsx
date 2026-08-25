"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "success" | "light" | "outline-light" | "outline";
  asChild?: boolean;
  magnetic?: boolean;
}

const MAGNETIC_STRENGTH = 0.25;
const MAGNETIC_MAX = 10;

export function Button({
  children,
  variant = "primary",
  className,
  magnetic = true,
  onMouseMove,
  onMouseLeave,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    onMouseMove?.(e);
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const clampedX = Math.max(-MAGNETIC_MAX, Math.min(MAGNETIC_MAX, x * MAGNETIC_STRENGTH));
    const clampedY = Math.max(-MAGNETIC_MAX, Math.min(MAGNETIC_MAX, y * MAGNETIC_STRENGTH));
    ref.current.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLButtonElement>) {
    onMouseLeave?.(e);
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[10px] px-5 py-2.5 text-sm font-bold transition-transform duration-150 ease-out active:scale-[0.98]",
        variant === "primary" && "bg-primary text-white hover:opacity-95",
        variant === "accent" &&
          "bg-accent text-ink shadow-md hover:opacity-95",
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
