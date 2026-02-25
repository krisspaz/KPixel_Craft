import { ArrowUpRight, Github, ExternalLink, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Dashboard PyMES",
    category: "Frontend",
    description: "Panel administrativo para visualización de datos de pequeñas y medianas empresas.",
    tech: ["React", "Tailwind", "Vite"],
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    demoUrl: "#",
    repoUrl: "https://github.com/krisspaz/dashboard-pymes",
  },
  {
    title: "Web Scraping Engine",
    category: "Data Engineering",
    description: "Bot automatizado para extracción y minería de datos web.",
    tech: ["Python", "Selenium", "BS4"],
    featured: false,
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop",
    demoUrl: "#",
    repoUrl: "https://github.com/krisspaz/scraping",
  },
  {
    title: "Sales Report Generator",
    category: "Automation",
    description: "Script para generación automática de reportes de ventas y análisis financiero.",
    tech: ["Python", "Pandas", "Excel"],
    featured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    demoUrl: "#",
    repoUrl: "https://github.com/krisspaz/python-sales-report-generator",
  },
  {
    title: "API de Gestión",
    category: "Backend",
    description: "Sistema RESTful escalable con autenticación y manejo de bases de datos.",
    tech: ["FastAPI", "PostgreSQL", "Docker"],
    featured: true,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    demoUrl: "#",
    repoUrl: "https://github.com/krisspaz",
  },
];

const Portfolio = () => {
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
              Portafolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
            >
              Proyectos{" "}
              <span className="text-gradient font-serif italic font-normal">destacados</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-muted-foreground text-lg"
            >
              Una selección de trabajos recientes, enfocados en automatización, análisis de datos y desarrollo web.
            </motion.p>
          </div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://github.com/krisspaz"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.08] bg-card/50 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 text-sm font-semibold"
          >
            Ver GitHub
            <Github className="w-4 h-4" />
          </motion.a>
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
                  <div className="flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background/50 hover:bg-background rounded-full backdrop-blur-md text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-background/50 hover:bg-accent hover:text-white rounded-full backdrop-blur-md transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all text-accent" />
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-white/[0.05] text-foreground/70 border border-white/[0.08]"
                      >
                        {t}
                      </span>
                    ))}
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
