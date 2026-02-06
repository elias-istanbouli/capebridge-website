import { Logo } from "../ui";

/** Faint blueprint grid on dark background — white lines at 3% opacity */
function FooterGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.03" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-grid)" />
      </svg>
    </div>
  );
}

/** SVG ruler line with tick marks — construction-line aesthetic */
function RulerLine() {
  // Generate tick positions across the ruler width
  const majorTicks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const minorTicks = [5, 15, 25, 35, 45, 55, 65, 75, 85, 95];

  return (
    <svg
      className="w-full"
      height="8"
      viewBox="0 0 1000 8"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Main horizontal line */}
      <line x1="0" y1="0" x2="1000" y2="0" stroke="white" strokeWidth="1" opacity="0.15" />

      {/* Major tick marks */}
      {majorTicks.map((pos) => (
        <line
          key={`major-${pos}`}
          x1={pos * 10}
          y1="0"
          x2={pos * 10}
          y2="6"
          stroke="white"
          strokeWidth="1"
          opacity="0.15"
        />
      ))}

      {/* Minor tick marks */}
      {minorTicks.map((pos) => (
        <line
          key={`minor-${pos}`}
          x1={pos * 10}
          y1="0"
          x2={pos * 10}
          y2="3"
          stroke="white"
          strokeWidth="0.5"
          opacity="0.10"
        />
      ))}
    </svg>
  );
}

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

const resourceLinks = [
  {
    label: "Cloud Architecture Guide",
    href: "https://guide.capebridge.com.au",
    external: true,
  },
];

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

function FooterLink({ href, children, external }: FooterLinkProps) {
  return (
    <li>
      <a
        href={href}
        className="group/link inline-flex items-center gap-1 text-sm text-white/60 transition-colors duration-[var(--duration-base)] hover:text-white"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {/* Arrow slides in from left on hover */}
        <span className="inline-block w-0 overflow-hidden opacity-0 transition-all duration-[var(--duration-fast)] ease-out group-hover/link:w-4 group-hover/link:opacity-100">
          &rarr;
        </span>
        {children}
      </a>
    </li>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy">
      <FooterGrid />

      <div className="container relative py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand Block */}
          <div className="flex flex-col items-center md:col-span-2 md:items-start">
            <Logo variant="white" size={28} />
            <p className="mt-2 text-sm tracking-[0.03em] text-white/70">
              Your path, properly built
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60 max-md:mx-auto">
              Data, Tech &amp; AI Consultancy based in Australia. We help
              businesses harness the power of data and artificial intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-medium uppercase tracking-[0.05em] text-white/70">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-medium uppercase tracking-[0.05em] text-white/70">
              Resources
            </h4>
            <ul className="mt-4 space-y-2">
              {resourceLinks.map((link) => (
                <FooterLink key={link.href} href={link.href} external={link.external}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar — Ruler + Copyright */}
        <div className="mt-12 pt-6">
          <RulerLine />
          <div className="mt-4 flex flex-col items-center justify-between gap-2 md:flex-row">
            <p className="text-xs text-white/50">
              &copy; {currentYear} Cape Bridge. All rights reserved.
            </p>
            <p className="text-xs text-white/50">ABN: XX XXX XXX XXX</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
