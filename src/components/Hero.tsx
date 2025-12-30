import { BackgroundBeams } from "@/components/BackgroundBeams";
import { ArrowRight, Code, Terminal, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex flex-col md:flex-row pt-20 relative overflow-hidden">
      {/* Dynamic Background */}
      <BackgroundBeams />

      {/* Left Side - Content (Dark) */}
      <div className="w-full md:w-1/2 bg-nft-black p-8 md:p-16 flex flex-col justify-center items-start z-10 relative">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none text-nft-white">
          {t('hero.headline.part1')} <br />
          {t('hero.headline.part2')} <br />
          <span className="text-accent bg-nft-white/5 px-2 border border-accent/20">{t('hero.headline.part3')}</span> <br />
          {t('hero.headline.part4')}
        </h1>
        <p className="text-xl font-medium text-gray-400 mb-8 max-w-lg">
          {t('hero.subheadline')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            to="/contact"
            className="px-8 py-4 bg-accent text-white text-lg font-bold rounded-full hover:scale-105 hover:bg-accent/80 transition-all duration-300 shadow-[0_0_30px_-5px_hsl(var(--accent)/0.5)] flex items-center justify-center gap-2"
          >
            {t('hero.cta_primary')} <ArrowRight className="w-5 h-5" />
          </Link>
          <button className="px-8 py-4 border-2 border-gray-700 text-white text-lg font-bold rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2">
            {t('hero.cta_secondary')} <Terminal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Right Side - Visuals (Transparent for Beams) */}
      <div className="w-full md:w-1/2 relative overflow-hidden min-h-[50vh] md:min-h-auto flex items-center justify-center pointer-events-none md:pointer-events-auto">

        {/* Floating Elements Animation */}
        <div className="relative w-full h-full flex items-center justify-center">

          {/* Main Floating Card */}
          <div className="absolute animate-float hover:scale-110 transition-transform cursor-pointer pointer-events-auto">
            <div className="bg-nft-black/80 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/10 rotate-[-6deg] hover:rotate-0 transition-all duration-500 max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Cpu className="text-green-500 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold">99.9% {t('hero.floating.uptime')}</h3>
                  <p className="text-gray-400 text-xs">{t('hero.floating.infra')}</p>
                </div>
              </div>
              <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-[95%] bg-green-500"></div>
              </div>
            </div>
          </div>

          {/* Snippet Card */}
          <div className="absolute bottom-1/4 right-1/4 animate-float delay-500">
            <div className="bg-[#1E1E1E] p-4 rounded-xl shadow-2xl border border-white/5 rotate-[3deg] scale-90">
              <div className="flex gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="font-mono text-xs text-blue-300">
                <span className="text-purple-400">const</span> <span className="text-yellow-300">buildFuture</span> = () ={">"} {"{"} <br />
                &nbsp;&nbsp;<span className="text-blue-300">return</span> <span className="text-green-300">"KPixel"</span>;<br />
                {"}"}
              </div>
            </div>
          </div>

          <div className="absolute top-1/3 right-10 animate-float delay-300 hidden md:block">
            <div className="bg-accent text-white px-4 py-2 rounded-lg font-bold text-sm shadow-[0_0_20px_rgba(168,85,247,0.4)] -rotate-12 border border-white/20 flex items-center gap-2">
              <Code className="w-4 h-4" /> {t('hero.floating.custom')}
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};