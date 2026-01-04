'use client';
import React, { useState, useEffect } from 'react';

export default function YallaMasryMasterApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState('dashboard'); // dashboard, lessons, teacher, goals
  const [userName, setUserName] = useState('');
  const [points, setPoints] = useState(120); // نقاط افتراضية كما في صورك
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  // 🔊 محرك النطق الملكي المطور
  const speak = (text: string) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = 'ar-EG';
      msg.rate = 0.85;
      msg.pitch = 1.1;
      window.speechSynthesis.speak(msg);
      setIsVoiceActive(true);
    }
  };

  // واجهة تسجيل الدخول
  if (!isLoggedIn) {
    return (
      <div style={{ backgroundColor: '#050a15', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', direction: 'rtl', fontFamily: 'serif' }}>
        <div style={{ background: '#0a0f1a', padding: '50px', borderRadius: '40px', border: '2px solid #f59e0b', textAlign: 'center', width: '400px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
          <h1 style={{ color: '#f59e0b', fontSize: '2.5rem', marginBottom: '10px' }}>يالا مصري 🏺</h1>
          <p style={{ color: 'white', marginBottom: '30px', opacity: 0.7 }}>بوابة الدخول للأكاديمية الملكية</p>
          <input 
            type="text" 
            placeholder="ادخلي اسمك الملكي..." 
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ width: '100%', padding: '15px', borderRadius: '15px', border: '1px solid #f59e0b', background: 'rgba(255,255,255,0.05)', color: 'white', marginBottom: '20px', textAlign: 'center' }}
          />
          <button 
            onClick={() => { if(userName) { setIsLoggedIn(true); speak(`أهلاً بكِ يا جلالة الملكة ${userName}`); } }} 
            style={{ width: '100%', padding: '15px', borderRadius: '15px', border: 'none', background: '#f59e0b', color: 'black', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}
          >
            فتح بوابات العرش ⚔️
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#050a15', color: 'white', minHeight: '100vh', direction: 'rtl', fontFamily: 'serif' }}>
      
      {/* 🧭 شريط التنقل الملكي (المحرك الرئيسي) */}
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '10px', padding: '20px', background: '#0a0f1a', borderBottom: '1px solid #f59e0b', flexWrap: 'wrap' }}>
        <button onClick={() => setView('dashboard')} style={navBtnStyle(view === 'dashboard')}>🏰 العرش</button>
        <button onClick={() => setView('lessons')} style={navBtnStyle(view === 'lessons')}>📖 الدروس</button>
        <button onClick={() => setView('teacher')} style={navBtnStyle(view === 'teacher')}>🤖 جميناي</button>
        <button onClick={() => setView('goals')} style={navBtnStyle(view === 'goals')}>🎯 الأهداف</button>
      </nav>

      <main style={{ maxWidth: '900px', margin: '30px auto', padding: '0 20px' }}>
        
        {/* 🏰 1. لوحة التحكم (العرش) */}
        {view === 'dashboard' && (
          <div style={{ textAlign: 'center', animation: 'fadeIn 1s' }}>
            <h1 style={{ color: '#f59e0b', fontSize: '2rem' }}>مرحباً بكِ في عرشكِ التعليمي، الملكة {userName} 👑</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '40px' }}>
              <div style={cardStyle}><h3>المستوى</h3><p style={{color: '#f59e0b', fontWeight: 'bold'}}>خبير ملكي</p></div>
              <div style={cardStyle}><h3>النقاط</h3><p style={{color: '#f59e0b', fontWeight: 'bold'}}>{points} XP</p></div>
              <div style={cardStyle}><h3>اليوم</h3><p style={{color: '#f59e0b', fontWeight: 'bold'}}>الإثنين الملكي</p></div>
            </div>
            <button onClick={() => setView('lessons')} style={{ marginTop: '40px', padding: '15px 40px', background: '#f59e0b', border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' }}>استكمال الرحلة 🚀</button>
          </div>
        )}

        {/* 🤖 2. المعلمة جميناي (نظام الصوت) */}
        {view === 'teacher' && (
          <div style={{ textAlign: 'center', background: '#0a0f1a', padding: '40px', borderRadius: '40px', border: '2px solid #f59e0b' }}>
            <div style={{ fontSize: '70px', marginBottom: '20px' }}>🤖</div>
            <h2 style={{ color: '#f59e0b' }}>المعلمة الملكية "جميناي"</h2>
            <div style={{ background: '#1e293b', padding: '25px', borderRadius: '25px', margin: '20px 0', fontSize: '1.3rem', position: 'relative' }}>
              "أنا مكرسة لخدمة رحلتكِ يا {userName}. اضغطي لتفعيل حواسي الملكية."
            </div>
            <button 
              onClick={() => speak(`أهلاً بكِ يا جلالة الملكة ${userName}. أنا جاهزة لتعليمكِ أصول اللهجة المصرية.`)} 
              style={{ padding: '15px 40px', background: isVoiceActive ? '#4ade80' : '#f59e0b', color: 'black', border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.2rem', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
            >
              {isVoiceActive ? '🔊 الصوت مفعل' : '⚡ تنشيط صوت جميناي'}
            </button>
          </div>
        )}

        {/* 📖 3. قاعة الدروس */}
        {view === 'lessons' && (
          <div style={{ display: 'grid', gap: '20px' }}>
            <h2 style={{ color: '#f59e0b', textAlign: 'center' }}>قاعة الدروس الملكية</h2>
            {['التعارف المصري الرفيع', 'التسوق في خان الخليلي', 'إتيكيت المطاعم المصرية'].map((lesson, i) => (
              <div key={i} style={{ ...cardStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '25px' }}>
                <span style={{ fontSize: '1.2rem' }}>{lesson}</span>
                <button style={{ padding: '10px 20px', background: '#f59e0b', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>ابدأ ⚔️</button>
              </div>
            ))}
          </div>
        )}

        {/* 🎯 4. الأهداف */}
        {view === 'goals' && (
          <div style={{ textAlign: 'center', background: '#0a0f1a', padding: '40px', borderRadius: '40px', border: '1px solid #f59e0b' }}>
            <h2 style={{ color: '#f59e0b' }}>أهدافكِ الأسبوعية</h2>
            <p>المستوى المخطط: إتقان المحادثة اليومية</p>
            <div style={{ width: '100%', height: '10px', background: '#1e293b', borderRadius: '5px', marginTop: '20px', overflow: 'hidden' }}>
              <div style={{ width: '65%', height: '100%', background: '#f59e0b' }}></div>
            </div>
            <p style={{ marginTop: '10px', opacity: 0.7 }}>تم تحقيق 65% من هدف الأسبوع</p>
          </div>
        )}

      </main>

      <footer style={{ textAlign: 'center', padding: '40px', opacity: 0.2, fontSize: '0.8rem' }}>
        أكاديمية يالا مصري - جميع الحقوق محفوظة للملكة نفرتيتي 2026
      </footer>
    </div>
  );
}

// التنسيقات الملكية
const navBtnStyle = (active: boolean) => ({
  padding: '12px 25px',
  borderRadius: '15px',
  border: active ? 'none' : '1px solid #f59e0b',
  background: active ? '#f59e0b' : 'transparent',
  color: active ? 'black' : '#f59e0b',
  fontWeight: 'bold' as const,
  cursor: 'pointer',
  transition: '0.3s'
});

const cardStyle = {
  background: '#0a0f1a',
  padding: '30px',
  borderRadius: '30px',
  border: '1px solid rgba(245,158,11,0.2)',
  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
};
