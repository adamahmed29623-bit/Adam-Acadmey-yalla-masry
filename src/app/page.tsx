'use client';
import React, { useState } from 'react';
import { 
  User, BookOpen, Trophy, ShoppingBag, Settings, 
  MapPin, Plane, Car, Hotel, ShoppingCart, 
  Layout, Star, Volume2, Users, Upload
} from 'lucide-react';

// --- المكونات الفرعية الملكية (مع إصلاح TypeScript) ---

const SidebarItem = ({ icon: Icon, label, active, onClick }: any) => (
  <div 
    onClick={onClick}
    className={`flex items-center gap-4 p-4 cursor-pointer transition-all duration-300 rounded-xl ${
      active ? 'bg-amber-500/10 border-r-4 border-amber-500 text-amber-500' : 'text-gray-400 hover:text-amber-200 hover:bg-white/5'
    }`}
  >
    <Icon size={24} />
    <span className="font-bold">{label}</span>
  </div>
);

// تم جعل الأيقونة اختيارية لمنع الخطأ الذي ظهر في Vercel
const Card = ({ children, title, icon: Icon }: { children: React.ReactNode, title: string, icon?: any }) => (
  <div className="bg-slate-900/50 backdrop-blur-md border border-amber-500/20 p-6 rounded-3xl shadow-xl">
    <div className="flex items-center gap-3 mb-6">
      {Icon && <Icon className="text-amber-500" size={24} />}
      <h3 className="text-xl font-black text-white">{title}</h3>
    </div>
    {children}
  </div>
);

