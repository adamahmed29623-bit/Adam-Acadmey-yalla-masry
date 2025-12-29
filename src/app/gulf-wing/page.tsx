"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Crown, Book, Star, Library, Mic2, 
  Gift, Trophy, Target, Globe, 
  Map as MapIcon, ChevronLeft, Sparkles,
  Volume2, BookOpen, Heart, Rocket
} from 'lucide-react';

/**
 * 🌍 الجناح الخليجي الشامل (The Imperial Gulf Wing)
 * نظام شرائح متسلسل: (المكافآت > رحلة نوف > القرآن > السنة > المكتبة > التلاوة)
 */

export default function ImperialGulfWing() {
  const [activeSlide, setActiveSlide] = useState('rewards'); // البداية بجذب الانتباه بالمكافآت

  const menuItems = [
    { id: 'rewards', label: 'الهدايا الملكية', icon: Gift },
    { id: 'dialect', label: 'رحلة نوف', icon: MapIcon },
    { id: 'quran', label: 'نور الوحي', icon: Book },
    { id: 'sunnah', label: 'ديوان السنة', icon: Star },
    { id: 'library', label: 'المكتبة الإسلامية', icon: Library },
    { id: 'recital', label: 'منصة التلاوة', icon: Mic2 },
  ];

  return (
    <div className="min-h-screen bg-[#000814] text-white flex flex-col font-sans relative overflow-hidden">
      
      {/* ✨ الخلفية والزخارف */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />

      {/* 🧭 شريط التنقل الملكي (أعلى الصفحة) */}
      <nav className="z-50 p-6 bg-[#001d3d]/60 backdrop-blur-2xl border-b border-white/5 flex justify-center gap-4 md:gap-8 overflow-x-auto shadow-2xl">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSlide(item.id)}
            className={`flex flex-col items-center gap-2 min-w-[90px] transition-all duration-700 ${
              activeSlide === item.id ? 'scale-110' : 'opacity-30 grayscale hover:opacity-100'
            }`}
          >
            <div className={`p-4 rounded-2xl ${activeSlide === item.id ? 'bg-amber-500 text-[#000814]' : 'bg-white/5'}`}>
              <item.icon size={22} />
            </div>
            <span className={`text-[9px] font-black uppercase tracking-widest italic ${activeSlide === item.id ? 'text-amber-500' : 'text-slate-500'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      {/* 🌌 ساحة العرض (شرائح القسم الخليجي) */}
      <main className="flex-1 relative flex items-center justify-center p-6 md:p-12">
        <AnimatePresence mode="wait">
          
          {/* 1. شريحة المكافآت والجذب (Rewards Section) */}
          {activeSlide === 'rewards' && (
            <motion.div key="rewards" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-6xl space-y-12 text-center">
              <div className="space-y-4">
                <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter">هدايا <span className="text-amber-500">الجناح الخليجي</span></h2>
                <p className="text-slate-400 text-xl italic max-w-2xl mx-auto">انضمي إلينا اليوم واحصلي على حزمة الترحيب الملكية الخاصة بأهل الخليج.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'عملات ترحيبية', detail: '500 عملة ملكية', icon: Gift, color: 'text-amber-500' },
                  { title: 'أوسمة فخرية', detail: 'وسام سفيرة اللهجة', icon: Trophy, color: 'text-sky-400' },
                  { title: 'صندوق المفاجآت', detail: 'هدايا عند كل مستوى', icon: Sparkles, color: 'text-emerald-400' },
                ].map((gift, i) => (
                  <div key={i} className="bg-[#001d3d] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl group hover:border-amber-500/30 transition-all">
                    <gift.icon className={`${gift.color} mx-auto mb-6 group-hover:scale-125 transition-transform`} size={48} />
                    <h4 className="text-2xl font-black italic">{gift.title}</h4>
                    <p className="text-slate-500 font-bold mt-2">{gift.detail}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => setActiveSlide('dialect')} className="bg-amber-500 text-[#000814] px-16 py-8 rounded-full font-black text-2xl shadow-3xl hover:scale-105 transition-all">ابدئي رحلة نوف الآن</button>
            </motion.div>
          )}

          {/* 2. شريحة رحلة نوف وتحديات اللهجة (Dialect Section) */}
          {activeSlide === 'dialect' && (
            <motion.div key="dialect" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 text-right">
                <h2 className="text-7xl font-black italic tracking-tighter leading-tight">رحلة <span className="text-sky-400 font-black">نوف</span> <br/> والتحديات</h2>
                <p className="text-slate-400 text-xl font-medium leading-relaxed italic max-w-xl">مغامرة تفاعلية لأهل الخليج لتعلم اللهجة المصرية برقي. واجهي التحديات اليومية واجمعي النقاط الملكية.</p>
                <div className="space-y-4">
                  {['تحدي لهجة الحارة المصرية', 'مهمة التسوق في خان الخليلي', 'لغز الأمثال الشعبية'].map((task, i) => (
                    <div key={i} className="flex items-center gap-4 bg-[#001d3d] p-6 rounded-[2.5rem] border border-white/5 hover:border-amber-500/50 transition-all cursor-pointer group">
                      <Target className="text-amber-500 group-hover:rotate-90 transition-transform" />
                      <span className="font-black italic text-sm">{task}</span>
                      <ChevronLeft className="mr-auto opacity-20" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="aspect-square bg-[#001d3d] rounded-[5rem] border-2 border-white/5 flex flex-col items-center justify-center relative shadow-3xl overflow-hidden group">
                 <Rocket size={100} className="text-amber-500 animate-bounce mb-6" />
                 <h3 className="text-4xl font-black italic text-white z-10">خريطة الطريق</h3>
                 <p className="text-slate-500 font-black mt-2 italic">المستوى الأول: الانطلاق</p>
              </div>
            </motion.div>
          )}

          {/* 3. شريحة نور الوحي (Quran Section) */}
          {activeSlide === 'quran' && (
            <motion.div key="quran" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-5xl bg-[#001d3d] p-16 rounded-[5rem] border border-white/5 text-center space-y-8 shadow-3xl relative">
              <div className="absolute top-10 right-10 opacity-5"><Book size={150} /></div>
              <h2 className="text-6xl font-black italic">نور الوحي</h2>
              <p className="text-slate-400 text-xl italic max-w-2xl mx-auto">ترتيل القرآن الكريم بأعلى معايير الإتقان الروحانية، رحلة حفظ خاصة وميسرة للأسر الخليجية.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 relative z-10">
                 <button className="bg-amber-500 text-[#000814] py-7 rounded-[3rem] font-black text-xl shadow-xl">تحفيظ القرآن</button>
                 <button className="bg-white/5 border border-white/5 py-7 rounded-[3rem] font-black text-xl hover:bg-white/10 transition-all">علوم التجويد</button>
              </div>
            </motion.div>
          )}

          {/* 4. شريحة منصة التلاوة (Recital Section) */}
          {activeSlide === 'recital' && (
            <motion.div key="recital" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-4xl bg-gradient-to-b from-[#001d3d] to-[#000814] p-20 rounded-[5rem] border border-white/5 text-center shadow-2xl relative">
               <Mic2 size={64} className="text-rose-500 mx-auto mb-10 animate-pulse" />
               <h2 className="text-5xl font-black italic mb-6 uppercase tracking-tighter">محراب تلاوة الخليج</h2>
               <p className="text-slate-500 text-lg italic mb-12">سجلي تلاوتكِ اليوم وتابعي تصحيح المعلمة بخصوصية تامة تليق بكِ.</p>
               <div className="flex justify-center gap-6">
                 <button className="bg-rose-500 text-white px-16 py-8 rounded-full font-black text-2xl shadow-2xl hover:scale-105 transition-all">ابدئي التسجيل</button>
               </div>
            </motion.div>
          )}

          {/* 5. شريحة المكتبة والسنة (Library & Sunnah) */}
          {activeSlide === 'library' && (
             <motion.div key="library" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="bg-[#001d3d] p-12 rounded-[4rem] border border-white/5 space-y-6">
                      <Star className="text-sky-400" size={40} />
                      <h3 className="text-3xl font-black italic">ديوان السنة</h3>
                      <p className="text-slate-500 italic">شروحات ميسرة للأحاديث النبوية والسيرة العطرة بأسلوب فخم.</p>
                      <button className="text-sky-400 font-black italic flex items-center gap-2">تصفح الديوان <ChevronLeft size={16}/></button>
                   </div>
                   <div className="bg-[#001d3d] p-12 rounded-[4rem] border border-white/5 space-y-6">
                      <Library className="text-emerald-400" size={40} />
                      <h3 className="text-3xl font-black italic">المكتبة الإسلامية</h3>
                      <p className="text-slate-500 italic">تحميل وقراءة أمهات الكتب الإسلامية واللغوية المصممة للأكاديمية.</p>
                      <button className="text-emerald-400 font-black italic flex items-center gap-2">دخول المكتبة <ChevronLeft size={16}/></button>
                   </div>
                </div>
             </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* 🧭 تذييل ملكي (Footer) */}
      <footer className="p-8 flex justify-between items-center opacity-30 text-[10px] font-black italic tracking-[0.4em] uppercase">
         <div className="flex items-center gap-2">
            <Crown size={14} className="text-amber-500" /> الجناح الخليجي الإمبراطوري
         </div>
         <div>جميع الحقوق محفوظة | يلا مصري 2025</div>
      </footer>
    </div>
  );
}
