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
          {/* Content */}
          <div>
            <span className="text-[#a855f7] font-medium text-sm tracking-wider uppercase mb-4 block animate-fade-up">
              Sobre nosotros
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-8 animate-fade-up delay-100 text-foreground">
              Construimos software serio para empresas serias
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 animate-fade-up delay-200">
              <span className="font-semibold text-[#a855f7]">KPixel Craft</span> es una empresa de desarrollo tecnológico especializada en soluciones confiables, escalables y modernas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 animate-fade-up delay-300">
              Combinamos experiencia técnica con comprensión profunda de las necesidades empresariales.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4 animate-fade-up delay-400">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#a855f7] flex-shrink-0" />
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-up delay-500">
            <div className="bento-card p-8 lg:p-12 group">
              {/* Large K Logo */}
              <div className="aspect-square bg-gradient-to-br from-secondary to-card rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
                <div className="w-32 h-32 bg-[#a855f7] rounded-3xl flex items-center justify-center shadow-glow animate-pulse-glow">
                  <span className="text-white font-bold text-6xl select-none">K</span>
                </div>

                {/* Floating elements */}
                <div className="absolute top-8 left-8 w-4 h-4 bg-[#a855f7]/40 rounded-full animate-float" />
                <div className="absolute bottom-12 right-8 w-6 h-6 bg-[#a855f7]/30 rounded-lg animate-float" style={{ animationDelay: "2s" }} />
                <div className="absolute top-1/3 right-12 w-3 h-3 bg-[#a855f7]/50 rounded-full animate-float" style={{ animationDelay: "4s" }} />
              </div>

              {/* Company tagline */}
              <div className="mt-8 text-center">
                <p className="text-2xl font-semibold text-foreground mb-2">KPixel Craft</p>
                <p className="text-lg text-muted-foreground">Software que escala contigo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

