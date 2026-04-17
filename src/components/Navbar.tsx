import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { motion } from "framer-motion";

const links = [
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#dashboard" },
  { label: "Pricing", href: "#pricing" },
  { label: "Ethics", href: "#ethics" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-lg bg-background/70 border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16">
        <Logo />

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex text-sm text-foreground/90 hover:text-foreground px-4 py-2 rounded-full btn-press">
            Login
          </button>
          <button className="text-sm font-semibold text-white px-5 py-2 rounded-full bg-brand-gradient shadow-glow hover:shadow-glow-cyan btn-press transition-shadow duration-300">
            Add to Chrome
          </button>
        </div>
      </nav>
    </motion.header>
  );
};
