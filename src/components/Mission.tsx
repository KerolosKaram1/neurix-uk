import { Target, Eye } from "lucide-react";

const values = [
  "CLARITY OVER COMPLEXITY",
  "INTELLIGENCE WITH PURPOSE",
  "SYSTEMS THINKING",
  "TRUST BY DESIGN",
];

export const Mission = () => {
  return (
    <section id="mission" className="relative py-28 border-y border-border bg-surface">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          <article className="card-blueprint p-8 md:p-10">
            <div className="flex items-center gap-2 mono text-xs uppercase tracking-wider text-primary">
              <Target className="h-4 w-4" /> Mission
            </div>
            <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-navy leading-snug">
              Designing intelligent systems that turn complexity into clear,
              scalable, and real-world impact.
            </h3>
          </article>

          <article className="card-blueprint p-8 md:p-10">
            <div className="flex items-center gap-2 mono text-xs uppercase tracking-wider text-primary">
              <Eye className="h-4 w-4" /> Vision
            </div>
            <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-navy leading-snug">
              To become a global reference for building connected, intelligent
              systems that define the future of digital operations.
            </h3>
          </article>
        </div>
      </div>

      {/* Values marquee */}
      <div className="mt-16 overflow-hidden border-y border-border bg-background py-5 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max marquee gap-12 px-6">
          {[...values, ...values, ...values].map((v, i) => (
            <span
              key={i}
              className="mono text-sm tracking-[0.2em] text-muted-foreground flex items-center gap-12"
            >
              {v}
              <span className="h-1 w-1 rounded-full bg-primary/50" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
