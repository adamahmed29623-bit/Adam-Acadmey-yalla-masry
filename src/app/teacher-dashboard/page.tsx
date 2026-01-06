"use client";

import React from 'react';
import { 
  Users, FilePlus, MessageCircle, BarChart3, GraduationCap, 
  PlusCircle, Video, Award, LogOut, Bell, Settings 
} from 'lucide-react';

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-[#05050a] text-white p-4 md:p-8 font-serif rtl" dir="rtl">
      
      {/* التاج العلوي للمنصة */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center mb-10 bg-white/5 backdrop-blur-md p-5 rounded-[25px] border border-[#D4AF37]/20 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="bg-[#D4AF37] p-2 rounded-xl">
            <GraduationCap className="text-black" size={28} />
          </div>
          <div>
            <span className="text-xl font-black text-[#D4AF37] block">ديوان المعلمة</span>
            <span className="text-[10px] text-gray-400">أكاديمية نفرتيتي الملكية</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-400 hover:text-[#D4AF37] transition-all relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="bg-red-500/10 text-red-400 border border-red-500/20 px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-red-500/20 transition-all">
            <LogOut size={16} /> تسجيل خروج
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* العمود الجانبي: الإحصائيات السريعة */}
        <div className="lg:col-span-4 space-y-6">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#D4AF37] to-[#AA891F] p-8 rounded-[35px] text-black shadow-xl group">
            <div className="relative z-10">
              <h3 className="font-bold text-black/70 mb-1">إجمالي رعايا الأكاديمية (الطلاب)</h3>
              <div className="text-5xl font-black">158</div>
              <p className="text-sm mt-4 font-bold flex items-center gap-1">
                <PlusCircle size={14} /> +12 طالب جديد هذا الأسبوع
              </p>
            </div>
            <Users className="absolute -bottom-4 -left-4 text-black/10 w-32 h-32 group-hover:scale-110 transition-transform" />
          </div>

          <div className="bg-white/5 p-6 rounded-[35px] border border-white/10 backdrop-blur-sm">
            <h3 className="text-[#D4AF37] font-bold mb-6 flex items-center gap-2 border-b border-white/5 pb-4">
              <Award size={20} className="animate-pulse" /> طلاب يحتاجون تشجيعاً ملكياً
            </h3>
            <div className="space-y-4">
              {['أحمد محمد', 'ليلى يوسف', 'عمر خالد'].map((student, index) => (
                <div key={index} className="flex justify-between items-center bg-black/40 p-4 rounded-2xl border border-white/5 hover:border-[#D4AF37]/30 transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-[10px]">👤</div>
                    <span className="text-sm font-bold">{student}</span>
                  </div>
                  <button className="text-[#D4AF37] text-xs font-black bg-[#D4AF37]/10 px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                    إرسال وسام ✨
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* منطقة العمل: إدارة المحتوى */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white/5 p-8 rounded-[40px] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            
            <h2 className="text-2xl font-black text-[#D4AF37] mb-8 flex items-center gap-3">
              <FilePlus size={28} /> إضافة محتوى تعليمي ملكي
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button className="group p-10 bg-[#0f1c2e] border-2 border-[#D4AF37]/20 rounded-[35px] hover:border-[#D4AF37] transition-all text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-all">
                  <Video size={40} />
                </div>
                <span className="block text-4xl mb-4 group-hover:scale-125 transition-transform">📽️</span>
                <span className="block text-lg font-black mb-2 text-[#D4AF37]">رفع درس مرئي</span>
                <span className="text-xs text-gray-400">فيديو تعليمي عالي الجودة</span>
              </button>

              <button className="group p-10 bg-[#0f2e1f] border-2 border-emerald-500/20 rounded-[35px] hover:border-emerald-500 transition-all text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-all">
                  <BarChart3 size={40} />
                </div>
                <span className="block text-4xl mb-4 group-hover:scale-125 transition-transform">📝</span>
                <span className="block text-lg font-black mb-2 text-emerald-400">إنشاء اختبار ذكاء</span>
                <span className="text-xs text-gray-400">نظام أسئلة وتحديات تفاعلي</span>
              </button>
            </div>

            <div className="mt-10 p-6 bg-white/5 rounded-[25px] border border-dashed border-white/10 text-center">
              <p className="text-gray-400 text-sm italic">"المعلمة هي حجر الأساس في هذه الأكاديمية.. إبداعكِ هو ما يبني هذه المملكة."</p>
            </div>
          </div>
          
          {/* قسم الرسائل السريعة */}
          <div className="bg-white/5 p-8 rounded-[40px] border border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-4">
               <div className="bg-blue-500/20 p-3 rounded-full text-blue-400">
                 <MessageCircle size={24} />
               </div>
               <div>
                 <h4 className="font-bold">بريد الرسائل الملكية</h4>
                 <p className="text-xs text-gray-500">لديكِ 5 استفسارات جديدة من الطلاب</p>
               </div>
            </div>
            <button className="bg-white text-black px-6 py-2 rounded-xl text-sm font-black hover:bg-[#D4AF37] transition-all">
              فتح البريد
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
