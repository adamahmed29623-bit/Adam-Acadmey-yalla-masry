
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CreditCard, ChevronRight, Crown, CheckCircle2 } from 'lucide-react';

export default function BookingPage() {
  const [selectedTime, setSelectedTime] = useState(null);
  const slots = ["09:00 AM", "11:00 AM", "02:00 PM", "05:00 PM", "08:00 PM", "10:00 PM"];

  return (
    <div className="min-h-screen bg-[#000814] text-white p-10 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="bg-gradient-to-br from-amber-500 to-amber-700 p-16 rounded-[4rem] text-[#000814] relative overflow-hidden shadow-2xl shadow-amber-500/20">
          <div className="relative z-10 space-y-4">
            <h2 className="text-6xl font-black italic tracking-tighter text-white">تأكيد الجلسة الملكية</h2>
            <p className="text-xl font-bold opacity-90 italic text-white/80">اختاري الموعد الذي يناسب جدولكِ المزدحم</p>
          </div>
          <Calendar className="absolute -left-10 -bottom-10 w-64 h-64 opacity-10 rotate-12" />
        </div>

        <div className="bg-[#001d3d] p-12 rounded-[4rem] border border-white/5 space-y-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {slots.map(slot => (
              <button 
                key={slot}
                onClick={() => setSelectedTime(slot)}
                className={`py-6 rounded-3xl font-black transition-all border-2 ${
                  selectedTime === slot ? 'bg-amber-500 border-amber-500 text-[#000814] scale-105 shadow-xl' : 'bg-[#000814] border-white/5 text-slate-500'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>

          <button 
            disabled={!selectedTime}
            className={`w-full py-8 rounded-[3rem] font-black text-2xl flex items-center justify-center gap-4 transition-all ${
              selectedTime ? 'bg-amber-500 text-[#000814] shadow-2xl' : 'bg-white/5 text-slate-700 cursor-not-allowed'
            }`}
          >
            <CreditCard size={28} /> إتمام الحجز والدفع
          </button>
        </div>
      </div>
    </div>
  );
