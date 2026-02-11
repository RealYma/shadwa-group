import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBoxOpen, FaFileContract, FaTruckLoading } from 'react-icons/fa';
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import ServicesAndStats from "../components/ServicesAndStats";
import CeoSection from "../components/CeoSection";
import BrandSlider from "../components/Brands";

export default function Home() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const triggerOrder = (serviceName) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  return (
    <PageTransition>
      {/* Dynamic direction handles Ar, En, and Zh correctly */}
      <div className="min-h-screen bg-white" dir={isRtl ? "rtl" : "ltr"}>
        <Header onOpenForm={() => triggerOrder("General")} />

        {/* 1. The Core Services & Interactive Detail Section */}
        <ServicesAndStats />

        {/* 2. Expanded Door-to-Door Process Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">
                {t('home.processTitle')}
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                {t('home.processSub')}
              </p>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 relative ${isRtl ? 'text-right' : 'text-left'}`}>
              <ProcessStep 
                icon={<FaBoxOpen />} 
                title={t('home.step1Title')} 
                desc={t('home.step1Desc')} 
                stepNum="01"
              />
              <ProcessStep 
                icon={<FaFileContract />} 
                title={t('home.step2Title')} 
                desc={t('home.step2Desc')} 
                stepNum="02"
              />
              <ProcessStep 
                icon={<FaTruckLoading />} 
                title={t('home.step3Title')} 
                desc={t('home.step3Desc')} 
                stepNum="03"
              />
            </div>
          </div>
        </section>

        {/* 3. CEO Trust Section */}
        <CeoSection />

        {/* 4. Global Partners Expansion */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-4">
               {t('explore.partnersDeepDive')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
               {t('explore.partnersDesc')}
            </p>
          </div>
          <BrandSlider />
        </section>

      </div>
    </PageTransition>
  );
}

// Helper component for the process steps
function ProcessStep({ icon, title, desc, stepNum }) {
  return (
    <div className="relative bg-white p-10 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-gray-100 group hover:-translate-y-3 transition-all duration-500">
      <span className="absolute top-6 right-8 text-6xl font-black text-gray-50 group-hover:text-blue-50 transition-colors">
        {stepNum}
      </span>
      <div className="text-5xl text-blue-600 mb-8 relative z-10">{icon}</div>
      <h3 className="text-2xl font-bold text-blue-900 mb-4 relative z-10">{title}</h3>
      <p className="text-gray-600 leading-relaxed relative z-10">{desc}</p>
    </div>
  );
}