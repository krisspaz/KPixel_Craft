import { ArrowRight, Globe, Smartphone, Bot, Database } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: "web",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=500&q=80"
    },
    {
      key: "mobile",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=500&q=80"
    },
    {
      key: "ai",
      icon: Bot,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=500&q=80"
    },
    {
      key: "backend",
      icon: Database,
      image: "https://images.unsplash.com/photo-1558494949-efdeb6bf80a1?w=500&h=500&q=80"
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-[#0B021C] text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">{t('services.subtitle')}</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
              {t('services.title')} <br />
              <span className="text-accent">{t('services.title_highlight')}</span>
            </h2>
          </div>
          <a href="#contacto" className="hidden md:flex items-center gap-2 font-bold hover:text-accent transition-colors">
            {t('services.view_all')} <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative border border-white/10 group-hover:border-accent/50 transition-colors">
                <img
                  src={item.image}
                  alt={t(`services.items.${item.key}.name`)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-accent/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 text-accent border border-accent/20">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{t(`services.items.${item.key}.name`)}</h3>
                  <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {t(`services.items.${item.key}.desc`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="#contacto" className="inline-flex items-center gap-2 font-bold hover:text-accent transition-colors">
            {t('services.view_all')} <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};