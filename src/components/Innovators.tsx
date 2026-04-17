import { Compass, Code2, HeartHandshake, Brain } from "lucide-react";

const principles = [
  {
    icon: Compass,
    title: "Build with Purpose",
    desc: "Every line of code, every model, every system should answer a real human need.",
  },
  {
    icon: HeartHandshake,
    title: "Serve, Don't Exploit",
    desc: "Technology must serve humanity — never extract from it or harm those who use it.",
  },
  {
    icon: Code2,
    title: "Engineer Responsibility",
    desc: "Developers and AI engineers carry the weight of what they ship into the world.",
  },
  {
    icon: Brain,
    title: "Promote Awareness",
    desc: "Design systems that grow intelligence, ethics, and positive impact at every layer.",
  },
];

export const Innovators = () => {
  return (
    <section id="innovators" className="py-28 bg-surface border-y border-border">
      <div className="container">
        <header className="max-w-2xl mx-auto text-center">
          <div className="chip mx-auto">
            <span className="mono uppercase tracking-wider">For Builders of the Future</span>
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-navy leading-tight">
            A Message to <span className="text-gradient">Innovators.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            To every programmer, engineer, and AI builder — innovation must be ethical,
            intentional, and aimed at the long-term good of humanity.
          </p>
        </header>

        <div className="mt-14 grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {principles.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="card-blueprint card-blueprint-hover p-7">
              <span className="grid place-items-center h-11 w-11 rounded-xl bg-accent text-primary border border-primary/15">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
