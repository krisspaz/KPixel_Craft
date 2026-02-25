import { FaReact, FaLaravel, FaDocker, FaAws } from "react-icons/fa";
import { SiTypescript, SiFastapi, SiPostgresql, SiVite } from "react-icons/si";
import { motion } from "framer-motion";

const technologies = [
  { name: "React", category: "Frontend", icon: <FaReact className="w-5 h-5" /> },
  { name: "TypeScript", category: "Language", icon: <SiTypescript className="w-5 h-5" /> },
  { name: "Vite", category: "Build", icon: <SiVite className="w-5 h-5" /> },
  { name: "Laravel", category: "Backend", icon: <FaLaravel className="w-5 h-5" /> },
  { name: "FastAPI", category: "Backend", icon: <SiFastapi className="w-5 h-5" /> },
  { name: "PostgreSQL", category: "Database", icon: <SiPostgresql className="w-5 h-5" /> },
  { name: "Docker", category: "DevOps", icon: <FaDocker className="w-5 h-5" /> },
  { name: "AWS", category: "Cloud", icon: <FaAws className="w-5 h-5" /> },
];

const Technologies = () => {
  return (
    <section id="stack" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-section" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block"
          >
            Stack Tecnológico
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
          >
            Herramientas que{" "}
            <span className="text-gradient font-serif italic font-normal">dominamos</span>
          </motion.h2>
        </div>

        {/* Tech Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-card/50 border border-white/[0.06] hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
            >
              <div className="text-accent group-hover:text-lime transition-colors">
                {tech.icon}
              </div>
              <div>
                <span className="font-semibold text-foreground text-sm">{tech.name}</span>
                <span className="text-xs text-muted-foreground ml-2">{tech.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-12 text-sm"
        >
          Y más: Symfony, Python, GitHub Actions, Firebase, Redis, React Native...
        </motion.p>
      </div>
    </section>
  );
};

export default Technologies;
