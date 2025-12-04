import { useEffect } from "react";
import { ArrowLeft, FileText, Scale, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Fondo Decorativo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10 py-12 md:py-20">
        
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="gap-2 pl-0 hover:bg-transparent hover:text-accent">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-4 text-accent">
            <Scale className="w-8 h-8" />
            <span className="text-sm font-bold uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Términos de Servicio
          </h1>
          <p className="text-muted-foreground">
            Al utilizar nuestros servicios, usted acepta estas condiciones.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12 text-foreground/90 leading-relaxed">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              1. Aceptación de los términos
            </h2>
            <p className="text-muted-foreground">
              Al acceder al sitio web de <span className="font-semibold text-foreground">KPixel Craft</span> o contratar nuestros servicios de desarrollo, usted acepta estar sujeto a estos términos de servicio, a todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de las leyes locales aplicables.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <FileText className="w-5 h-5 text-accent" />
              2. Propiedad Intelectual
            </h2>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Código del Cliente:</strong> Todo el código, diseño y activos creados específicamente para el cliente bajo un contrato pagado serán propiedad exclusiva del cliente una vez finalizado el pago total.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Código de KPixel Craft:</strong> Nos reservamos el derecho de reutilizar fragmentos de código genérico, librerías internas o herramientas de nuestra autoría que no contengan lógica de negocio específica o secretos comerciales del cliente.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              3. Limitaciones
            </h2>
            <div className="bg-secondary/30 p-6 rounded-2xl border border-border/50">
              <p className="text-muted-foreground mb-4">
                En ningún caso KPixel Craft o sus proveedores serán responsables de ningún daño (incluyendo, sin limitación, daños por pérdida de datos o beneficios, o debido a la interrupción del negocio) que surjan del uso o la imposibilidad de usar nuestros servicios.
              </p>
              <div className="flex gap-3 text-sm text-yellow-500/80 items-start">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>No garantizamos que el software esté 100% libre de errores, aunque nos esforzamos por seguir las mejores prácticas de QA y testing.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              4. Pagos y Reembolsos
            </h2>
            <p className="text-muted-foreground">
              Los proyectos requieren un anticipo (generalmente 50%) para comenzar. Este anticipo no es reembolsable una vez que el trabajo ha comenzado, para cubrir los costos operativos y de tiempo del equipo. El saldo restante se abona contra entrega.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              5. Ley Aplicable
            </h2>
            <p className="text-muted-foreground">
              Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de <strong className="text-foreground">Guatemala</strong> y usted se somete irrevocablemente a la jurisdicción exclusiva de los tribunales en dicha ubicación.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Terms;