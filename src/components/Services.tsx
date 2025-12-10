// Aquí colocaré tu componente modificado con toques de morado eléctrico.
import { 
  Code2, 
  ServerCog, 
  Smartphone, 
  LayoutDashboard, 
  Lightbulb, 
  Bot, 
  ArrowUpRight,
  Cpu
} from "lucide-react";

const Services = () => {
  return (
    <section id="servicios" className="py-32 relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-500/20 opacity-20 blur-[100px]" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-16">
          <span className="text-purple-500 font-medium text-sm tracking-wider uppercase mb-4 block animate-fade-up">
            <Cpu className="w-4 h-4 inline-block mr-2 -mt-0.5 text-purple-500" />
            Nuestros Servicios
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight animate-fade-up delay-100">
            Soluciones integrales para escalar tu negocio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          <div className="group lg:row-span-2 relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-2xl hover:border-purple-500/50 animate-fade-up delay-200 flex flex-col justify-between">
            <div className="absolute top-0 right-0 -mr-4 -mt-4 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl group-hover:bg-purple-500/20 transition-all" />

            <div>
              <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-border group-hover:border-purple-500/30">
                <Code2 className="w-7 h-7 text-purple-500 group-hover:text-foreground transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Software a Medida</h3>
              <p className="text-muted-foreground leading-relaxed">
                No te conformes con soluciones genéricas. Diseñamos arquitectura de software exclusiva que se adapta al 100% a tus reglas de negocio.
              </p>
            </div>

            <a href="#contacto" className="inline-flex items-center gap-2 text-foreground font-medium mt-8 group/link">
              Iniciar proyecto
              <div className="p-1 rounded-full bg-purple-500/10 group-hover/link:bg-purple-500 transition-colors">
                <ArrowUpRight className="w-4 h-4 text-purple-500 group-hover/link:text-white transition-colors" />
              </div>
            </a>
          </div>

          <div className="group rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg animate-fade-up delay-300">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
              <ServerCog className="w-6 h-6 text-purple-500 group-hover:text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">APIs & Backend</h3>
            <p className="text-sm text-muted-foreground">Arquitecturas REST y GraphQL robustas.</p>
          </div>

          <div className="group rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg animate-fade-up delay-400">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
              <Smartphone className="w-6 h-6 text-purple-500 group-hover:text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Desarrollo Móvil</h3>
            <p className="text-sm text-muted-foreground">Aplicaciones nativas y multiplataforma.</p>
          </div>

          <div className="group md:col-span-2 rounded-3xl border border-border bg-card p-8 transition-all hover:border-purple-500/30 animate-fade-up delay-500 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity transform translate-x-10 translate-y-10">
              <LayoutDashboard className="w-64 h-64" />
            </div>
            <div className="flex flex-col md:flex-row gap-6 relative z-10">
              <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                <LayoutDashboard className="w-7 h-7 text-purple-500" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-foreground mb-2">Dashboards Corporativos</h3>
                <p class="text-muted-foreground">Transformamos datos complejos en paneles claros.</p>
              </div>
            </div>
          </div>

          <div className="group rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg animate-fade-up delay-600">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
              <Lightbulb className="w-6 h-6 text-purple-500 group-hover:text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Consultoría IT</h3>
            <p className="text-sm text-muted-foreground">Optimización, auditoría y modernización.</p>
          </div>

          <div className="group md:col-span-2 lg:col-span-2 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-card to-purple-500/5 p-8 transition-all hover:shadow-2xl hover:shadow-purple-500/10 animate-fade-up delay-700">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  <Bot className="w-7 h-7 text-purple-500" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-foreground">IA & Automatización</h3>
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-purple-500 bg-purple-500/10 rounded-full border border-purple-500/20">
                      Futuro
                    </span>
                  </div>
                  <p className="text-muted-foreground max-w-lg">Integración de LLMs, chatbots y automatización avanzada.</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <button className="px-4 py-2 text-sm font-medium text-purple-500 hover:text-white border border-purple-500/30 hover:bg-purple-500 rounded-lg transition-all duration-300">
                  Explorar IA
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;