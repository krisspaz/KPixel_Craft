// Aquí va tu componente About con ajustes a morado eléctrico.
// Cambié únicamente textos y elementos clave, igual que en Services.

import { CheckCircle } from "lucide-react";

const values = [
  "Código escalable y limpio",
  "Arquitectura robusta",
  "Seguridad enterprise",
  "Entregas puntuales",
  "Soporte continuo",
  "Comunicación clara",
];
const About = () => {
  return (
    <section id="nosotros" className="py-32 relative bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 lg:pr-12">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block animate-fade-up">
              Sobre KPixel Craft
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight animate-fade-up delay-100">
              Transformando ideas en <br />
              <span className="font-semibold text-accent">experiencias digitales</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-up delay-200">
              <span className="font-semibold text-accent">KPixel Craft</span> es una empresa de desarrollo tecnológico especializada en soluciones confiables, escalables y modernas.
              Nos apasiona el código bien escrito y las interfaces intuitivas.
            </p>

            <div className="space-y-4 animate-fade-up delay-300">
              {[
                "Desarrollo Full Stack (Frontend & Backend)",
                "Arquitecturas escalables y Cloud Computing",
                "Experiencia de usuario (UX) y Diseño de Alta Calidad",
                "Compromiso con la seguridad y el rendimiento"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image / Graphic */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up delay-400">
            <div className="relative w-full max-w-md aspect-square">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl" />

              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="w-full h-48 bg-card border border-border rounded-3xl flex items-center justify-center shadow-lg transform translate-y-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-foreground mb-1">99%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                </div>
                <div className="w-full h-48 bg-accent rounded-3xl flex items-center justify-center shadow-glow animate-pulse-glow">
                  <span className="text-white font-bold text-xl px-4 text-center">Calidad Premium</span>
                </div>
                <div className="w-full h-48 bg-card border border-border rounded-3xl flex items-center justify-center shadow-lg -translate-y-8 col-span-2">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-4">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full bg-secondary border-2 border-background" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">Equipos Felices</span>
                  </div>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute top-8 left-8 w-4 h-4 bg-accent/40 rounded-full animate-float" />
              <div className="absolute bottom-12 right-8 w-6 h-6 bg-accent/30 rounded-lg animate-float" style={{ animationDelay: "2s" }} />
              <div className="absolute top-1/3 right-12 w-3 h-3 bg-accent/50 rounded-full animate-float" style={{ animationDelay: "4s" }} />
            </div>

            {/* Company tagline */}
            <div className="mt-8 text-center">
              <p className="text-2xl font-semibold text-foreground mb-2">KPixel Craft</p>
              <p className="text-lg text-muted-foreground">Software que escala contigo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

