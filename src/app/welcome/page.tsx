"use client";
import React from 'react';
import { Crown, Sparkles, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function QueenWelcome() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#000814] flex items-center justify-center p-6 overflow-hidden relative">
      {/* هالة ضوئية خلف الأفاتار */}
      <div className="absolute w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] animate-pulse"></div>

      <div className="max-w-4xl w-full text-center relative z-10">
        {/* أفاتار تخيلي للملكة حتشبسوت */}
        <div className="mb-12 relative inline-block">
          <div className="w-64 h-64 mx-auto rounded-full border-4 border-amber-500 p-2 shadow-[0_0_50px_rgba(255,195,0,0.3)] overflow-hidden bg-gradient-to-b from-amber-500/20 to-transparent">
             {/* هنا يمكن وضع صورة الأفاتار الخاص بحتشبسوت */}
             <Crown size={120} className="text-amber-500 mx-auto mt-16 opacity-50" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black px-8 py-2 rounded-full font-black italic text-xl shadow-lg">
            الملكة حتشبسوت
          </div>
        </div>

        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-black italic text-white leading-tight">
            أهلاً بكِ في <span className="text-amber-500">أرض المجد</span> يا ابنتي
          </h1>
          <p className="text-2xl text-slate-300 italic leading-relaxed max-w-2xl mx-auto border-r-4 border-amber-500 pr-6">
            "من قصر الدير البحري، أحييكِ. لغتكِ هي عنوان رقيّكِ، فكوني كملكات مصر القديمة، فصيحة اللسان، قوية البيان، وراقية الحضور."
          </p>
          
          <div className="pt-10">
            <button 
              onClick={() => router.push('/goals')}
              className="group bg-amber-500 text-black px-16 py-6 rounded-3xl font-black text-2xl hover:scale-110 transition-all flex items-center gap-4 mx-auto shadow-[0_20px_40px_rgba(255,195,0,0.2)]"
            >
              للبدء في المسار الملكي
              <Sparkles className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
