'use client';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

export default function StudentDashboard() {
  // بيانات افتراضية للطالب - سنربطها لاحقاً بقاعدة البيانات
  const [studentData, setStudentData] = useState({
    name: "نفرتيتي الصغيرة",
    level: 1,
    nilePoints: 150,
    completedChallenges: ["مطار القاهرة", "ميدان التحرير"],
    cartoucheUnlocked: true
  });

  return (
    <div className="min-h-screen bg-stone-100">
      <Navbar />
      
      <main className="max-w-4xl mx-auto p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-black text-slate-900 mb-2">مرحباً بكِ في ديوانكِ الملكي 🏺</h1>
          <p className="text-amber-700 font-bold italic">أنتِ الآن على طريق الملوك</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* بطاقة النقاط */}
          <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">رصيد نقاط النيل 🌊</h3>
              <p className="text-5xl font-black text-yellow-400">{studentData.nilePoints}</p>
              <p className="mt-4 text-sm opacity-80">استبدليها بخصومات من المتجر الملكي</p>
            </div>
            <div className="absolute -right-10 -bottom-10 text-9xl opacity-10 italic">Nile</div>
          </div>

          {/* حالة الخرطوش */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-yellow-500 flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-bold text-slate-800 mb-4">الخرطوش الملكي 📜</h3>
            {studentData.cartoucheUnlocked ? (
              <div className="animate-pulse">
                <span className="text-6xl mb-4 block">✨</span>
                <p className="text-green-600 font-black">تم فتح الخرطوش الخاص بكِ!</p>
                <button className="mt-4 bg-yellow-500 text-slate-900 px-6 py-2 rounded-full font-bold">تحميل الخرطوش</button>
              </div>
            ) : (
              <p className="text-slate-400">أكملي المستوى الأول لفتح خرطوشكِ</p>
            )}
          </div>
        </div>

        {/* سجل التحديات */}
        <section className="mt-12 bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-black text-slate-800 mb-6 border-b pb-4">سجل إنجازاتكِ</h3>
          <div className="space-y-4">
            {studentData.completedChallenges.map((challenge, index) => (
              <div key={index} className="flex justify-between items-center bg-stone-50 p-4 rounded-2xl border-r-4 border-blue-900">
                <span className="font-bold text-slate-700">{challenge}</span>
                <span className="text-green-600 font-bold">✅ مكتمل</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
