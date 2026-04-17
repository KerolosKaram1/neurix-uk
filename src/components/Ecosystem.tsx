import { useState } from "react";
import { motion } from "framer-motion";
import logoSrc from "@/assets/neurix-logo.png";

type Node = {
  id: string;
  label: string;
  short: string;
  desc: string;
};

const nodes: Node[] = [
  { id: "plus", label: "Neurix Plus", short: "Plus", desc: "AI Plus Platform — high-level intelligence core." },
  { id: "labs", label: "Neurix Labs", short: "Labs", desc: "Advanced R&D, big data, and user intelligence." },
  { id: "tech", label: "Neurix Technology", short: "Technology", desc: "Custom software engineering, DevOps, automation." },
  { id: "hq", label: "Neurix HQ", short: "HQ", desc: "Group parent: ops, finance, HR, brand governance." },
  { id: "ai", label: "Neurix AI", short: "AI", desc: "AI applications, NLP, and computer vision models." },
  { id: "club", label: "Neurix Club", short: "Club", desc: "Global community of innovators and partners." },
];

// Symmetrical hexagonal layout (6 nodes evenly spaced around a center)
// Angles: -90, -30, 30, 90, 150, 210 (top, top-right, bottom-right, bottom, bottom-left, top-left)
const angles = [-90, -30, 30, 90, 150, 210];
const RADIUS = 38; // % from center

const positions = angles.map((deg) => {
  const rad = (deg * Math.PI) / 180;
  return {
    x: 50 + RADIUS * Math.cos(rad),
    y: 50 + RADIUS * Math.sin(rad),
  };
});

export const Ecosystem = () => {
  const [active, setActive] = useState<Node>(nodes[0]);

  return (
    <section id="ecosystem" className="py-28 bg-surface border-y border-border">
      <div className="container">
        <header className="max-w-2xl">
          <div className="chip">
            <span className="mono uppercase tracking-wider">The Ecosystem</span>
          </div>
          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-navy leading-tight">
            Six divisions. <span className="text-gradient">One intelligent core.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Specialized teams operating autonomously, unified by a single intelligent core.
          </p>
        </header>

        <div className="mt-14 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
          {/* Diagram */}
          <div className="relative aspect-square max-w-[640px] w-full mx-auto card-blueprint p-8 overflow-hidden">
            <div className="absolute inset-0 blueprint-grid-fine opacity-60" />

            {/* Concentric guide rings */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <radialGradient id="ringFade" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="38" fill="none" stroke="hsl(var(--primary) / 0.18)" strokeWidth="0.18" />
              <circle cx="50" cy="50" r="26" fill="none" stroke="hsl(var(--primary) / 0.12)" strokeWidth="0.15" strokeDasharray="0.6 0.8" />
              <circle cx="50" cy="50" r="14" fill="url(#ringFade)" />

              {/* Clean spokes from center to each node */}
              {positions.map((p, i) => {
                const isActive = active.id === nodes[i].id;
                return (
                  <line
                    key={i}
                    x1="50"
                    y1="50"
                    x2={p.x}
                    y2={p.y}
                    stroke={isActive ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.28)"}
                    strokeWidth={isActive ? "0.35" : "0.2"}
                    strokeLinecap="round"
                  />
                );
              })}
            </svg>

            {/* Center: Neurix logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="logo-chip rounded-2xl px-5 py-3 shadow-glow ring-4 ring-primary/10">
                <img src={logoSrc} alt="Neurix" className="h-9 w-auto" />
              </div>
            </div>

            {/* Outer nodes */}
            {nodes.map((n, i) => {
              const p = positions[i];
              const isActive = active.id === n.id;
              return (
                <motion.button
                  key={n.id}
                  onMouseEnter={() => setActive(n)}
                  onClick={() => setActive(n)}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10 focus:outline-none group"
                >
                  <span
                    className={`block rounded-full transition-all duration-300 grid place-items-center ${
                      isActive
                        ? "h-14 w-14 bg-primary text-primary-foreground shadow-glow"
                        : "h-12 w-12 bg-card border border-border text-primary shadow-soft group-hover:border-primary/50"
                    }`}
                  >
                    <span className="mono text-[10px] font-semibold uppercase tracking-wider">
                      {n.short.slice(0, 3)}
                    </span>
                  </span>
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 mono text-[10px] uppercase tracking-wider whitespace-nowrap transition-colors ${
                      isActive ? "text-primary font-semibold" : "text-navy/70"
                    }`}
                  >
                    {n.label}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Detail panel */}
          <motion.aside
            key={active.id}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="card-blueprint p-7"
          >
            <div className="mono text-xs text-muted-foreground uppercase tracking-wider">
              Division
            </div>
            <h3 className="mt-3 text-2xl font-semibold text-navy">{active.label}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{active.desc}</p>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {nodes.map((n) => (
                <button
                  key={n.id}
                  onClick={() => setActive(n)}
                  className={`text-[11px] mono uppercase py-2 rounded-md border transition ${
                    active.id === n.id
                      ? "border-primary text-primary bg-accent"
                      : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {n.short}
                </button>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};
