import { useEffect } from "react";
import { ArrowLeft, ShieldCheck, Lock, Eye, Cookie } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  // Asegurar que la página empiece arriba al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Fondo Decorativo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10 py-12 md:py-20">
        
        {/* Navegación de regreso */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="gap-2 pl-0 hover:bg-transparent hover:text-accent">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>

        {/* Encabezado */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-4 text-accent">
            <ShieldCheck className="w-8 h-8" />
            <span className="text-sm font-bold uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Política de Privacidad
          </h1>
          <p className="text-muted-foreground">
            Última actualización: {new Date().toLocaleDateString('es-GT', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Contenido del Documento */}
        <div className="max-w-3xl mx-auto space-y-12 text-foreground/90 leading-relaxed">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              1. Introducción
            </h2>
            <p className="text-muted-foreground">
              En <span className="font-semibold text-foreground">KPixel Craft</span>, nos comprometemos a proteger su privacidad. Esta política detalla cómo recopilamos, usamos y protegemos su información personal cuando visita nuestro sitio web o utiliza nuestros servicios de desarrollo de software.
            </p>
          </section>

          <section className="space-y-4">
            <div className="bg-secondary/30 p-6 rounded-2xl border border-border/50">
              <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
                <Eye className="w-5 h-5 text-accent" />
                2. Información que recopilamos
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Información de contacto:</strong> Nombre, correo electrónico y número de teléfono (cuando llena nuestro formulario).</li>
                <li><strong className="text-foreground">Datos técnicos:</strong> Dirección IP, tipo de navegador y datos de uso del sitio web para análisis de rendimiento.</li>
                <li><strong className="text-foreground">Datos del proyecto:</strong> Información que usted nos comparte voluntariamente sobre su idea o negocio.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              3. Uso de la información
            </h2>
            <p className="text-muted-foreground">Utilizamos sus datos exclusivamente para:</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Proporcionar y mantener nuestros servicios.</li>
              <li>Contactarlo respecto a su solicitud de proyecto o cotización.</li>
              <li>Mejorar la experiencia de usuario en nuestro sitio web.</li>
              <li>Cumplir con obligaciones legales aplicables en Guatemala.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Lock className="w-5 h-5 text-accent" />
              4. Seguridad de los datos
            </h2>
            <p className="text-muted-foreground">
              Implementamos medidas de seguridad estándar de la industria (cifrado SSL, firewalls y acceso restringido) para proteger su información contra acceso no autorizado, alteración o destrucción.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Cookie className="w-5 h-5 text-accent" />
              5. Cookies
            </h2>
            <p className="text-muted-foreground">
              Utilizamos cookies esenciales para el funcionamiento del sitio y cookies de análisis (como Google Analytics) para entender cómo interactúan los usuarios con nuestra web. Puede desactivarlas desde la configuración de su navegador.
            </p>
          </section>

          <section className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Si tiene preguntas sobre esta política, contáctenos en <a href="mailto:hola@kpixelcraft.com" className="text-accent hover:underline">hola@kpixelcraft.com</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Privacy;