import { CheckCircle2 } from "lucide-react";

const values = [
  "Deep technical expertise across data and AI",
  "Pragmatic, business-focused approach",
  "Transparent communication and collaboration",
  "Commitment to knowledge transfer",
];

export function About() {
  return (
    <section id="about" className="bg-secondary/50 py-20 md:py-28">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <h2 className="text-3xl text-foreground md:text-4xl">
              About Cape Bridge
            </h2>
            <p className="mt-6 text-muted-foreground">
              Cape Bridge is a Data, Tech & AI consultancy based in Australia.
              We partner with businesses of all sizes to unlock the value of
              their data and implement practical AI solutions.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our team brings decades of combined experience across startups,
              enterprises, and everything in between. We believe in doing the
              hard technical work while keeping things simple and understandable
              for our clients.
            </p>

            <ul className="mt-8 space-y-3">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
