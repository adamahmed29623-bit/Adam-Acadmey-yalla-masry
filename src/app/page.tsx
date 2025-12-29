"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles, ShieldCheck } from 'lucide-react';

export default function QueenPortal() {
  return (
    <div className="min-h-screen bg-[#000814] flex flex-col items-center justify-center text-white p-6 relative overflow-hidden">
      {/* خلفية ملكية هادئة لضمان عدم حدوث أخطاء في العرض */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent opacity-40"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10 space-y-8"
      >
        <div className="flex justify-center relative">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Crown className="w-28 h-28 text-amber-500 shadow-2xl" />
          </motion.div>
          <Sparkles className="absolute -top-4 -right-4 text-amber-200 animate-pulse" />
        </div>

        <div className="space-y-2">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-200 to-amber-500">
            NEFERTITI
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold tracking-[0.2em] text-amber-500/90">
            ROYAL ACADEMY
          </h2>
        </div>

        <div className="flex items-center justify-center gap-4 text-slate-400">
          <div className="h-[1px] w-12 bg-amber-500/30"></div>
          <p className="text-xl md:text-2xl font-light italic tracking-widest">
            صرح العلم والرفعة
          </p>
          <div className="h-[1px] w-12 bg-amber-500/30"></div>
        </div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="pt-12"
        >
          <div className="inline-flex items-center gap-3 px-12 py-5 border-2 border-amber-500/50 rounded-full bg-amber-500/10 text-amber-500 font-black text-xl backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            <ShieldCheck className="w-6 h-6" />
            الدخول إلى الرواق الملكي
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
