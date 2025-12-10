import { Zap, ShieldCheck, HeartHandshake, Rocket, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Velocidad y Eficiencia",
    description: "Utilizamos stacks modernos (Vite, React, FastAPI) que garantizan tiempos de carga instantáneos y desarrollo ágil.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad y Escalabilidad",
    description: "Arquitecturas diseñadas para crecer contigo. Tu software estará listo para miles de usuarios desde el día uno.",
  },
  {
    icon: HeartHandshake,
    title: "Trato Personalizado",
    description: "No somos una fábrica de software. Somos tus socios técnicos. Hablas directamente con los desarrolladores.",
  },
  {
    icon: Rocket,
    title: "Enfoque en Resultados",
    description: "No solo escribimos código; entendemos tu modelo de negocio para crear herramientas que aumenten tu facturación.",
  },
];

const stats = [
  { value: "+3", label: "Años de experiencia" },
  { value: "100%", label: "Clientes satisfechos" },
  { value: "24/7", label: "Soporte crítico" },
];

const WhyUs = () => {
  return (
    <section id="nosotros" className="py-32 relative bg-background overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#8b5cf6]/10 via-background to-background" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-8 animate-fade-up">
            <div>
              <span style={{ color: "#8b5cf6" }} className="font-medium text-sm tracking-wider uppercase mb-4 block">
                Sobre Nosotros
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
                Más que código, creamos{" "}
                <span style={{ color: "#8b5cf6" }}>soluciones reales</span>.
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                En KPixel Craft, combinamos la creatividad del diseño con la precisión de la ingeniería. 
                Entendemos que detrás de cada proyecto hay un sueño o un objetivo de negocio.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Nos diferenciamos por nuestra transparencia, nuestra obsesión por el detalle y por entregar software 
                que no solo funciona, sino que enamora a los usuarios.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-4">
              {["Metodologías Ágiles", "Código Limpio", "Diseño UX/UI Intuitivo"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5" style={{ color: "#8b5cf6" }} />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 animate-fade-up delay-200">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-[#8b5cf6]/40 hover:bg-secondary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#8b5cf6] group-hover:text-white transition-colors">
                  <reason.icon className="w-6 h-6" style={{ color: "#8b5cf6" }} />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
