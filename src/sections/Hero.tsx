import { ArrowRight } from "lucide-react";
import { BlueprintBackground, HeroAnimation } from "@/components/ui";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Blueprint grid background */}
      <BlueprintBackground />

      {/* Hero animation — wave/bridge stroke draw */}
      <HeroAnimation />

      <div className="container relative z-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Tagline as eyebrow */}
          <p className="mb-4 text-xs font-medium tracking-[0.05em] text-navy">
            Your path, properly built
          </p>

          {/* Main headline */}
          <h1 className="text-4xl font-bold tracking-[-0.02em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Transform Your Business{" "}
            <span className="text-teal">with Data & AI</span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            We partner with forward-thinking organisations to unlock the power
            of their data. From strategy to implementation, we deliver solutions
            that drive real business outcomes.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-sm bg-navy px-6 py-3 text-sm font-medium tracking-[0.02em] text-white transition-colors hover:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              className="btn-secondary w-full sm:w-auto"
              onClick={() => {
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
