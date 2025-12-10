import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { ContactForm } from "./ContactForm";

const Contact = () => {
  return (
    <section id="contacto" className="py-32 relative overflow-hidden bg-background">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px]" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-medium mb-6 border border-purple-500/20 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Disponible para nuevos proyectos
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6 animate-fade-up delay-100">
            Hablemos de tu idea
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up delay-200">
            Ya sea que necesites un MVP rápido o una transformación digital completa,
            estamos listos para escuchar.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">

          {/* Columna Izquierda */}
          <div className="lg:col-span-2 space-y-6 animate-fade-up delay-300 flex flex-col h-full">

            <div className="rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 space-y-8 flex-1">

              <div className="group flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Llámanos</p>
                  <a href="tel:+50257937229" className="text-lg text-foreground hover:text-purple-500 transition-colors font-semibold block">
                    +502 5793-7229
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">Lunes a Viernes, 9am - 6pm</p>
                </div>
              </div>

              <div className="w-full h-px bg-border/50" />

              <div className="group flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Escríbenos</p>
                  <a href="mailto:krispaz77@gmail.com" className="text-lg text-foreground hover:text-purple-500 transition-colors font-semibold block break-all">
                    krispaz77@gmail.com
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">Respondemos en menos de 24h</p>
                </div>
              </div>

              <div className="w-full h-px bg-border/50" />

              <div className="group flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Oficina</p>
                  <p className="text-lg text-foreground font-semibold">Guatemala, GT</p>
                  <p className="text-xs text-muted-foreground mt-1">Disponible remoto globalmente</p>
                </div>
              </div>

            </div>

            {/* Redes Sociales */}
            <div className="flex gap-4 justify-center lg:justify-start pt-2">
              {[
                { icon: Github, href: "https://github.com/krisspaz", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/kristopher-paz-34610715a/", label: "LinkedIn" },
                { icon: Instagram, href: "https://instagram.com/krisspaz_", label: "Instagram" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:border-purple-500 hover:text-purple-500 hover:bg-purple-500/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-3 animate-fade-up delay-400">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
