import { useState } from "react";
import { Check, ArrowRight, Sparkles, Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const planKeys = ["web", "landing", "ecommerce", "systems"] as const;

export const Pricing = () => {
    const { t } = useTranslation();
    const [isPremium, setIsPremium] = useState(false);

    return (
        <section id="inversion" className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-section" />
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block"
                    >
                        {t("pricing.subtitle")}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6"
                    >
                        {t("pricing.title")}{" "}
                        <span className="text-gradient font-serif italic font-normal">
                            {t("pricing.title_highlight")}
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-lg text-muted-foreground leading-relaxed"
                    >
                        {t("pricing.description")}
                    </motion.p>
                </div>

                {/* Toggle Standard / Premium */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-16"
                >
                    <div className="bg-card/50 border border-white/[0.06] rounded-full p-1 flex items-center gap-1">
                        <button
                            onClick={() => setIsPremium(false)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${!isPremium
                                ? "bg-accent text-white shadow-lg shadow-accent/20"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {t("pricing.toggle.standard")}
                        </button>
                        <button
                            onClick={() => setIsPremium(true)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${isPremium
                                ? "bg-accent text-white shadow-lg shadow-accent/20"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            <Sparkles className="w-3.5 h-3.5" />
                            {t("pricing.toggle.premium")}
                        </button>
                    </div>
                </motion.div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {planKeys.map((key, index) => {
                        const isPopular = t(`pricing.plans.${key}.popular`, { defaultValue: "" }) === "true";
                        const priceUsd = isPremium
                            ? t(`pricing.plans.${key}.price_usd_premium`)
                            : t(`pricing.plans.${key}.price_usd`);
                        const priceGtq = isPremium
                            ? t(`pricing.plans.${key}.price_gtq_premium`)
                            : t(`pricing.plans.${key}.price_gtq`);

                        // Get includes array based on toggle state
                        const includesKey = isPremium ? "includes_premium" : "includes";
                        const includes = t(`pricing.plans.${key}.${includesKey}`, {
                            returnObjects: true,
                        }) as string[];

                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`group relative p-8 lg:p-10 rounded-3xl border bg-card/50 overflow-hidden transition-all duration-300 ${isPopular
                                    ? "border-accent/30 shadow-xl shadow-accent/5"
                                    : "border-white/[0.06] hover-glow"
                                    }`}
                            >
                                {/* Popular badge */}
                                {isPopular && (
                                    <div className="absolute top-6 right-6">
                                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-white text-xs font-bold">
                                            <Sparkles className="w-3 h-3" />
                                            Popular
                                        </span>
                                    </div>
                                )}

                                {/* Premium badge */}
                                {isPremium && (
                                    <div className={`absolute top-6 ${isPopular ? "right-24" : "right-6"}`}>
                                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-lime/10 border border-lime/20 text-lime text-xs font-bold">
                                            {t("pricing.premium_badge")}
                                        </span>
                                    </div>
                                )}

                                {/* Plan Name */}
                                <h3 className="text-xl font-bold text-foreground mb-3 pr-20">
                                    {t(`pricing.plans.${key}.name`)}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                    {t(`pricing.plans.${key}.desc`)}
                                </p>

                                {/* Price */}
                                <div className="mb-8">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-sm text-muted-foreground">Desde</span>
                                        <span className="text-4xl font-black text-foreground">
                                            ${priceUsd}
                                        </span>
                                        <span className="text-sm font-semibold text-muted-foreground">
                                            USD
                                        </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        ≈ Q{priceGtq} GTQ
                                    </p>
                                </div>

                                {/* Includes */}
                                <div className="space-y-3 mb-8">
                                    {Array.isArray(includes) &&
                                        includes.map((item, i) => (
                                            <div key={i} className="flex items-start gap-2.5">
                                                <Check className="w-4 h-4 text-lime flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-foreground/80">{item}</span>
                                            </div>
                                        ))}
                                </div>

                                {/* CTA */}
                                <a
                                    href="#contacto"
                                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 font-bold rounded-full transition-all duration-300 text-sm ${isPopular
                                        ? "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:scale-[1.01]"
                                        : "border border-white/[0.08] text-foreground hover:bg-accent hover:text-white hover:border-accent"
                                        }`}
                                >
                                    {t("pricing.cta")}
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Disclaimer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mt-12"
                >
                    <div className="flex items-start gap-3 p-5 rounded-2xl bg-card/30 border border-white/[0.04]">
                        <Info className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            {t("pricing.note")}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
