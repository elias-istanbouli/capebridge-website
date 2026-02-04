import { ArrowUpRight, BookOpen } from "lucide-react";

const resources = [
  {
    title: "Cloud Architecture Guide",
    description:
      "A comprehensive reference guide for cloud architecture best practices across AWS, Azure, and GCP.",
    href: "https://guide.capebridge.com.au",
    tag: "Guide",
  },
];

export function Resources() {
  return (
    <section id="resources" className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl text-foreground md:text-4xl">Resources</h2>
          <p className="mt-4 text-muted-foreground">
            Free technical guides and resources to help you on your data and AI
            journey.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-sans text-lg font-semibold text-foreground">
                    {resource.title}
                  </h3>
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                    {resource.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {resource.description}
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
