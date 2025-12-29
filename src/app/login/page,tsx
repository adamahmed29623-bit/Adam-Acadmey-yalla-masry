"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Lock, User } from 'lucide-react';

export default function RoyalLogin() {
  return (
    <main className="min-h-screen w-full bg-[#000814] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-amber-500/20 p-10 rounded-[2.5rem] text-center shadow-[0_0_50px_rgba(212,175,55,0.1)]"
      >
        <Crown className="w-16 h-16 text-amber-500 mx-auto mb-6" />
        <h2 className="text-3xl font-black text-white mb-2 tracking-tight">دخول الرواق الملكي</h2>
        <p className="text-amber-500/60 mb-8 italic">أهلاً بيكِ يا ملكة في بيتك الثاني</p>

        <div className="space-y-4 text-right">
          <div className="relative">
            <input type="text" placeholder="الاسم الملكي" className="w-full bg-black/40 border border-white/10 p-4 pr-12 rounded-2xl text-white focus:border-amber-500 outline-none transition-all" />
            <User className="absolute right-4 top-4 text-amber-500/40" size={20} />
          </div>
          <div className="relative">
            <input type="password" placeholder="كلمة المرور" className="w-full bg-black/40 border border-white/10 p-4 pr-12 rounded-2xl text-white focus:border-amber-500 outline-none transition-all" />
            <Lock className="absolute right-4 top-4 text-amber-500/40" size={20} />
          </div>
          <button className="w-full py-4 bg-amber-500 text-black font-black rounded-2xl text-xl hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all">
            دخول
          </button>
        </div>
      </motion.div>
    </main>
  );
}
