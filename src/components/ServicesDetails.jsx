import { motion } from "framer-motion";

export default function ServiceDetailItem({ service, index, isRtl }) {
  // Check if index is odd to flip the layout
  const isEven = index % 2 === 0;

  return (
    <div 
      id={`service-detail-${index}`}
      className={`flex flex-col md:flex-row items-center gap-12 py-20 ${
        !isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image Side */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2"
      >
        <img
          src={service.image}
          alt={service.title}
          className="rounded-[2.5rem] shadow-2xl w-full h-[450px] object-cover border-8 border-gray-50"
        />
      </motion.div>

      {/* Text Side */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 space-y-6"
      >
        <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">
          0{index + 1}
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight">
          {service.title}
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          {service.desc} 
          {/* You can map a specific "longDesc" from i18n here later */}
        </p>
      </motion.div>
    </div>
  );
}