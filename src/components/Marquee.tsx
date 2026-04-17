import { Circle, Triangle, Infinity as InfinityIcon, Hexagon, Square, Star } from "lucide-react";

const logos = [
  { Icon: Triangle, name: "Vertex" },
  { Icon: Circle, name: "Orbit" },
  { Icon: InfinityIcon, name: "Loop" },
  { Icon: Hexagon, name: "Hexcore" },
  { Icon: Square, name: "Quanta" },
  { Icon: Star, name: "Nova" },
];

export const Marquee = () => {
  const items = [...logos, ...logos];
  return (
    <section className="py-16 border-y border-white/5">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by innovative teams
      </p>
      <div className="mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max marquee gap-16 px-8">
          {items.map(({ Icon, name }, i) => (
            <div key={i} className="flex items-center gap-3 text-muted-foreground/60 hover:text-muted-foreground transition-colors">
              <Icon className="h-6 w-6" strokeWidth={1.5} />
              <span className="font-display text-lg tracking-tight">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
