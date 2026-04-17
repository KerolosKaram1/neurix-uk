import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { useI18n } from "@/i18n/I18nProvider";
import { Languages } from "lucide-react";

export const Navbar = () => {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t("nav.mission"), href: "#mission" },
    { label: t("nav.ecosystem"), href: "#ecosystem" },
    { label: t("nav.pulse"), href: "#pulse" },
    { label: t("nav.club"), href: "#club" },
    { label: t("nav.ethics"), href: "#ethics" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16">
        <Logo />

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            aria-label="Toggle language"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-full border border-border btn-press"
          >
            <Languages className="h-3.5 w-3.5" />
            <span className="mono">{lang === "en" ? "EN / AR" : "AR / EN"}</span>
          </button>
          <a
            href="#contact"
            className="text-sm font-semibold text-primary-foreground px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 shadow-soft btn-press transition-colors"
          >
            {t("cta.demo")}
          </a>
        </div>
      </nav>
    </header>
  );
};
