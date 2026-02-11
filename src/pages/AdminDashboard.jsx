import { useEffect, useState } from "react";
import { db, auth, googleProvider } from "../firebase";
import { collection, onSnapshot, query, orderBy, doc, updateDoc } from "firebase/firestore";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import PageTransition from "../components/PageTransition";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const ALLOWED_ADMINS = ["ymaeduicational@gmail.com"];

  useEffect(() => {
    // 1. Auth Listener
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // 2. Real-time Orders Listener
    const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
    const unsubscribeOrders = onSnapshot(q, (querySnapshot) => {
      const ordersArray = [];
      querySnapshot.forEach((doc) => {
        ordersArray.push({ ...doc.data(), id: doc.id });
      });
      setOrders(ordersArray);
    });

    // Cleanup both listeners on unmount
    return () => {
      unsubscribeAuth();
      unsubscribeOrders();
    };
  }, []);

  const handleLogin = () => signInWithPopup(auth, googleProvider);
  const handleLogout = () => signOut(auth);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100" dir="rtl">
        <h2 className="mb-4 text-xl font-bold">لوحة التحكم محمية</h2>
        <button 
          onClick={handleLogin} 
          className="bg-white border p-3 rounded-lg shadow flex items-center gap-2 hover:bg-gray-50 transition-all"
        >
          تسجيل الدخول باستخدام Google
        </button>
      </div>
    );
  }

  const isAdmin = user && ALLOWED_ADMINS.includes(user.email);
  if (!isAdmin) {
    return (
      <div className="text-center p-20" dir="rtl">
        <h2 className="text-red-600 font-bold text-2xl mb-4">عذراً، لا تملك صلاحية الوصول.</h2>
        <p className="mb-6">الحساب الحالي: {user.email}</p>
        <button onClick={handleLogout} className="text-blue-600 underline font-bold">تسجيل الخروج</button>
      </div>
    );
  }

  const updateStatus = async (orderId, newStatus) => {
    try {
      const orderRef = doc(db, "orders", orderId);
      await updateDoc(orderRef, { status: newStatus });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <PageTransition>
      <div className="p-6 bg-gray-100 min-h-screen" dir="rtl">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <button onClick={handleLogout} className="bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm font-bold">
              خروج
            </button>
            <h2 className="text-2xl font-black text-blue-900">لوحة إدارة طلبات شدوى</h2>
            <div className="text-sm text-gray-500 font-bold">أهلاً، {user.displayName}</div>
          </div>
          
          <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="p-4 text-sm font-bold">العميل</th>
                    <th className="p-4 text-sm font-bold">التفاصيل</th>
                    <th className="p-4 text-sm font-bold">الحالة</th>
                    <th className="p-4 text-sm font-bold">الإجراء</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="p-10 text-center text-gray-400">لا توجد طلبات حالياً</td>
                    </tr>
                  ) : (
                    orders.map((order) => (
                      <tr key={order.id} className="border-b hover:bg-blue-50/50 transition-colors">
                        <td className="p-4">
                          <div className="font-black text-blue-950">
                            {order.firstName} {order.lastName}
                          </div>
                          <div className="text-xs text-gray-600 font-mono mt-1">{order.phone}</div>
                          <div className="text-[10px] text-gray-400">{order.email}</div>
                        </td>
                        <td className="p-4">
                          <div className="text-sm text-gray-700 max-w-xs whitespace-pre-wrap leading-relaxed">
                            {order.info || "—"}
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-[11px] font-black uppercase ${
                            order.status === 'تم التنفيذ' ? 'bg-green-100 text-green-700' :
                            order.status === 'ملغي' ? 'bg-red-100 text-red-700' : 
                            order.status === 'جاري التواصل' ? 'bg-blue-100 text-blue-700' : 
                            'bg-yellow-100 text-yellow-700 border border-yellow-200'
                          }`}>
                            {order.status || "جديد"}
                          </span>
                        </td>
                        <td className="p-4">
                          <select 
                            value={order.status || "جديد"}
                            onChange={(e) => updateStatus(order.id, e.target.value)}
                            className="w-full p-2 border border-gray-200 rounded-lg text-xs bg-white focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
                          >
                            <option value="جديد">جديد</option>
                            <option value="جاري التواصل">جاري التواصل</option>
                            <option value="تم التنفيذ">تم التنفيذ</option>
                            <option value="ملغي">ملغي</option>
                          </select>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}