"use client";

import React, { useState, useEffect } from 'react';
import { 
  Crown, 
  Sparkles, 
  BookOpen, 
  ChevronRight,
  Star,
  Compass,
  User,
  Lock,
  Trophy,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  PlayCircle,
  Globe
} from 'lucide-react';

// القاموس اللغوي للأكاديمية
const translations = {
  ar: {
    dir: 'rtl',
    brand: 'نفرتيتي',
    subBrand: 'الأكاديمية الملكية',
    nav_mosque: 'دخول المسجد',
    nav_login: 'دخول الملكات',
    hero_badge: 'مرحباً بكِ في عرشكِ المعرفي',
    hero_title: 'أكاديمية نفرتيتي',
    hero_cta: 'دخول الأكاديمية',
    hero_secondary: 'استكشاف المناهج',
    login_title: 'بوابة الدخول',
    login_user: 'اسم الملكة',
    login_pass: 'كلمة المرور',
    login_btn: 'تأكيد السيادة',
    dash_level: 'المستوى الثاني: سيادة فكرية',
    dash_overview: 'لوحة التحكم',
    dash_lessons: 'الدروس الملكية',
    dash_challenges: 'تحديات السيادة',
    dash_teachers: 'المعلمات',
    dash_logout: 'تسجيل الخروج',
    dash_progress: 'التقدم الحالي',
    dash_status: 'لقد قطعتِ 65% من مسار استعادة المجد الملكي.',
    lessons_title: 'منهج نور الوحي',
    challenge_points: 'نقطة',
    start_challenge: 'ابدأ التحدي',
    rights: 'جميع الحقوق محفوظة • أكاديمية نفرتيتي 2026'
  },
  en: {
    dir: 'ltr',
    brand: 'Nefertiti',
    subBrand: 'Royal Academy',
    nav_mosque: 'Enter Mosque',
    nav_login: 'Queens Portal',
    hero_badge: 'Welcome to your intellectual throne',
    hero_title: 'Nefertiti Academy',
    hero_cta: 'Enter Academy',
    hero_secondary: 'Explore Curriculum',
    login_title: 'Access Portal',
    login_user: 'Queen\'s Name',
    login_pass: 'Access Key',
    login_btn: 'Confirm Sovereignty',
    dash_level: 'Level II: Intellectual Sovereignty',
    dash_overview: 'Dashboard',
    dash_lessons: 'Royal Lessons',
    dash_challenges: 'Sovereignty Challenges',
    dash_teachers: 'Instructors',
    dash_logout: 'Logout',
    dash_progress: 'Current Progress',
    dash_status: 'You have completed 65% of your royal restoration path.',
    lessons_title: 'Light of Revelation Curriculum',
    challenge_points: 'Points',
    start_challenge: 'Start Challenge',
    rights: 'All Rights Reserved • Nefertiti Academy 2026'
  }
};

