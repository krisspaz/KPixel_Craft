import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-float" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Desarrollo de software profesional
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.1] tracking-tight mb-8 animate-fade-up delay-100">
            Creamos software que{" "}
            <span className="text-gradient">escala</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed animate-fade-up delay-200">
            Arquitectura robusta, código limpio y soluciones diseñadas para empresas que buscan crecer.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up delay-300">
            <Button variant="accent" size="xl">
              <a href="#contacto" className="flex items-center gap-2">
                Comenzar proyecto
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="glass" size="xl">
              <a href="#portafolio">Ver proyectos</a>
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-24 pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "20+", label: "Proyectos entregados" },
              { value: "99%", label: "Clientes satisfechos" },
              { value: "3+", label: "Años de experiencia" },
              { value: "24/7", label: "Soporte técnico" },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="animate-fade-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
