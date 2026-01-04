'use client';
import React, { useState } from 'react';

export default function YallaMasryApp() {
  const [isAuth, setIsAuth] = useState(false); // هل سجل الدخول؟
  const [view, setView] = useState('dashboard'); // dashboard, lessons, teacher, goals
  const [user, setUser] = useState({ name: '', email: '' });

  // 🔊 دالة النطق الملكي (تعمل الآن في كل مكان)
  const speak = (text: string) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = 'ar-EG';
      window.speechSynthesis.speak(msg);
    }
  };

  // 1️⃣ واجهة تسجيل الإيميل (التي كانت مفقودة)
  if (!isAuth) {
    return (
      <div style={{ backgroundColor: '#050a15', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', direction: 'rtl' }}>
        <div style={{ background: '#0a0f1a', padding: '40px', borderRadius: '30px', border: '2px solid #f59e0b', width: '380px', textAlign: 'center' }}>
          <h1 style={{ color: '#f59e0b' }}>تسجيل الدخول الملكي 🏺</h1>
          <input 
            type="email" placeholder="بريدك الإلكتروني" 
            onChange={(e) => setUser({...user, email: e.target.value})}
            style={inputStyle} 
          />
          <input 
            type="text" placeholder="اسمك الملكي (نفرتيتي)" 
            onChange={(e) => setUser({...user, name: e.target.value})}
            style={inputStyle} 
          />
          <button onClick={() => setIsAuth(true)} style={goldBtn}>دخول للعرش التعليمي 👑</button>
        </div>
      </div>
    );
  }

  // 2️⃣ الهيكل الرئيسي للأكاديمية (لوحة التحكم والصفحات)
  return (
    <div style={{ backgroundColor: '#050a15', color: 'white', minHeight: '100vh', direction: 'rtl', fontFamily: 'serif' }}>
      
      {/* البار العلوي (التنقل بين الصفحات التي صورتيها) */}
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '15px', padding: '20px', borderBottom: '1px solid #f59e0b', background: '#0a0f1a' }}>
        <button onClick={() => setView('dashboard')} style={navBtn(view === 'dashboard')}>🏰 لوحة التحكم</button>
        <button onClick={() => setView('lessons')} style={navBtn(view === 'lessons')}>📖 قاعة الدروس</button>
        <button onClick={() => setView('teacher')} style={navBtn(view === 'teacher')}>🤖 المعلمة</button>
        <button onClick={() => setView('goals')} style={navBtn(view === 'goals')}>🎯 الأهداف</button>
      </nav>

      <main style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
        
        {/* صفحة لوحة التحكم (صورة 13) */}
        {view === 'dashboard' && (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#f59e0b' }}>مرحباً بكِ في عرشكِ التعليمي، الملكة {user.name || 'نفرتيتي'} 👑</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginTop: '30px' }}>
              <div style={cardStyle}><h3>المستوى الحالي</h3><p>خبير ملكي</p></div>
              <div style={cardStyle}><h3>إجمالي النقاط</h3><p>XP 120</p></div>
              <div style={cardStyle}><h3>الهدف المخطط</h3><p>إتقان المحادثة</p></div>
            </div>
          </div>
        )}

        {/* صفحة المعلمة (صورة 15) */}
        {view === 'teacher' && (
          <div style={{ background: '#0a0f1a', padding: '40px', borderRadius: '30px', border: '1px solid #f59e0b', textAlign: 'center' }}>
            <div style={{ fontSize: '50px', marginBottom: '20px' }}>🤖</div>
            <h2 style={{ color: '#f59e0b' }}>المعلمة "جميناي"</h2>
            <p style={{ fontSize: '1.2rem', background: '#1e293b', padding: '20px', borderRadius: '15px' }}>
              "أنا هنا لمرافقتكِ في كل خطوة. ذكائي الاصطناعي مكرس لخدمة رحلتكِ التعليمية."
            </p>
            <button onClick={() => speak("أنا هنا لمرافقتك في كل خطوة")} style={goldBtn}>🔊 استماع للصوت</button>
          </div>
        )}

        {/* صفحة الدروس (صورة 14) */}
        {view === 'lessons' && (
          <div style={{ display: 'grid', gap: '15px' }}>
            <div style={cardStyle}>الدرس 1: التعارف المصري ⚔️</div>
            <div style={cardStyle}>الدرس 2: التسوق في البازار ⚔️</div>
            <div style={cardStyle}>الدرس 3: الطلب في المطعم ⚔️</div>
          </div>
        )}

      </main>
    </div>
  );
}

// التنسيقات (Styles) لضمان الفخامة
const inputStyle = { width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '10px', border: '1px solid #f59e0b', background: '#050a15', color: 'white', textAlign: 'center' as const };
const goldBtn = { background: '#f59e0b', color: 'black', padding: '12px 25px', borderRadius: '10px', border: 'none', fontWeight: 'bold' as const, cursor: 'pointer', marginTop: '10px' };
const cardStyle = { background: '#0a0f1a', padding: '20px', borderRadius: '20px', border: '1px solid rgba(245,158,11,0.3)', textAlign: 'center' as const };
const navBtn = (active: boolean) => ({ padding: '10px 15px', background: active ? '#f59e0b' : 'transparent', color: active ? 'black' : '#f59e0b', border: '1px solid #f59e0b', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' as const });
