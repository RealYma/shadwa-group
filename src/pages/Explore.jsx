import Divider from "../components/Divider";
import Counter from "../components/Counter";
import { FaShip, FaGlobe, FaCubes, FaUserTie, FaCheckDouble, FaHandshake } from 'react-icons/fa'; // Added icons
import PageTransition from "../components/PageTransition";
import { useTranslation } from "react-i18next";
import BrandSlider from "../components/Brands";

export default function Explore() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  
  return (
    <PageTransition>
      <div className="relative min-h-screen bg-white" dir={isRtl ? "rtl" : "ltr"}>
      
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('https://i.ibb.co/RTMnLLR7/Whats-App-Image-2026-02-09-at-17-08-28.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Header */}
        <section className="py-24 px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
            {t('explore.heroTitle')}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
            {t('explore.heroSub')}
          </p>
        </section>

        <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">
          
          {/* 1. Company Definition & Stats Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 text-white shadow-2xl">
            <div className={isRtl ? "text-right" : "text-left"}>
              <h2 className="text-3xl font-bold mb-4">{t('explore.aboutTitle')}</h2>
              <p className="text-blue-50 leading-loose mb-6">
                {t('explore.aboutDesc')}
              </p>
              
              {/* Success Badge */}
              <div className="bg-green-500/20 border border-green-500/40 p-4 rounded-xl mb-6 inline-block">
                <p className="text-green-300 font-bold flex items-center gap-2">
                  <FaCheckDouble /> {t('explore.noConflict')}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-600/50 px-4 py-2 rounded-full text-sm font-bold">{t('explore.spec1')}</span>
                <span className="bg-blue-600/50 px-4 py-2 rounded-full text-sm font-bold">{t('explore.spec2')}</span>
                <span className="bg-blue-600/50 px-4 py-2 rounded-full text-sm font-bold">{t('explore.spec3')}</span>
                <span className="bg-blue-600/50 px-4 py-2 rounded-full text-sm font-bold">{t('explore.spec4')}</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl font-black text-blue-400 italic">
                <Counter end={25} />+
              </div>
              <p className="text-xl font-bold uppercase tracking-widest">{t('explore.statsYears')}</p>
            </div>
          </div>

          {/* 2. Team Section - NEW */}
          <div className={`flex flex-col md:flex-row items-center gap-10 bg-blue-900/40 p-10 rounded-3xl border border-white/10 text-white ${isRtl ? 'md:flex-row-reverse' : ''}`}>
             <div className="p-6 bg-blue-600 rounded-full">
                <FaUserTie size={60} />
             </div>
             <div className={isRtl ? "text-right" : "text-left"}>
                <h3 className="text-2xl font-bold mb-2">{t('explore.teamTitle')}</h3>
                <p className="text-blue-100 leading-relaxed">{t('explore.teamDesc')}</p>
             </div>
          </div>

          {/* Services Grid (Title & Content) */}
          <div className="space-y-8">
            <div className="text-center text-white">
               <h2 className="text-4xl font-black mb-2">{t('servicesSection.title')}</h2>
               <p className="text-blue-200">{t('servicesSection.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard 
                icon={<FaGlobe size={40} />}
                title={t('servicesSection.doorToDoorTitle')}
                desc={t('servicesSection.doorToDoorDesc')}
                isRtl={isRtl}
              />
              <GlassCard 
                icon={<FaShip size={40} />}
                title={t('servicesSection.shippingTitle')}
                desc={t('servicesSection.shippingDesc')}
                isRtl={isRtl}
              />
              <GlassCard 
                icon={<FaHandshake size={40} />}
                title={t('servicesSection.financeTitle')}
                desc={t('servicesSection.financeDesc')}
                isRtl={isRtl}
              />
            </div>
          </div>

          {/* 3. Branding & Partners */}
<div className={`flex flex-col md:flex-row items-center gap-10 mb-12 ${isRtl ? 'md:flex-row-reverse text-right' : 'text-left'}`}>
  <div className="md:w-1/2">
    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
      {t('explore.partnersDeepDive')}
    </h2>
    <p className="text-blue-100 text-lg leading-loose opacity-90">
      {t('explore.partnersDesc')}
    </p>
  </div>
  <div className="md:w-1/2 grid grid-cols-2 gap-4">
    <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
      <p className="text-blue-400 text-sm font-bold uppercase mb-1">{t('explore.spec1')}</p>
      <p className="text-white text-2xl font-black">10,000+</p>
    </div>
    <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
      <p className="text-blue-400 text-sm font-bold uppercase mb-1">{t('explore.spec2')}</p>
      <p className="text-white text-2xl font-black">5,000+</p>
    </div>
  </div>
</div>

<BrandSlider />
          
        </div>
      </div>
    </div>
    </PageTransition>
  );
}

function GlassCard({ icon, title, desc, isRtl }) {
  return (
    <div className={`bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl text-white hover:bg-white/20 transition-all group ${isRtl ? 'text-right' : 'text-left'}`}>
      <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-blue-100 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}