"use client";

import React, { useState, useEffect } from 'react';
import { 
  Trophy, Star, Droplets, BookOpen, Map, 
  Sparkles, Compass, LayoutDashboard, ChevronLeft, 
  ChevronRight, Lock, Unlock, Zap
} from 'lucide-react';
import Link from 'next/link';

// مكون لبطاقة التقدم بنمط "مقياس فيضان النيل"
const NileProgress = ({ value, label }: { value: number, label: string }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-xs font-bold text-[#D4AF37]">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="h-3 bg-white/5 rounded-full border border-white/10 overflow-hidden p-[2px]">
      <div 
        className="h-full bg-gradient-to-r from-[#AA891F] via-[#D4AF37] to-[#FFF1C1] rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(212,175,55,0.5)]"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

export default function StudentDashboard() {
  // بيانات تجريبية لمحاكاة الربط مع الفيربيس لاحقاً
  const [stats] = useState({
    nilePoints: 1250,
    level: "الكاتبة الملكية",
    progress: 65,
    badges: 12,
    nextChallenge: "مغامرة في خان الخليلي"
  });

  return (
    <div className="min-h-screen bg-[#05050a] text-white p-4 md:p-8 font-serif rtl" dir="rtl">
      
      {/* رأس الصفحة الملكي */}
      <header className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white/5 p-8 rounded-[40px] border border-[#D4AF37]/20 backdrop-blur-xl">
        <div className="flex items-center gap-6 text-center md:text-right">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#D4AF37] to-black p-1 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              <div className="w-full h-full rounded-full bg-[#05050a] flex items-center justify-center text-4xl">👸</div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#D4AF37] text-black text-[10px] font-black px-3 py-1 rounded-full border-2 border-black">
              مستوى {stats.level}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-[#D4AF37] mb-1">أهلاً بكِ في عرشكِ، {stats.level}</h1>
            <p className="text-gray-400 flex items-center gap-2">لقد قطعتِ ٧٠٪ من رحلة إتقان اللهجة المصرية ✨</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="bg-black/40 border border-[#D4AF37]/30 p-4 rounded-2xl flex items-center gap-4">
            <div className="p-2 bg-[#D4AF37]/10 rounded-lg"><Droplets className="text-[#D4AF37]" size={24}/></div>
            <div>
              <p className="text-[10px] text-gray-500 font-bold uppercase">نقاط النيل</p>
              <p className="text-2xl font-black text-white">{stats.nilePoints}</p>
            </div>
          </div>
          <div className="bg-black/40 border border-[#D4AF37]/30 p-4 rounded-2xl flex items-center gap-4">
            <div className="p-2 bg-[#D4AF37]/10 rounded-lg"><Trophy className="text-[#D4AF37]" size={24}/></div>
            <div>
              <p className="text-[10px] text-gray-500 font-bold uppercase">الأوسمة</p>
              <p className="text-2xl font-black text-white">{stats.badges}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* العمود الجانبي: التقدم والتحديات */}
        <div className="lg:col-span-4 space-y-8">
          <section className="bg-white/5 p-8 rounded-[40px] border border-white/10 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-all"><Star size={100} /></div>
             <h3 className="text-xl font-black text-[#D4AF37] mb-6 flex items-center gap-2">
                <Zap size={20} className="fill-[#D4AF37]"/> التحدي القادم
             </h3>
             <div className="bg-black/40 p-6 rounded-3xl border border-white/5 mb-6">
                <p className="text-sm text-gray-400 mb-2">المهمة الحالية:</p>
                <h4 className="text-xl font-bold text-white mb-4">{stats.nextChallenge}</h4>
                <Link href="/simulation">
                    <button className="w-full bg-[#D4AF37] text-black font-black py-3 rounded-xl hover:bg-white transition-all">بدء المغامرة</button>
                </Link>
             </div>
             <div className="space-y-4 font-sans">
                <NileProgress value={65} label="إتقان المفردات" />
                <NileProgress value={40} label="سرعة البديهة" />
             </div>
          </section>

          <section className="bg-gradient-to-b from-[#1a1a2e] to-black p-8 rounded-[40px] border border-white/5 shadow-2xl text-center">
             <h3 className="text-[#D4AF37] font-bold mb-4">شارتكِ الملكية الحالية</h3>
             <div className="w-32 h-32 mx-auto bg-white/5 rounded-full flex items-center justify-center border-4 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                <Sparkles size={60} className="text-[#D4AF37]" />
             </div>
             <p className="mt-4 font-bold text-lg">بطلة النيل</p>
             <p className="text-xs text-gray-500">تُمنح لمن يتجاوز أول ١٠ تحديات محاكاة</p>
          </section>
        </div>

        {/* العمود الرئيسي: أقسام المملكة */}
        <div className="lg:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            
            {/* قسم المحاكاة */}
            <Link href="/simulation" className="group relative bg-[#0a1128] p-8 rounded-[45px] border-2 border-white/5 hover:border-[#D4AF37]/50 transition-all overflow-hidden">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/20 transition-all"></div>
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Map className="text-blue-400 group-hover:text-[#D4AF37]" size={32} />
                    </div>
                    <h3 className="text-2xl font-black mb-2">مركز المحاكاة</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">تحدثي مع المصريين في بيئة ذكية واختبري مهارتكِ في الشارع.</p>
                </div>
            </Link>

            {/* رواق القرآن */}
            <Link href="/quran" className="group relative bg-[#1c1c1c] p-8 rounded-[45px] border-2 border-white/5 hover:border-emerald-500/50 transition-all overflow-hidden">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all"></div>
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
                        <BookOpen className="text-emerald-400" size={32} />
                    </div>
                    <h3 className="text-2xl font-black mb-2">رواق القرآن</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">تلاوة، تدبر، وحفظ بأسلوب ملكي هادئ ومريح.</p>
                </div>
            </Link>

            {/* المتحف الملكي */}
            <Link href="/museum" className="group relative bg-[#1a0f0a] p-8 rounded-[45px] border-2 border-white/5 hover:border-[#D4AF37]/50 transition-all overflow-hidden">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/20 transition-all"></div>
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
                        <Sparkles className="text-orange-400" size={32} />
                    </div>
                    <h3 className="text-2xl font-black mb-2">المتحف الملكي</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">استعرضي جوائزكِ وتاريخ اللغة وتطور رحلتكِ.</p>
                </div>
            </Link>

            {/* المسجد (بيت الصلاة) */}
            <Link href="/mosque" className="group relative bg-[#0d1a1a] p-8 rounded-[45px] border-2 border-white/5 hover:border-cyan-500/50 transition-all overflow-hidden">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
                        <Compass className="text-cyan-400" size={32} />
                    </div>
                    <h3 className="text-2xl font-black mb-2">المسجد الملكي</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">ركن هادئ للأذكار، الدعاء، والسكينة الروحية.</p>
                </div>
            </Link>

          </div>

          {/* سجل الإنجازات الأخير */}
          <div className="bg-white/5 p-8 rounded-[40px] border border-white/10 backdrop-blur-md">
            <h3 className="text-xl font-black text-[#D4AF37] mb-6 flex justify-between items-center">
              <span>آخر الإنجازات</span>
              <button className="text-[10px] bg-white/5 px-3 py-1 rounded-full text-gray-400 uppercase tracking-widest">مشاهدة الكل</button>
            </h3>
            <div className="space-y-4">
               {[
                 { title: 'اجتياز مستوى المبتدئ', date: 'منذ يومين', xp: '+200' },
                 { title: 'إكمال سورة الفاتحة', date: 'منذ ٤ أيام', xp: '+50' },
               ].map((item, i) => (
                 <div key={i} className="flex justify-between items-center p-4 bg-black/40 rounded-2xl border border-white/5 group hover:bg-[#D4AF37]/5 transition-all">
                    <div className="flex gap-4 items-center">
                        <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                        <div>
                            <p className="font-bold">{item.title}</p>