export default function App() {
  const [lang, setLang] = useState('ar');
  const [view, setView] = useState('landing');
  const [activeTab, setActiveTab] = useState('overview');
  const [mounted, setMounted] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    setMounted(true);
    document.documentElement.dir = t.dir;
  }, [lang, t.dir]);

  if (!mounted) return null;

  const teachers = [
    { name: lang === 'ar' ? "أ. نفرتيتي الكبرى" : "Prof. Nefertiti the Great", specialty: lang === 'ar' ? "السيادة الفكرية" : "Intellectual Sovereignty", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop" },
    { name: lang === 'ar' ? "د. إيزيس النور" : "Dr. Isis of Light", specialty: lang === 'ar' ? "فلسفة الوحي" : "Philosophy of Revelation", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" }
  ];

  const lessons = [
    { title: lang === 'ar' ? "الدرس الأول: مفهوم السيادة" : "Lesson I: Concept of Sovereignty", duration: "45 min", status: lang === 'ar' ? "مكتمل" : "Completed" },
    { title: lang === 'ar' ? "الدرس الثاني: ربط الهوية" : "Lesson II: Identity Integration", duration: "60 min", status: lang === 'ar' ? "قيد التقدم" : "In Progress" }
  ];

  const challenges = [
    { title: lang === 'ar' ? "تحدي الفجر الملكي" : "Royal Dawn Challenge", points: 150 },
    { title: lang === 'ar' ? "تحدي القراءة العميقة" : "Deep Reading Challenge", points: 200 }
  ];

  return (
    <div className={`min-h-screen bg-[#001233] text-white font-serif selection:bg-[#FFD700] selection:text-[#001233] ${t.dir === 'rtl' ? 'text-right' : 'text-left'}`}>
      
      {/* Navbar */}
      <nav className="relative z-50 border-b border-[#FFD700]/10 bg-[#001233]/90 backdrop-blur-xl px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => setView('landing')}>
            <div className="p-2 border-2 border-[#FFD700] rounded-xl bg-[#FFD700]/10">
              <Crown className="w-6 h-6 text-[#FFD700]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-[0.2em] uppercase text-[#FFD700]">{t.brand}</span>
              <span className="text-[8px] tracking-[0.1em] text-blue-200/60 uppercase">{t.subBrand}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
             <button 
                onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                className="flex items-center gap-2 text-xs border border-[#FFD700]/30 px-3 py-1.5 rounded-full hover:bg-[#FFD700]/10 transition-all text-[#FFD700]"
             >
               <Globe size={14} />
               {lang === 'ar' ? 'English' : 'العربية'}
             </button>
             <button className="hidden md:flex items-center gap-2 text-blue-100/60 hover:text-[#FFD700] text-sm transition-all">
               <Compass size={18} className="text-[#FFD700]" />
               {t.nav_mosque}
             </button>
             {view === 'landing' && (
               <button onClick={() => setView('login')} className="px-6 py-2 bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-[#001233] rounded-full font-bold text-xs">
                 {t.nav_login}
               </button>
             )}
          </div>
        </div>
      </nav>

      {/* Landing View */}
      {view === 'landing' && (
        <header className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-[#FFD700]/30 rounded-full bg-[#FFD700]/5 text-[#FFD700] mb-8 animate-pulse">
            <Sparkles size={14} />
            <span className="text-[10px] uppercase tracking-widest font-bold">{t.hero_badge}</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-10 tracking-tighter">
            {t.hero_title}
          </h1>
          <div className="flex justify-center gap-4 mt-12">
            <button onClick={() => setView('login')} className="px-10 py-4 bg-[#FFD700] text-[#001233] rounded-full font-bold hover:scale-105 transition-all shadow-xl">
              {t.hero_cta}
            </button>
          </div>
        </header>
      )}

      {/* Login View */}
      {view === 'login' && (
        <div className="min-h-[70vh] flex items-center justify-center p-6">
          <div className="w-full max-w-md bg-[#001a4d] border border-[#FFD700]/20 rounded-[2.5rem] p-10 shadow-2xl">
            <h2 className="text-3xl font-bold text-center text-white mb-8 uppercase tracking-widest">{t.login_title}</h2>
            <div className="space-y-4">
              <input type="text" placeholder={t.login_user} className="w-full bg-[#001233] border border-[#FFD700]/20 rounded-2xl py-4 px-6 text-white outline-none" />
              <input type="password" placeholder={t.login_pass} className="w-full bg-[#001233] border border-[#FFD700]/20 rounded-2xl py-4 px-6 text-white outline-none" />
              <button onClick={() => setView('dashboard')} className="w-full py-4 bg-[#FFD700] text-[#001233] rounded-2xl font-bold mt-4">
                {t.login_btn}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dashboard View */}
      {view === 'dashboard' && (
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1 space-y-4">
              <div className="bg-[#001a4d] border border-[#FFD700]/20 rounded-3xl p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-[#FFD700]/10 rounded-full mb-4 flex items-center justify-center border border-[#FFD700]">
                  <User size={30} className="text-[#FFD700]" />
                </div>
                <h3 className="text-white font-bold">{lang === 'ar' ? 'الملكة نفرتيتي' : 'Queen Nefertiti'}</h3>
                <p className="text-[#FFD700] text-[10px] mt-1">{t.dash_level}</p>
              </div>
              <nav className="space-y-1">
                <button onClick={() => setActiveTab('overview')} className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${activeTab === 'overview' ? 'bg-[#FFD700] text-[#001233]' : ''}`}>
                  <LayoutDashboard size={18} /> {t.dash_overview}
                </button>
                <button onClick={() => setActiveTab('lessons')} className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${activeTab === 'lessons' ? 'bg-[#FFD700] text-[#001233]' : ''}`}>
                  <PlayCircle size={18} /> {t.dash_lessons}
                </button>
                <button onClick={() => setActiveTab('challenges')} className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${activeTab === 'challenges' ? 'bg-[#FFD700] text-[#001233]' : ''}`}>
                  <Trophy size={18} /> {t.dash_challenges}
                </button>
                <button onClick={() => setActiveTab('teachers')} className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${activeTab === 'teachers' ? 'bg-[#FFD700] text-[#001233]' : ''}`}>
                  <GraduationCap size={18} /> {t.dash_teachers}
                </button>
                <button onClick={() => setView('landing')} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-red-400 mt-6">
                  <LogOut size={18} /> {t.dash_logout}
                </button>
              </nav>
            </aside>

            <main className="lg:col-span-3 space-y-6">
               {activeTab === 'overview' && (
                 <div className="bg-gradient-to-br from-[#001a4d] to-[#001233] border border-[#FFD700]/20 rounded-[2rem] p-8">
                   <h4 className="text-[#FFD700] font-bold mb-6 flex items-center gap-2 uppercase tracking-widest"><Star size={16}/> {t.dash_progress}</h4>
                   <div className="h-2 w-full bg-[#001233] rounded-full overflow-hidden mb-4">
                     <div className={`h-full bg-[#FFD700] transition-all duration-1000 ${lang === 'ar' ? 'float-right' : 'float-left'}`} style={{ width: '65%' }} />
                   </div>
                   <p className="text-sm text-blue-200/60 italic">{t.dash_status}</p>
                 </div>
               )}

               {activeTab === 'lessons' && (
                 <div className="space-y-4">
                   <h3 className="text-2xl font-bold mb-6">{t.lessons_title}</h3>
                   {lessons.map((l, i) => (
                     <div key={i} className="flex items-center justify-between p-6 bg-[#001a4d] border border-white/5 rounded-3xl group hover:border-[#FFD700]/30 transition-all">
                       <div className="flex items-center gap-4">
                         <PlayCircle className="text-[#FFD700]" />
                         <div>
                            <h5 className="font-bold">{l.title}</h5>
                            <span className="text-[10px] opacity-40">{l.duration}</span>
                         </div>
                       </div>
                       <span className="text-[10px] bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full">{l.status}</span>
                     </div>
                   ))}
                 </div>
               )}

               {activeTab === 'teachers' && (
                 <div className="grid md:grid-cols-2 gap-6">
                   {teachers.map((teach, i) => (
                     <div key={i} className="bg-[#001a4d] border border-white/5 rounded-[2.5rem] p-8 text-center group hover:border-[#FFD700]/40 transition-all">
                        <img src={teach.image} alt={teach.name} className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-2 border-[#FFD700]/20" />
                        <h5 className="text-lg font-bold">{teach.name}</h5>
                        <p className="text-[#FFD700] text-[10px] italic">{teach.specialty}</p>
                     </div>
                   ))}
                 </div>
               )}

               {activeTab === 'challenges' && (
                 <div className="grid md:grid-cols-2 gap-4">
                   {challenges.map((c, i) => (
                     <div key={i} className="p-6 bg-[#001a4d] border border-[#FFD700]/10 rounded-3xl flex flex-col justify-between h-40">
                        <h5 className="font-bold text-lg">{c.title}</h5>
                        <div className="flex justify-between items-center">
                           <span className="text-[#FFD700] font-black">{c.points} {t.challenge_points}</span>
                           <button className="text-[10px] flex items-center gap-1 hover:text-[#FFD700]">
                             {t.start_challenge} <ChevronRight size={14} className={lang === 'ar' ? 'rotate-180' : ''} />
                           </button>
                        </div>
                     </div>
                   ))}
                 </div>
               )}
            </main>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 border-t border-[#FFD700]/10 mt-20 opacity-40">
        <div className="max-w-7xl mx-auto text-center px-6">
           <p className="text-[10px] tracking-[0.4em] uppercase">{t.rights}</p>
        </div>
      </footer>
    </div>
  );
}
