import { cn } from "@/lib/utils";

interface DataVizBackgroundProps {
  className?: string;
}

export function DataVizBackground({ className }: DataVizBackgroundProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3" />

      {/* Animated grid pattern */}
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="30"
              cy="30"
              r="1.5"
              className="fill-primary/20"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      {/* Floating animated nodes */}
      <div className="absolute inset-0">
        {/* Large floating circle - top right */}
        <div
          className="absolute right-[10%] top-[15%] h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-float-slow"
        />

        {/* Medium floating circle - bottom left */}
        <div
          className="absolute bottom-[20%] left-[5%] h-48 w-48 rounded-full bg-primary/8 blur-2xl animate-float-medium"
        />

        {/* Small floating circle - center */}
        <div
          className="absolute left-[40%] top-[60%] h-32 w-32 rounded-full bg-primary/6 blur-xl animate-float-fast"
        />
      </div>

      {/* Connection lines SVG */}
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="[stop-color:var(--primary)]" stopOpacity="0" />
            <stop offset="50%" className="[stop-color:var(--primary)]" stopOpacity="0.3" />
            <stop offset="100%" className="[stop-color:var(--primary)]" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Diagonal connection lines */}
        <line
          x1="10%"
          y1="20%"
          x2="40%"
          y2="80%"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          className="animate-pulse-slow"
        />
        <line
          x1="60%"
          y1="10%"
          x2="90%"
          y2="60%"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          className="animate-pulse-slow [animation-delay:1s]"
        />
        <line
          x1="30%"
          y1="5%"
          x2="70%"
          y2="45%"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          className="animate-pulse-slow [animation-delay:2s]"
        />
      </svg>

      {/* Data nodes - small dots at intersections */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute left-[20%] top-[30%] h-2 w-2 rounded-full bg-primary/40 animate-ping-slow" />
        <div className="absolute right-[25%] top-[20%] h-2 w-2 rounded-full bg-primary/30 animate-ping-slow [animation-delay:0.5s]" />
        <div className="absolute bottom-[35%] left-[35%] h-2 w-2 rounded-full bg-primary/35 animate-ping-slow [animation-delay:1s]" />
        <div className="absolute right-[15%] bottom-[25%] h-2 w-2 rounded-full bg-primary/25 animate-ping-slow [animation-delay:1.5s]" />
      </div>
    </div>
  );
}
