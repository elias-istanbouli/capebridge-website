import { cn } from "../../lib/utils";

interface BlueprintBackgroundProps {
  className?: string;
}

// Deterministic diagonal segments - positioned to look organic but reproducible
const diagonalSegments = [
  { x1: 120, y1: 80, x2: 145, y2: 55, opacity: 0.06 },
  { x1: 280, y1: 160, x2: 310, y2: 130, opacity: 0.07 },
  { x1: 450, y1: 240, x2: 420, y2: 270, opacity: 0.05 },
  { x1: 680, y1: 120, x2: 710, y2: 90, opacity: 0.08 },
  { x1: 820, y1: 320, x2: 850, y2: 350, opacity: 0.06 },
  { x1: 960, y1: 200, x2: 930, y2: 230, opacity: 0.07 },
  { x1: 1100, y1: 80, x2: 1130, y2: 50, opacity: 0.05 },
  { x1: 200, y1: 400, x2: 230, y2: 370, opacity: 0.06 },
  { x1: 540, y1: 480, x2: 510, y2: 450, opacity: 0.07 },
  { x1: 760, y1: 520, x2: 790, y2: 490, opacity: 0.05 },
];

// Construction marks at grid intersections - crosses (+) and circles
const constructionMarks: Array<{
  x: number;
  y: number;
  type: "cross" | "circle";
}> = [
  { x: 160, y: 120, type: "cross" },
  { x: 320, y: 200, type: "circle" },
  { x: 480, y: 160, type: "cross" },
  { x: 640, y: 280, type: "circle" },
  { x: 800, y: 120, type: "cross" },
  { x: 960, y: 360, type: "circle" },
  { x: 1120, y: 200, type: "cross" },
  { x: 240, y: 320, type: "circle" },
  { x: 400, y: 440, type: "cross" },
  { x: 560, y: 360, type: "circle" },
  { x: 720, y: 480, type: "cross" },
  { x: 880, y: 240, type: "circle" },
];

export function BlueprintBackground({ className }: BlueprintBackgroundProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        "motion-reduce:animate-fade-in",
        className
      )}
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Desktop grid pattern - 40px spacing */}
          <pattern
            id="blueprint-grid-desktop"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="var(--blueprint-blue)"
              strokeWidth="1"
              strokeOpacity="0.03"
            />
          </pattern>

          {/* Mobile grid pattern - 80px spacing (50% density) */}
          <pattern
            id="blueprint-grid-mobile"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="var(--blueprint-blue)"
              strokeWidth="1"
              strokeOpacity="0.03"
            />
          </pattern>

          {/* Radial gradient - center lighter, edges darker */}
          <radialGradient
            id="blueprint-vignette"
            cx="50%"
            cy="50%"
            r="70%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="white" stopOpacity="0.02" />
            <stop offset="100%" stopColor="black" stopOpacity="0.03" />
          </radialGradient>
        </defs>

        {/* Layer 1: Radial gradient vignette */}
        <rect width="100%" height="100%" fill="url(#blueprint-vignette)" />

        {/* Layer 2: Grid pattern - responsive */}
        <rect
          width="100%"
          height="100%"
          fill="url(#blueprint-grid-desktop)"
          className="hidden sm:block"
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#blueprint-grid-mobile)"
          className="block sm:hidden"
        />

        {/* Layer 3: Scattered diagonal segments */}
        <g className="hidden sm:block">
          {diagonalSegments.map((seg, i) => (
            <line
              key={`diag-${i}`}
              x1={seg.x1}
              y1={seg.y1}
              x2={seg.x2}
              y2={seg.y2}
              stroke="var(--blueprint-blue)"
              strokeWidth="1.5"
              strokeOpacity={seg.opacity}
              strokeLinecap="round"
            />
          ))}
        </g>
        {/* Mobile: fewer diagonal segments, scaled positions */}
        <g className="block sm:hidden">
          {diagonalSegments.slice(0, 5).map((seg, i) => (
            <line
              key={`diag-mobile-${i}`}
              x1={seg.x1 * 0.5}
              y1={seg.y1 * 0.8}
              x2={seg.x2 * 0.5}
              y2={seg.y2 * 0.8}
              stroke="var(--blueprint-blue)"
              strokeWidth="1"
              strokeOpacity={seg.opacity}
              strokeLinecap="round"
            />
          ))}
        </g>

        {/* Layer 4: Construction marks */}
        <g className="hidden sm:block">
          {constructionMarks.map((mark, i) =>
            mark.type === "cross" ? (
              <g key={`mark-${i}`} opacity="0.12">
                {/* Vertical line of cross */}
                <line
                  x1={mark.x}
                  y1={mark.y - 4}
                  x2={mark.x}
                  y2={mark.y + 4}
                  stroke="var(--blueprint-blue)"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                {/* Horizontal line of cross */}
                <line
                  x1={mark.x - 4}
                  y1={mark.y}
                  x2={mark.x + 4}
                  y2={mark.y}
                  stroke="var(--blueprint-blue)"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </g>
            ) : (
              <circle
                key={`mark-${i}`}
                cx={mark.x}
                cy={mark.y}
                r="4"
                fill="none"
                stroke="var(--blueprint-blue)"
                strokeWidth="1"
                strokeOpacity="0.10"
              />
            )
          )}
        </g>
        {/* Mobile: fewer construction marks, scaled positions */}
        <g className="block sm:hidden">
          {constructionMarks.slice(0, 6).map((mark, i) =>
            mark.type === "cross" ? (
              <g key={`mark-mobile-${i}`} opacity="0.10">
                <line
                  x1={mark.x * 0.5}
                  y1={mark.y * 0.8 - 3}
                  x2={mark.x * 0.5}
                  y2={mark.y * 0.8 + 3}
                  stroke="var(--blueprint-blue)"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <line
                  x1={mark.x * 0.5 - 3}
                  y1={mark.y * 0.8}
                  x2={mark.x * 0.5 + 3}
                  y2={mark.y * 0.8}
                  stroke="var(--blueprint-blue)"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </g>
            ) : (
              <circle
                key={`mark-mobile-${i}`}
                cx={mark.x * 0.5}
                cy={mark.y * 0.8}
                r="3"
                fill="none"
                stroke="var(--blueprint-blue)"
                strokeWidth="1"
                strokeOpacity="0.08"
              />
            )
          )}
        </g>
      </svg>
    </div>
  );
}
