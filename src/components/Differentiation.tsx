import { X, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const rowKeys = ["1", "2", "3", "4", "5"];

export const Differentiation = () => {
    const { t } = useTranslation();

    return (
        <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-section" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-lime/3 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block"
                    >
                        {t("differentiation.subtitle")}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
                    >
                        {t("differentiation.title")}{" "}
                        <span className="text-gradient font-serif italic font-normal">
                            {t("differentiation.title_highlight")}
                        </span>
                    </motion.h2>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-16"
                >
                    {t("differentiation.intro")}
                </motion.p>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto rounded-3xl border border-white/[0.06] bg-card/50 overflow-hidden"
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-3 gap-0">
                        <div className="p-6 border-b border-r border-white/[0.06]">
                            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                {t("differentiation.comparison.headers.aspect")}
                            </span>
                        </div>
                        <div className="p-6 border-b border-r border-white/[0.06] text-center">
                            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                {t("differentiation.comparison.headers.freelancer")}
                            </span>
                        </div>
                        <div className="p-6 border-b border-white/[0.06] text-center bg-accent/5">
                            <span className="text-sm font-bold text-accent uppercase tracking-wider">
                                {t("differentiation.comparison.headers.kpixel")}
                            </span>
                        </div>
                    </div>

                    {/* Table Rows */}
                    {rowKeys.map((key, index) => (
                        <div
                            key={key}
                            className={`grid grid-cols-3 gap-0 ${index < rowKeys.length - 1 ? "border-b border-white/[0.06]" : ""
                                }`}
                        >
                            <div className="p-6 border-r border-white/[0.06] flex items-center">
                                <span className="text-sm font-medium text-foreground">
                                    {t(`differentiation.comparison.rows.${key}.aspect`)}
                                </span>
                            </div>
                            <div className="p-6 border-r border-white/[0.06] flex items-center justify-center gap-2">
                                <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground text-center">
                                    {t(`differentiation.comparison.rows.${key}.freelancer`)}
                                </span>
                            </div>
                            <div className="p-6 bg-accent/5 flex items-center justify-center gap-2">
                                <Check className="w-4 h-4 text-lime flex-shrink-0" />
                                <span className="text-sm text-foreground font-medium text-center">
                                    {t(`differentiation.comparison.rows.${key}.kpixel`)}
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Differentiation;
