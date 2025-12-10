import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/krisspaz", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/kristopher-paz-34610715a/", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/krisspaz_", label: "Instagram" },
  ];

  const mainLinks = [
    { href: "/#servicios", label: "Servicios" },
    { href: "/#tecnologias", label: "Stack Tecnológico" },
    { href: "/#portafolio", label: "Proyectos" },
    { href: "/#nosotros", label: "Sobre Nosotros" },
  ];

  const legalLinks = [
    { href: "/privacy", label: "Política de Privacidad" },
    { href: "/terms", label: "Términos de Servicio" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t border-accent/20 pt-20 pb-10 overflow-hidden">

      {/* Fondo decorativo morado */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--accent)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--accent)/0.15)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Marca */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 group cursor-default">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
                <span className="text-white font-bold text-lg leading-none mt-0.5">K</span>
              </div>
              <span className="font-bold text-xl text-foreground tracking-tight">
                KPixel<span className="text-accent">Craft</span>
              </span>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Transformamos ideas complejas en software elegante, escalable y de alto rendimiento.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-semibold text-foreground mb-4">Navegación</h3>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors block w-fit"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors block w-fit"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="lg:col-span-3">
            <div className="bg-accent/5 rounded-2xl p-6 border border-accent/20">
              <h3 className="font-semibold text-foreground mb-2">¿Tienes un proyecto?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Hablemos sobre cómo podemos ayudarte a crecer.
              </p>
              <a
                href="/#contacto"
                className="inline-flex text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                Solicitar cotización →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-accent/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} KPixel Craft. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-sm text-muted-foreground bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
              <span className="text-base">🇬🇹</span> Hecho en Guatemala
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 bg-accent/10 hover:bg-accent hover:text-white rounded-full transition-colors border border-accent/20"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
