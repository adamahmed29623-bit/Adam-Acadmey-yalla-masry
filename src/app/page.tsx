"use client";
import React, { useState, CSSProperties } from 'react';
import { 
  Sparkles, Map, Gift, Star, Lock, MapPin, Trophy, Coffee, CheckCircle, Users 
} from 'lucide-react';
import Image from 'next/image';

export default function RoyalUnifiedAcademy() {
  // الحالة للتحكم في الأقسام (العرش، المعلمات، التحديات، مجلس الخليج)
  const [activeTab, setActiveTab] = useState('throne');
  const [gulfTab, setGulfTab] = useState('map'); // حالة خاصة لتبويب الخريطة داخل قسم الخليج

  // صورة الأفاتار الملكي (نفرتيتي)
  const nefertitiAvatar = "https://img.freepik.com/free-vector/cute-hijab-girl-wearing-black-abaya-cartoon-vector-icon-illustration_138676-3482.jpg";

  return (
    <div style={mainLayout}>
      {/* 1. التاج العلوي (Navigation) */}
      <nav style={royalNav}>
        <div style={logoStyle}>🏺 نفرتيتي الملكية</div>
        <div style={navItems}>
          <button onClick={() => setActiveTab('throne')} style={activeTab === 'throne' ? activeLink : linkStyle}>العرش</button>
          <button onClick={() => setActiveTab('teachers')} style={activeTab === 'teachers' ? activeLink : linkStyle}>المعلمات</button>
          <button onClick={() => setActiveTab('challenges')} style={activeTab === 'challenges' ? activeLink : linkStyle}>التحديات</button>
          <button onClick={() => setActiveTab('gulf')} style={activeTab === 'gulf' ? activeLink : linkStyle}>مجلس الخليج</button>
        </div>
        <div style={xpBadge}>XP 1250 ✨</div>
      </nav>

      {/* 2. منطقة المحتوى الديناميكي */}
      <main style={contentArea}>

        {/* --- قسم العرش (الرئيسية) --- */}
        {activeTab === 'throne' && (
          <div className="animate-in fade-in duration-500">
            <h1 style={royalTitle}>أهلاً بكِ في عرشك، نفرتيتي</h1>
            <p style={subTitle}>"نحن لا نبني مشروعاً، نحن نعيد صياغة الهوية"</p>
            <div style={progressCard}>
              <p className="mb-4">تقدم الهوية الملكية</p>
              <div style={progressBarBase}><div style={progressBarFill}></div></div>
            </div>
          </div>
        )}

        {/* --- قسم مجلس الخليج (القسم الجديد الذي أضفتيه) --- */}
        {activeTab === 'gulf' && (
          <div className="w-full max-w-6xl animate-in zoom-in duration-500">
            {/* هيدر المجلس */}
            <div className="bg-amber-600/10 border border-amber-500/20 p-6 rounded-3xl mb-10 flex justify-between items-center">
              <div className="flex items-center gap-3 text-amber-500 font-bold">
                <Coffee /> مجلس الخليج لتعليم اللهجة المصرية
              </div>
              <div className="text-sm opacity-70">أكاديمية يلا مصري 🇪🇬</div>
            </div>

            {/* برواز نفرتيتي الملكي */}
            <div className="flex flex-col items-center mb-12">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-amber-500 shadow-[0_0_30px_rgba(212,175,55,0.3)] overflow-hidden bg-white mb-6">
                 <Image src={nefertitiAvatar} alt="Nefertiti" fill className="object-cover scale-110" />
              </div>
              <h2 className="text-4xl font-black text-white mb-2">رحلة نفرتيتي الاستكشافية</h2>
              <p className="text-amber-200/70 italic">من الخليج إلى قلب القاهرة.. لتعلم لغة ابن البلد</p>
            </div>

            {/* أزرار قسم الخليج */}
            <div className="flex justify-center gap-4 mb-10">
              <button onClick={() => setGulfTab('map')} className={`px-8 py-3 rounded-xl font-bold transition-all ${gulfTab === 'map' ? 'bg-amber-500 text-black' : 'bg-white/5 border border-white/10'}`}>
                🗺️ خريطة المهمات
              </button>
              <button onClick={() => setGulfTab('gifts')} className={`px-8 py-3 rounded-xl font-bold transition-all ${gulfTab === 'gifts' ? 'bg-emerald-500 text-white' : 'bg-white/5 border border-white/10'}`}>
                🎁 حقيبة الجوائز
              </button>
            </div>

            {gulfTab === 'map' ? (
              <div className="grid gap-6">
                <div style={journeyCardActive}>
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-white relative overflow-hidden border-2 border-amber-500">
                      <Image src={nefertitiAvatar} alt="Step" fill className="object-cover" />
                    </div>
                    <div className="flex-1 text-right">
                      <p className="text-amber-500 font-bold flex items-center gap-2"><MapPin size={16}/> خان الخليلي - القاهرة</p>
                      <h3 className="text-xl font-bold">تعلمي كيف تفاصلين في السعر: "آخرها كام يا عمو؟"</h3>
                    </div>
                    <button style={actionBtnGold}>انطلقي يا نفرتيتي! 🚀</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <PrizeCard name="العباءة الملكية" icon="✨" price={500} />
                 <PrizeCard name="خاتم نفرتيتي" icon="💍" price={300} />
                 <PrizeCard name="صندوق الحلويات" icon="🍯" price={150} />
              </div>
            )}
          </div>
        )}

        {/* --- الأقسام الأخرى (المعلمات، التحديات) تتبع نفس النمط --- */}

      </main>
    </div>
  );
}

