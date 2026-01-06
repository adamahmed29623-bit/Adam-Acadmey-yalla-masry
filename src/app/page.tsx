'use client';
import React, { useState } from 'react';
import { 
  User, BookOpen, Trophy, ShoppingBag, Settings, 
  MapPin, Plane, Car, Hotel, ShoppingCart, 
  Layout, Star, Volume2, Users, Upload, ChevronRight,
  Globe, Landmark, Moon
} from 'lucide-react';

// --- المكونات الفرعية الملكية ---

const SidebarItem = ({ icon: Icon, label, active, onClick, badge }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center justify-between p-4 mb-2 transition-all duration-300 rounded-2xl ${
      active ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-gray-400 hover:bg-white/5 hover:text-amber-200'
    }`}
  >
    <div className="flex items-center gap-4">
      <Icon size={20} />
      <span className="font-bold text-sm">{label}</span>
    </div>
    {badge && <span className="text-[10px] bg-amber-500/20 text-amber-500 px-2 py-0.5 rounded-full border border-amber-500/30">{badge}</span>}
  </button>
);

export default function App() {
  const [tab, setTab] = useState('main'); 
  const [lang, setLang] = useState('ar'); // ar, en, hie

  return (
    <div className="min-h-screen bg-[#020408] text-white flex overflow-hidden font-['Cairo']" dir="rtl">
      
      {/* 1. القائمة الجانبية الملكية المحدثة */}
      <aside className="w-80 bg-black/50 border-l border-white/5 p-6 flex flex-col hidden lg:flex">
        <div className="mb-10 px-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.5)]">👑</div>
            <h1 className="text-2xl font-black text-amber-500 tracking-tighter italic">YALLA MASRY</h1>
          </div>
          <p className="text-[10px] text-gray-500 mr-11 uppercase tracking-[0.2em]">The Royal Identity</p>
        </div>
        
        <nav className="flex-1 overflow-y-auto custom-scrollbar">
          <p className="text-[10px] text-gray-600 mb-4 px-4 uppercase tracking-widest font-bold">القائمة الرئيسية</p>
          <SidebarItem icon={Layout} label="العرش (الرئيسية)" active={tab === 'main'} onClick={() => setTab('main')} />
          <SidebarItem icon={MapPin} label="محاكاة الواقع" active={tab === 'journey'} onClick={() => setTab('journey')} badge="LIVE" />
          
          <p className="text-[10px] text-gray-600 my-6 px-4 uppercase tracking-widest font-bold">المرافق الملكية</p>
          <SidebarItem icon={Landmark} label="المتحف الوطني" active={tab === 'museum'} onClick={() => window.location.href = '/museum'} />
          <SidebarItem icon={Moon} label="المسجد العتيق" active={tab === 'mosque'} onClick={() => setTab('mosque')} />
          <SidebarItem icon={BookOpen} label="خزانة الدروس" active={tab === 'lessons'} onClick={() => setTab('lessons')} />
          
          <p className="text-[10px] text-gray-600 my-6 px-4 uppercase tracking-widest font-bold">الإدارة</p>
          <SidebarItem icon={Settings} label="لوحة التحكم" active={tab === 'admin'} onClick={() => setTab('admin')} />
        </nav>

        {/* 🌎 مبدل اللغات الملكي */}
        <div className="mt-6 p-4 bg-white/5 rounded-3xl border border-white/5">
          <div className="flex items-center gap-2 mb-3 text-amber-500">
            <Globe size={16} />
            <span className="text-[10px] font-black uppercase">لغة الأكاديمية</span>
          </div>
          <div className="flex gap-2">
            {['AR', 'EN', '🏺'].map((l) => (
              <button 
                key={l}
                onClick={() => setLang(l.toLowerCase())}
                className={`flex-1 py-1 rounded-lg text-[10px] font-bold border transition ${lang === l.toLowerCase() ? 'bg-amber-500 border-amber-500 text-black' : 'border-white/10 text-gray-500 hover:border-amber-500/50'}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* 2. منطقة المحتوى */}
      <main className="flex-1 overflow-y-auto p-6 md:p-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent">
        
        {/* شريط الترحيب العلوي */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-black text-white">مرحباً، <span className="text-amber-500">نفرتيتي</span></h2>
            <p className="text-gray-500 text-xs mt-1">اليوم: 16 من شهر كيهك الملكي</p>
          </div>
          <div className="flex items-center gap-4 bg-slate-900/50 p-2 rounded-2xl border border-white/5 shadow-2xl">
             <div className="px-4 text-center border-l border-white/10">
                <p className="text-[10px] text-gray-500">النقاط</p>
                <p className="text-sm font-black text-amber-500">1,250 XP</p>
             </div>
             <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-black font-black">N</div>
          </div>
        </div>

        {/* محتوى "المسجد" كمثال للمرفق الجديد */}
        {tab === 'mosque' && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-700">
             <div className="bg-gradient-to-br from-emerald-900/20 to-black p-10 rounded-[40px] border border-emerald-500/20 text-center">
                <div className="text-6xl mb-6">🕌</div>
                <h3 className="text-3xl font-black text-emerald-400 mb-4 font-serif">قاعة المسجد العتيق</h3>
                <p className="text-gray-400 max-w-xl mx-auto leading-relaxed text-lg">
                  هنا نتعلم إتيكيت الزيارة، لغة الروح، ومصطلحات التراحم المصرية الأصيلة.
                </p>
                <button className="mt-8 px-10 py-3 bg-emerald-500 text-black rounded-full font-black shadow-lg shadow-emerald-500/20 hover:scale-105 transition">دخول القاعة</button>
             </div>
          </div>
        )}

        {/* واجهة "الرئيسية" كما هي منظمة */}
        {tab === 'main' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-700">
            <div className="lg:col-span-2 space-y-6">
               <div className="bg-slate-900/40 p-8 rounded-[40px] border border-amber-500/10 relative overflow-hidden group">
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-all" />
                  <h3 className="text-2xl font-black mb-4 italic text-amber-500">مهمتكِ الملكية القادمة</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">لقد وصلتي إلى مطار القاهرة في المحاكاة، عم عبده بانتظاركِ بالخارج. هل أنتِ جاهزة للتحدث بالمصرية؟</p>
                  <button onClick={() => setTab('journey')} className="px-8 py-3 bg-amber-500 text-black rounded-2xl font-black flex items-center gap-2">ابدأي المحاكاة الآن <ChevronRight size={18} /></button>
               </div>
            </div>
            <div className="space-y-6">
               <div className="bg-amber-500/10 p-6 rounded-[35px] border border-amber-500/20">
                  <h4 className="font-black text-amber-500 mb-4 flex items-center gap-2"><Star size={16}/> إنجاز الهوية</h4>
                  <div className="h-2 bg-black/40 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-[75%] shadow-[0_0_15px_#f59e0b]"></div>
                  </div>
                  <p className="text-[10px] mt-2 text-gray-500 font-bold">تبقى 25% لتصبحي "ملكة الفصاحة"</p>
               </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
