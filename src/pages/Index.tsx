import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Pillars } from "@/components/Pillars";
import { Ecosystem } from "@/components/Ecosystem";
import { Plus } from "@/components/Plus";
import { Club } from "@/components/Club";
import { Humanity } from "@/components/Humanity";
import { Innovators } from "@/components/Innovators";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Pillars />
        <Ecosystem />
        <Plus />
        <Club />
        <Humanity />
        <Innovators />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
