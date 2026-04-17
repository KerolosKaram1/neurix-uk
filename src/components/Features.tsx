import { Search, Shield, Sparkles, Network } from "lucide-react";
import { motion } from "framer-motion";

const Card = ({
  className = "",
  children,
  delay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={`relative rounded-2xl glass p-6 card-hover overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);

const Label = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <div>
    <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 border border-white/10 mb-4">
      <Icon className="h-5 w-5 text-secondary" />
    </div>
    <h3 className="text-xl font-bold text-foreground">{title}</h3>
    <p className="mt-2 text-sm text-muted-foreground max-w-md">{desc}</p>
  </div>
);

export const Features = () => {
  return (
    <section id="features" className="container py-24">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-[0.2em] text-secondary">Capabilities</span>
        <h2 className="mt-3 text-4xl sm:text-5xl font-bold">A workspace that thinks with you.</h2>
        <p className="mt-4 text-muted-foreground">
          Four intelligent surfaces working together — every action stays private to you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 — Summaries (span 2) */}
        <Card className="md:col-span-2" delay={0}>
          <Label
            icon={Sparkles}
            title="Auto-Summarization"
            desc="Long-form articles distilled into the points you actually need — citations included."
          />
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-background/40 border border-white/5 p-4 space-y-2">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className="h-2 rounded-full bg-white/10"
                  style={{ width: `${60 + ((i * 13) % 40)}%` }}
                />
              ))}
            </div>
            <div className="rounded-lg bg-background/40 border border-white/5 p-4 space-y-3">
              {["Core thesis identified", "3 supporting examples", "Counterpoint at §4"].map((t, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Card 2 — Contextual Search */}
        <Card delay={0.1}>
          <Label
            icon={Search}
            title="Contextual Search"
            desc="Ask anything across everything you've ever read."
          />
          <div className="mt-6 rounded-lg glass-strong px-3 py-2.5 flex items-center gap-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">"papers on RLHF I saved last month"</span>
            <Sparkles className="ml-auto h-4 w-4 text-secondary animate-pulse-glow" />
          </div>
          <div className="mt-3 space-y-2">
            {["Anthropic — Constitutional AI", "DeepMind — Sparrow notes"].map((s, i) => (
              <div key={i} className="text-xs text-foreground/80 px-3 py-2 rounded-md bg-white/[0.03] border border-white/5">
                {s}
              </div>
            ))}
          </div>
        </Card>

        {/* Card 3 — Privacy First */}
        <Card delay={0.15} id="ethics">
          <Label
            icon={Shield}
            title="Privacy First"
            desc="Your data never trains public models. End-to-end encryption, on-device when possible."
          />
          <div className="mt-6 grid grid-cols-3 gap-2">
            {["E2EE", "On-device", "GDPR"].map((b) => (
              <span key={b} className="text-[11px] text-center py-2 rounded-md bg-white/5 border border-white/10 text-foreground/80">
                {b}
              </span>
            ))}
          </div>
        </Card>

        {/* Card 4 — Knowledge Graph (span 2) */}
        <Card className="md:col-span-2" delay={0.2}>
          <Label
            icon={Network}
            title="The Knowledge Graph"
            desc="Watch ideas link themselves. A living map of everything you've learned."
          />
          <div className="mt-6 relative h-44 rounded-lg bg-background/40 border border-white/5 overflow-hidden">
            <svg className="absolute inset-0 w-full h-full">
              {[
                [60, 80, 180, 60],
                [180, 60, 320, 100],
                [320, 100, 440, 70],
                [180, 60, 240, 150],
                [240, 150, 380, 160],
                [60, 80, 240, 150],
              ].map(([x1, y1, x2, y2], i) => (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="hsl(188 91% 43% / 0.4)"
                  strokeWidth="1"
                />
              ))}
              {[
                [60, 80, 6, "hsl(239 84% 67%)"],
                [180, 60, 5, "hsl(188 91% 43%)"],
                [320, 100, 7, "hsl(239 84% 67%)"],
                [240, 150, 5, "hsl(188 91% 43%)"],
                [380, 160, 4, "hsl(188 91% 43%)"],
                [440, 70, 5, "hsl(239 84% 67%)"],
              ].map(([cx, cy, r, fill], i) => (
                <circle key={i} cx={cx as number} cy={cy as number} r={r as number} fill={fill as string}>
                  <animate attributeName="r" values={`${r};${(r as number) + 1.5};${r}`} dur="3s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
                </circle>
              ))}
            </svg>
          </div>
        </Card>
      </div>
    </section>
  );
};
