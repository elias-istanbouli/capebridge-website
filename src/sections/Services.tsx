import { BarChart3, Brain, Cloud, Database } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Build robust data pipelines and infrastructure to collect, process, and store your data at scale.",
  },
  {
    icon: BarChart3,
    title: "Analytics & BI",
    description:
      "Transform raw data into actionable insights with modern analytics and business intelligence solutions.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Leverage artificial intelligence and machine learning to automate processes and predict outcomes.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description:
      "Design and implement scalable, secure cloud infrastructure tailored to your business needs.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl text-foreground md:text-4xl">Our Services</h2>
          <p className="mt-4 text-muted-foreground">
            End-to-end data and AI solutions to accelerate your digital
            transformation.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-sans text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
