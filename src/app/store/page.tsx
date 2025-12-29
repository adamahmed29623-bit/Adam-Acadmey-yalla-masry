"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Crown, Gift, Coins, ShoppingBag, 
  Sparkles, Star, Zap, Landmark, 
  ChevronLeft, Gem, Palette, Ticket
} from 'lucide-react';

export default function GrandMuseumStore() {
  const [activeGallery, setActiveGallery] = useState('points'); // الأروقة: نقاط، عملات حقيقية، عروض

  return (
    <div className="min-h-screen bg-[#000814] text-white p-6 md:p-16 font-sans relative overflow-hidden">
      
      {/* 🏛️ ديكور المتحف الكبير */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/egyptian-hieroglyphs.png')]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-amber-500/10 to-transparent blur-[120px]" />

      {/* 🏺 عنوان المتحف */}
      <header className="relative z-10 text-center mb-20 space-y-4">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-6 py-2 rounded-full text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase mb-4">
            <Landmark size={14} /> ديوان الكنوز الملكية
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter">متحف <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">نفرتيتي</span></h1>
          <p className="text-slate-500 font-bold italic mt-4 text-xl">استبدلي إنجازاتك بقطع أثرية وكنوز لا تقدر بثمن</p>
        </motion.div>
      </header>

      {/* 🧭 أروقة المتحف (التنقل) */}
      <nav className="relative z-10 flex justify-center gap-4 mb-20">
        {[
          { id: 'points', label: 'رواق النقاط (إنجازاتك)', icon: Star },
          { id: 'premium', label: 'جناح النخبة (عملات حقيقية)', icon: Gem },
          { id: 'daily', label: 'العروض اليومية الخاطفة', icon: Zap },
        ].map((gallery) => (
          <button
            key={gallery.id}
            onClick={() => setActiveGallery(gallery.id)}
            className={`flex items-center gap-3 px-8 py-5 rounded-[2rem] font-black italic transition-all duration-500 ${
              activeGallery === gallery.id 
              ? 'bg-amber-500 text-[#000814] shadow-[0_20px_50px_rgba(245,158,11,0.3)] scale-105' 
              : 'bg-[#001d3d] text-slate-400 hover:bg-white/5'
            }`}
          >
            <gallery.icon size={20} />
            <span>{gallery.label}</span>
          </button>
        ))}
      </nav>

      {/* 🖼️ ساحة العرض (Products Display) */}
      <main className="relative z-10 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          
          {/* 💰 رواق النقاط (الشراء بالنقاط الملكية) */}
          {activeGallery === 'points' && (
            <motion.div key="points" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { name: 'تاج نفرتيتي الرقمي', price: 500, icon: Crown, desc: 'يظهر على بروفايلك في قاعة الدروس' },
                { name: 'تميمة الحظ الذهبية', price: 1200, icon: Sparkles, desc: 'تمنحك نقاطاً مضاعفة لمدة أسبوع' },
                { name: 'كتاب الأمثال المفقود', price: 2500, icon: Palette, desc: 'نسخة رقمية نادرة من أمثال مصر القديمة' },
              ].map((item, i) => (
                <div key={i} className="group relative bg-[#001d3d]/50 p-1 rounded-[4rem] border border-white/5 hover:border-amber-500/30 transition-all">
                  <div className="bg-[#000814] p-10 rounded-[3.8rem] h-full flex flex-col items-center text-center space-y-6">
                    <div className="w-24 h-24 rounded-full bg-amber-500/5 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(245,158,11,0.1)]">
                      <item.icon size={48} />
                    </div>
                    <h3 className="text-2xl font-black italic">{item.name}</h3>
                    <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.desc}</p>
                    <div className="flex items-center gap-2 text-amber-500 font-black text-xl">
                      <Star size={18} /> {item.price} <span className="text-[10px] uppercase">نقطة</span>
                    </div>
                    <button className="w-full py-5 rounded-3xl border border-amber-500/20 font-black text-sm hover:bg-amber-500 hover:text-[#000814] transition-all">استبدال الآن</button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* 💎 جناح النخبة (الشراء بالعملات الحقيقية) */}
          {activeGallery === 'premium' && (
            <motion.div key="premium" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { name: 'باقة الأميرة الخليجية', price: '199$', icon: Ticket, desc: 'دروس خاصة + حقيبة هدايا تصل لمنزلك' },
                { name: 'عضوية "سليلة الملكات"', price: '499$', icon: Gem, desc: 'دخول أبدي لكل أقسام الأكاديمية والمكتبة' },
              ].map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-[#001d3d] to-[#000814] p-12 rounded-[5rem] border border-cyan-500/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12 group-hover:scale-110 transition-transform"><item.icon size={150} /></div>
                  <h3 className="text-4xl font-black italic mb-4">{item.name}</h3>
                  <p className="text-slate-400 mb-8 max-w-xs">{item.desc}</p>
                  <div className="text-3xl font-black text-cyan-400 mb-10 tracking-tighter">{item.price}</div>
                  <button className="bg-cyan-500 text-[#000814] px-12 py-6 rounded-full font-black text-lg shadow-2xl hover:bg-white transition-all">اقتناء الآن</button>
                </div>
              ))}
            </motion.div>
          )}

          {/* ⚡ العروض اليومية (الخاطفة) */}
          {activeGallery === 'daily' && (
            <motion.div key="daily" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-4xl mx-auto bg-amber-500 p-1 rounded-[5rem]">
               <div className="bg-[#000814] p-16 rounded-[4.9rem] text-center space-y-8">
                  <Zap size={60} className="text-amber-500 mx-auto animate-pulse" />
                  <h2 className="text-5xl font-black italic">عرض "شروق الشمس" اليومي</h2>
                  <p className="text-slate-400 text-xl italic leading-relaxed">احصلي على خصم 50% على جميع كتب المكتبة الإسلامية.. ينتهي العرض عند الغروب!</p>
                  <div className="flex justify-center gap-10 text-3xl font-black italic text-amber-500">
                     <div>12 <span className="text-[10px] block text-slate-500 uppercase">ساعة</span></div>
                     <div>45 <span className="text-[10px] block text-slate-500 uppercase">دقيقة</span></div>
                  </div>
                  <button className="bg-amber-500 text-[#000814] px-16 py-7 rounded-full font-black text-xl hover:scale-105 transition-all">اغتنمي العرض</button>
               </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* 🧭 تذييل المتحف */}
      <footer className="mt-32 p-10 flex justify-between items-center border-t border-white/5 opacity-30 text-[10px] font-black italic tracking-[0.4em] uppercase">
         <div className="flex items-center gap-2">
            <Landmark size={14} /> متحف نفرتيتي | أكاديمية يلا مصري
         </div>
         <div>تحت حماية القوانين الملكية 2025</div>
      </footer>
    </div>
  );
}
