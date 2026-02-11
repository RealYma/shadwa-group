export default function AboutSection() {
  const brands = ["Zara", "Mango", "Adidas", "Kitchener", "Team Sport"];
  
  return (
    <section className="w-full max-w-4xl mt-16 px-4 py-12 bg-blue-900 rounded-3xl text-white shadow-2xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Shadwa Group منذ 1994</h2>
        <p className="text-blue-100 leading-relaxed max-w-2xl mx-auto">
          أكثر من 25 عاماً من الخبرة في التخليص الجمركي والاستيراد والتصدير، نخدم كبار المصنعين والمستوردين في مصر بكل ثقة وأمان.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="flex items-start gap-4 bg-white/10 p-4 rounded-xl">
          <span className="text-3xl">🌍</span>
          <div>
            <h4 className="font-bold">خدمة Door-to-Door</h4>
            <p className="text-xs text-blue-100">استلم بضاعتك في مخزنك من أي مكان في العالم (أوروبا أو الشرق الأقصى) وأنت في مكتبك.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white/10 p-4 rounded-xl">
          <span className="text-3xl">🚢</span>
          <div>
            <h4 className="font-bold">خصومات شحن حصرية</h4>
            <p className="text-xs text-blue-100">خصم يصل لـ 25% على الحاويات بفضل تعاقداتنا مع خطوط ملاحية كبرى مثل Maersk و MSC.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white/10 p-4 rounded-xl">
          <span className="text-3xl">⚡</span>
          <div>
            <h4 className="font-bold">سرعة التنفيذ</h4>
            <p className="text-xs text-blue-100">نعمل في جميع موانئ الجمهورية (وارد - صادر - مناطق حرة) بأقل وقت وتكلفة.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white/10 p-4 rounded-xl">
          <span className="text-3xl">💰</span>
          <div>
            <h4 className="font-bold">تسهيلات في الدفع</h4>
            <p className="text-xs text-blue-100">نقدم حلول مرنة في الدفع حسب الاتفاق المبرم لدعم أعمال عملائنا.</p>
          </div>
        </div>
      </div>

      {/* قسم البراندات - Trusted By */}
      <div className="border-t border-white/20 pt-8 text-center">
        <p className="text-sm text-blue-200 mb-6 uppercase tracking-widest font-bold">شركاء النجاح (براندات عالمية)</p>
        <div className="flex flex-wrap justify-center gap-6 opacity-80 grayscale hover:grayscale-0 transition-all">
          {brands.map((brand) => (
            <span key={brand} className="text-xl font-black italic tracking-tighter border-2 border-white/30 px-3 py-1 rounded">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}