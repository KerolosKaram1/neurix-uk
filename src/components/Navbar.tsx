import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { label: "Mission", href: "#mission" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "The Plus Platform", href: "#plus" },
  { label: "Club", href: "#club" },
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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-sm bg-background/55 border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-20">
        <Logo />

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="text-sm font-semibold text-primary-foreground px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 shadow-soft hover:shadow-glow btn-press transition-all"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
};
