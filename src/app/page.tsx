"use client";
import React from 'react';

// تأكدي أن هذا المجلد موجود بالفعل في src/components/Navbar.tsx أو اتركيه فارغاً الآن
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-[#D4AF37] flex flex-col items-center justify-center font-serif">
      <div className="text-center animate-in fade-in zoom-in duration-1000">
        <h1 className="text-7xl font-black tracking-tighter mb-4 uppercase shadow-gold">
          Yalla Masry Academy
        </h1>
        <div className="h-1 w-64 bg-[#D4AF37] mx-auto mb-6 shadow-[0_0_15px_#D4AF37]"></div>
        <p className="text-gray-500 text-xl tracking-[15px] uppercase font-light">
          Legacy of Nefertiti
        </p>
      </div>
      
      {/* رسالة تشويقية للطفل */}
      <div className="mt-20 p-8 border border-yellow-900/30 rounded-3xl bg-yellow-950/5 backdrop-blur-xl">
        <p className="text-[#D4AF37] animate-pulse">جاري تحضير محراب الأسرار... انتظروا المفاجأة الكبرى</p>
      </div>
    </div>
  );
}
