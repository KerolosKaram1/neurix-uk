import { User, GraduationCap, FlaskConical, Briefcase } from "lucide-react";

const cards = [
  {
    icon: User,
    title: "For Individuals",
    desc: "Simplified, clear, and level-appropriate knowledge.",
  },
  {
    icon: GraduationCap,
    title: "For Youth & Students",
    desc: "Reliable sources, interdisciplinary connections, and critical thinking.",
  },
  {
    icon: FlaskConical,
    title: "For Researchers",
    desc: "Documented information and neutral data amenable to analysis.",
  },
  {
    icon: Briefcase,
    title: "For Decision-Makers",
    desc: "Evidence-based insights without interference.",
  },
];

export const Club = () => {
  return (
    <section id="club" className="py-28 bg-surface border-y border-border">
      <div className="container">
        <header className="max-w-2xl">
          <div className="chip">
            <span className="mono uppercase tracking-wider">Neurix Club</span>
          </div>
          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-navy leading-tight">
            A global community for innovators,
            <span className="text-gradient"> developers, and partners.</span>
          </h2>
        </header>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="card-blueprint card-blueprint-hover p-6">
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
