import { Wrench, Target, GraduationCap } from "lucide-react";
import { SectionWrapper, SpecSheet } from "@/components/ui";

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

const specData = [
  { label: "Experience", value: "10+ Years" },
  { label: "Projects Delivered", value: "50+" },
  { label: "Cloud Platforms", value: "AWS, Azure, GCP" },
  { label: "Location", value: "Australia" },
];

export function About() {
  return (
    <SectionWrapper id="about" className="bg-muted">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column - Content */}
        <div>
          <h2 className="text-3xl font-bold tracking-[-0.01em] text-foreground md:text-4xl">
            Why Cape Bridge
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            <span className="font-medium text-navy">
              Your path, properly built
            </span>{" "}
            — that's our philosophy. We're an Australian data and AI consultancy
            with experience spanning startups to enterprises. Our focus is
            simple: deliver practical solutions that create real business value
            — no unnecessary complexity, no buzzword bingo.
          </p>

          {/* Differentiator Cards - left border only, inline icons */}
          <div className="mt-10 space-y-4">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="border-l-2 border-navy bg-transparent py-3 pl-4"
              >
                <div className="flex items-center gap-2">
                  <item.icon
                    className="h-5 w-5 text-navy"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA - navy style */}
          <div className="mt-10">
            <button
              className="inline-flex cursor-pointer items-center justify-center rounded-sm bg-navy px-6 py-3 text-sm font-medium tracking-[0.02em] text-white transition-colors hover:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let's Talk
            </button>
          </div>
        </div>

        {/* Right Column - SpecSheet */}
        <div>
          <SpecSheet stats={specData} />
        </div>
      </div>
    </SectionWrapper>
  );
}
