"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

export default function QueenPortal() {
  return (
    // استخدام w-screen و items-center لضمان التوسط الإجباري
    <main className="min-h-screen w-screen bg-[#000814] flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-5xl px-4 flex flex-col items-center justify-center text-center space-y-8">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Crown className="w-20 h-20 text-amber-500 mb-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter text-white">
            NEFERTITI <span className="text-amber-500">ROYAL ACADEMY</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-500/60 tracking-[0.4em] font-light">
            صرح العلم والرفعة
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="pt-10"
        >
          <button className="px-12 py-4 border border-amber-500/40 rounded-full bg-amber-500/5 text-amber-500 font-bold hover:bg-amber-500 hover:text-black transition-all duration-500">
            اكتشفي عالمك الملكي
          </button>
        </motion.div>

      </div>
    </main>
  );
}
