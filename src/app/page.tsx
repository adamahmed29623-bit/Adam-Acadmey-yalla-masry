
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

export default function QueenPortal() {
  return (
    <div className="min-h-screen bg-[#000814] flex flex-col items-center justify-center text-white p-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-center space-y-8"
      >
        <div className="flex justify-center">
          <Crown className="w-24 h-24 text-amber-500 animate-pulse" />
        </div>
        <h1 className="text-7xl font-black tracking-tighter italic">
          NEFERTITI <span className="text-amber-500">ROYAL ACADEMY</span>
        </h1>
        <p className="text-2xl text-slate-400 font-light tracking-[0.5em] uppercase">
          صرح العلم والرفعة
        </p>
        <div className="pt-10">
          <div className="px-10 py-4 border border-amber-500/30 rounded-full bg-amber-500/5 text-amber-500 font-bold tracking-widest">
            قريباً سيُفتح الرواق الملكي
          </div>
        </div>
      </motion.div>
    </div>
  );
}
