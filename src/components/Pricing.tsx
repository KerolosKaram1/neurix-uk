import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

type Tier = {
  name: string;
  tagline: string;
  monthly: number | null;
  annual: number | null;
  cta: string;
  highlight?: boolean;
  bullets: string[];
};

const tiers: Tier[] = [
  {
    name: "Starter",
    tagline: "For curious minds.",
    monthly: 0,
    annual: 0,
    cta: "Start Free",
    bullets: ["50 summaries / month", "Basic knowledge graph", "Chrome extension", "Community support"],
  },
  {
    name: "Pro",
    tagline: "For power users.",
    monthly: 12,
    annual: 9.6,
    cta: "Upgrade to Pro",
    highlight: true,
    bullets: ["Unlimited summaries", "Advanced code generation", "Unlimited graph nodes", "Priority email support"],
  },
  {
    name: "Enterprise",
    tagline: "For teams.",
    monthly: null,
    annual: null,
    cta: "Contact Sales",
    bullets: ["SSO / SAML", "Custom model fine-tuning", "Dedicated success manager", "On-prem option"],
  },
];

const matrix: { feature: string; values: (boolean | string)[] }[] = [
  { feature: "Summaries / month", values: ["50", "Unlimited", "Unlimited"] },
  { feature: "Knowledge graph", values: [true, true, true] },
  { feature: "Code generation", values: [false, true, true] },
  { feature: "Team workspaces", values: [false, false, true] },
  { feature: "SSO / SAML", values: [false, false, true] },
  { feature: "Custom fine-tuning", values: [false, false, true] },
];

export const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="container py-24">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-[0.2em] text-secondary">Pricing</span>
        <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Simple, fair, and ethical.</h2>
        <p className="mt-4 text-muted-foreground">
          Start free. Upgrade when your second brain needs more room.
        </p>
      </div>

      {/* Toggle */}
      <div className="flex items-center justify-center mb-12">
        <div className="relative inline-flex items-center p-1 rounded-full glass">
          {(["Monthly", "Annually"] as const).map((label, i) => {
            const active = (i === 1) === annual;
            return (
              <button
                key={label}
                onClick={() => setAnnual(i === 1)}
                className={`relative z-10 px-5 py-2 text-sm rounded-full transition-colors btn-press ${
                  active ? "text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
                {label === "Annually" && (
                  <span className="ml-2 text-[10px] font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-1.5 py-0.5 rounded-full">
                    Save 20%
                  </span>
                )}
                {active && (
                  <motion.span
                    layoutId="pricing-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-brand-gradient"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tiers */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-stretch">
        {tiers.map((t, idx) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`relative flex-1 max-w-md mx-auto lg:mx-0 rounded-2xl p-7 ${
              t.highlight
                ? "glass-strong border-2 border-primary/60 shadow-glow"
                : "glass"
            }`}
          >
            {t.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-gradient text-[11px] font-semibold text-white">
                Most Popular
              </div>
            )}

            <h3 className="text-xl font-bold text-foreground">{t.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{t.tagline}</p>

            <div className="mt-6 flex items-end gap-1">
              {t.monthly === null ? (
                <span className="text-4xl font-bold font-display">Custom</span>
              ) : (
                <>
                  <span className="text-5xl font-bold font-display">
                    ${annual ? t.annual : t.monthly}
                  </span>
                  <span className="text-sm text-muted-foreground mb-2">/ mo</span>
                </>
              )}
            </div>
            {t.monthly !== null && annual && (
              <p className="text-xs text-muted-foreground mt-1">Billed annually</p>
            )}

            <button
              className={`mt-6 w-full py-2.5 rounded-full text-sm font-semibold btn-press transition-shadow ${
                t.highlight
                  ? "bg-brand-gradient text-white shadow-glow hover:shadow-glow-cyan"
                  : "bg-white/10 hover:bg-white/15 text-foreground border border-white/10"
              }`}
            >
              {t.cta}
            </button>

            <ul className="mt-6 space-y-3">
              {t.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                  <Check className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Comparison matrix */}
      <div className="mt-20 max-w-4xl mx-auto rounded-2xl glass overflow-hidden">
        <div className="grid grid-cols-4 px-6 py-4 border-b border-white/10 text-sm">
          <div className="text-muted-foreground">Compare features</div>
          {tiers.map((t) => (
            <div key={t.name} className="text-center font-semibold text-foreground">
              {t.name}
            </div>
          ))}
        </div>
        {matrix.map((row, i) => (
          <div
            key={row.feature}
            className={`grid grid-cols-4 px-6 py-4 text-sm items-center ${
              i % 2 ? "bg-white/[0.02]" : ""
            }`}
          >
            <div className="text-foreground/90">{row.feature}</div>
            {row.values.map((v, idx) => (
              <div key={idx} className="text-center">
                {typeof v === "boolean" ? (
                  v ? (
                    <Check className="h-4 w-4 text-emerald-400 inline" />
                  ) : (
                    <X className="h-4 w-4 text-gray-600 inline" />
                  )
                ) : (
                  <span className="text-foreground/90">{v}</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
