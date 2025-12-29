"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, BookOpen, Crown, Sparkles } from 'lucide-react';

export default function ClassroomPage() {
  return (
    <div className="min-h-screen bg-[#000814] text-white p-10">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="flex justify-between items-end border-b border-white/5 pb-10">
          <div>
            <h2 className="text-7xl font-black italic tracking-tighter">قاعة الدروس</h2>
            <p className="text-amber-500 font-bold mt-4 tracking-widest uppercase text-sm">تم تحميل "رحلة نوف" المحدثة بنجاح</p>
          </div>
          <Sparkles className="text-amber-500" size={48} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[1, 2].map((i) => (
            <motion.div 
              whileHover={{ scale: 1.02 }}
              key={i} 
              className="aspect-video bg-[#001d3d] rounded-[4rem] border-2 border-amber-500/10 flex flex-col items-center justify-center group cursor-pointer relative overflow-hidden"
            >
              <PlayCircle size={80} className="text-amber-500 group-hover:scale-110 transition-transform" />
              <div className="absolute bottom-10 right-10">
                <h3 className="text-3xl font-black italic">الدرس {i}: سحر البدايات</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
