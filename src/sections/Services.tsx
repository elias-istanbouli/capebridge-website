import {
  Database,
  BarChart3,
  FlaskConical,
  Brain,
  TrendingUp,
  PieChart,
} from "lucide-react";
import { SectionWrapper, Card, Button } from "@/components/ui";

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

export function Services() {
  return (
    <SectionWrapper id="services">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          End-to-end data and AI solutions to accelerate your digital
          transformation.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} hover>
            <div className="group">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-muted-foreground">
          Ready to transform your data into a competitive advantage?
        </p>
        <div className="mt-6">
          <Button
            size="lg"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
