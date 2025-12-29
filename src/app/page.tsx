"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Crown, BookOpen, Users, ShoppingBag, Settings } from 'lucide-react';
import Link from 'next/link';

export default function QueenPortal() {
  const menuItems = [
    { name: "رواق المعرفة", icon: <BookOpen />, path: "/courses" },
    { name: "مجلس الطلاب", icon: <Users />, path: "/student-dashboard" },
    { name: "خزانة الكتب", icon: <ShoppingBag />, path: "/store" },
    { name: "الإعدادات الملكية", icon: <Settings />, path: "/teacher/profile" },
  ];

  return (
    <div className="min-h-screen bg-[#000814] text-white overflow-hidden relative">
      {/* التأثيرات الخلفية */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-60"></div>
      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Crown className="w-24 h-24 text-amber-500 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic mb-4">
            NEFERTITI <span className="text-amber-500">ACADEMY</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 tracking-[0.4em] uppercase font-light mb-12">
            صرح العلم والرفعة
          </p>
        </motion.div>

        {/* أزرار الوصول السريع للملفات الموجودة بالمستودع */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl w-full px-4">
          {menuItems.map((item, index) => (
            <Link href={item.path} key={index}>
              <motion.div 
                whileHover={{ scale: 1.05, borderColor: '#f59e0b' }}
                className="p-6 bg-[#001d3d] border border-white/5 rounded-[2rem] flex flex-col items-center gap-4 transition-all cursor-pointer group"
              >
                <div className="text-amber-500 group-hover:scale-110 transition-transform">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                </div>
                <span className="font-bold text-lg">{item.name}</span>
              </motion.div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
