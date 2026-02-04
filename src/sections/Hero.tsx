import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Data, Tech & AI
            <span className="block text-primary">Consultancy</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            We help businesses harness the power of data and artificial
            intelligence to drive growth, efficiency, and innovation.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
