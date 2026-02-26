import { Target, MessageSquare, TrendingUp, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Target,
    titleKey: "about.values.1",
  },
  {
    icon: TrendingUp,
    titleKey: "about.values.2",
  },
  {
    icon: MessageSquare,
    titleKey: "about.values.3",
  },
  {
    icon: Shield,
    titleKey: "about.values.4",
  },
];

export const WhyUs = () => {
  const { t } = useTranslation();

  return (
    <section id="nosotros" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lime/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — Text */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
                {t("about.subtitle")}
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                {t("about.title")}{" "}
                <span className="text-gradient font-serif italic font-normal">
                  {t("about.title_highlight")}
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                {t("about.description")}
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-3 gap-6 border-t border-border pt-8"
            >
              {[
                { value: "+3", label: t("about.stats.years") },
                { value: "100%", label: t("about.stats.satisfaction") },
                { value: "24/7", label: t("about.stats.support") },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Value Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card/50 border border-white/[0.06] hover-glow group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                  <reason.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-bold text-foreground leading-snug">
                  {t(reason.titleKey)}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
