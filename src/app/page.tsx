"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles } from 'lucide-react';

export default function RoyalBlueEgypt() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-6 text-center relative overflow-hidden">
      {/* لمسات الضوء الأزرق والذهبي */}
      <div className="absolute inset-0 bg-[#001d3d] -z-20"></div>
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,#003566_0%,transparent_70%)] -z-10"></div>

      <div className="max-w-4xl space-y-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative inline-block">
            <Crown className="w-24 h-24 text-amber-500 mx-auto drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
            <Sparkles className="absolute -top-2 -right-2 text-white animate-pulse" size={30} />
          </div>
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-black italic text-white tracking-tighter drop-shadow-lg">
            NEFERTITI <span className="text-amber-500">ACADEMY</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-amber-200/90">
             أهلاً بيكِ في مملكتكِ لتعلم اللهجة المصرية 🇪🇬✨
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/5 border border-white/10 p-8 rounded-[3rem] backdrop-blur-lg shadow-2xl"
        >
          <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed italic">
            "اتعلّمي أصول الكلام المصري بخفّة دم ورُقيّ ملكي مالوش زيّ"
          </p>
        </motion.div>

        <div className="pt-6">
          <button className="px-14 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-[#001d3d] font-black rounded-2xl text-xl shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:scale-105 transition-all active:scale-95">
            دخول الرواق الملكي
          </button>
        </div>
      </div>
    </main>
  );
}
