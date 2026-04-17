import { useState } from "react";
import { motion } from "framer-motion";
import { Beaker, Cpu, Code2, Users, Sparkles, Building2, ArrowUpRight } from "lucide-react";

type Division = {
  id: string;
  label: string;
  short: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
};

const divisions: Division[] = [
  { id: "plus", label: "Neurix Plus", short: "Plus", desc: "AI Plus Platform — high-level intelligence core powering every product.", icon: Sparkles },
  { id: "labs", label: "Neurix Labs", short: "Labs", desc: "Advanced R&D, big data, and user intelligence research.", icon: Beaker },
  { id: "tech", label: "Neurix Technology", short: "Technology", desc: "Custom software engineering, DevOps, and automation systems.", icon: Code2 },
  { id: "ai", label: "Neurix AI", short: "AI", desc: "AI applications, NLP, and computer vision models.", icon: Cpu },
  { id: "club", label: "Neurix Club", short: "Club", desc: "Global community of innovators, developers, and partners.", icon: Users },
  { id: "hq", label: "Neurix HQ", short: "HQ", desc: "Group parent: operations, finance, HR, and brand governance.", icon: Building2 },
];

export const Ecosystem = () => {
  const [active, setActive] = useState<Division>(divisions[0]);

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

        <div className="mt-14 grid lg:grid-cols-[1.1fr_1fr] gap-8 items-start">
          {/* Divisions grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {divisions.map((d, i) => {
              const Icon = d.icon;
              const isActive = active.id === d.id;
              return (
                <motion.button
                  key={d.id}
                  onMouseEnter={() => setActive(d)}
                  onClick={() => setActive(d)}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                  className={`group text-left p-5 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "border-primary bg-card shadow-glow"
                      : "border-border bg-card hover:border-primary/40 hover:-translate-y-0.5 shadow-soft"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`h-10 w-10 rounded-xl grid place-items-center transition-colors ${
                        isActive ? "bg-primary text-primary-foreground" : "bg-accent text-primary"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight
                      className={`h-4 w-4 transition-all ${
                        isActive ? "text-primary opacity-100" : "text-muted-foreground opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-navy">{d.label}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{d.desc}</p>
                </motion.button>
              );
            })}
          </div>

          {/* Detail panel */}
          <motion.aside
            key={active.id}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:sticky lg:top-24 card-blueprint p-7"
          >
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-primary text-primary-foreground grid place-items-center shadow-glow">
                <active.icon className="h-5 w-5" />
              </div>
              <div className="mono text-xs text-muted-foreground uppercase tracking-wider">
                Division
              </div>
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-navy">{active.label}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{active.desc}</p>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="mono text-[11px] text-muted-foreground uppercase tracking-wider mb-3">
                All divisions
              </div>
              <div className="flex flex-wrap gap-2">
                {divisions.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => setActive(n)}
                    className={`text-[11px] mono uppercase px-3 py-1.5 rounded-full border transition ${
                      active.id === n.id
                        ? "border-primary text-primary bg-accent"
                        : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    {n.short}
                  </button>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};
