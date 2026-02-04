import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-primary py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl text-primary-foreground md:text-4xl">
            Let's Work Together
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Ready to transform your business with data and AI? Get in touch to
            discuss how we can help.
          </p>

          <div className="mt-10">
            <a
              href="mailto:hello@capebridge.com.au"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <Mail className="h-5 w-5" />
              hello@capebridge.com.au
            </a>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/60">
            Based in Australia, working with clients globally.
          </p>
        </div>
      </div>
    </section>
  );
}
