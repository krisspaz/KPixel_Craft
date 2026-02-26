import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
    const { t } = useTranslation();

    // Get FAQ items from locales
    const faqItems = t("faq.items", { returnObjects: true }) as Array<{ q: string; a: string }>;

    return (
        <section id="faq" className="py-24 relative overflow-hidden bg-background">
            {/* Background gradients */}
            <div className="absolute top-0 right-[-20%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-card border border-white/[0.04] shadow-xl">
                        <HelpCircle className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
                        {t("faq.title")}
                    </h2>
                    <p className="text-lg text-muted-foreground w-full max-w-2xl mx-auto">
                        {t("faq.subtitle")}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-card/30 border border-white/[0.04] p-6 md:p-10 rounded-3xl"
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {Array.isArray(faqItems) && faqItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-white/[0.04] bg-background/50 rounded-2xl px-6 data-[state=open]:bg-card/50 transition-colors"
                            >
                                <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-6">
                                    {item.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base pb-6">
                                    {item.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
