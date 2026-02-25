import { Globe, Smartphone, Bot, Database, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: "web",
      icon: Globe,
      gradient: "from-purple-500/20 to-purple-600/5",
    },
    {
      key: "mobile",
      icon: Smartphone,
      gradient: "from-lime-400/20 to-lime-500/5",
    },
    {
      key: "ai",
      icon: Bot,
      gradient: "from-purple-500/20 to-lime-400/5",
    },
    {
      key: "backend",
      icon: Database,
      gradient: "from-lime-400/20 to-purple-500/5",
    },
  ];

  return (
    <section id="servicios" className="py-32 relative">
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
            {t("services.subtitle")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
          >
            {t("services.title")}{" "}
            <span className="text-gradient font-serif italic font-normal">
              {t("services.title_highlight")}
            </span>
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 lg:p-10 rounded-3xl border border-white/[0.06] bg-card/50 hover-glow cursor-pointer overflow-hidden"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <item.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-300" />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {t(`services.items.${item.key}.name`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {t(`services.items.${item.key}.desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};