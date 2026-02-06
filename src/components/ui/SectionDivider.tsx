import { cn } from "../../lib/utils";

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div className={cn("w-full h-12", className)} aria-hidden="true">
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {/*
          Wave-bridge motif path:
          - Starts with straight line from left edge (0,30) to (360,30)
          - Wave dips down via quadratic curve to center (600,30)
          - Bridge rises up via quadratic curve to (840,30)
          - Straight line continues to right edge (1200,30)
        */}
        <path
          d="M0,30 L360,30 Q480,50 600,30 Q720,10 840,30 L1200,30"
          stroke="var(--navy)"
          strokeWidth="1.5"
          strokeOpacity="0.12"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
