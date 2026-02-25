import { Zap, ShieldCheck, HeartHandshake, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Zap,
    title: "Velocidad y Eficiencia",
    description: "Stacks modernos (Vite, React, FastAPI) que garantizan tiempos de carga instantáneos y desarrollo ágil.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad y Escalabilidad",
    description: "Arquitecturas diseñadas para crecer contigo. Listas para miles de usuarios desde el día uno.",
  },
  {
    icon: HeartHandshake,
    title: "Trato Personalizado",
    description: "No somos una fábrica. Somos tus socios técnicos. Hablas directamente con los desarrolladores.",
  },
  {
    icon: Rocket,
    title: "Enfoque en Resultados",
    description: "No solo escribimos código; entendemos tu negocio para crear herramientas que aumenten tu facturación.",
  },
];

export const WhyUs = () => {
  return (
    <section id="nosotros" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lime/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — Text */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
                Sobre Nosotros
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Más que código, creamos{" "}
                <span className="text-gradient font-serif italic font-normal">
                  soluciones reales
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                En KPixel Craft combinamos creatividad con ingeniería.
                Entendemos que detrás de cada proyecto hay un sueño o un objetivo de negocio.
                Nos diferenciamos por nuestra transparencia y obsesión por el detalle.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-3 gap-6 border-t border-border pt-8"
            >
              {[
                { value: "+3", label: "Años" },
                { value: "100%", label: "Satisfacción" },
                { value: "24/7", label: "Soporte" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card/50 border border-white/[0.06] hover-glow group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                  <reason.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
