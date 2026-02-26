import { useTranslation } from "react-i18next";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const WhatsAppButton = () => {
    const { i18n } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    // Show button after scrolling down a bit
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Use a generic WhatsApp string message based on the language
    const message = i18n.language === 'es'
        ? "Hola, vi su sitio web y me gustaría hablar sobre un proyecto."
        : "Hi, I saw your website and would like to talk about a project.";

    // Default number assuming country code (e.g., +502 for Guatemala or other)
    // Ensure the phone number includes the appropriate country code without the + 
    const phoneNumber = "50255555555"; // PLEASE REPLACE WITH ACTUAL BUSINESS NUMBER

    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 hover:bg-[#20ba59] hover:scale-110 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle className="w-7 h-7 fill-current" />
        </a>
    );
};

export default WhatsAppButton;
