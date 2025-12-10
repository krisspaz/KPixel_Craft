import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    subject: z.string(),
    message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormData) => {
        setIsSubmitting(true);

        const message = `👋 Hola Kris (KPixel Craft), vengo de tu sitio web.

👤 *Nombre:* ${data.name}
📧 *Email:* ${data.email}
🏷️ *Asunto:* ${data.subject}

📝 *Mensaje:* ${data.message}`;

        const phoneNumber = "50257937229";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        setTimeout(() => {
            window.open(whatsappUrl, "_blank");
            setIsSubmitting(false);
            setIsSent(true);
            reset();
            setTimeout(() => setIsSent(false), 5000);
        }, 1500);
    };

    return (
        <div className="rounded-3xl border border-accent/40 bg-card p-8 shadow-lg shadow-accent/10 relative overflow-hidden">
            {isSent && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-card z-20 animate-fade-in text-center p-8">
                    <div className="w-16 h-16 bg-accent/15 rounded-full flex items-center justify-center mb-4">
                        <Send className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">¡Redirigiendo a WhatsApp!</h3>
                    <p className="text-muted-foreground">Gracias por contactarnos.</p>
                    <button
                        onClick={() => setIsSent(false)}
                        className="mt-6 text-sm text-accent hover:underline"
                    >
                        Enviar otro mensaje
                    </button>
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name-input" className="text-sm font-medium text-foreground">
                            Nombre completo
                        </label>
                        <input
                            id="name-input"
                            type="text"
                            {...register("name")}
                            className={`w-full px-4 py-3 bg-secondary/50 border rounded-xl text-foreground 
                                placeholder:text-muted-foreground transition-all 
                                ${errors.name ? "border-red-500" : "border-border"} 
                                focus:ring-2 focus:ring-accent/50 focus:border-accent
                            `}
                            placeholder="John Doe"
                        />
                        {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email-input" className="text-sm font-medium text-foreground">Email</label>
                        <input
                            id="email-input"
                            type="email"
                            {...register("email")}
                            className={`w-full px-4 py-3 bg-secondary/50 border rounded-xl text-foreground 
                                ${errors.email ? "border-red-500" : "border-border"} 
                                focus:ring-2 focus:ring-accent/50 focus:border-accent
                            `}
                            placeholder="john@empresa.com"
                        />
                        {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject-select" className="text-sm font-medium text-foreground">Asunto</label>
                    <select
                        id="subject-select"
                        {...register("subject")}
                        className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    >
                        <option value="Desarrollo Web">Desarrollo Web / App</option>
                        <option value="Consultoría">Consultoría</option>
                        <option value="Diseño">Diseño UI/UX</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message-textarea" className="text-sm font-medium text-foreground">Mensaje</label>
                    <textarea
                        id="message-textarea"
                        {...register("message")}
                        rows={5}
                        className={`w-full px-4 py-3 bg-secondary/50 border rounded-xl text-foreground 
                            placeholder:text-muted-foreground resize-none 
                            ${errors.message ? "border-red-500" : "border-border"} 
                            focus:ring-2 focus:ring-accent/50 focus:border-accent
                        `}
                        placeholder="Cuéntanos los detalles de tu proyecto..."
                    />
                    {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 rounded-xl font-medium bg-accent hover:opacity-90 text-white transition-all shadow-lg shadow-accent/30"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Conectando...
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
    );
};
