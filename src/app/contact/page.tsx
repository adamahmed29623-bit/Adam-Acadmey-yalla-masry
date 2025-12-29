"use client";
import React from 'react';
import { Crown, Mail, Phone, MapPin, Instagram, ArrowRight, MessageCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#000814] text-white p-8">
      {/* Header الملكي */}
      <div className="max-w-5xl mx-auto flex justify-between items-center mb-20 border-b border-amber-500/10 pb-8">
        <div>
          <h1 className="text-4xl font-black italic text-amber-500 flex items-center gap-3">
            <MessageCircle size={36} />
            ديوان التواصل
          </h1>
          <p className="text-slate-400 mt-2 font-medium italic">نحن هنا للإجابة على تطلعاتكِ الأكاديمية</p>
        </div>
        <button 
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-all"
        >
          <ArrowRight size={20} />
          العودة للمنصة
        </button>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* معلومات الاتصال */}
        <div className="space-y-8">
          <h2 className="text-3xl font-black italic mb-10">قنوات التواصل الملكية</h2>
          
          <div className="flex items-center gap-6 group">
            <div className="bg-amber-500/10 p-4 rounded-2xl group-hover:bg-amber-500 group-hover:text-black transition-all">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-xs font-black text-amber-500 uppercase tracking-widest">البريد الإلكتروني</p>
              <p className="text-xl font-medium italic">contact@yallamasry.com</p>
            </div>
          </div>

          <div className="flex items-center gap-6 group">
            <div className="bg-amber-500/10 p-4 rounded-2xl group-hover:bg-amber-500 group-hover:text-black transition-all">
              <Instagram size={24} />
            </div>
            <div>
              <p className="text-xs font-black text-amber-500 uppercase tracking-widest">إنستغرام الأكاديمية</p>
              <p className="text-xl font-medium italic">@YallaMasry_Academy</p>
            </div>
          </div>

          <div className="flex items-center gap-6 group">
            <div className="bg-amber-500/10 p-4 rounded-2xl group-hover:bg-amber-500 group-hover:text-black transition-all">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-xs font-black text-amber-500 uppercase tracking-widest">المقر الرئيسي</p>
              <p className="text-xl font-medium italic">القاهرة، جمهورية مصر العربية</p>
            </div>
          </div>
        </div>

        {/* بطاقة العضوية أو رسالة سريعة */}
        <div className="bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 p-10 rounded-[3rem] relative overflow-hidden shadow-2xl">
          <Crown className="absolute -bottom-10 -right-10 text-amber-500/5" size={200} />
          <div className="relative z-10 space-y-6">
            <h3 className="text-2xl font-black italic">هل تودين الانضمام لصفوتنا؟</h3>
            <p className="text-slate-400 leading-relaxed italic">
              إن اختياركِ لأكاديمية "يلا مصري" هو خطوة نحو إتقان لهجة هي فن بحد ذاته. فريقنا جاهز لاستقبال استفساراتكِ على مدار الساعة.
            </p>
            <div className="pt-6">
              <button 
                onClick={() => router.push('/booking')}
                className="bg-amber-500 text-black w-full py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-lg"
              >
                اطلبي استشارة مجانية
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
