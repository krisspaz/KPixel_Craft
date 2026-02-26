import { Clock, Award, TrendingUp, BarChart3, Lock, Headphones } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const benefitIcons = [Clock, Award, TrendingUp, BarChart3, Lock, Headphones];

export const Benefits = () => {
    const { t } = useTranslation();

    return (
        <section id="beneficios" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block"
                    >
                        {t("benefits.subtitle")}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
                    >
                        {t("benefits.title")}{" "}
                        <span className="text-gradient font-serif italic font-normal">
                            {t("benefits.title_highlight")}
                        </span>
                    </motion.h2>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefitIcons.map((Icon, index) => {
                        const key = String(index + 1);
                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="group p-8 rounded-3xl border border-white/[0.06] bg-card/50 hover-glow"
                            >
                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                                    <Icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2">
                                    {t(`benefits.items.${key}.name`)}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {t(`benefits.items.${key}.desc`)}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
