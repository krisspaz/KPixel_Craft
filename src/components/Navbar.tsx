import { Search, Wallet, Lightbulb, Code2, Globe } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-premium h-20 flex items-center px-6 md:px-12 transition-all duration-300">
            <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                        K
                    </div>
                    <span className="font-bold text-2xl tracking-tighter text-foreground">
                        Pixel<span className="text-accent">Craft</span>
                    </span>
                </Link>

                {/* Center - Links (Translated) */}
                <div className="hidden md:flex items-center gap-8 font-medium">
                    <a href="#servicios" className="text-muted-foreground hover:text-accent transition-colors">{t('nav.services')}</a>
                    <a href="#stack" className="text-muted-foreground hover:text-accent transition-colors">{t('nav.stack')}</a>
                    <a href="#proyectos" className="text-muted-foreground hover:text-accent transition-colors">{t('nav.projects')}</a>
                    <a href="#nosotros" className="text-muted-foreground hover:text-accent transition-colors">{t('nav.about')}</a>
                </div>

                {/* Right - Actions */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        title="Toggle Language"
                    >
                        <Globe className="w-5 h-5 text-muted-foreground hover:text-accent" />
                    </button>

                    <button className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-bold hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg border border-transparent hover:border-accent/50">
                        <span className="hidden md:inline">{t('nav.start_project')}</span>
                        <span className="md:hidden">{t('nav.contact')}</span>
                        <Lightbulb className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </nav>
    );
};
