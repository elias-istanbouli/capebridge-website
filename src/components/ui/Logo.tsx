import { cn } from "@/lib/utils";

interface LogoProps {
  size?: number;
  variant?: "default" | "white";
  className?: string;
}

export function Logo({ size = 36, variant = "default", className }: LogoProps) {
  const isWhite = variant === "white";

  // Scale text size proportionally to icon size
  const textSize = size * 0.5; // Roughly half the icon height for text

  return (
    <div className={cn("group flex items-center gap-2", className)}>
      {/* SVG Icon — Wave + Bridge */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        {/* Wave path (navy) — flows left to right with a peak */}
        <path
          d="M4 28 C8 28, 12 26, 16 22 C20 18, 22 14, 26 14 C30 14, 32 18, 34 22"
          stroke={isWhite ? "white" : "var(--navy)"}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="transition-transform duration-300 ease-out group-hover:-translate-x-0.5"
        />

        {/* Bridge path (teal) — crosses over the wave */}
        <path
          d="M22 32 C26 28, 28 24, 30 20 C32 16, 36 14, 40 14 C42 14, 44 15, 46 16"
          stroke={isWhite ? "white" : "var(--teal)"}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
        />
      </svg>

      {/* Text wordmark */}
      <span
        className="flex items-baseline gap-0.5 font-sans"
        style={{ fontSize: `${textSize}px` }}
      >
        <span
          className={cn(
            "font-semibold transition-all duration-300 ease-out",
            isWhite ? "text-white" : "text-navy"
          )}
        >
          Cape
        </span>
        <span
          className={cn(
            "font-medium transition-all duration-300 ease-out",
            isWhite ? "text-white" : "text-teal"
          )}
        >
          Bridge
        </span>
      </span>
    </div>
  );
}
