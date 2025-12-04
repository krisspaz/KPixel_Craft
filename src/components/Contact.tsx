import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Github, Linkedin, Instagram , Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 1. Capturamos los datos del formulario
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // 2. Preparamos el mensaje para WhatsApp con formato bonito
    const message = `👋 Hola Kris (KPixel Craft), vengo de tu sitio web.

👤 *Nombre:* ${data.name}
📧 *Email:* ${data.email}
🏷️ *Asunto:* ${data.subject}

📝 *Mensaje:* ${data.message}`;

    // 3. Tu número de teléfono (502 Guatemala)
    const phoneNumber = "50257937229"; 

    // 4. Creamos el link de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // 5. Simulamos un pequeño tiempo de carga para mejor experiencia y redirigimos
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setIsSent(true);
      e.currentTarget.reset(); // Limpia el formulario
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-32 relative overflow-hidden bg-background">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium mb-6 border border-green-500/20 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
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
          
          {/* Columna Izquierda: Info de Contacto */}
          <div className="lg:col-span-2 space-y-6 animate-fade-up delay-300 flex flex-col h-full">
            
            <div className="rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 space-y-8 flex-1">
              
              <div className="group flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Llámanos</p>
                  <a href="tel:+50257937229" className="text-lg text-foreground hover:text-accent transition-colors font-semibold block">
                    +502 5793-7229
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">Lunes a Viernes, 9am - 6pm</p>
                </div>
              </div>

              <div className="w-full h-px bg-border/50" />

              <div className="group flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Escríbenos</p>
                  <a href="mailto:krispaz77@gmail.com" className="text-lg text-foreground hover:text-accent transition-colors font-semibold block break-all">
                    krispaz77@gmail.com
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">Respondemos en menos de 24h</p>
                </div>
              </div>

              <div className="w-full h-px bg-border/50" />

              <div className="group flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-accent" />
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
                  className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="lg:col-span-3 animate-fade-up delay-400">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-lg shadow-black/5 relative overflow-hidden">
              
              {isSent ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-card z-20 animate-fade-in text-center p-8">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                    <Send className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">¡Redirigiendo a WhatsApp!</h3>
                  <p className="text-muted-foreground">Gracias por contactarnos. Continúa el chat para finalizar.</p>
                  <button 
                    onClick={() => setIsSent(false)}
                    className="mt-6 text-sm text-accent hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      name="name" // Importante: name agregado
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email" // Importante: name agregado
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      placeholder="john@empresa.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Asunto
                  </label>
                  <select 
                    name="subject" // Importante: name agregado
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  >
                    <option value="Desarrollo Web">Desarrollo Web / App</option>
                    <option value="Consultoría">Consultoría</option>
                    <option value="Diseño">Diseño UI/UX</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Mensaje
                  </label>
                  <textarea
                    name="message" // Importante: name agregado
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                    placeholder="Cuéntanos los detalles de tu proyecto..."
                  />
                </div>

                <Button 
                  variant="default" 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-white font-medium h-12 rounded-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Conectando con WhatsApp...
                    </>
                  ) : (
                    <>
                      Enviar a WhatsApp
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;