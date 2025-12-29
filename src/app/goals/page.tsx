"use client";
import React, { useState } from 'react';
import { Crown, Target, BarChart, Award, Compass, ArrowRight, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function GoalsPage() {
  const router = useRouter();

  // مصفوفة الأهداف مع مسارات التحديات المرتبطة بها
  const royalGoals = [
    { 
      id: 'etiquette', 
      title: "إتيكيت الحديث الملكي", 
      desc: "التركيز على نبرة الصوت والمصطلحات الدبلوماسية",
      icon: <Sparkles className="text-amber-500" />
    },
    { 
      id: 'fluency', 
      title: "طلاقة 'بنت البلد' الراقية", 
      desc: "سرعة البديهة واستخدام الأمثال الشعبية العريقة",
      icon: <Compass className="text-amber-500" />
    },
    { 
      id: 'formal', 
      title: "المخاطبة الرسمية", 
      desc: "إدارة الحوارات في المحافل والمجالس الكبرى",
      icon: <Award className="text-amber-500" />
    }
  ];

  const handleGoalSelection = (goalId: string) => {
    // هنا نقوم بنقل الطالبة إلى صفحة التحديات مع إرسال "كود الهدف"
    // لكي تظهر لها تحديات مخصصة فقط
    router.push(`/challenges?filter=${goalId}`);
  };

  return (
    <div className="min-h-screen bg-transparent text-white p-8 md:p-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-black italic tracking-tight">تحديد <span className="text-amber-500">المسار الملكي</span></h1>
          <p className="text-slate-400 text-xl italic">اختاري هدفكِ اليوم، وسنقوم بتطويع التحديات لتناسب طموحكِ</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {royalGoals.map((goal) => (
            <div 
              key={goal.id}
              onClick={() => handleGoalSelection(goal.id)}
              className="group bg-white/5 border border-white/10 p-10 rounded-[3rem] cursor-pointer hover:border-amber-500/50 hover:bg-amber-500/5 transition-all relative overflow-hidden text-center"
            >
              <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {goal.icon}
              </div>
              <h3 className="text-2xl font-black italic mb-4">{goal.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">{goal.desc}</p>
              <div className="flex items-center justify-center gap-2 text-amber-500 font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                انتقال للتحديات <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>

        {/* قسم قياس المستوى (ليظل مرجعاً للطالبة) */}
        <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/10 p-12 rounded-[4rem] flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-black italic flex items-center gap-3">
              <BarChart className="text-amber-500" /> رتبة الطالبة: <span className="text-amber-500">نوف</span>
            </h2>
            <p className="text-slate-400 italic">لقد أتممتِ ٦٥٪ من مسار 'الرقي اللفظي'. استمري في التحديات للوصول للتاج.</p>
          </div>
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/10" />
              <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-amber-500" strokeDasharray={364.4} strokeDashoffset={364.4 * (1 - 0.65)} />
            </svg>
            <span className="absolute text-2xl font-black italic">٦٥٪</span>
          </div>
        </div>
      </div>
    </div>
  );
}
