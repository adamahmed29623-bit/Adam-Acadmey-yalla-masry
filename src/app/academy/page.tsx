"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, BookOpen, Users, ShieldCheck, 
  Crown, Sparkles, LogOut, ChevronRight, PlayCircle
} from 'lucide-react';

/**
 * 🏛️ النظام الإمبراطوري الموحد V 2.0 - أكاديمية يلا مصري
 * تم التصميم ليكون العمود الفقري للأكاديمية مع ضمان توافق كامل مع Vercel.
 */

export default function RoyalSystem() {
  const [activeTab, setActiveTab] = useState('welcome');
  const [isSyncing, setIsSyncing] = useState(true);

  // محاكاة مزامنة البيانات الملكية عند الدخول
  useEffect(() => {
    const timer = setTimeout(() => setIsSyncing(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    { id: 'welcome', icon: LayoutDashboard, label: 'الرئيسية' },
    { id: 'classroom', icon: BookOpen, label: 'قاعة الدروس' },
    { id: 'teachers', icon: Users, label: 'رواق المعلمات' },
    { id: 'admin', icon: ShieldCheck, label: 'لوحة التحكم' },
  ];

  return (
    <div className="flex min-h-screen bg-[#000814] text-white font-sans selection:bg-amber-500/30 overflow-hidden">
      
      {/* 🏰 الشريط الجانبي الإمبراطوري (Sidebar) */}
      <motion.aside 
        initial={{ x: 100 }} animate={{ x: 0 }}
        className="w-20 md:w-24 bg-[#001d3d] border-l border-white/5 flex flex-col items-center py-10 gap-10 z-50 shadow-2xl"
      >
        <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-3 rounded-2xl shadow-lg shadow-amber-500/20">
          <Crown size={28} className="text-[#000814]" />
        </div>
        
        <nav className="flex flex-col gap-6 flex-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-4 rounded-2xl transition-all duration-500 group relative ${
                activeTab === item.id ? 'bg-amber-500 text-[#000814] scale-110' : 'hover:bg-white/5 text-slate-500'
              }`}
            >
              <item.icon size={24} />
              <span className={`absolute right-full mr-4 bg-amber-500 text-[#000814] px-3 py-1 rounded-lg text-xs font-black opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap shadow-xl`}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <button className="p-4 text-slate-600 hover:text-red-400 transition-colors">
          <LogOut size={24} />
        </button>
      </motion.aside>

      {/* 🌌 ساحة العرض المركزية (Main Content) */}
      <main className="flex-1 relative overflow-y-auto custom-scrollbar">
        <AnimatePresence mode="wait">
          {isSyncing ? (
            <motion.div 
              key="loader" exit={{ opacity: 0, scale: 1.1 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-[#000814] z-40"
            >
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}>
                <Sparkles size={60} className="text-amber-500 opacity-80" />
              </motion.div>
              <h2 className="mt-8 text-2xl font-black italic tracking-[0.3em] animate-pulse text-amber-500">
                مزامنة البيانات الملكية...
              </h2>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="p-8 md:p-20"
            >
              
              {/* 1. واجهة الترحيب الملكية */}
              {activeTab === 'welcome' && (
                <div className="space-y-16 text-center max-w-5xl mx-auto py-10">
                  <motion.div className="space-y-6">
                    <div className="inline-block bg-amber-500/10 border border-amber-500/20 px-6 py-2 rounded-full text-amber-500 text-sm font-black tracking-widest uppercase">
                      المنصة التعليمية الأولى للملكات
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter leading-none">
                      مرحباً بكِ في <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                        عالم يلا مصري
                      </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 font-bold max-w-3xl mx-auto leading-relaxed italic">
                      حيث يجتمع رقي اللهجة المصرية وفخامة التجربة التعليمية للملكات والبراعم.
                    </p>
                  </motion.div>
                  <button className="group relative bg-amber-500 text-[#000814] px-16 py-8 rounded-[3rem] font-black text-3xl shadow-[0_20px_50px_rgba(245,158,11,0.3)] hover:scale-105 transition-all duration-500">
                    <span className="relative z-10">ابدئي الرحلة الآن</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-[3rem] transition-opacity" />
                  </button>
                </div>
              )}

              {/* 2. قاعة الدروس (رحلة نوف المحدثة) */}
              {activeTab === 'classroom' && (
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-10">
                    <div>
                      <h2 className="text-6xl font-black italic">قاعة الدروس</h2>
                      <p className="text-amber-500 font-bold mt-2">تم تحميل "رحلة نوف" المحدثة بنجاح</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="aspect-video bg-[#001d3d] rounded-[4rem] border-2 border-amber-500/20 flex items-center justify-center group cursor-pointer overflow-hidden relative shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <PlayCircle size={80} className="text-amber-500 group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute bottom-10 right-10 text-right">
                        <span className="text-xs font-black text-amber-500 block mb-2 uppercase tracking-widest">الوحدة الأولى</span>
                        <h3 className="text-3xl font-black italic">سحر البدايات</h3>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. لوحة التحكم الإمبراطورية */}
              {activeTab === 'admin' && (
                <div className="space-y-12">
                  <h2 className="text-6xl font-black italic text-transparent bg-clip-text bg-gradient-to-l from-amber-500 to-white">
                    لوحة التحكم الإمبراطورية
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['الطالبات', 'إدارة المنهج', 'الإحصائيات'].map((title, idx) => (
                      <div key={idx} className="bg-[#001d3d] p-10 rounded-[3.5rem] border border-white/5 shadow-xl hover:bg-[#00254d] transition-colors">
                        <h4 className="text-slate-500 font-black text-xs uppercase tracking-[0.3em] mb-4">{title}</h4>
                        <div className="text-4xl font-black italic">مزامنة نشطة...</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
