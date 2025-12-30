import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeaturedProject />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
