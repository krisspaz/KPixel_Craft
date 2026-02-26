import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
    };

    const navLinks = [
        { href: "#servicios", label: t("nav.services") },
        { href: "#proceso", label: t("nav.process") },
        { href: "#inversion", label: t("nav.pricing") },
        { href: "#proyectos", label: t("nav.projects") },
        { href: "#nosotros", label: t("nav.about") },
        { href: "#contacto", label: t("nav.contact") },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-background/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group relative z-50">
                            <img
                                src="/icono.png"
                                alt="KPixel Craft"
                                className="h-9 w-9 object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                            <span className="font-bold text-xl tracking-tight text-foreground hidden sm:block">
                                KPixel<span className="text-accent">Craft</span>
                            </span>
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={toggleLanguage}
                                className="text-xs font-semibold text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-full border border-border hover:border-accent/30 transition-all"
                            >
                                {i18n.language === "es" ? "EN" : "ES"}
                            </button>
                            <a
                                href="#contacto"
                                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:scale-[1.02]"
                            >
                                {t("nav.start_project")}
                                <ArrowRight className="w-4 h-4" />
                            </a>

                            {/* Mobile Toggle */}
                            <button
                                className="lg:hidden p-2 text-foreground hover:bg-white/[0.05] rounded-xl transition-colors relative z-50"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Menu"
                            >
                                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`absolute top-full left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-lg font-medium p-3 rounded-xl text-foreground hover:bg-white/[0.04] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="h-px bg-border/50 my-2" />
                        <a
                            href="#contacto"
                            className="w-full text-center px-5 py-3 bg-accent text-white font-semibold rounded-full"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t("nav.start_project")}
                        </a>
                    </div>
                </div>
            </nav>

            {/* Mobile overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-background/30 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
};
