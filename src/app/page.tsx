"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles } from 'lucide-react';

export default function LuminousGoldEgypt() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-6 text-center relative overflow-hidden bg-[#001d3d]">
      
      {/* جزيئات ضوئية ذهبية متطايرة */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: [0, 1, 0], y: -100, x: Math.random() * 200 - 100 }}
            transition={{ duration: Math.random() * 5 + 3, repeat: Infinity, delay: Math.random() * 5 }}
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="max-w-4xl space-y-12 z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative inline-block"
        >
          <Crown className="w-28 h-28 text-[#FFD700] mx-auto drop-shadow-[0_0_20px_rgba(255,215,0,0.8)]" />
          <Sparkles className="absolute -top-4 -right-4 text-white animate-pulse" size={40} />
        </motion.div>

        <div className="space-y-6">
          <h1 className="text-6xl md:text-9xl font-black italic text-white tracking-tighter gold-glow">
            NEFERTITI <span className="text-[#FFD700]">ACADEMY</span>
          </h1>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-5xl font-bold text-amber-100"
          >
             أهلاً بيكِ في "رواق مَصر" الملكي 🇪🇬✨
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/10 border-2 border-[#FFD700]/30 p-10 rounded-[3.5rem] backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.5)]"
        >
          <p className="text-2xl md:text-3xl text-white leading-relaxed font-medium">
            "اتعلّمي اللهجة المصرية برُقيّ نفرتيتي.. <br/> 
            <span className="text-[#FFD700] font-black">خفّة دم مصرية، بلمسة ذهبية"</span>
          </p>
        </motion.div>

        <div className="pt-8">
          <button className="px-16 py-6 bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] text-[#001d3d] font-black rounded-3xl text-2xl button-glow hover:scale-110 transition-all active:scale-95 duration-500">
            خشي الرواق الملكي
          </button>
        </div>
      </div>
    </main>
  );
}
