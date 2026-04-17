import { I18nProvider } from "@/i18n/I18nProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Pillars } from "@/components/Pillars";
import { Ecosystem } from "@/components/Ecosystem";
import { Pulse } from "@/components/Pulse";
import { Club } from "@/components/Club";
import { Ethics } from "@/components/Ethics";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <Mission />
          <Pillars />
          <Ecosystem />
          <Pulse />
          <Club />
          <Ethics />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
};

export default Index;
