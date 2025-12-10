import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-40 mix-blend-overlay" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-float opacity-60" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-float opacity-60" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Animated 404 Text */}
        <div className="mb-8 relative inline-block">
          <h1 className="text-[12rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-br from-accent/20 to-foreground/5 select-none blur-sm absolute inset-0 transform scale-105 animate-pulse-glow">
            404
          </h1>
          <h1 className="text-[12rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 relative z-10 glass-text-shadow">
            404
          </h1>
        </div>

        {/* Message */}
        <div className="space-y-6 max-w-lg mx-auto animate-fade-up delay-100">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Página no encontrada
          </h2>
          <p className="text-muted-foreground text-lg">
            Lo sentimos, no podemos encontrar la página que buscas. Pudo haber sido movida o eliminada.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button variant="outline" size="lg" className="gap-2 border-accent/20 hover:bg-accent/10 hover:border-accent/40" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4" />
              Regresar
            </Button>

            <Button asChild variant="accent" size="lg" className="gap-2 shadow-lg shadow-accent/20">
              <a href="/">
                <Home className="w-4 h-4" />
                Ir al Inicio
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
