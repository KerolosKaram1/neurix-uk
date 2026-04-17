import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Hero = () => {
  return (
    <section
      id="top"
      className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden pt-24"
    >
      {/* Radial blob */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] radial-blob blur-3xl opacity-80" />
      </div>
      {/* Grid mask */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-secondary"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Neurix 2.0 is now live
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
          className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]"
        >
          Your Second Brain, <br />
          <span className="text-gradient">Powered by Ethical AI.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          Instantly summarize articles, generate contextual code, and build a visually
          connected knowledge graph as you browse.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-7 py-3 rounded-full bg-brand-gradient text-white font-semibold shadow-glow hover:shadow-glow-cyan transition-shadow duration-300 btn-press">
            Get Started for Free
          </button>
          <button className="px-7 py-3 rounded-full glass text-foreground font-medium inline-flex items-center gap-2 hover:bg-white/10 transition-colors btn-press">
            <Play className="h-4 w-4 text-secondary" />
            Watch Demo
          </button>
        </motion.div>

        <motion.p
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="show"
          className="mt-6 text-xs text-muted-foreground"
        >
          Free forever for individuals · No credit card required
        </motion.p>
      </div>
    </section>
  );
};
