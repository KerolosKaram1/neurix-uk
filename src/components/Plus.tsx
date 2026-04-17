import { ChevronRight } from "lucide-react";

const pipeline = [
  { num: "01", title: "Research & Validation", desc: "Hypothesis, market signals, technical feasibility." },
  { num: "02", title: "System Development", desc: "Architecture, modeling, hardened engineering." },
  { num: "03", title: "Real-World Deployment", desc: "Continuous learning, monitoring, governance." },
];

const layers = [
  {
    name: "Application & Growth Layer",
    tag: "L1",
    items: ["Vertical AI apps", "Customer surfaces", "Growth analytics"],
  },
  {
    name: "AI Plus Core — Intelligence Layer",
    tag: "L2",
    items: ["NLP", "Computer Vision", "Decision Models", "Trust & Governance"],
    highlight: true,
  },
  {
    name: "Data Flow & Platform Engineering",
    tag: "L3",
    items: ["Pipelines", "APIs", "Infrastructure", "Observability"],
  },
];

export const Plus = () => {
  return (
    <section id="plus" className="py-28">
      <div className="container">
        <header className="max-w-2xl">
          <div className="chip">
            <span className="mono uppercase tracking-wider">Process · Architecture</span>
          </div>
          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-navy leading-tight">
            The <span className="text-gradient">Plus</span> Platform Stack.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From research to deployment, every layer is engineered to scale and govern intelligence in production.
          </p>
        </header>

        {/* Pipeline */}
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {pipeline.map((p, i) => (
            <div key={p.num} className="card-blueprint p-6 relative">
              <span className="mono text-xs text-primary">{p.num}</span>
              <h3 className="mt-3 text-lg font-semibold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              {i < pipeline.length - 1 && (
                <ChevronRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/40" />
              )}
            </div>
          ))}
        </div>

        {/* Stack */}
        <div className="mt-16 card-blueprint p-6 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-fine opacity-40" />
          <div className="relative space-y-3">
            {layers.map((l) => (
              <div
                key={l.tag}
                className={`rounded-xl border p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 ${
                  l.highlight
                    ? "bg-primary text-primary-foreground border-primary shadow-glow"
                    : "bg-card border-border"
                }`}
              >
                <div className="flex items-center gap-3 md:w-72 shrink-0">
                  <span
                    className={`mono text-xs px-2 py-1 rounded ${
                      l.highlight ? "bg-primary-foreground/20" : "bg-accent text-primary"
                    }`}
                  >
                    {l.tag}
                  </span>
                  <span className={`font-semibold ${l.highlight ? "" : "text-navy"}`}>{l.name}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {l.items.map((it) => (
                    <span
                      key={it}
                      className={`text-xs px-3 py-1.5 rounded-full border ${
                        l.highlight
                          ? "border-primary-foreground/30 bg-primary-foreground/10"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
