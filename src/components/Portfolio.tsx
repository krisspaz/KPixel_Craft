import { ArrowUpRight, Github, ExternalLink, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "Dashboard PyMES",
    category: "Frontend",
    description: "Panel administrativo para visualización de datos de pequeñas y medianas empresas.",
    tech: ["React", "Tailwind", "Vite"],
    featured: true, // Destacado (2 columnas)
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    demoUrl: "#", // Si tienes deploy, ponlo aquí
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
    featured: true, // Destacado para balancear el grid
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    demoUrl: "#",
    repoUrl: "https://github.com/krisspaz",
  },
];

const Portfolio = () => {
  return (
    <section id="portafolio" className="py-32 relative bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Header de la sección */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block animate-fade-up">
              <FolderGit2 className="w-4 h-4 inline-block mr-2" />
              Portafolio
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight animate-fade-up delay-100">
              Proyectos destacados
            </h2>
            <p className="mt-4 text-muted-foreground animate-fade-up delay-150">
              Una selección de mis trabajos más recientes, enfocados en automatización, análisis de datos y desarrollo web.
            </p>
          </div>
          
          <a 
            href="https://github.com/krisspaz" 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300 animate-fade-up delay-200"
          >
            Ver perfil de GitHub
            <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </a>
        </div>

        {/* Grid estilo Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 animate-fade-up ${
                project.featured ? 'md:col-span-2' : 'md:col-span-1'
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              
              {/* Imagen de Fondo con Zoom Effect */}
              <div className="absolute inset-0 h-full w-full">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradiente para legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-90" />
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                
                {/* Top: Badges y Links (aparecen en hover) */}
                <div className="flex justify-between items-start">
                  <span className="inline-flex items-center rounded-full bg-accent/90 px-3 py-1 text-xs font-medium text-accent-foreground backdrop-blur-sm shadow-sm">
                    {project.category}
                  </span>

                  <div className="flex gap-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-background/50 hover:bg-background rounded-full backdrop-blur-md text-foreground transition-colors" title="Ver Código">
                      <Github className="w-5 h-5" />
                    </a>
                    {project.demoUrl !== "#" && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-background/50 hover:bg-accent hover:text-accent-foreground rounded-full backdrop-blur-md text-foreground transition-colors" title="Ver Demo">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Bottom: Info del Proyecto */}
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-secondary/50 text-secondary-foreground border border-border/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;