import { Cpu, Layers, Workflow, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    tag: "01",
    title: "Advanced AI Systems",
    desc: "Machine learning, Natural Language Processing, and computer vision built for production.",
    span: "md:col-span-2",
  },
  {
    icon: Layers,
    tag: "02",
    title: "Platforms & Digital Infrastructure",
    desc: "Custom software, automation architectures, and enterprise APIs.",
    span: "",
  },
  {
    icon: Workflow,
    tag: "03",
    title: "Operational & Workflow",
    desc: "End-to-end intelligent workflows engineered for seamless data flow and scale.",
    span: "",
  },
  {
    icon: ShieldCheck,
    tag: "04",
    title: "Trust & Governance",
    desc: "Responsible AI frameworks and ethical deployment strategies, by design.",
    span: "md:col-span-2",
  },
];

export const Pillars = () => {
  return (
    <section className="py-28">
      <div className="container">
        <header className="max-w-2xl">
          <div className="chip">
            <span className="mono uppercase tracking-wider">The Four Pillars</span>
          </div>
          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-navy leading-tight">
            One discipline. <span className="text-gradient">Four foundations.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Every Neurix engagement is built on these load-bearing pillars — engineered
            together, deployed as one system.
          </p>
        </header>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {pillars.map(({ icon: Icon, tag, title, desc, span }) => (
            <article
              key={tag}
              className={`card-blueprint card-blueprint-hover p-7 relative overflow-hidden ${span}`}
            >
              <div className="absolute inset-0 blueprint-grid-fine opacity-50 pointer-events-none" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="grid place-items-center h-11 w-11 rounded-xl bg-accent text-primary border border-primary/15">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="mono text-xs text-muted-foreground">— {tag}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
