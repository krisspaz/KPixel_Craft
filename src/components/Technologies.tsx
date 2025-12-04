// Importamos los logos de marcas desde react-icons
import { FaReact, FaLaravel, FaDocker, FaAws } from "react-icons/fa";
import { SiTypescript, SiFastapi, SiPostgresql } from "react-icons/si";

const technologies = [
  { 
    name: "React", 
    category: "Frontend", 
    icon: <FaReact className="w-6 h-6 text-accent" /> 
  },
  { 
    name: "TypeScript", 
    category: "Language", 
    icon: <SiTypescript className="w-6 h-6 text-accent" /> 
  },
  { 
    name: "Laravel", 
    category: "Backend", 
    icon: <FaLaravel className="w-6 h-6 text-accent" /> 
  },
  { 
    name: "FastAPI", 
    category: "Backend", 
    icon: <SiFastapi className="w-6 h-6 text-accent" /> 
  },
  { 
    name: "PostgreSQL", 
    category: "Database", 
    icon: <SiPostgresql className="w-6 h-6 text-accent" /> 
  },
  { 
    name: "Docker", 
    category: "DevOps", 
    icon: <FaDocker className="w-6 h-6 text-accent" /> 
  },
  { 
    name: "AWS", 
    category: "Cloud", 
    icon: <FaAws className="w-6 h-6 text-accent" /> 
  },
  { 
    name: "React Native", 
    category: "Mobile", 
    // Usamos el mismo logo de React porque es el estándar para RN
    icon: <FaReact className="w-6 h-6 text-accent" /> 
  },
];

const Technologies = () => {
  return (
    <section id="tecnologias" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block animate-fade-up">
            Stack tecnológico
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight animate-fade-up delay-100">
            Herramientas que dominamos
          </h2>
        </div>

        {/* Technologies Grid */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-2xl hover:border-accent/30 hover:bg-secondary/50 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Icon */}
              <div className="flex-shrink-0">{tech.icon}</div>
              <div>
                <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                  {tech.name}
                </span>
                <span className="text-xs text-muted-foreground ml-1">{tech.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional tech note */}
        <p className="text-center text-muted-foreground mt-12 animate-fade-up delay-800">
          Y más: Symfony, Python, Vite, GitHub Actions, Firebase, Redis...
        </p>
      </div>
    </section>
  );
};

export default Technologies;