import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const steps = [
    { number: "01", key: "1", accent: "bg-accent" },
    { number: "02", key: "2", accent: "bg-lime" },
    { number: "03", key: "3", accent: "bg-accent" },
    { number: "04", key: "4", accent: "bg-lime" },
];

export const Process = () => {
    const { t } = useTranslation();

    return (
        <section id="proceso" className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-section" />

            <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block"
                    >
                        {t("process.subtitle")}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
                    >
                        {t("process.title")}{" "}
                        <span className="text-gradient font-serif italic font-normal">
                            {t("process.title_highlight")}
                        </span>
                    </motion.h2>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group relative p-8 rounded-3xl border border-white/[0.06] bg-card/50 hover-glow overflow-hidden"
                        >
                            {/* Step number */}
                            <div className="flex items-center gap-3 mb-6">
                                <div
                                    className={`w-10 h-10 rounded-xl ${step.accent} flex items-center justify-center`}
                                >
                                    <span className="text-sm font-black text-white">
                                        {step.number}
                                    </span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 -right-3 w-6 h-px bg-white/10" />
                                )}
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-foreground">
                                {t(`process.steps.${step.key}.name`)}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {t(`process.steps.${step.key}.desc`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