export default function App() {
  const [view, setView] = useState('auth'); 
  const [tab, setTab] = useState('main'); 
  const [journeyStep, setJourneyStep] = useState(0);
  const [userPoints] = useState(1250);

  const journeyStages = [
    { id: 'airport', name: 'مطار القاهرة', char: 'ضابط الجوازات', msg: 'أهلاً بكِ يا جلالة الملكة نفرتيتي في أرض الوطن. جواز سفركِ مختوم بختم العزة.', icon: Plane },
    { id: 'taxi', name: 'التاكسي المصري', char: 'عم عبده السائق', msg: 'نورتي المحروسة يا ست الهوانم. يلا بينا على الفندق الملكي.', icon: Car },
    { id: 'hotel', name: 'استقبال الفندق', char: 'مدير الاستقبال', msg: 'جلالة الملكة، جناحكِ الملكي جاهز كما خططنا تماماً.', icon: Hotel },
    { id: 'khan', name: 'خان الخليلي', char: 'تاجر التحف', msg: 'دي روح مصر اللي بنحافظ عليها في قطعنا النادرة يا فندم.', icon: ShoppingBag },
    { id: 'grocery', name: 'البقالة', char: 'عم محمد البقال', msg: 'مصر دايماً عامرة بيكم وبأصلكم الطيب يا ملكة.', icon: ShoppingCart }
  ];

  const speakMasry = (text: string) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = 'ar-EG';
      msg.rate = 0.85;
      window.speechSynthesis.speak(msg);
    }
  };

  if (view === 'auth') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6" dir="rtl">
        <div className="w-full max-w-md bg-slate-900 border-2 border-amber-500/30 p-10 rounded-[40px] text-center shadow-[0_0_50px_rgba(245,158,11,0.1)]">
          <h1 className="text-5xl font-black text-amber-500 mb-2 tracking-tighter">YALLA MASRY</h1>
          <p className="text-amber-100/40 mb-10 text-sm uppercase tracking-widest">The Royal Identity Academy</p>
          <div className="space-y-4">
            <input type="email" placeholder="البريد الإلكتروني الملكي" className="w-full bg-black/50 border border-amber-500/20 p-4 rounded-2xl text-white outline-none focus:border-amber-500 transition" />
            <input type="password" placeholder="كلمة السر" className="w-full bg-black/50 border border-amber-500/20 p-4 rounded-2xl text-white outline-none focus:border-amber-500 transition" />
            <button onClick={() => setView('goal')} className="w-full bg-amber-500 hover:bg-amber-600 text-black font-black py-4 rounded-2xl shadow-lg transition-all transform hover:scale-[1.02]">
              دخول الأكاديمية
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'goal') {
    return (
      <div className="min-h-screen bg-[#050505] text-white p-10 flex flex-col items-center justify-center" dir="rtl">
        <h2 className="text-5xl font-black text-amber-500 mb-4 text-center">حددي هدفكِ يا ملكة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-10">
          {[
            { t: 'إتقان الفصاحة', d: 'اللغة هي وعاء الهوية', i: '📜' },
            { t: 'الإتيكيت الملكي', d: 'سلوكيات تعكس الرقي المصري', i: '👑' },
            { t: 'الجذور التاريخية', d: 'فهم الماضي لصناعة المستقبل', i: '🏺' }
          ].map((g, i) => (
            <div key={i} onClick={() => setView('dashboard')} className="group bg-slate-900 border border-amber-500/20 p-10 rounded-[35px] cursor-pointer hover:border-amber-500 transition-all hover:-translate-y-2">
              <div className="text-6xl mb-6">{g.i}</div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-500 transition">{g.t}</h3>
              <p className="text-gray-500 text-sm">{g.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020202] text-white flex" dir="rtl">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-950 border-l border-amber-500/10 p-6 flex flex-col gap-4">
        <div className="mb-10 px-4 text-center">
          <h1 className="text-3xl font-black text-amber-500">YALLA MASRY</h1>
        </div>
        <nav className="flex flex-col gap-2">
          <SidebarItem icon={Layout} label="الرئيسية" active={tab === 'main'} onClick={() => setTab('main')} />
          <SidebarItem icon={MapPin} label="رحلة الواقع" active={tab === 'journey'} onClick={() => setTab('journey')} />
          <SidebarItem icon={BookOpen} label="الدروس الملكية" active={tab === 'lessons'} onClick={() => setTab('lessons')} />
          <SidebarItem icon={ShoppingBag} label="المتجر" active={tab === 'shop'} onClick={() => setTab('shop')} />
          <SidebarItem icon={Settings} label="لوحة التحكم" active={tab === 'admin'} onClick={() => setTab('admin')} />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        {tab === 'main' && (
          <div className="space-y-10">
            <header className="flex justify-between items-end">
              <div>
                <h2 className="text-4xl font-black mb-2 text-white">أهلاً بكِ في عَرشكِ، <span className="text-amber-500">نفرتيتي</span></h2>
                <p className="text-gray-500 italic">"نحن لا نبني مشروعاً، نحن نعيد صياغة الهوية"</p>
              </div>
              <div className="bg-slate-900 px-6 py-3 rounded-2xl border border-amber-500/20 text-center">
                <p className="text-[10px] text-gray-500 uppercase">النقاط الملكية</p>
                <p className="text-xl font-black text-amber-500">{userPoints} XP</p>
              </div>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card title="تقدم الهوية" icon={Star}><div className="h-3 bg-black rounded-full overflow-hidden mt-2"><div className="h-full bg-amber-500 w-[75%]"></div></div></Card>
              <Card title="المعلمات النشطات" icon={User}><div className="flex -space-x-3 space-x-reverse justify-center mt-2">{[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full bg-amber-500 border-2 border-black" />)}</div></Card>
              <Card title="تحدي اليوم" icon={Trophy}><p className="text-sm text-gray-400 mt-2">تحدثي بالفصحى لمدة دقيقتين.</p></Card>
            </div>
          </div>
        )}

        {tab === 'journey' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-slate-900 rounded-[50px] p-12 border-2 border-amber-500/20 text-center flex flex-col items-center">
              <div className="mb-8 p-6 bg-amber-500/10 rounded-full border border-amber-500/20">
                {React.createElement(journeyStages[journeyStep].icon, { size: 64, className: "text-amber-500" })}
              </div>
              <h3 className="text-4xl font-black mb-2 text-white">{journeyStages[journeyStep].name}</h3>
              <p className="text-amber-500 font-bold mb-6 italic text-xl">{journeyStages[journeyStep].char}</p>
              <div className="bg-black/40 p-8 rounded-[30px] border border-white/5 mb-10">
                <p className="text-2xl text-amber-100">"{journeyStages[journeyStep].msg}"</p>
                <button onClick={() => speakMasry(journeyStages[journeyStep].msg)} className="mt-4 flex items-center gap-2 mx-auto text-amber-500"><Volume2 /> اسمعي النطق</button>
              </div>
              <button onClick={() => setJourneyStep(s => (s + 1) % journeyStages.length)} className="px-12 py-3 rounded-full bg-amber-500 text-black font-black">المحطة التالية ⬅️</button>
            </div>
          </div>
        )}

        {tab === 'admin' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-red-500">مركز التحكم الملكي</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* تم إضافة أيقونات Users و Upload هنا لحل خطأ Vercel */}
              <Card title="إدارة الملكات" icon={Users}>
                <div className="space-y-4">{['نفرتيتي', 'زليخة'].map((n, i) => <div key={i} className="p-4 bg-black/30 rounded-2xl flex justify-between"><span>{n}</span><span className="text-green-500">نشطة</span></div>)}</div>
              </Card>
              <Card title="رفع محتوى" icon={Upload}>
                <div className="space-y-4">
                  <input placeholder="عنوان الدرس" className="w-full bg-black/50 border border-white/10 p-4 rounded-xl text-white outline-none" />
                  <button className="w-full py-4 rounded-xl bg-red-600 font-black text-white">نشر للملكات</button>
                </div>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
