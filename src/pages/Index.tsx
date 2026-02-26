import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Benefits } from "@/components/Benefits";
import { Pricing } from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Portfolio from "@/components/Portfolio";
import { Differentiation } from "@/components/Differentiation";
import { WhyUs } from "@/components/WhyUs";
import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-accent/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Benefits />
        <Pricing />
        <FAQ />
        <Portfolio />
        <Differentiation />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

