import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Brand & About */}
        <div className="space-y-4">
          <Link to="/" className="text-2xl font-black text-blue-900 tracking-tighter">
            SHADWA<span className="text-blue-600 font-light text-sm ml-1">GROUP</span>
          </Link>
          <p className="text-gray-500 leading-relaxed text-sm">
            {t('footer.about')}
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><FaFacebook size={20}/></a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><FaLinkedin size={20}/></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-blue-900 uppercase tracking-wider text-sm">{t('footer.quickLinks')}</h4>
          <nav className="flex flex-col gap-2">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-all text-sm">{t('navbar.home')}</Link>
            <Link to="/explore" className="text-gray-600 hover:text-blue-600 transition-all text-sm">{t('navbar.about')}</Link>
            <Link to="/#services" className="text-gray-600 hover:text-blue-600 transition-all text-sm">{t('navbar.services')}</Link>
          </nav>
        </div>

        {/* Column 3: Contact Info */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-blue-900 uppercase tracking-wider text-sm">{t('footer.contact')}</h4>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <FaPhone className="text-blue-600" />
              <span>+20 123 456 789</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" />
              <span>info@shadwagroup.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>{t('footer.address')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-200 text-center">
        <p className="text-gray-400 text-xs">
          {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}