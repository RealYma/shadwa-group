import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // Change page direction based on language
    document.body.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => changeLanguage('ar')} className="hover:text-blue-600 font-bold">AR</button>
      <button onClick={() => changeLanguage('en')} className="hover:text-blue-600 font-bold">EN</button>
      <button onClick={() => changeLanguage('zh')} className="hover:text-blue-600 font-bold">ZH</button>
    </div>
  );
}