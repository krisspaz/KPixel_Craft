import { ArrowRight, Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-lime/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime"></span>
            </span>
            Disponible para nuevos proyectos
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
          >
            {t("hero.headline.part1")}{" "}
            <br className="hidden sm:block" />
            {t("hero.headline.part2")}{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient font-serif italic font-normal">
              {t("hero.headline.part3")}
            </span>{" "}
            <br className="hidden sm:block" />
            {t("hero.headline.part4")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {t("hero.subheadline")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white text-lg font-bold rounded-full hover:bg-accent/90 transition-all duration-300 shadow-[0_0_40px_-8px_hsl(262_72%_55%/0.5)] hover:shadow-[0_0_60px_-8px_hsl(262_72%_55%/0.6)] hover:scale-[1.02]"
            >
              {t("hero.cta_primary")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#proyectos"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-foreground text-lg font-semibold rounded-full hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
            >
              {t("hero.cta_secondary")}
              <Play className="w-4 h-4 text-lime" />
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 lg:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "+3", label: "Años de experiencia" },
            { value: "99.9%", label: "Uptime garantizado" },
            { value: "100%", label: "Clientes satisfechos" },
            { value: "24/7", label: "Soporte disponible" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};