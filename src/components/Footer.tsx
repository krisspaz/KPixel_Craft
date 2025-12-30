import { Twitter, Instagram, Youtube, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-nft-black text-nft-white pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
          {/* Brand & Newsletter */}
          <div className="w-full md:w-1/3">
            <div className="w-12 h-12 bg-nft-white rounded-full flex items-center justify-center text-nft-black font-bold text-2xl mb-8">
              K
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('footer.subscribe_title')}</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t('footer.email_placeholder')}
                className="bg-transparent border border-gray-700 rounded-full px-6 py-3 w-full focus:border-nft-yellow focus:outline-none transition-colors"
              />
              <button className="bg-nft-white text-nft-black font-bold px-6 py-3 rounded-full hover:bg-nft-yellow transition-colors flex items-center justify-center">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-6 text-gray-500 uppercase text-xs tracking-wider">{t('footer.company')}</h4>
              <ul className="space-y-4 font-semibold">
                <li><a href="#" className="hover:text-nft-yellow transition-colors">{t('footer.links.about')}</a></li>
                <li><a href="#" className="hover:text-nft-yellow transition-colors">{t('footer.links.careers')}</a></li>
                <li><a href="#" className="hover:text-nft-yellow transition-colors">{t('footer.links.ventures')}</a></li>
                <li><a href="#" className="hover:text-nft-yellow transition-colors">{t('footer.links.grants')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-gray-500 uppercase text-xs tracking-wider">{t('footer.support')}</h4>
              <ul className="space-y-4 font-semibold">
                <li><a href="#" className="hover:text-nft-yellow transition-colors">{t('footer.links.help')}</a></li>
                <li><a href="#" className="hover:text-nft-yellow transition-colors">{t('footer.links.terms')}</a></li>
                <li><a href="#" className="hover:text-nft-yellow transition-colors">{t('footer.links.privacy')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-gray-500 uppercase text-xs tracking-wider">{t('footer.social')}</h4>
              <ul className="space-y-4 font-semibold">
                <li><a href="#" className="hover:text-nft-yellow transition-colors flex items-center gap-2">Twitter <Twitter className="w-4 h-4" /></a></li>
                <li><a href="#" className="hover:text-nft-yellow transition-colors flex items-center gap-2">Instagram <Instagram className="w-4 h-4" /></a></li>
                <li><a href="#" className="hover:text-nft-yellow transition-colors flex items-center gap-2">YouTube <Youtube className="w-4 h-4" /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-medium">
          <p>{t('footer.rights')}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-nft-white transition-colors">{t('footer.links.privacy')}</a>
            <a href="#" className="hover:text-nft-white transition-colors">{t('footer.links.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
