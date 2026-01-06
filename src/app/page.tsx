"use client";
import React, { useState, useMemo } from 'react';
import { collection, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase/config'; // تأكدي من مسار ملف الإعدادات لديكِ
import { useCollection } from '@/hooks/useCollection'; // الملف الذي أرسلتِهِ
import { useDoc } from '@/hooks/useDoc'; // الملف الآخر الذي أرسلتِهِ

export default function RoyalUnifiedDashboard() {
  const [activeTab, setActiveTab] = useState('home');

  // 1. جلب بيانات "الملكة" (نفرتيتي) الحقيقية - مثل النقاط XP
  // افترضي أن معرف المستخدم مخزن في مكان ما بعد تسجيل الدخول
  const { data: userData } = useDoc<any>(null); // استبدلي null بـ doc(db, 'users', userId)

  // 2. جلب "التحديات الحقيقية" من قاعدة البيانات وترتيبها
  const challengesQuery = useMemo(() => 
    query(collection(db, 'challenges'), orderBy('createdAt', 'desc')), 
  []);
  const { data: realChallenges, isLoading: loadingChallenges } = useCollection<any>(challengesQuery);

  return (
    <div className="min-h-screen bg-[#05050a] text-white font-serif">
      {/* الشريط العلوي الملكي */}
      <nav className="flex justify-between items-center p-4 bg-black/80 border-b-2 border-[#D4AF37] sticky top-0 z-50">
        <div className="text-[#D4AF37] text-2xl font-bold">🏺 نفرتيتي الملكية</div>
        <div className="flex gap-8">
          <button onClick={() => setActiveTab('home')} className={activeTab === 'home' ? "text-[#D4AF37] border-b-2 border-[#D4AF37]" : ""}>العرش</button>
          <button onClick={() => setActiveTab('goals')} className={activeTab === 'goals' ? "text-[#D4AF37] border-b-2 border-[#D4AF37]" : ""}>المسارات</button>
          <button onClick={() => setActiveTab('challenges')} className={activeTab === 'challenges' ? "text-[#D4AF37] border-b-2 border-[#D4AF37]" : ""}>قاعة التحديات</button>
        </div>
        <div className="bg-[#D4AF37]/20 px-4 py-2 rounded-full border border-[#D4AF37] text-[#D4AF37] font-bold">
          XP {userData?.points || 1250} ✨
        </div>
      </nav>

      <main className="container mx-auto py-12 px-6">
        {/* قسم التحديات الحقيقية */}
        {activeTab === 'challenges' && (
          <div className="animate-fadeIn">
            <h2 className="text-[#D4AF37] text-4xl text-center mb-12">تحديات اليوم الملكية</h2>
            
            {loadingChallenges ? (
              <p className="text-center text-gray-400">جاري فتح سجلات المملكة...</p>
            ) : (
              <div className="flex flex-col gap-6 max-w-2xl mx-auto">
                {realChallenges?.map((challenge) => (
                  <div key={challenge.id} className="p-6 bg-white/5 rounded-2xl border-r-8 border-[#D4AF37] flex justify-between items-center hover:bg-white/10 transition-all">
                    <div>
                      <h3 className="text-xl font-bold">{challenge.title}</h3>
                      <p className="text-gray-400 text-sm">{challenge.description}</p>
                    </div>
                    <span className="text-[#D4AF37] font-bold">+{challenge.xpReward} XP</span>
                  </div>
                ))}
                
                {(!realChallenges || realChallenges.length === 0) && (
                  <p className="text-center text-gray-500 italic">لا توجد تحديات نشطة اليوم. ارتاحي يا ملكة.</p>
                )}
              </div>
            )}
          </div>
        )}

        {/* قسم العرش مع فيديو حتشبسوت */}
        {activeTab === 'home' && (
          <div className="text-center">
             <div className="relative h-[50vh] rounded-[40px] overflow-hidden mb-10 shadow-[0_0_50px_rgba(212,175,55,0.3)]">
                <iframe 
                  src="https://www.youtube.com/embed/TNtIUkPaG30?autoplay=1&mute=1&loop=1&playlist=TNtIUkPaG30&controls=0"
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                  allow="autoplay"
                ></iframe>
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-[#05050a] to-transparent">
                  <h1 className="text-5xl text-[#D4AF37] mb-4">أهلاً بكِ في عرشك، نفرتيتي</h1>
                  <p className="text-xl italic">"نحن لا نبني مشروعاً، نحن نعيد صياغة الهوية"</p>
                </div>
             </div>
          </div>
        )}
        
        {/* قسم المسارات */}
        {activeTab === 'goals' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['إتقان اللهجة', 'فهم الثقافة', 'الاحتراف العملي'].map((path, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-[30px] border border-[#D4AF37]/30 text-center hover:scale-105 transition-transform cursor-pointer">
                <div className="text-4xl mb-4">🏺</div>
                <h3 className="text-[#D4AF37] text-xl font-bold">{path}</h3>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
