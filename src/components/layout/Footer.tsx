export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-display text-xl text-primary">Cape Bridge</span>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Data, Tech & AI Consultancy based in Australia. We help businesses
              harness the power of data and artificial intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-sm font-semibold text-foreground">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#resources"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-sans text-sm font-semibold text-foreground">
              Resources
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://guide.capebridge.com.au"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cloud Architecture Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Cape Bridge. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            ABN: XX XXX XXX XXX
          </p>
        </div>
      </div>
    </footer>
  );
}
