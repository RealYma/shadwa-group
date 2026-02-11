import { useTranslation } from "react-i18next";
import ceoImage from "../assets/ceo.jpeg"; // Ensure the filename matches yours

export default function CeoSection() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <section className="py-20 bg-gray-50 overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col md:flex-row items-center gap-12 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
          
          {/* CEO Image - Visual Focus */}
          <div className="w-full md:w-2/5">
            <div className="relative">
              {/* Decorative background element */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-600 rounded-2xl z-0"></div>
              
              <img 
                src={ceoImage} 
                alt="CEO Shadwa Group" 
                className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Experience Badge */}
              <div className={`absolute bottom-6 ${isRtl ? '-left-6' : '-right-6'} z-20 bg-blue-600 text-white p-6 rounded-xl shadow-xl hidden lg:block`}>
                <p className="text-3xl font-black">30+</p>
                <p className="text-xs uppercase tracking-widest">{t('explore.statsYears')}</p>
              </div>
            </div>
          </div>

          {/* CEO Message Content */}
          <div className={`w-full md:w-3/5 ${isRtl ? 'text-right' : 'text-left'}`}>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
              {t('ceo.subtitle')}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mt-4 mb-8">
              {t('ceo.title')}
            </h2>
            
            <div className="relative">
              {/* Quote Mark Icon Placeholder */}
              <span className="text-8xl text-blue-100 absolute -top-10 -right-4 font-serif">“</span>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic relative z-10">
                {t('ceo.message')}
              </p>
            </div>

            <div className="mt-10">
              <p className="text-2xl font-bold text-blue-900">{t('ceo.name')}</p>
              <p className="text-gray-500 font-medium">{t('ceo.position')}</p>
            </div>

            {/* Signature Placeholder */}
            <div className="mt-6 opacity-40 grayscale">
               {/* If you have a signature image, put it here */}
               <p className="font-serif text-3xl italic text-blue-900">Shadwa Group</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}