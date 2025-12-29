"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, ShieldCheck, PlayCircle, Clock, Award, 
  Crown, Heart, Calendar, CreditCard, ChevronLeft,
  Video, CheckCircle2, DollarSign
} from 'lucide-react';

/**
 * 🏛️ ديوان تفاصيل المعلمة والحجز الملكي
 * يجمع بين: الفيديو الشخصي + الصورة + السعر + جدول المواعيد
 */

export default function TeacherRoyalProfile() {
  const [selectedTime, setSelectedTime] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  // بيانات المعلمة (يمكن ربطها بـ Firebase لاحقاً)
  const teacher = {
    name: "أ. مريم الفارس",
    title: "خَبيرة اللهجة المَلَكية",
    image: "https://images.unsplash.com/photo-1544717297-fa95b3ee51f3?w=800",
    videoUrl: "#", // رابط فيديو المقدمة
    price: "45",
    rating: "5.0",
    hours: "1200",
    specialty: "إتيكيت الحوار والبراعم",
    bio: "نحن لا نتعلم الكلمات فقط، بل نتعلم ثقافة، رقي، وأسلوب حياة مصري أصيل يليق بكِ كأميرة.",
    availableSlots: ["09:00 AM", "11:30 AM", "02:00 PM", "05:30 PM", "08:00 PM", "10:30 PM"]
  };

  return (
    <div className="min-h-screen bg-[#000814] text-white p-6 md:p-12 lg:p-20 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* 1. قسم الهوية (الفيديو والصورة) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative group rounded-[4rem] overflow-hidden border-2 border-white/5 aspect-square lg:aspect-video shadow-2xl"
          >
            <AnimatePresence>
              {!showVideo ? (
                <motion.div key="photo" className="relative w-full h-full">
                  <img src={teacher.image} className="w-full h-full object-cover opacity-70 transition-transform duration-1000 group-hover:scale-110" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-transparent" />
                  <button 
                    onClick={() => setShowVideo(true)}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 group/btn"
                  >
                    <div className="bg-amber-500/20 p-8 rounded-full backdrop-blur-2xl border border-amber-500/30 group-hover/btn:bg-amber-500 group-hover/btn:text-[#000814] transition-all">
                      <PlayCircle size={64} />
                    </div>
                    <span className="text-amber-500 font-black tracking-widest uppercase text-sm">شاهدي رسالة المعلمة</span>
                  </button>
                </motion.div>
              ) : (
                <motion.div key="video" className="w-full h-full bg-black flex items-center justify-center">
                  <div className="text-amber-500 font-black italic">فيديو المعلمة يعرض هنا...</div>
                  <button onClick={() => setShowVideo(false)} className="absolute top-8 right-8 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all">
                    <ChevronLeft size={24} className="rotate-90" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* معلومات المعلمة */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <h1 className="text-6xl font-black italic">{teacher.name}</h1>
                <ShieldCheck className="text-sky-400" size={32} />
              </div>
              <p className="text-amber-500 font-black tracking-[0.3em] flex items-center gap-3">
                <Crown size={20} /> {teacher.title}
              </p>
            </div>
            
            <p className="text-slate-400 text-2xl italic leading-relaxed font-medium">"{teacher.bio}"</p>
            
            <div className="flex flex-wrap gap-4">
               <div className="bg-white/5 px-6 py-3 rounded-2xl border border-white/5 flex items-center gap-3 text-amber-500 font-black italic">
                 <Star fill="currentColor" size={20}/> {teacher.rating} تقييم ملكي
               </div>
               <div className="bg-white/5 px-6 py-3 rounded-2xl border border-white/5 flex items-center gap-3 text-slate-300 font-black italic text-sm">
                 <Clock size={20} className="text-amber-500"/> {teacher.hours}+ ساعة خبرة
               </div>
            </div>
          </motion.div>
        </div>

        {/* 2. قسم السعر والجدول (Booking System) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* بطاقة السعر والدفع */}
          <div className="bg-[#001d3d] p-10 rounded-[4rem] border border-white/5 flex flex-col justify-center items-center text-center space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5"><DollarSign size={120} /></div>
            <p className="text-slate-500 font-black uppercase tracking-widest text-xs">سعر الجلسة الملكية</p>
            <h3 className="text-7xl font-black italic text-white">${teacher.price}</h3>
            <div className="w-full h-px bg-white/10" />
            <ul className="text-right space-y-3 text-sm font-bold text-slate-400">
              <li className="flex items-center gap-2 justify-end"><CheckCircle2 size={14} className="text-amber-500"/> مدة الجلسة: 60 دقيقة</li>
              <li className="flex items-center gap-2 justify-end"><CheckCircle2 size={14} className="text-amber-500"/> مادة علمية مرفقة</li>
            </ul>
          </div>

          {/* جدول المواعيد المتاحة */}
          <div className="lg:col-span-2 bg-[#001d3d] p-10 rounded-[4rem] border border-white/5 space-y-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-4 text-2xl font-black italic">
                <Calendar className="text-amber-500" />
                المواعيد المتاحة لهذا الأسبوع
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {teacher.availableSlots.map(slot => (
                <button 
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className={`py-6 rounded-3xl font-black text-sm transition-all border-2 ${
                    selectedTime === slot 
                    ? 'bg-amber-500 border-amber-500 text-[#000814] scale-105 shadow-xl shadow-amber-500/20' 
                    : 'bg-[#000814] border-white/5 text-slate-500 hover:border-amber-500/50'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>

            <button 
              disabled={!selectedTime}
              className={`w-full py-8 rounded-[3rem] font-black text-2xl flex items-center justify-center gap-4 transition-all ${
                selectedTime 
                ? 'bg-amber-500 text-[#000814] shadow-2xl shadow-amber-500/30 hover:scale-[1.01]' 
                : 'bg-white/5 text-slate-700 cursor-not-allowed grayscale'
              }`}
            >
              <CreditCard size={28} />
              تأكيد الحجز والدفع
            </button>
          </div>

        </div>

        {/* تذييل الصفحة (Trust Badges) */}
        <div className="flex justify-center gap-12 opacity-20 hover:opacity-100 transition-opacity">
           <div className="flex items-center gap-3 font-black text-[10px] tracking-[0.3em] italic uppercase"><Crown size={16}/> Secured by Yalla Masry</div>
           <div className="flex items-center gap-3 font-black text-[10px] tracking-[0.3em] italic uppercase"><ShieldCheck size={16}/> Royal Verified Identity</div>
        </div>

      </div>
    </div>
  );
}
