import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Counter from "./Counter"; 
import ServiceDetailItem from "./ServicesDetails"; 

export default function ServicesAndStats() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const services = [
    {
      title: t('servicesSection.card1Title'),
      desc: t('servicesSection.card1Desc'),
      image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=800",
    },
    {
      title: t('servicesSection.card2Title'),
      desc: t('servicesSection.card2Desc'),
      image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=800",
    },
    {
      title: t('servicesSection.card3Title'),
      desc: t('servicesSection.card3Desc'),
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800",
    }
  ];

  // Function to handle clicking and scrolling
  const scrollToService = (index) => {
    const target = document.getElementById(`service-detail-${index}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="py-20 bg-white" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Text */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4">
            {t('servicesSection.title')}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t('servicesSection.subtitle')}
          </p>
        </div>

        {/* 3 Columns Menu - Now Clickable */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              onClick={() => scrollToService(index)}
              whileHover={{ y: -10 }}
              className="cursor-pointer group bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="p-8 pb-4">
                <h3 className="text-2xl font-bold text-blue-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2">Click to view details ↓</p>
              </div>
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* PRERENDERED DETAILS SECTION */}
        <div className="space-y-10 py-10">
          <div className="text-center mb-10">
             <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
          </div>
          {services.map((service, index) => (
            <ServiceDetailItem 
              key={index} 
              service={service} 
              index={index} 
              isRtl={isRtl} 
            />
          ))}
        </div>

        {/* Stats Section */}

        <div className="bg-blue-900 rounded-[40px] p-10 md:p-16 text-white shadow-xl shadow-blue-200">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

            <div className="space-y-2">

              <div className="text-5xl font-black flex justify-center gap-1">

                <Counter end={20000} />+

              </div>

              <p className="text-blue-200 font-medium uppercase tracking-widest text-sm">

                {t("servicesSection.statsShipments")}

              </p>

            </div>

            <div className="space-y-2 border-y md:border-y-0 md:border-x border-blue-800 py-8 md:py-0">

              <div className="text-5xl font-black flex justify-center gap-1">

                <Counter end={1200} />+

              </div>

              <p className="text-blue-200 font-medium uppercase tracking-widest text-sm">

                {t("servicesSection.statsCustomers")}

              </p>

            </div>

            <div className="space-y-2">

              <div className="text-5xl font-black flex justify-center gap-1">

                <Counter end={45} />+

              </div>

              <p className="text-blue-200 font-medium uppercase tracking-widest text-sm">

                {t("servicesSection.statsCountries")}

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}