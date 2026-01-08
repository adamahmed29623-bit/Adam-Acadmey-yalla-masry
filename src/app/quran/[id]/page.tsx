"use client";
import React from 'react';

export default function QuranPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-[#001b48] text-[#D4AF37] flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-4 font-serif">قاعة تلاوة القرآن</h1>
      <p className="text-white/60 uppercase tracking-[5px]">سورة رقم: {params.id}</p>
      <div className="mt-10 p-8 border border-[#D4AF37]/30 rounded-lg text-center">
        قريباً.. تلاوات عطرة بأصوات ملكية
      </div>
    </div>
  );
}
