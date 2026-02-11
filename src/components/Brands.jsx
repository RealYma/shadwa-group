import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function BrandSlider() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  
  const brands = ["ZARA", "MANGO", "KITCHENER", "TEAM SPORT", "ADIDAS", "PUMA", "NIKE", "H&M"];
  
  // We duplicate the list to ensure there's no gap
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="bg-white rounded-3xl py-12 shadow-2xl overflow-hidden border border-gray-100 mt-16">
      <h3 className="text-2xl font-bold text-blue-900 mb-10 text-center uppercase tracking-widest">
        {t('explore.partners')}
      </h3>
      
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-16 items-center whitespace-nowrap px-8"
          animate={{
            // FIX: We use percentages. 
            // In RTL, the browser often handles 'x' as positive for right, but 
            // percentage-based translate (translateX) is more stable across 'dir' changes.
            x: isRtl ? ["50%", "0%"] : ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <span 
              key={index} 
              className="text-4xl md:text-5xl font-black text-gray-200 hover:text-blue-600 transition-colors duration-500 cursor-default select-none uppercase"
            >
              {brand}
            </span>
          ))}
        </motion.div>

        {/* Gradient Overlays (Stay the same) */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  );
}