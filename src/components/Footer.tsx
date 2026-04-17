import { Logo } from "./Logo";
import { Phone, Mail, Globe, Clock, ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-surface">
      <div className="container pt-20 pb-16">
        <div className="card-blueprint p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-fine opacity-50" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 80% 50%, hsl(var(--primary) / 0.10), transparent 70%)",
            }}
          />
          <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy leading-tight">
                Let's <span className="text-gradient">Build the Future.</span>
              </h2>
              <p className="mt-5 text-muted-foreground text-lg max-w-xl">
                We are committed to delivering cutting-edge, end-to-end technology solutions
                thoughtfully designed to address your business challenges, drive growth, and
                create lasting impact.
              </p>
              <div className="mt-8">
                <a
                  href="mailto:info@neurix.uk"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-soft hover:shadow-glow transition-shadow btn-press"
                >
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <ul className="space-y-3 text-sm">
              {[
                { icon: Phone, label: "Phone / WhatsApp", value: "011 1000 35 00", href: "tel:01110003500" },
                { icon: Mail, label: "Email", value: "info@neurix.uk", href: "mailto:info@neurix.uk" },
                { icon: Globe, label: "Web", value: "neurix.uk", href: "https://neurix.uk" },
                { icon: Clock, label: "Hours", value: "Open 09:00 am – 05:00 pm" },
              ].map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-3 p-3 rounded-xl border border-border bg-card">
                  <span className="grid place-items-center h-9 w-9 rounded-lg bg-accent text-primary shrink-0">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
                    {href ? (
                      <a href={href} className="text-foreground font-medium hover:text-primary transition-colors break-all">
                        {value}
                      </a>
                    ) : (
                      <div className="text-foreground font-medium">{value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo size="sm" />
          <div className="text-xs text-muted-foreground mono">
            Copyright © 2026 Neurix. All Rights Reserved.
          </div>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <a href="#ethics" className="hover:text-foreground transition-colors">Ethics</a>
            <a href="#mission" className="hover:text-foreground transition-colors">Mission</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
