import { Instagram, Github, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="pt-24 pb-12 relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
          {/* Brand & Newsletter */}
          <div className="w-full lg:w-1/3">
            <img
              src="/icono.png"
              alt="KPixel Craft"
              className="h-12 w-12 object-contain mb-6"
            />
            <h3 className="text-2xl font-bold mb-2 text-foreground">
              KPixel<span className="text-accent">Craft</span>
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t("footer.email_placeholder")}
                className="bg-background/50 border border-white/[0.08] rounded-full px-5 py-3 w-full text-sm focus:border-accent/50 focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground/50"
              />
              <button className="bg-accent text-white font-bold px-5 py-3 rounded-full hover:bg-accent/90 transition-colors flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div>
              <h4 className="font-semibold mb-6 text-muted-foreground uppercase text-xs tracking-wider">
                {t("footer.company")}
              </h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#nosotros" className="text-foreground/70 hover:text-accent transition-colors">{t("footer.links.about")}</a></li>
                <li><a href="#servicios" className="text-foreground/70 hover:text-accent transition-colors">{t("footer.links.services")}</a></li>
                <li><a href="#proceso" className="text-foreground/70 hover:text-accent transition-colors">{t("footer.links.process")}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-muted-foreground uppercase text-xs tracking-wider">
                {t("footer.support")}
              </h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#contacto" className="text-foreground/70 hover:text-accent transition-colors">{t("footer.links.help")}</a></li>
                <li><a href="/terms" className="text-foreground/70 hover:text-accent transition-colors">{t("footer.links.terms")}</a></li>
                <li><a href="/privacy" className="text-foreground/70 hover:text-accent transition-colors">{t("footer.links.privacy")}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-muted-foreground uppercase text-xs tracking-wider">
                {t("footer.social")}
              </h4>
              <ul className="space-y-3 text-sm">
                <li><a href="https://github.com/krisspaz" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors flex items-center gap-2"><Github className="w-4 h-4" /> GitHub</a></li>
                <li><a href="https://instagram.com/krisspaz_" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row justify-between items-center text-muted-foreground text-xs gap-4">
          <p>{t("footer.rights")}</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-foreground transition-colors">{t("footer.links.privacy")}</a>
            <a href="/terms" className="hover:text-foreground transition-colors">{t("footer.links.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
