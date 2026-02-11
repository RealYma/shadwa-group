import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function OrderModal({ isOpen, service, onClose }) {
    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
        name: e.target.customerName.value,
        phone: e.target.customerPhone.value,
        notes: e.target.customerNotes.value,
        service: service,
        status: "جديد",
        createdAt: serverTimestamp(),
        };

        try {
        await addDoc(collection(db, "orders"), formData);
        alert("تم إرسال طلبك بنجاح!");
        onClose(); // Close the modal after success
        } catch (error) {
        console.error("Error:", error);
        alert("حدث خطأ في الإرسال");
        }
    }

    return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 transition-opacity">
      <div className="bg-white w-full max-w-sm rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-200" dir="rtl">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-right">طلب: {service}</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            name="customerName"
            type="text" 
            placeholder="الاسم بالكامل" 
            required 
            className="w-full p-3 border border-gray-300 rounded-lg text-right outline-none focus:border-blue-500" 
          />
          <input 
            name="customerPhone"
            type="tel" 
            placeholder="رقم الموبايل" 
            required 
            className="w-full p-3 border border-gray-300 rounded-lg text-right outline-none focus:border-blue-500" 
          />
          <textarea 
            name="customerNotes"
            placeholder="ملاحظات الشحنة (اختياري)" 
            className="w-full p-3 border border-gray-300 rounded-lg text-right outline-none focus:border-blue-500 h-24"
          ></textarea>
          
          <div className="flex flex-col gap-2 pt-2">
            <button type="submit" className="bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
              إرسال الطلب
            </button>
            <button type="button" onClick={onClose} className="text-red-500 font-semibold py-2">
              إلغاء
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}