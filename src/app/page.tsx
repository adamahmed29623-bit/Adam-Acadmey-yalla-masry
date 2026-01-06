'use client';
import React, { useState, useEffect, useRef } from 'react';
import { 
  User, BookOpen, Trophy, ShoppingBag, Settings, 
  MapPin, Plane, Car, Hotel, ShoppingCart, 
  ChevronRight, Layout, Star, LogIn
} from 'lucide-react';

// --- المكونات الفرعية الملكية ---

const SidebarItem = ({ icon: Icon, label, active, onClick, color = "text-amber-500" }) => (
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

const Card = ({ children, title, icon: Icon }) => (
  <div className="bg-slate-900/50 backdrop-blur-md border border-amber-500/20 p-6 rounded-3xl shadow-xl">
    <div className="flex items-center gap-3 mb-6">
      {Icon && <Icon className="text-amber-500" size={24} />}
      <h3 className="text-xl font-black text-white">{title}</h3>
    </div>
    {children}
  </div>
);

export default function App() {
  const [view, setView] = useState('auth'); // auth, goal, dashboard
  const [tab, setTab] = useState('main'); // main, journey, lessons, shop, admin
  const [journeyStep, setJourneyStep] = useState(0);
  const [userPoints, setUserPoints] = useState(1250);

  // سيناريو الرحلة الواقعية
  const journeyStages = [
    { id: 'airport', name: 'مطار القاهرة', char: 'ضابط الجوازات', msg: 'أهلاً بكِ يا جلالة الملكة نفرتيتي في أرض الوطن. جواز سفركِ مختوم بختم العزة.', icon: Plane },
    { id: 'taxi', name: 'التاكسي المصري', char: 'عم عبده السائق', msg: 'نورتي المحروسة يا ست الهوانم. يلا بينا على الفندق الملكي.', icon: Car },
    { id: 'hotel', name: 'استقبال الفندق', char: 'مدير الاستقبال', msg: 'جلالة الملكة، جناحكِ الملكي جاهز كما خططنا تماماً.', icon: Hotel },
    { id: 'khan', name: 'خان الخليلي', char: 'تاجر التحف', msg: 'دي روح مصر اللي بنحافظ عليها في قطعنا النادرة يا فندم.', icon: ShoppingBag },
    { id: 'grocery', name: 'البقالة', char: 'عم محمد البقال', msg: 'مصر دايماً عامرة بيكم وبأصلكم الطيب يا ملكة.', icon: ShoppingCart }
  ];

  // --- شاشات العرض ---

  if (view === 'auth') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6 font-['Cairo']" dir="rtl">
        <div className="w-full max-w-md bg-slate-900 border-2 border-amber-500/30 p-10 rounded-[40px] text-center shadow-[0_0_50px_rgba(245,158,11,0.1)]">
          <h1 className="text-5xl font-black text-amber-500 mb-2 tracking-tighter">YALLA MASRY</h1>
          <p className="text-amber-100/40 mb-10 text-sm uppercase tracking-widest">The Royal Identity Academy</p>
          <div className="space-y-4">
            <input type="email" placeholder="البريد الإلكتروني الملكي" className="w-full bg-black/50 border border-amber-500/20 p-4 rounded-2xl text-white outline-none focus:border-amber-500 transition" />
            <input type="password" placeholder="كلمة السر" className="w-full bg-black/50 border border-amber-500/20 p-4 rounded-2xl text-white outline-none focus:border-amber-500 transition" />
            <button 
              onClick={() => setView('goal')}
              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-black py-4 rounded-2xl shadow-lg transition-all transform hover:scale-[1.02]"
            >
              دخول الأكاديمية
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'goal') {
    return (
      <div className="min-h-screen bg-[#050505] text-white p-10 font-['Cairo'] flex flex-col items-center justify-center" dir="rtl">
        <h2 className="text-5xl font-black text-amber-500 mb-4">حددي هدفكِ يا ملكة</h2>
        <p className="text-amber-100/60 mb-12 text-xl">كل تفصيل خططنا له يبدأ من هنا</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
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
    <div className="min-h-screen bg-[#020202] text-white font-['Cairo'] flex" dir="rtl">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-950 border-l border-amber-500/10 p-6 flex flex-col gap-4">
        <div className="mb-10 px-4">
          <h1 className="text-3xl font-black text-amber-500">YALLA MASRY</h1>
          <p className="text-[10px] text-amber-100/30 uppercase tracking-[0.3em]">Official System</p>
        </div>
        
        <nav className="flex flex-col gap-2">
          <SidebarItem icon={Layout} label="الرئيسية" active={tab === 'main'} onClick={() => setTab('main')} />
          <SidebarItem icon={MapPin} label="رحلة الواقع" active={tab === 'journey'} onClick={() => setTab('journey')} />
          <SidebarItem icon={BookOpen} label="الدروس الملكية" active={tab === 'lessons'} onClick={() => setTab('lessons')} />
          <SidebarItem icon={ShoppingBag} label="المتجر" active={tab === 'shop'} onClick={() => setTab('shop')} />
          <div className="my-4 border-t border-amber-500/10"></div>
          <SidebarItem icon={Settings} label="لوحة التحكم" active={tab === 'admin'} onClick={() => setTab('admin')} color="text-red-500" />
        </nav>

        <div className="mt-auto p-4 bg-amber-500/5 rounded-2xl border border-amber-500/10">
          <p className="text-xs text-amber-500 mb-1 font-bold">الملكة: نفرتيتي</p>
          <p className="text-[10px] text-gray-500">المستوى: محترف</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        
        {tab === 'main' && (
          <div className="space-y-10 animate-in fade-in duration-700">
            <header className="flex justify-between items-end">
              <div>
                <h2 className="text-4xl font-black mb-2 text-white">أهلاً بكِ في عَرشكِ، <span className="text-amber-500">نفرتيتي</span></h2>
                <p className="text-gray-500 italic">"نحن لا نبني مشروعاً، نحن نعيد صياغة الهوية"</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-slate-900 px-6 py-3 rounded-2xl border border-amber-500/20 text-center">
                  <p className="text-[10px] text-gray-500 uppercase">النقاط الملكية</p>
                  <p className="text-xl font-black text-amber-500">{userPoints}</p>
                </div>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card title="تقدم الهوية" icon={Star}>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-3 bg-black rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-[75%] shadow-[0_0_15px_#f59e0b]"></div>
                  </div>
                  <span className="font-bold">75%</span>
                </div>
              </Card>
              <Card title="المعلمات النشطات" icon={User}>
                <div className="flex -space-x-3 space-x-reverse">
                  {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full bg-amber-500 border-2 border-black" />)}
                  <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-black flex items-center justify-center text-[10px]">+5</div>
                </div>
              </Card>
              <Card title="تحدي اليوم" icon={Trophy}>
                <p className="text-sm text-gray-400">تحدثي بالفصحى لمدة دقيقتين عن "الأمانة".</p>
              </Card>
            </div>

            <div className="bg-slate-900/40 rounded-[40px] p-8 border border-amber-500/10">
              <h3 className="text-2xl font-black mb-6">متابعة الدروس</h3>
              <div className="space-y-4">
                {[
                  { t: 'فن الإتيكيت في المآدب', m: 'أ. سارة', p: '90%' },
                  { t: 'تاريخ الأسرة الثامنة عشر', m: 'د. ليلى', p: '20%' }
                ].map((d, i) => (
                  <div key={i} className="bg-black/40 p-5 rounded-2xl flex items-center justify-between group hover:bg-amber-500/5 transition">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-500 font-bold">{i+1}</div>
                      <div>
                        <p className="font-bold">{d.t}</p>
                        <p className="text-xs text-gray-500">المعلمة: {d.m}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-amber-500">{d.p}</p>
                      <button className="text-[10px] uppercase tracking-wider text-gray-400 group-hover:text-white transition">استمرار</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 'journey' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom duration-500">
            <h2 className="text-3xl font-black text-amber-500">محاكاة الواقع المصري</h2>
            <div className="relative bg-slate-900 rounded-[50px] p-12 border-2 border-amber-500/20 overflow-hidden min-h-[400px] flex flex-col justify-center items-center text-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-500/10">
                <div 
                  className="h-full bg-amber-500 transition-all duration-1000" 
                  style={{ width: `${((journeyStep + 1) / journeyStages.length) * 100}%` }}
                ></div>
              </div>
              
              <div className="mb-8 p-6 bg-amber-500/10 rounded-full animate-bounce">
                {React.createElement(journeyStages[journeyStep].icon, { size: 64, className: "text-amber-500" })}
              </div>
              
              <h3 className="text-4xl font-black mb-2">{journeyStages[journeyStep].name}</h3>
              <p className="text-amber-500 font-bold mb-6 italic">{journeyStages[journeyStep].char}</p>
              
              <div className="max-w-2xl bg-black/40 p-8 rounded-[30px] border border-white/5 mb-10">
                <p className="text-2xl leading-relaxed text-amber-100">"{journeyStages[journeyStep].msg}"</p>
              </div>

              <div className="flex gap-4">
                <button 
                  disabled={journeyStep === 0}
                  onClick={() => setJourneyStep(s => s - 1)}
                  className="px-8 py-3 rounded-full border border-amber-500/30 text-amber-500 disabled:opacity-30"
                >
                  السابق
                </button>
                <button 
                  onClick={() => journeyStep < journeyStages.length - 1 ? setJourneyStep(s => s + 1) : setJourneyStep(0)}
                  className="px-12 py-3 rounded-full bg-amber-500 text-black font-black shadow-lg shadow-amber-500/20"
                >
                  {journeyStep === journeyStages.length - 1 ? 'إعادة الرحلة' : 'المحطة التالية'}
                </button>
              </div>
            </div>
          </div>
        )}

        {tab === 'shop' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in zoom-in duration-500">
            {[
              { n: 'عقد نفرتيتي الذهبي', p: 5000, i: '📿' },
              { n: 'كتاب الإتيكيت الحديث', p: 300, i: '📚' },
              { n: 'بخور المعز الملكي', p: 150, i: '🕯️' },
              { n: 'دورة الفصاحة المتقدمة', p: 1200, i: '📜' }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900 p-8 rounded-[35px] border border-amber-500/10 hover:border-amber-500 transition group text-center">
                <div className="text-5xl mb-6">{item.i}</div>
                <h4 className="text-xl font-bold mb-2">{item.n}</h4>
                <p className="text-amber-500 font-black mb-6">{item.p} نقطة</p>
                <button className="w-full py-3 rounded-xl bg-white/5 group-hover:bg-amber-500 group-hover:text-black transition-all font-bold">شراء الآن</button>
              </div>
            ))}
          </div>
        )}

        {tab === 'admin' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-3xl font-black text-red-500">مركز التحكم (الإدارة والمعلمات)</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card title="إدارة الملكات (الطالبات)">
                <div className="space-y-4">
                  {['نفرتيتي', 'زليخة', 'ماعت'].map((name, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-black/30 rounded-2xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500" />
                        <span className="font-bold text-sm">{name}</span>
                      </div>
                      <span className="text-[10px] text-green-500 font-bold">نشطة الآن</span>
                      <button className="text-[10px] bg-white/5 px-3 py-1 rounded-md">سجل الدروس</button>
                    </div>
                  ))}
                </div>
              </Card>
              <Card title="رفع محتوى جديد">
                <div className="space-y-4">
                  <input placeholder="عنوان الدرس" className="w-full bg-black/50 border border-white/10 p-4 rounded-xl outline-none focus:border-red-500 text-sm" />
                  <select className="w-full bg-black/50 border border-white/10 p-4 rounded-xl outline-none focus:border-red-500 text-sm text-gray-400">
                    <option>اختر القسم</option>
                    <option>إتيكيت</option>
                    <option>فصاحة</option>
                  </select>
                  <button className="w-full py-4 rounded-xl bg-red-600 font-black text-white hover:bg-red-700 transition shadow-lg shadow-red-600/20">نشر المحتوى للملكات</button>
                </div>
              </Card>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
