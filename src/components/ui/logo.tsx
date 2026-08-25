import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "lg";
  showTile?: boolean;
  showTick?: boolean;
  className?: string;
}

export function Logo({
  size = "sm",
  showTile = true,
  showTick = true,
  className,
}: LogoProps) {
  const isLarge = size === "lg";
  const tickVisible = showTile && showTick && isLarge;

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      {showTile && (
        <span className="relative inline-flex flex-shrink-0">
          <span
            className={cn(
              "flex items-center justify-center rounded-xl bg-primary font-extrabold text-white",
              isLarge ? "h-11 w-11 text-lg" : "h-8 w-8 text-sm"
            )}
          >
            Di
          </span>
          {tickVisible && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent ring-2 ring-bg-elev">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-2.5 w-2.5"
                aria-hidden="true"
              >
                <path
                  d="M5 12.5L10 17.5L19 7"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}
        </span>
      )}
      <span
        className={cn(
          "font-extrabold tracking-tight text-ink",
          isLarge ? "text-2xl md:text-3xl" : "text-lg"
        )}
      >
        Di<span className="text-primary">PDV</span>
      </span>
    </span>
  );
}
