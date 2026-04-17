import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Lang = "en" | "ar";

const dict = {
  en: {
    "nav.mission": "Mission",
    "nav.ecosystem": "Ecosystem",
    "nav.pulse": "The Pulse Platform",
    "nav.club": "Club",
    "nav.ethics": "Ethics",
    "cta.demo": "Book a Demo",
    "cta.contact": "Get in Touch",
    "cta.explore": "Explore the Ecosystem",
    "cta.sales": "Contact Sales",
    "hero.eyebrow": "Neurix · Engineering Group",
    "hero.title": "Engineering Intelligence for Tomorrow.",
    "hero.subtitle": "Intelligent applications and advanced platforms designed to learn, adapt, and scale.",
  },
  ar: {
    "nav.mission": "المهمة",
    "nav.ecosystem": "المنظومة",
    "nav.pulse": "منصة Pulse",
    "nav.club": "النادي",
    "nav.ethics": "الأخلاقيات",
    "cta.demo": "احجز عرضًا",
    "cta.contact": "تواصل معنا",
    "cta.explore": "اكتشف المنظومة",
    "cta.sales": "تواصل مع المبيعات",
    "hero.eyebrow": "نيوريكس · مجموعة هندسية",
    "hero.title": "هندسة الذكاء لعالم الغد.",
    "hero.subtitle": "تطبيقات ذكية ومنصات متقدمة مصممة لتتعلم وتتكيف وتتوسع.",
  },
} as const;

type Key = keyof typeof dict.en;

const Ctx = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: Key) => string;
  dir: "ltr" | "rtl";
}>({ lang: "en", setLang: () => {}, t: (k) => k, dir: "ltr" });

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const t = (k: Key) => dict[lang][k] ?? k;

  return <Ctx.Provider value={{ lang, setLang, t, dir }}>{children}</Ctx.Provider>;
};

export const useI18n = () => useContext(Ctx);
