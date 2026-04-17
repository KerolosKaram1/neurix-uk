import { Quote, Shield, Sparkles, Users } from "lucide-react";

const points = [
  { icon: Shield, text: "Technology is powerful — but harmful when misused." },
  { icon: Sparkles, text: "Gaming addiction, unethical hacking, and negative behaviors are rising." },
  { icon: Users, text: "Youth must be protected, guided, and inspired to lead with ethics." },
];

export const Humanity = () => {
  return (
    <section id="ethics" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid blueprint-mask opacity-50" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 30%, hsl(var(--primary) / 0.10), transparent 70%)",
        }}
      />
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="chip mx-auto">
            <span className="mono uppercase tracking-wider">A Message to Humanity</span>
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-navy leading-tight">
            Protect the <span className="text-gradient">Youth of Tomorrow.</span>
          </h2>
          <Quote className="mx-auto mt-8 h-9 w-9 text-primary/50" strokeWidth={1.5} />
          <p className="mt-5 text-xl md:text-2xl font-medium text-navy leading-snug">
            Technology should empower learning, ethics, and growth —
            never erode the minds it was built to serve.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {points.map(({ icon: Icon, text }) => (
            <div key={text} className="card-blueprint card-blueprint-hover p-6 text-left">
              <span className="grid place-items-center h-11 w-11 rounded-xl bg-accent text-primary border border-primary/15">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <p className="mt-5 text-sm text-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-2xl mx-auto text-center text-muted-foreground text-base">
          Safeguarding the next generation is not the work of one — it is a
          shared responsibility across families, educators, builders, and society.
        </p>
      </div>
    </section>
  );
};
