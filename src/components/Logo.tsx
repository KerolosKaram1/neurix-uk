import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

export const Logo = ({ className = "" }: { className?: string }) => (
  <a href="#top" className={`flex items-center gap-2 group ${className}`}>
    <motion.span
      whileHover={{ rotate: 12, scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="grid place-items-center h-8 w-8 rounded-lg bg-brand-gradient shadow-glow-cyan"
    >
      <BrainCircuit className="h-4 w-4 text-white" strokeWidth={2.5} />
    </motion.span>
    <span className="font-display font-bold text-[22px] leading-none text-foreground tracking-tight">
      Neurix
    </span>
  </a>
);
