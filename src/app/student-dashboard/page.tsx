"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Crown, Star, Coins, Trophy, BookOpen, Mic2, 
  ChevronLeft, Flame, GraduationCap, Gift, 
  Target, LayoutDashboard, History, User
} from 'lucide-react';

export default function RoyalDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-[#000814] text-white p-4 md:p-12 font-sans relative overflow-hidden">
      
      {/* 🌌 الخلفية: نقوش هيروغليفية وأضواء فيروزية */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/egyptian-hieroglyphs.png')]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full" />

      {/* 👑 الهيدر: الأفاتار واللقب الملكي */}
      <header className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 mb-16 bg-[#001d3d]/40 p-8 rounded-[3rem] border border-white/5 backdrop-blur-xl">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-400 to-cyan-400 p-1">
              <div className="w-full h-full rounded-full bg-[#000814] flex items-center justify-center overflow-hidden">
                {/* أفاتار تشجيعي (نفرتيتي الصغيرة) */}
                <User size={50} className="text-amber-500" /> 
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-amber-500 text-[#000814] p-2 rounded-lg shadow-xl">
              <Crown size={16} />
            </div>
          </div>
          <div className="text-right md:text-left">
            <h2 className="text-3xl font-black italic tracking-tighter">الملكة نفرتيتي الصغيره</h2>
            <p className="text-cyan-400 text-xs font-black tracking-[0.3em] uppercase mt-1">المستوى: ياقوتة النيل</p>
          </div>
        </div>

        {/* عداد النقاط والعملات */}
        <div className="flex gap-4">
          <div className="bg-[#000814] px-8 py-4 rounded-2xl border border-amber-500/20 flex items-center gap-3 shadow-inner">
             <Coins className="text-amber-500" size={24} />
             <span className="text-2xl font-black italic">2,450</span>
          </div>
          <div className="bg-[#000814] px-8 py-4 rounded-2xl border border-cyan-500/20 flex items-center gap-3 shadow-inner">
             <Star className="text-cyan-400" size={24} />
             <span className="text-2xl font-black italic">12</span>
          </div>
        </div>
      </header>

      <main className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* 📋 القائمة الجانبية المصغرة */}
        <div className="lg:col-span-1 space-y-4">
          {[
            { id: 'overview', label: 'الديوان العام', icon: LayoutDashboard },
            { id: 'egyptian', label: 'رحلة نفرتيتي (اللهجة)', icon: GraduationCap },
            { id: 'quran_gulf', label: 'القرآن (الركن الخليجي)', icon: BookOpen },
            { id: 'quran_general', label: 'القرآن (القسم العام)', icon: Mic2 },
            { id: 'history', label: 'التحديات السابقة', icon: History },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 p-6 rounded-3xl font-black italic transition-all ${
                activeTab === item.id ? 'bg-amber-500 text-[#000814] shadow-2xl' : 'bg-[#001d3d]/50 hover:bg-white/5'
              }`}
            >
              <item.icon size={20} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>

        {/* 🌌 ساحة العرض المتغيرة */}
        <div className="lg:col-span-3 space-y-8">
          
          {/* 1. قسم اللهجة المصرية (رحلة نفرتيتي) */}
          {activeTab === 'egyptian' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
               <div className="bg-[#001d3d] p-10 rounded-[4rem] border border-amber-500/10 relative overflow-hidden">
                  <h3 className="text-3xl font-black italic mb-6">مدى التقدم في اللهجة</h3>
                  <div className="h-4 w-full bg-[#000814] rounded-full overflow-hidden border border-white/5">
                     <motion.div initial={{ width: 0 }} animate={{ width: '75%' }} className="h-full bg-gradient-to-r from-amber-500 to-amber-300" />
                  </div>
                  <p className="mt-4 text-slate-400 font-bold italic">أنتِ الآن في مرحلة "إتيكيت القصور المصرية"</p>
               </div>

               {/* تقييم المعلمة وهدايا التحدي */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-cyan-900/20 to-[#001d3d] p-8 rounded-[3rem] border border-cyan-500/10">
                     <h4 className="font-black italic text-cyan-400 mb-4 flex items-center gap-2"><Star size={18}/> تقييم المعلمة</h4>
                     <p className="text-white font-bold italic">"نبرة صوتكِ في نطق حرف 'الجيم' أصبحت كالملكات المصريات تماماً. استمري!"</p>
                  </div>
                  <div className="bg-[#001d3d] p-8 rounded-[3rem] border border-amber-500/10 flex items-center justify-between">
                     <div>
                        <h4 className="font-black italic mb-2">هدية التحدي القادم</h4>
                        <p className="text-amber-500 text-xs font-black">تميمة "مفتاح الحياة" الذهبية</p>
                     </div>
                     <Gift size={40} className="text-amber-500 animate-bounce" />
                  </div>
               </div>
            </motion.div>
          )}

          {/* 2. قسم الشارات والأوسمة */}
          <div className="bg-[#001d3d]/30 p-10 rounded-[4rem] border border-white/5">
            <h3 className="text-2xl font-black italic mb-8 flex items-center gap-3">
              <Trophy className="text-amber-500" /> شارات الفخر الملكية
            </h3>
            <div className="flex flex-wrap gap-6">
               {['بلبل التلاوة', 'سفيرة اللهجة', 'ملكة الالتزام', 'كنز الأدب'].map((badge, i) => (
                 <div key={i} className="flex flex-col items-center gap-3">
                    <div className="w-20 h-20 bg-gradient-to-b from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl rotate-3 hover:rotate-0 transition-all cursor-pointer">
                       <Trophy size={30} className="text-[#000814]" />
                    </div>
                    <span className="text-[10px] font-black italic text-slate-400">{badge}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* 3. المتجر السريع (ماذا يمكنكِ أن تشتري؟) */}
          <div className="bg-gradient-to-r from-amber-500/10 to-cyan-500/10 p-10 rounded-[4rem] border border-white/5">
             <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black italic">استبدال النقاط</h3>
                <button className="text-amber-500 font-black text-xs uppercase tracking-widest">عرض المتجر الكامل</button>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#000814]/60 p-6 rounded-3xl border border-white/5 flex items-center gap-4">
                   <Gift className="text-cyan-400" />
                   <span className="text-sm font-black italic">جلسة خاصة مع المعلمة (500 نقطة)</span>
                </div>
                <div className="bg-[#000814]/60 p-6 rounded-3xl border border-white/5 flex items-center gap-4">
                   <Crown className="text-amber-400" />
                   <span className="text-sm font-black italic">تاج البروفايل الماسي (200 نقطة)</span>
                </div>
             </div>
          </div>

        </div>
      </main>
    </div>
  );
}
