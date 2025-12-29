"use client";
import React, { useState } from 'react';
import { Crown, User, Mail, Lock, Sparkles, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();
  const [selectedTitle, setSelectedTitle] = useState("");

  const royalTitles = [
    { name: "نفرتيتي", meaning: "الجميلة أتت" },
    { name: "ميريت آمون", meaning: "محبوبة آمون" },
    { name: "تي", meaning: "المحبوبة العظيمة" },
    { name: "كليوباترا", meaning: "مجد أبيها" },
    { name: "نفرتاري", meaning: "جميلة الجميلات" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-transparent overflow-hidden">
      {/* خلفية ملكية خافتة */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
        <Crown size={800} className="text-amber-500" />
      </div>

      <div className="w-full max-w-2xl bg-white/5 border border-amber-500/10 p-12 rounded-[4rem] backdrop-blur-2xl shadow-2xl relative z-10">
        <div className="text-center mb-10">
          <Sparkles className="mx-auto text-amber-500 mb-4" size={40} />
          <h1 className="text-4xl font-black italic">ميثاق الانتساب</h1>
          <p className="text-slate-400 mt-2 italic">اختاري لقبكِ الفرعوني لتُعرفي به في ردهات الأكاديمية</p>
        </div>

        <form className="space-y-6">
          {/* قسم اختيار الاسم المستعار */}
          <div className="space-y-3">
            <label className="text-[10px] font-black text-amber-500 uppercase tracking-widest mr-4">اللقب الملكي المستعار</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {royalTitles.map((title) => (
                <button
                  key={title.name}
                  type="button"
                  onClick={() => setSelectedTitle(title.name)}
                  className={`p-4 rounded-2xl border transition-all text-sm font-bold italic ${
                    selectedTitle === title.name 
                    ? 'border-amber-500 bg-amber-500 text-black shadow-[0_0_20px_rgba(255,195,0,0.3)]' 
                    : 'border-white/10 bg-white/5 hover:border-amber-500/50'
                  }`}
                >
                  {title.name}
                  <p className={`text-[8px] mt-1 ${selectedTitle === title.name ? 'text-black/70' : 'text-slate-500'}`}>
                    ({title.meaning})
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input type="text" placeholder="الاسم الحقيقي (سري)" className="w-full bg-white/5 border border-white/10 p-5 pl-12 rounded-2xl outline-none focus:border-amber-500 text-white font-bold" />
            </div>

            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input type="email" placeholder="البريد الإلكتروني" className="w-full bg-white/5 border border-white/10 p-5 pl-12 rounded-2xl outline-none focus:border-amber-500 text-white font-bold" />
            </div>
          </div>

          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input type="password" placeholder="كلمة المرور" className="w-full bg-white/5 border border-white/10 p-5 pl-12 rounded-2xl outline-none focus:border-amber-500 text-white font-bold" />
          </div>

          <button 
            type="submit"
            className="w-full bg-amber-500 text-black py-6 rounded-3xl font-black text-2xl hover:scale-[1.03] transition-all shadow-xl mt-6 flex items-center justify-center gap-3"
          >
            <Crown size={24} />
            تأكيد الانتساب كـ {selectedTitle || "أميرة"}
          </button>
        </form>
      </div>
    </div>
  );
}
