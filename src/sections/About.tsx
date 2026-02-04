import { Wrench, Target, GraduationCap, Cloud, MapPin } from "lucide-react";
import { SectionWrapper, Card, Button } from "@/components/ui";

const differentiators = [
  {
    icon: Wrench,
    title: "Hands-On Delivery",
    description:
      "We don't just advise — we build. Our consultants work alongside your team to deliver working solutions, not slide decks.",
  },
  {
    icon: Target,
    title: "Business-First Approach",
    description:
      "Every technical decision is tied to measurable business outcomes. No tech for tech's sake — only solutions that move the needle.",
  },
  {
    icon: GraduationCap,
    title: "Knowledge Transfer",
    description:
      "We build your team's capabilities, not just deliverables. You own the solution and the expertise when we're done.",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "Multi-Cloud", label: "AWS, Azure, GCP", icon: Cloud },
  { value: "AU Based", label: "Local Timezone", icon: MapPin },
];

export function About() {
  return (
    <SectionWrapper id="about" className="bg-muted">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column - Content */}
        <div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Why Cape Bridge
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We're an Australian data and AI consultancy with experience spanning
            startups to enterprises. Our focus is simple: deliver practical
            solutions that create real business value — no unnecessary complexity,
            no buzzword bingo.
          </p>

          {/* Differentiator Cards */}
          <div className="mt-10 space-y-4">
            {differentiators.map((item) => (
              <Card key={item.title} className="p-5">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Secondary CTA */}
          <div className="mt-10">
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let's Talk
            </Button>
          </div>
        </div>

        {/* Right Column - Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-xl border bg-card p-6 text-center shadow-sm"
            >
              {stat.icon && (
                <stat.icon className="mb-2 h-6 w-6 text-primary" />
              )}
              <span className="text-2xl font-bold text-foreground md:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
