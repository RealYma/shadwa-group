import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { useTranslation } from "react-i18next";

export default function RequestService() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      info: e.target.info.value,
      status: "جديد", // Keep this in Arabic if your Admin panel uses it as a key
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "orders"), formData);
      alert(t('request.success'));
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      alert(t('request.error'));
    }
  };

  return (
    <PageTransition>
      {/* Dynamic layout direction */}
      <div className={`min-h-screen flex flex-col ${isRtl ? 'md:flex-row-reverse' : 'md:flex-row'}`} dir={isRtl ? "rtl" : "ltr"}>
      
      {/* Branding Side */}
      <div className="w-full md:w-1/2 bg-blue-900 text-white p-12 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          {t('request.leftTitle')}
        </h1>
        <p className="text-xl text-blue-100 leading-relaxed max-w-md">
          {t('request.leftSub')}
        </p>
        
        <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3">
                <span className="bg-blue-800 p-2 rounded-lg">✅</span>
                <span>{t('request.feature1')}</span>
            </div>
            <div className="flex items-center gap-3">
                <span className="bg-blue-800 p-2 rounded-lg">✅</span>
                <span>{t('request.feature2')}</span>
            </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full md:w-1/2 bg-white p-12 flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">{t('request.formTitle')}</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('request.fName')}</label>
              <input name="firstName" type="text" required className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('request.lName')}</label>
              <input name="lastName" type="text" required className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t('request.email')}</label>
            <input name="email" type="email" required className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500" placeholder="example@mail.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t('request.phone')}</label>
            <input name="phone" type="tel" required className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500" placeholder="01xxxxxxxxx" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t('request.info')}</label>
            <textarea name="info" rows="4" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500" placeholder={t('request.infoPlaceholder')}></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg transition-all">
            {t('request.submit')}
          </button>
        </form>
      </div>

    </div>
    </PageTransition>
  );
}