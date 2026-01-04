'use client';
import React, { useState } from 'react';

export default function YallaMasryMaster() {
  const [step, setStep] = useState('login'); // login, target, academy
  const [userName, setUserName] = useState('');
  const [target, setTarget] = useState('');
  const [view, setView] = useState('dashboard');
  const [points, setPoints] = useState(120);

  // نظام النطق المصري
  const speak = (text: string) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'ar-EG';
      utter.rate = 0.9;
      window.speechSynthesis.speak(utter);
    }
  };

  // 1. مرحلة تسجيل الدخول
  if (step === 'login') {
    return (
      <div style={overlayStyle}>
        <div style={cardStyle}>
          <h1 style={{ color: '#f59e0b' }}>دخول ملكي 🏺</h1>
          <p>أهلاً بكِ في أكاديمية يالا مصري. ما هو اسمكِ؟</p>
          <input 
            type="text" 
            placeholder="ادخلي اسمكِ هنا..." 
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={inputStyle}
          />
          <button onClick={() => userName && setStep('target')} style={goldBtn}>تابعي الرحلة ⚔️</button>
        </div>
      </div>
    );
  }

  // 2. مرحلة تحديد الهدف (هوية الطالب)
  if (step === 'target') {
    return (
      <div style={overlayStyle}>
        <div style={cardStyle}>
          <h2 style={{ color: '#f59e0b' }}>أهلاً يا {userName} 👑</h2>
          <p>ما هو هدفكِ الرئيسي من تعلم اللهجة المصرية؟</p>
          <div style={{ display: 'grid', gap: '10px', marginTop: '20px' }}>
            <button onClick={() => {setTarget('سياحة'); setStep('academy'); speak("سياحة ممتعة في مصر");}} style={choiceBtn}>✈️ السياحة والزيارة</button>
            <button onClick={() => {setTarget('عمل'); setStep('academy'); speak("بالتوفيق في عملك");}} style={choiceBtn}>💼 العمل والاستثمار</button>
            <button onClick={() => {setTarget('ثقافة'); setStep('academy'); speak("أهلاً بك في عالم الفن المصري");}} style={choiceBtn}>🎬 الدراما والثقافة</button>
          </div>
        </div>
      </div>
    );
  }

  // 3. الواجهة الرئيسية (الأكاديمية)
  return (
    <div style={{ backgroundColor: '#050a15', minHeight: '100vh', color: 'white', direction: 'rtl' }}>
      
      {/* شريط التنقل الملكي */}
      <nav style={navStyle}>
        <h2 style={{ color: '#f59e0b', margin: 0 }}>يالا مصري 🏺</h2>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button onClick={() => setView('dashboard')} style={navLink}>الرئيسية</button>
          <button onClick={() => setView('museum')} style={navLink}>🏛️ المتحف</button>
          <button onClick={() => setView('simulation')} style={navLink}>🎮 المحاكاة</button>
          <button onClick={() => setView('store')} style={navLink}>🛒 المتجر</button>
        </div>
        <div style={{ color: '#f59e0b', fontWeight: 'bold' }}>{points} XP</div>
      </nav>

      <main style={{ padding: '40px', textAlign: 'center' }}>
        {view === 'dashboard' && (
          <div>
            <h1>عرش {userName} التعليمي 👑</h1>
            <p>هدفكِ الحالي: <span style={{color:'#f59e0b'}}>{target}</span></p>
            <div style={{marginTop:'30px', padding:'20px', background:'#0a0f1a', borderRadius:'20px', border:'1px solid #f59e0b'}}>
               <h3>رسالة من المعلمة جميناي 🤖</h3>
               <p>"بما أن هدفكِ هو {target}، فقد أعددتُ لكِ تحديات خاصة اليوم."</p>
               <button onClick={() => speak(`أهلاً بك يا ${userName}، لنبدأ خطة ال${target} الخاصة بك`)} style={goldBtn}>استماع للتوجيه 🔊</button>
            </div>
          </div>
        )}

        {/* أقسام المتحف والمتجر والمحاكاة تفتح هنا كما في الكود السابق */}
        {view === 'museum' && <h1>🏛️ متحف المكتسبات الملكية</h1>}
        {view === 'simulation' && <h1>🎮 غرفة المحاكاة لـ {target}</h1>}
        {view === 'store' && <h1>🛒 سوق الأكاديمية</h1>}
      </main>
    </div>
  );
}

// التصميمات الفخمة
const overlayStyle = { backgroundColor: '#050a15', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' };
const cardStyle = { background: '#0a0f1a', padding: '50px', borderRadius: '40px', border: '2px solid #f59e0b', textAlign: 'center' as const, width: '450px' };
const inputStyle = { width: '100%', padding: '15px', borderRadius: '15px', border: '1px solid #f59e0b', background: 'none', color: 'white', marginBottom: '20px', textAlign: 'center' as const };
const goldBtn = { padding: '15px 40px', background: '#f59e0b', border: 'none', borderRadius: '15px', fontWeight: 'bold' as const, cursor: 'pointer' };
const choiceBtn = { padding: '15px', background: '#1e293b', border: '1px solid #f59e0b', color: 'white', borderRadius: '15px', cursor: 'pointer', textAlign: 'right' as const };
const navStyle = { background: '#0a0f1a', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #f59e0b' };
const navLink = { background: 'none', border: 'none', color: 'white', cursor: 'pointer' };
