import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Importamos hooks de router

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#tecnologias", label: "Stack" },
    { href: "#portafolio", label: "Proyectos" },
    { href: "#nosotros", label: "Nosotros" },
  ];

  // Función inteligente para manejar la navegación
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      // Si NO estamos en el home (ej: estamos en /privacy), navegamos al home con el hash
      navigate(`/${href}`);
    } else {
      // Si YA estamos en el home, hacemos scroll suave
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        // Fallback por si el elemento no se encuentra inmediatamente
        window.location.hash = href;
      }
    }
  };

  const goHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border/50 h-16 shadow-sm"
            : "bg-transparent h-20"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            
            {/* Logo */}
            <button onClick={goHome} className="flex items-center gap-2 group relative z-50 focus:outline-none">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center transition-all duration-300 group-hover:rotate-12 group-hover:shadow-[0_0_15px_rgba(var(--accent),0.5)]">
                <span className="text-accent-foreground font-bold text-lg leading-none mt-0.5">K</span>
              </div>
              <span className="font-bold text-lg text-foreground tracking-tight">
                Pixel<span className="text-accent">Craft</span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-full transition-all duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
              <Button asChild variant="accent" size="default" className="rounded-full font-medium shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all">
                <a 
                  href="#contacto" 
                  onClick={(e) => handleNavigation(e, "#contacto")}
                >
                  Contáctanos
                </a>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-foreground hover:bg-secondary rounded-full transition-colors relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
            isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className="flex items-center justify-between text-lg font-medium text-foreground p-3 hover:bg-secondary/50 rounded-xl transition-colors group cursor-pointer"
              >
                {link.label}
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
            ))}
            <div className="h-px bg-border/50 my-2" />
            <Button asChild variant="accent" size="lg" className="w-full justify-center">
              <a 
                href="#contacto" 
                onClick={(e) => handleNavigation(e, "#contacto")}
              >
                Iniciar Proyecto
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Overlay para cerrar el menú al hacer clic fuera */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/20 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;