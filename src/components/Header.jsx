import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

export default function Header({ onOpenForm }) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // Determine alignment based on current language
  const isRtl = i18n.language === 'ar';

  return (
    <div className={`w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-10 px-6 gap-10 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
      
      {/* 1. Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000" 
            alt="Shadwa Group Logistics" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/10 hover:bg-transparent transition-all duration-500"></div>
        </div>
      </div>

      {/* 2. Text Content Section */}
      <div className={`w-full md:w-1/2 ${isRtl ? 'text-right' : 'text-left'}`}>
        {/* 3. Title - using home.title from your i18n.js */}
        <h1 className="text-5xl md:text-6xl font-black text-blue-900 mb-4 tracking-tight">
          {t('home.title')}
        </h1>
        
        {/* 4. Description - using home.Subtitle */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {t('home.Subtitle')}
        </p>

        {/* 5. Action Buttons */}
        <div className={`flex flex-wrap gap-4 ${isRtl ? 'justify-start flex-row-reverse' : 'justify-start'}`}>
          <button 
            onClick={() => navigate('/request')}
            className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            {t('home.Button2')}
          </button>
          
          <button 
            onClick={() => navigate('/explore')}
            className="bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg transition-all"
          >
            {t('home.Button1')}
          </button>
        </div>
      </div>
    </div>
  );
}