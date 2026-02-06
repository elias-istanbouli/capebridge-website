import {
  Database,
  BarChart3,
  FlaskConical,
  Brain,
  TrendingUp,
  PieChart,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui";

const services = [
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Build robust data pipelines and infrastructure to collect, process, and store your data at scale.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Turn raw data into actionable insights with modern analytics platforms and real-time dashboards.",
  },
  {
    icon: FlaskConical,
    title: "Data Science",
    description:
      "Uncover hidden patterns and opportunities through statistical analysis and advanced data exploration.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Leverage artificial intelligence to automate processes, enhance decision-making, and drive innovation.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Modelling",
    description:
      "Forecast trends and outcomes with precision using custom predictive models tailored to your business.",
  },
  {
    icon: PieChart,
    title: "Business Intelligence",
    description:
      "Empower your teams with self-service BI tools and executive reporting that drives strategic decisions.",
  },
];

function CornerMarkers() {
  return (
    <>
      <span className="absolute top-0 left-0 h-2.5 w-2.5 border-t-[1.5px] border-l-[1.5px] border-blueprint/70 pointer-events-none" />
      <span className="absolute top-0 right-0 h-2.5 w-2.5 border-t-[1.5px] border-r-[1.5px] border-blueprint/70 pointer-events-none" />
      <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b-[1.5px] border-l-[1.5px] border-blueprint/70 pointer-events-none" />
      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b-[1.5px] border-r-[1.5px] border-blueprint/70 pointer-events-none" />
    </>
  );
}

export function Services() {
  return (
    <SectionWrapper id="services">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-foreground tracking-[-0.01em] md:text-4xl">
          What We Build
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          End-to-end solutions, engineered for results.
        </p>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group relative rounded-[2px] border border-blueprint/30 bg-background p-6 transition-colors duration-[250ms] ease-out hover:border-blueprint hover:bg-blueprint/[0.02]"
          >
            <CornerMarkers />

            <service.icon className="h-6 w-6 text-navy" strokeWidth={1.5} />

            <div className="mt-3 flex items-center gap-3">
              <div className="h-px w-5 bg-blueprint/40" />
              <h3 className="text-lg font-semibold text-navy">
                {service.title}
              </h3>
            </div>

            <p className="mt-2 text-sm text-muted-foreground">
              {service.description}
            </p>

            {/* Measurement line — appears on hover */}
            <div
              className="absolute bottom-2 left-4 right-4 flex items-center opacity-0 transition-opacity duration-[250ms] ease-out group-hover:opacity-100"
              aria-hidden="true"
            >
              <span className="h-[7px] w-px bg-blueprint/40" />
              <div className="h-px flex-1 bg-blueprint/40" />
              <span className="h-[7px] w-px bg-blueprint/40" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm bg-navy px-6 py-3 text-sm font-medium tracking-[0.02em] text-white transition-colors hover:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Discuss Your Project
        </button>
      </div>
    </SectionWrapper>
  );
}
