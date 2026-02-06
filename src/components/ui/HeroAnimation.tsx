import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface HeroAnimationProps {
  className?: string;
}

type AnimationPhase = "drawing" | "settling" | "settled";

/**
 * HeroAnimation — SVG overlay that draws wave and bridge paths
 * with a collision flash at their intersection, then settles into the background.
 *
 * Animation phases:
 * - Phase 1-3 (0-1.8s): Wave/bridge draw + collision flash
 * - Phase 4 (1.8-2.3s): Lines fade to 12% opacity, flash fades out
 * - Settled (2.3s+): Lines remain at 12% opacity as background
 */
export function HeroAnimation({ className }: HeroAnimationProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [phase, setPhase] = useState<AnimationPhase>("drawing");

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const motionHandler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    motionQuery.addEventListener("change", motionHandler);
    return () => motionQuery.removeEventListener("change", motionHandler);
  }, []);

  // Phase transitions based on timing
  useEffect(() => {
    if (prefersReducedMotion) return;

    // Start settling at 1.8s (after draw + flash)
    const settlingTimer = setTimeout(() => {
      setPhase("settling");
    }, 1800);

    // Fully settled at 2.3s
    const settledTimer = setTimeout(() => {
      setPhase("settled");
    }, 2300);

    return () => {
      clearTimeout(settlingTimer);
      clearTimeout(settledTimer);
    };
  }, [prefersReducedMotion]);

  // Hide animation entirely for users who prefer reduced motion
  if (prefersReducedMotion) {
    return null;
  }

  // Paths directly scaled from the Logo.tsx SVG paths
  // Logo viewBox: 48x48, Scale factor: 16x, offset: x+200, y-50
  const wavePath =
    "M 264 398 " +
    "C 328 398, 392 366, 456 302 " +
    "C 520 238, 552 174, 616 174 " +
    "C 680 174, 712 238, 744 302";

  const bridgePath =
    "M 936 206 " +
    "C 904 190, 872 174, 840 174 " +
    "C 776 174, 712 206, 680 270 " +
    "C 648 334, 616 398, 552 462";

  const isDrawing = phase === "drawing";
  const isSettling = phase === "settling";
  const isSettled = phase === "settled";

  // Opacity for settled state (visible but subtle)
  const settledOpacity = 0.15;

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-10 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Trailing glow filter for paths (only during draw) */}
          <filter id="path-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Collision flash radial gradient */}
          <radialGradient id="collision-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="0.8" />
            <stop offset="40%" stopColor="var(--teal)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--navy)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Wave path — draws left to right, then settles */}
        <path
          d={wavePath}
          fill="none"
          stroke="var(--navy)"
          strokeWidth={isSettled ? "3" : "5"}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={isDrawing ? "url(#path-glow)" : undefined}
          className="hero-wave-path"
          style={{
            strokeDasharray: isSettled ? "none" : 600,
            strokeDashoffset: isSettled ? 0 : 600,
            opacity: isSettled ? settledOpacity : undefined,
            animation: isDrawing
              ? "draw-wave 1.2s ease-out forwards"
              : isSettling
              ? "draw-wave 1.2s ease-out forwards, settle-opacity 0.5s ease-out forwards"
              : undefined,
          }}
        />

        {/* Bridge path — draws from upper-right to lower-left, then settles */}
        <path
          d={bridgePath}
          fill="none"
          stroke="var(--teal)"
          strokeWidth={isSettled ? "3" : "5"}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={isDrawing ? "url(#path-glow)" : undefined}
          className="hero-bridge-path"
          style={{
            strokeDasharray: isSettled ? "none" : 550,
            strokeDashoffset: isSettled ? 0 : 550,
            opacity: isSettled ? settledOpacity : undefined,
            animation: isDrawing
              ? "draw-bridge 1.2s ease-out forwards"
              : isSettling
              ? "draw-bridge 1.2s ease-out forwards, settle-opacity 0.5s ease-out forwards"
              : undefined,
          }}
        />

        {/* Collision flash at intersection point — fades out during settling */}
        {!isSettled && (
          <circle
            cx="665"
            cy="245"
            r="40"
            fill="url(#collision-gradient)"
            className="hero-collision-flash"
            style={{
              opacity: 0,
              transformOrigin: "665px 245px",
              animation: isDrawing
                ? "collision-flash 0.3s ease-out 1.2s forwards"
                : "collision-flash 0.3s ease-out 1.2s forwards, flash-fadeout 0.5s ease-out forwards",
            }}
          />
        )}
      </svg>
    </div>
  );
}
