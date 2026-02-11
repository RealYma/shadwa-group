import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ar', label: 'العربية', flag: '🇪🇬' },
    { code: 'zh', label: '中文', flag: '🇨🇳' }
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.dir = lang === 'ar' ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    setLangDropdown(false);
    setIsOpen(false);
  };

  const navLinks = [
    { name: t("navbar.home"), path: "/" },
    { name: t("navbar.about"), path: "/explore" },
    { name: t("navbar.services"), path: "/#services" }, 
  ];

  // Get current language object
  const currentLanguage = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-black text-blue-900 tracking-tighter">
          SHADWA<span className="text-blue-600 font-light text-sm ml-1">GROUP</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              {link.name}
            </Link>
          ))}

          {/* Language Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setLangDropdown(!langDropdown)}
              className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all border border-gray-200"
            >
              <span>{currentLanguage.flag}</span>
              <span className="text-sm font-bold uppercase">{currentLanguage.code}</span>
              <span className={`text-[10px] transition-transform ${langDropdown ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {langDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="w-full text-left px-4 py-3 text-sm hover:bg-blue-50 flex items-center justify-between transition-colors"
                    style={{ textAlign: i18n.language === 'ar' ? 'right' : 'left' }}
                  >
                    <span>{lang.label}</span>
                    <span>{lang.flag}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={() => navigate('/admin')}
            className="bg-blue-900 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-blue-800 transition-all"
          >
            {t("navbar.admin")}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-2xl text-blue-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-700 border-b border-gray-50 pb-2">
              {link.name}
            </Link>
          ))}
          
          <div className="grid grid-cols-3 gap-2 py-2">
            {languages.map((lang) => (
              <button 
                key={lang.code}
                onClick={() => changeLanguage(lang.code)} 
                className={`py-2 rounded-lg border text-sm ${i18n.language === lang.code ? 'bg-blue-50 border-blue-200 text-blue-600 font-bold' : 'bg-gray-50 border-gray-100'}`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <button onClick={() => { navigate('/admin'); setIsOpen(false); }} className="bg-blue-900 text-white p-4 rounded-xl font-bold">
            {t("navbar.admin")}
          </button>
        </div>
      )}
    </nav>
  );
}