// --- المكونات الفرعية ---
function PrizeCard({ name, icon, price }: any) {
  return (
    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center hover:border-amber-500 transition-all">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-amber-500 text-sm mb-6">{price} نقطة نيل</p>
      <button className="w-full py-2 bg-white/10 rounded-lg text-xs opacity-50">قيد الانتظار..</button>
    </div>
  );
}

// --- التنسيقات (الستايل الملكي المرتب) ---
const mainLayout: CSSProperties = { background: 'radial-gradient(circle at center, #1a1a2e 0%, #05050a 100%)', minHeight: '100vh', color: '#fff', fontFamily: 'serif' };
const royalNav: CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 40px', background: 'rgba(0,0,0,0.3)', borderBottom: '2px solid #D4AF37', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100 };
const navItems: CSSProperties = { display: 'flex', gap: '20px' };
const linkStyle: CSSProperties = { background: 'none', border: 'none', color: '#ccc', cursor: 'pointer', fontSize: '1rem' };
const activeLink: CSSProperties = { ...linkStyle, color: '#D4AF37', borderBottom: '2px solid #D4AF37', paddingBottom: '5px' };
const xpBadge: CSSProperties = { background: 'rgba(212,175,55,0.1)', padding: '8px 15px', borderRadius: '20px', border: '1px solid #D4AF37', color: '#D4AF37', fontWeight: 'bold' };
const contentArea: CSSProperties = { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 20px', textAlign: 'center' };
const royalTitle: CSSProperties = { fontSize: '3rem', color: '#D4AF37', marginBottom: '10px' };
const subTitle: CSSProperties = { fontSize: '1.2rem', fontStyle: 'italic', opacity: 0.7, marginBottom: '40px' };
const progressCard: CSSProperties = { background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '25px', border: '1px solid rgba(212,175,55,0.1)', width: '100%', maxWidth: '500px' };
const progressBarBase: CSSProperties = { width: '100%', height: '8px', background: '#000', borderRadius: '10px' };
const progressBarFill: CSSProperties = { width: '70%', height: '100%', background: 'linear-gradient(90deg, #D4AF37, #f1c40f)' };
const journeyCardActive: CSSProperties = { background: '#0f1c2e', border: '1px solid #D4AF37', padding: '30px', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' };
const actionBtnGold: CSSProperties = { background: '#D4AF37', color: '#000', padding: '12px 25px', borderRadius: '15px', fontWeight: 'bold', border: 'none', cursor: 'pointer' };
const logoStyle: CSSProperties = { color: '#D4AF37', fontSize: '1.3rem', fontWeight: 'bold' };
