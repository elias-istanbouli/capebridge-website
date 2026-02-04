import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { DataVizBackground } from "@/components/ui/DataVizBackground";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Animated data-viz background */}
      <DataVizBackground />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow text */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Data, Tech & AI Consultancy
          </p>

          {/* Main headline */}
          <h1 className="text-4xl tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Transform Your Business{" "}
            <span className="text-primary">with Data & AI</span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            We partner with forward-thinking organisations to unlock the power
            of their data. From strategy to implementation, we deliver solutions
            that drive real business outcomes.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="gap-2 px-8"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8"
            >
              Explore Services
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Trusted by organisations across Australia
            </p>
            <div className="flex items-center gap-8 opacity-60">
              {/* Placeholder for client logos - these would be replaced with actual logos */}
              <div className="h-8 w-24 rounded bg-muted" />
              <div className="hidden h-8 w-24 rounded bg-muted sm:block" />
              <div className="hidden h-8 w-24 rounded bg-muted md:block" />
              <div className="hidden h-8 w-24 rounded bg-muted lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
