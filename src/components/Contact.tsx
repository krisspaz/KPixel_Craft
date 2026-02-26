import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contacto" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-lime/3 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8 border border-accent/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime"></span>
            </span>
            {t("contact.badge")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6"
          >
            {t("contact.title")}{" "}
            <span className="text-gradient font-serif italic font-normal">{t("contact.title_highlight")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            {t("contact.description")}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="rounded-3xl border border-white/[0.06] bg-card/50 p-8 space-y-8">
              {[
                {
                  icon: Phone,
                  label: t("contact.info.phone_label"),
                  value: "+502 5793-7229",
                  href: "tel:+50257937229",
                  detail: t("contact.info.phone_detail"),
                },
                {
                  icon: Mail,
                  label: t("contact.info.email_label"),
                  value: "krispaz77@gmail.com",
                  href: "mailto:krispaz77@gmail.com",
                  detail: t("contact.info.email_detail"),
                },
                {
                  icon: MapPin,
                  label: t("contact.info.location_label"),
                  value: "Guatemala, GT",
                  detail: t("contact.info.location_detail"),
                },
              ].map((item, i) => (
                <div key={i}>
                  {i > 0 && <div className="w-full h-px bg-white/[0.04] mb-8" />}
                  <div className="group flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-105 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-lg text-foreground hover:text-accent transition-colors font-semibold block">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg text-foreground font-semibold">{item.value}</p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3 justify-center lg:justify-start">
              {[
                { icon: Github, href: "https://github.com/krisspaz", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/kristopher-paz-34610715a/", label: "LinkedIn" },
                { icon: Instagram, href: "https://instagram.com/krisspaz_", label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-white/[0.06] bg-card/50 flex items-center justify-center text-muted-foreground hover:border-accent/30 hover:text-accent hover:bg-accent/5 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-white/[0.06] bg-card/50 p-8 lg:p-10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.name")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("contact.form.name_placeholder")}
                      className="w-full px-4 py-3 bg-background/50 border border-white/[0.08] rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      placeholder={t("contact.form.email_placeholder")}
                      className="w-full px-4 py-3 bg-background/50 border border-white/[0.08] rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.subject")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("contact.form.subject_placeholder")}
                    className="w-full px-4 py-3 bg-background/50 border border-white/[0.08] rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    rows={5}
                    placeholder={t("contact.form.message_placeholder")}
                    className="w-full px-4 py-3 bg-background/50 border border-white/[0.08] rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:scale-[1.01]"
                >
                  {t("contact.form.submit")}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
