import { Quote } from "lucide-react";

export const Ethics = () => {
  return (
    <section id="ethics" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid blueprint-mask opacity-60" />
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="chip mx-auto">
            <span className="mono uppercase tracking-wider">A Message to Humanity</span>
          </div>
          <Quote className="mx-auto mt-8 h-10 w-10 text-primary/50" strokeWidth={1.5} />
          <blockquote className="mt-6 text-2xl md:text-3xl font-semibold text-navy leading-snug">
            “Technological progress is one of the greatest achievements of our time, yet it
            becomes a silent threat when misused. Our youth are the builders of tomorrow,
            and safeguarding their minds and future is a shared responsibility.”
          </blockquote>
          <p className="mt-8 text-muted-foreground text-lg max-w-2xl mx-auto">
            Our commitment: ensuring digital advancement uplifts young minds and creates a
            future built on awareness, integrity, and trust.
          </p>
        </div>
      </div>
    </section>
  );
};
