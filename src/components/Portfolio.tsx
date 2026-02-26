import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Plataforma de Gestión Empresarial",
    category: "Sistema Web",
    description: "Dashboard administrativo que centralizó operaciones, reduciendo tiempos de gestión en un 60% para una empresa en crecimiento.",
    result: "60% más eficiencia operativa",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Landing de Captación de Leads",
    category: "Landing Page",
    description: "Página de aterrizaje para campaña de captación que triplicó las conversiones respecto al sitio anterior.",
    result: "3x más conversiones",
    featured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    title: "Sitio Web Corporativo",
    category: "Página Web",
    description: "Presencia digital profesional que posicionó a la marca como referente en su sector desde el primer mes.",
    result: "Posicionamiento inmediato",
    featured: false,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Automatización de Reportes",
    category: "Sistema a Medida",
    description: "Sistema automatizado de generación de reportes financieros que eliminó 20 horas semanales de trabajo manual.",
    result: "20 hrs/semana ahorradas",
    featured: true,
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop",
  },
];

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <section id="proyectos" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 flex items-center gap-2"
            >
              <FolderGit2 className="w-4 h-4" />
              {t("portfolio.subtitle")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
            >
              {t("portfolio.title")}{" "}
              <span className="text-gradient font-serif italic font-normal">{t("portfolio.title_highlight")}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-muted-foreground text-lg"
            >
              {t("portfolio.description")}
            </motion.p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[380px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-card transition-all duration-500 hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 ${project.featured ? "md:col-span-2" : "md:col-span-1"
                }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-90" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="flex justify-between items-start">
                  <span className="inline-flex items-center rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all text-accent" />
                </div>

                <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime/10 border border-lime/20">
                    <span className="text-xs font-bold text-lime">{project.result}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
