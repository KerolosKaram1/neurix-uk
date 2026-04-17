import { Logo } from "./Logo";
import { Phone, Mail, Globe, Clock, ArrowRight, Linkedin, Facebook, Youtube } from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: XIcon, label: "X", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const partners = ["NOVASYS", "QUANTIC", "HELIOX", "ATLAS.AI", "VERTEX", "ORBIT"];

const contactItems = [
  { icon: Phone, label: "Phone / WhatsApp", value: "011 1000 35 00", href: "tel:01110003500" },
  { icon: Mail, label: "Email", value: "info@neurix.uk", href: "mailto:info@neurix.uk" },
  { icon: Globe, label: "Web", value: "neurix.uk", href: "https://neurix.uk" },
  { icon: Clock, label: "Hours", value: "09:00 — 17:00" },
];

export const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-surface">
      {/* Conversion strip */}
      <div className="container pt-24 pb-20">
        <div className="card-blueprint p-10 md:p-16 relative overflow-hidden text-center">
          <div className="absolute inset-0 blueprint-grid-fine opacity-40" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 50% 0%, hsl(var(--primary) / 0.10), transparent 70%)",
            }}
          />
          <div className="relative max-w-3xl mx-auto">
            <span className="chip mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="mono">Get in touch</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Let's <span className="text-gradient">Build the Future.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-base md:text-lg">
              Cutting-edge, end-to-end technology solutions thoughtfully designed
              to address your business challenges, drive growth, and create lasting impact.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="mailto:info@neurix.uk"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-soft hover:shadow-glow transition-all btn-press"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Contact grid */}
            <ul className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li
                  key={label}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-colors"
                >
                  <span className="grid place-items-center h-9 w-9 rounded-lg bg-accent text-primary shrink-0">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-foreground font-medium hover:text-primary transition-colors break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="text-sm text-foreground font-medium">{value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Partners strip */}
      <div className="border-t border-border">
        <div className="container py-12">
          <div className="text-center mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Trusted by forward-thinking teams
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 items-center">
            {partners.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center h-10 text-muted-foreground/70 hover:text-foreground transition-colors mono text-sm font-semibold tracking-[0.15em]"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo size="sm" />

          <div className="flex items-center gap-2 order-3 md:order-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid place-items-center h-9 w-9 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/40 hover:scale-105 transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 order-2 md:order-3">
            <div className="flex items-center gap-5 text-xs text-muted-foreground">
              <a href="#ethics" className="hover:text-foreground transition-colors">Ethics</a>
              <a href="#mission" className="hover:text-foreground transition-colors">Mission</a>
              <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
            </div>
            <div className="text-xs text-muted-foreground mono">
              © 2026 Neurix
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
