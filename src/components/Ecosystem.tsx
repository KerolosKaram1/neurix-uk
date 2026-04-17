import { motion } from "framer-motion";
import { useState } from "react";

type Node = {
  id: string;
  label: string;
  desc: string;
  x: number;
  y: number;
  core?: boolean;
};

const nodes: Node[] = [
  { id: "hq", label: "Neurix HQ", desc: "Group parent: ops, finance, HR, brand governance.", x: 50, y: 50, core: true },
  { id: "plus", label: "Neurix Plus", desc: "AI Pulse Platform — high-level intelligence core.", x: 50, y: 12 },
  { id: "labs", label: "Neurix Labs", desc: "Advanced R&D, big data, user intelligence.", x: 88, y: 30 },
  { id: "tech", label: "Neurix Technology", desc: "Custom software engineering, DevOps, automation.", x: 88, y: 72 },
  { id: "ai", label: "Neurix AI", desc: "AI applications, NLP, computer vision models.", x: 12, y: 72 },
  { id: "club", label: "Neurix Club", desc: "Global community of innovators and partners.", x: 12, y: 30 },
];

export const Ecosystem = () => {
  const [active, setActive] = useState<Node>(nodes[0]);
  const center = nodes.find((n) => n.core)!;

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
            Specialized teams operating autonomously, unified by the Pulse intelligence layer.
          </p>
        </header>

        <div className="mt-14 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
          {/* Diagram */}
          <div className="relative aspect-square max-w-[640px] w-full mx-auto card-blueprint p-6 overflow-hidden">
            <div className="absolute inset-0 blueprint-grid-fine opacity-60" />

            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              {nodes
                .filter((n) => !n.core)
                .map((n) => (
                  <line
                    key={n.id}
                    x1={center.x}
                    y1={center.y}
                    x2={n.x}
                    y2={n.y}
                    stroke="url(#edgeGrad)"
                    strokeWidth="0.25"
                    strokeDasharray={active.id === n.id ? "0" : "0.6 0.6"}
                  />
                ))}
            </svg>

            {nodes.map((n) => {
              const isActive = active.id === n.id;
              return (
                <motion.button
                  key={n.id}
                  onMouseEnter={() => setActive(n)}
                  onClick={() => setActive(n)}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    y: n.core ? 0 : [0, -3, 0],
                  }}
                  transition={{
                    y: { duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none ${
                    n.core ? "z-20" : "z-10"
                  }`}
                >
                  <span
                    className={`block rounded-full border transition-all duration-300 ${
                      n.core
                        ? "h-20 w-20 bg-primary text-primary-foreground border-primary shadow-glow"
                        : isActive
                        ? "h-14 w-14 bg-card border-primary shadow-elevated"
                        : "h-12 w-12 bg-card border-border shadow-soft hover:border-primary/40"
                    }`}
                  />
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 mt-2 mono text-[10px] uppercase tracking-wider whitespace-nowrap ${
                      n.core ? "text-primary-foreground -mt-12 font-semibold" : "text-navy"
                    }`}
                    style={n.core ? { top: "50%", transform: "translate(-50%,-50%)" } : { top: "100%" }}
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
              Division · {active.id.toUpperCase()}
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
                  {n.label.replace("Neurix ", "")}
                </button>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};
