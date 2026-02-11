export default function StatsSecion() {
    const stats = [
        { label: "عملية ناجحة", value: "500+", icon: "" },
        { label: "سنة خبرة", value: "15+", icon: "" },
        { label: "عميل يثق بنا", value: "120+", icon: "" },
    ];

return (
    <div className="w-full max-w-md mt-12 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-center text-gray-500 font-bold mb-6 text-sm uppercase tracking-widest">
        لماذا تختار شذوى جروب؟
      </h3>
      
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className="text-xl font-bold text-blue-900">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}