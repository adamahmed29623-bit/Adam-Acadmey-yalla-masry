"use client";
import React, { useState } from 'react';
import { Trophy, Star, Mic, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ChallengesPage() {
  const router = useRouter();
  const [points, setPoints] = useState(1250);

  return (
    <div className="min-h-screen text-white p-8" style={{ background: 'radial-gradient(circle, #001d3d 0%, #000814 100%)' }}>
      <div className="max-w-5xl mx-auto flex justify-between items-center mb-12 border-b border-amber-500/20 pb-8">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 rounded-full bg-[#ffc300] flex items-center justify-center text-black font-black">ن</div>
           <h2 className="text-xl font-black italic">نوف المنصور</h2>
        </div>
        <div className="flex items-center gap-6">
           <div className="text-center">
              <p className="text-[10px] text-slate-500 font-black">نقاط الرقي</p>
              <p className="text-xl font-black text-[#ffc300]">{points}</p>
           </div>
           <button onClick={() => router.push('/')} className="text-slate-400 hover:text-[#ffc300]">
              <ArrowRight size={24} />
           </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/5 border border-white/10 p-16 rounded-[4rem] backdrop-blur-xl">
          <Trophy className="mx-auto text-[#ffc300] mb-6" size={64} />
          <h1 className="text-4xl font-black italic mb-4 text-white text-center">تحدي نبرة القصور</h1>
          <p className="text-slate-400 mb-10 italic">"ازيك.. وحشتيني قوي"</p>
          <button className="bg-[#ffc300] text-black px-12 py-5 rounded-2xl font-black text-xl shadow-lg">
            ابدئي التسجيل الصوتي
          </button>
        </div>
      </div>
    </div>
  );
}
