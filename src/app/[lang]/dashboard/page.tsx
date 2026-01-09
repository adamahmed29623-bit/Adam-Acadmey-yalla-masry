"use client";
export const dynamic = 'force-dynamic';
import React from 'react';
import { Trophy, Star, Droplets, Flame, ShieldCheck, BookOpen, Crown } from 'lucide-react';
import { cn } from "@/lib/utils";

// ملاحظة: في المشروع الحقيقي يتم جلب 't' من ملفات الـ JSON بناءً على اللغات
// هنا نضع القيم مباشرة لضمان عمل المعاينة فوراً
export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#05050a] text-white font-serif rtl p-4 md:p-10" dir="rtl">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* الهوية الملكية */}
        <header className="relative bg-gradient-to-l from-[#1a1a2e] to-black p-8 rounded-[40px] border border-[#D4AF37]/30 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-full border-2 border-[#D4AF37] bg-black flex items-center justify-center text-5xl">👸</div>
            <div className="flex-1 text-right">
              <h1 className="text-3xl font-black mb-1">لوحة الأبطال</h1>
              <p className="text-[#D4AF37] flex items-center gap-2 font-bold">
                <Crown size={16} /> كاتب البردي الملكي
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 w-full md:w-auto">
              <StatBox label="نقاط النيل" value="١٢٥٠" icon={<Droplets className="text-blue-400" />} />
              <StatBox label="أيام متواصلة" value="٥" icon={<Flame className="text-orange-500" />} />
            </div>
          </div>
        </header>

        {/* المهام الأكاديمية */}
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-black border-r-4 border-[#D4AF37] pr-4">المهمات الملكية</h2>
            <div className="bg-white/5 border border-white/10 p-8 rounded-[40px] hover:border-[#D4AF37]/40 transition-all group">
              <Trophy className="text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-black mb-2">تحدي النطق: الحروف الذهبية</h3>
              <p className="text-gray-400 text-sm leading-relaxed">أتقن نطق الكلمات المصرية الصعبة بمخارج حروف صحيحة وأسلوب دبلوماسي راقٍ.</p>
            </div>
          </div>

          <aside className="bg-[#D4AF37] p-8 rounded-[40px] text-black flex flex-col items-center justify-center text-center">
            <ShieldCheck size={48} className="mb-4" />
            <p className="text-xs font-black uppercase tracking-tighter mb-1">المستوى القادم</p>
            <h3 className="text-2xl font-black">حكيم النيل</h3>
            <div className="w-full h-1.5 bg-black/10 rounded-full mt-6 overflow-hidden">
               <div className="w-2/3 h-full bg-black"></div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}

function StatBox({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="bg-black/40 border border-white/5 p-4 rounded-3xl text-center min-w-[120px]">
      <div className="flex justify-center mb-1">{icon}</div>
      <div className="text-lg font-black">{value}</div>
      <div className="text-[10px] text-gray-500 font-bold">{label}</div>
    </div>
  );
}
