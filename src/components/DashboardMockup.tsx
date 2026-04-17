import { motion } from "framer-motion";
import { Network, FileText, Code2, Settings, Tag, X } from "lucide-react";

const navItems = [
  { icon: Network, label: "Graph", active: true },
  { icon: FileText, label: "Summaries" },
  { icon: Code2, label: "Code Snippets" },
  { icon: Settings, label: "Settings" },
];

// Static-ish force-directed graph mock
const nodes = [
  { id: 1, x: 50, y: 45, r: 22, label: "React", color: "primary", highlight: true },
  { id: 2, x: 22, y: 30, r: 14, label: "Hooks", color: "secondary" },
  { id: 3, x: 78, y: 28, r: 16, label: "Flutter", color: "secondary" },
  { id: 4, x: 30, y: 70, r: 12, label: "Redux", color: "muted" },
  { id: 5, x: 70, y: 75, r: 14, label: "State", color: "muted" },
  { id: 6, x: 88, y: 55, r: 10, label: "Dart", color: "muted" },
  { id: 7, x: 12, y: 60, r: 10, label: "JSX", color: "muted" },
];

const edges = [
  [1, 2], [1, 3], [1, 4], [1, 5], [3, 6], [2, 7], [4, 5], [3, 5],
];

const colorFor = (c: string) =>
  c === "primary"
    ? "hsl(239 84% 67%)"
    : c === "secondary"
    ? "hsl(188 91% 43%)"
    : "hsl(220 9% 45%)";

export const DashboardMockup = () => {
  return (
    <section id="dashboard" className="container py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-secondary">Live preview</span>
        <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Inside the Neurix workspace.</h2>
        <p className="mt-4 text-muted-foreground">
          Every saved page becomes a node. Every connection, an insight you can revisit.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl glass-strong overflow-hidden shadow-glow"
      >
        {/* Window chrome */}
        <div className="h-9 px-4 flex items-center gap-2 border-b border-white/10 bg-background/40">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
          <span className="ml-4 text-xs text-muted-foreground">app.neurix.ai/graph</span>
        </div>

        <div className="grid grid-cols-12 min-h-[520px]">
          {/* Sidebar */}
          <aside className="col-span-12 md:col-span-3 lg:col-span-2 border-r border-white/10 bg-background/30 p-4 flex flex-col">
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3 px-2">
              Workspace
            </p>
            <nav className="space-y-1 flex-1">
              {navItems.map((it) => (
                <button
                  key={it.label}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                    it.active
                      ? "bg-primary/15 text-foreground border border-primary/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  <it.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{it.label}</span>
                </button>
              ))}
            </nav>

            <div className="mt-4 flex items-center gap-3 p-2 rounded-md bg-white/5 border border-white/10">
              <div className="h-8 w-8 rounded-full bg-brand-gradient grid place-items-center text-xs font-bold text-white">
                AS
              </div>
              <div className="hidden sm:block min-w-0">
                <p className="text-xs font-medium text-foreground truncate">Ada S.</p>
                <p className="text-[10px] text-muted-foreground truncate">Pro plan</p>
              </div>
            </div>
          </aside>

          {/* Graph canvas */}
          <main className="col-span-12 md:col-span-6 lg:col-span-7 relative bg-[radial-gradient(circle_at_center,hsl(239_84%_67%/0.08),transparent_60%)]">
            <div className="absolute top-4 left-4 text-xs text-muted-foreground">
              Knowledge Graph · 1,284 nodes
            </div>

            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
              {edges.map(([a, b], i) => {
                const na = nodes.find((n) => n.id === a)!;
                const nb = nodes.find((n) => n.id === b)!;
                return (
                  <line
                    key={i}
                    x1={na.x}
                    y1={na.y}
                    x2={nb.x}
                    y2={nb.y}
                    stroke="hsl(188 91% 43% / 0.35)"
                    strokeWidth="0.2"
                  />
                );
              })}
            </svg>

            {nodes.map((n) => (
              <div
                key={n.id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
              >
                <div
                  className={`rounded-full grid place-items-center font-medium text-[10px] text-white ${
                    n.highlight ? "ring-2 ring-primary/60 shadow-glow animate-pulse-glow" : ""
                  }`}
                  style={{
                    height: n.r * 2,
                    width: n.r * 2,
                    background: colorFor(n.color),
                    boxShadow: n.highlight ? "0 0 30px hsl(239 84% 67% / 0.6)" : undefined,
                  }}
                >
                  {n.r >= 12 ? n.label : ""}
                </div>
              </div>
            ))}
          </main>

          {/* Detail panel */}
          <aside className="col-span-12 md:col-span-3 border-l border-white/10 bg-background/40 p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Node detail</span>
              <X className="h-4 w-4 text-muted-foreground" />
            </div>

            <h3 className="text-lg font-bold text-foreground">React vs Flutter</h3>
            <p className="text-[11px] text-muted-foreground mt-1">Saved · 2 days ago</p>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {["#frontend", "#mobile", "#comparison"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-secondary/15 text-secondary border border-secondary/20">
                  <Tag className="h-2.5 w-2.5" />
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Summary</p>
              <p className="text-sm text-foreground/90 leading-relaxed">
                Comparison of state management, rendering pipelines, and ecosystem maturity.
                React wins on web fluency; Flutter wins on cross-platform consistency.
              </p>
            </div>

            <div className="mt-5">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Linked (4)</p>
              <ul className="space-y-2 text-xs text-foreground/85">
                {["Hooks deep dive", "Dart 3 release notes", "Redux Toolkit guide", "JSX transform"].map((l) => (
                  <li key={l} className="px-2 py-1.5 rounded bg-white/5 border border-white/5 hover:border-secondary/30 transition-colors cursor-pointer">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </motion.div>
    </section>
  );
};
