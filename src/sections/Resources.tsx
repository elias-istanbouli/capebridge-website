import { ArrowUpRight, Cloud, type LucideIcon } from "lucide-react";
import { SectionWrapper } from "@/components/ui";

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
    tag: "GUIDE",
  },
  // Add future guides here:
  // {
  //   title: "Data Pipeline Patterns",
  //   description: "Modern approaches to building reliable data pipelines...",
  //   href: "https://pipelines.capebridge.com.au",
  //   icon: Database,
  //   tag: "GUIDE",
  // },
];

function DocumentCard({ guide }: { guide: Guide }) {
  const Icon = guide.icon;

  return (
    <a
      href={guide.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative flex min-h-[280px] flex-col rounded-[2px] border border-blueprint/30 bg-background transition-all duration-[250ms] ease-out hover:-translate-y-0.5 hover:shadow-md">
        {/* File tab / fold corner */}
        <div className="absolute top-0 right-0 h-5 w-5 overflow-hidden">
          <div className="absolute top-0 right-0 h-0 w-0 border-t-[20px] border-l-[20px] border-t-blueprint/15 border-l-transparent" />
        </div>

        {/* Tag — top right, bracket style */}
        <div className="absolute top-3 right-7 font-mono text-[0.65rem] tracking-wide text-blueprint/70">
          [{guide.tag}]
        </div>

        {/* Content area with left margin */}
        <div className="flex flex-1">
          {/* Left margin — lined paper */}
          <div className="relative w-8 shrink-0 border-r border-blueprint/20 transition-colors duration-[250ms] ease-out group-hover:border-blueprint/50">
            <span className="absolute top-[60px] left-full h-px w-1.5 bg-blueprint/25" />
            <span className="absolute top-[100px] left-full h-px w-1.5 bg-blueprint/25" />
            <span className="absolute top-[140px] left-full h-px w-1.5 bg-blueprint/25" />
            <span className="absolute top-[180px] left-full h-px w-1.5 bg-blueprint/25" />
          </div>

          {/* Main content */}
          <div className="flex flex-1 flex-col p-5 pt-6">
            {/* Icon — line art, no circle bg */}
            <Icon className="h-6 w-6 text-navy" strokeWidth={1.5} />

            {/* Connector line */}
            <div className="mt-3 h-px w-5 bg-blueprint/40" />

            {/* Title */}
            <h3 className="mt-3 text-lg font-semibold text-navy">
              {guide.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {guide.description}
            </p>

            {/* Bottom row — arrow indicator */}
            <div className="mt-auto flex items-center pt-4">
              <span className="text-xs font-medium text-navy/70 transition-colors duration-[250ms] group-hover:text-navy">
                Read guide
              </span>
              <ArrowUpRight className="ml-1 h-3.5 w-3.5 text-navy/50 transition-all duration-[250ms] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export function Resources() {
  return (
    <SectionWrapper id="resources">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-[-0.01em] text-foreground md:text-4xl">
          Resources Hub
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Technical resources and reference guides
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
        {guides.map((guide) => (
          <DocumentCard key={guide.title} guide={guide} />
        ))}
      </div>
    </SectionWrapper>
  );
}
