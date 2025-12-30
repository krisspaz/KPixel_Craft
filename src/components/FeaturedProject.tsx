import { CheckCircle, ExternalLink, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const FeaturedProject = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-white text-nft-black overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
                {/* Left - Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/3"
                >
                    <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">{t('featured.subtitle')}</span>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                        {t('featured.title')} <br />
                        {t('featured.title2')} <br />
                        <span className="text-white bg-nft-black px-2 py-1">{t('featured.title_highlight')}</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 font-medium">
                        {t('featured.desc')}
                    </p>
                    <ul className="space-y-4 font-bold text-lg text-gray-800">
                        {[1, 2, 3].map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                                className="flex items-center gap-3"
                            >
                                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                    <CheckCircle className="w-5 h-5" />
                                </div>
                                {t(`featured.points.${item}`)}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Right - Project Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 50, rotate: 5 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, type: "spring" }}
                    className="w-full md:w-2/3 relative"
                >
                    <div className="bg-gray-50 rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 max-w-2xl mx-auto transform hover:-translate-y-2 transition-transform duration-500 group">
                        {/* Browser Header Mockup */}
                        <div className="h-12 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="flex-1 bg-white mx-4 rounded-md h-8 text-xs flex items-center px-3 text-gray-400 font-medium">
                                dashboard.client.com
                            </div>
                        </div>

                        {/* Dashboard Visual */}
                        <div className="p-8 relative">
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                        <div className="text-xs text-gray-400 uppercase font-bold mb-1">{t('featured.stats.sales')}</div>
                                        <div className="text-2xl font-black text-gray-800">$124,500</div>
                                        <div className="text-xs text-green-500 font-bold mt-1 flex items-center gap-1">
                                            <Zap className="w-3 h-3" /> +12.5%
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 h-64 flex items-center justify-center relative overflow-hidden group-hover:shadow-xl transition-shadow">
                                <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent"></div>
                                {/* Mock Graph */}
                                <div className="flex items-end gap-2 h-32 w-full px-8">
                                    {[40, 60, 45, 70, 50, 80, 65, 90].map((h, i) => (
                                        <div key={i} className="flex-1 bg-accent rounded-t-sm opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 12 }}
                                className="absolute -right-4 top-20 bg-nft-black text-white px-6 py-3 rounded-full font-bold shadow-xl rotate-12 flex items-center gap-2 z-10 cursor-pointer"
                            >
                                <ExternalLink className="w-4 h-4" /> {t('featured.view_case')}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
