import { ArrowUpRight, Cloud, type LucideIcon } from "lucide-react";
import { SectionWrapper, Card } from "@/components/ui";

interface Guide {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  tag: string;
}

const guides: Guide[] = [
  {
    title: "Cloud Infrastructure Reference Guide",
    description:
      "A comprehensive reference guide for cloud architecture best practices across AWS, Azure, and GCP.",
    href: "https://guide.capebridge.com.au",
    icon: Cloud,
    tag: "Guide",
  },
  // Add future guides here:
  // {
  //   title: "Data Pipeline Patterns",
  //   description: "Modern approaches to building reliable data pipelines...",
  //   href: "https://pipelines.capebridge.com.au",
  //   icon: Database,
  //   tag: "Guide",
  // },
];

export function Resources() {
  return (
    <SectionWrapper id="resources">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Resources Hub
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Free technical guides and resources to help you on your data and AI
          journey.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
        {guides.map((guide) => (
          <a
            key={guide.title}
            href={guide.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <Card hover className="h-full">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <guide.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {guide.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {guide.description}
                  </p>
                  <span className="mt-3 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {guide.tag}
                  </span>
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
