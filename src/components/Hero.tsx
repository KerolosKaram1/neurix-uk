import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-grid blueprint-mask" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />

      <svg
        viewBox="0 0 1200 600"
        className="absolute inset-x-0 bottom-0 w-full h-[55%] opacity-[0.55] pointer-events-none"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[
          "M0 480 L300 320 L600 420 L900 260 L1200 380",
          "M0 520 L260 400 L560 470 L880 340 L1200 460",
          "M0 560 L220 480 L520 540 L860 420 L1200 540",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="url(#lineGrad)"
            strokeWidth="1.25"
            className="draw-line"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
        {[
          [300, 320], [600, 420], [900, 260],
          [260, 400], [560, 470], [880, 340],
          [220, 480], [520, 540], [860, 420],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="3" fill="hsl(var(--primary))" />
            <circle
              cx={x}
              cy={y}
              r="8"
              fill="hsl(var(--primary) / 0.18)"
              className="pulse-dot"
              style={{ animationDelay: `${i * 0.18}s` }}
            />
          </g>
        ))}
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate="show" className="chip">
          <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />
          <span className="mono uppercase tracking-wider">Neurix · Engineering Group</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
          className="mt-6 text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.05] text-navy"
        >
          Engineering Intelligence <br className="hidden sm:block" />
          <span className="text-gradient">for Tomorrow.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed"
        >
          Intelligent applications and advanced platforms designed to learn, adapt, and scale.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#ecosystem"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-soft hover:shadow-glow transition-shadow btn-press"
          >
            Explore the Ecosystem
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:border-primary/40 hover:bg-accent transition-colors btn-press"
          >
            Book a Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
};
