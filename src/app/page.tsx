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
    
        'use client';
import React, { useState, useEffect } from 'react';

export default function GeminiTeacher() {
  const [isAwake, setIsAwake] = useState(false);

  // دالة الإنعاش الصوتي
  const reviveGemini = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel(); // تنظيف أي صوت عالق
      
      const welcomeMsg = new SpeechSynthesisUtterance("تم تفعيل حواسي الملكية. أنا جاهزة للنطق يا جلالة الملكة نفرتيتي.");
      welcomeMsg.lang = 'ar-EG'; // اللهجة المصرية
      welcomeMsg.rate = 0.9;
      
      window.speechSynthesis.speak(welcomeMsg);
      setIsAwake(true);
    }
  };

  const speakSentence = (text: string) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = 'ar-EG';
      msg.rate = 0.85;
      window.speechSynthesis.speak(msg);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px', background: '#0a0f1a', borderRadius: '30px', border: '2px solid #f59e0b' }}>
      <div style={{ fontSize: '80px', marginBottom: '20px', filter: isAwake ? 'drop-shadow(0 0 10px #f59e0b)' : 'grayscale(1)' }}>
        🤖
      </div>

      {!isAwake ? (
        <div>
          <h3 style={{ color: '#f87171' }}>جميناي في حالة سبات...</h3>
          <button 
            onClick={reviveGemini} 
            style={{ padding: '15px 30px', background: '#f59e0b', color: 'black', border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.2rem' }}
          >
            ⚡ اضغطي لعمل تنفس صناعي لجميناي
          </button>
        </div>
      ) : (
        <div style={{ animation: 'fadeIn 1s' }}>
          <h3 style={{ color: '#4ade80' }}>جميناي استفاقت وهي الآن تسمعكِ! ✅</h3>
          <p style={{ fontStyle: 'italic', fontSize: '1.3rem', margin: '20px 0' }}>
            "أهلاً بكِ يا ملكة نفرتيتي، كيف يمكنني مساعدتكِ في تعلم المصرية اليوم؟"
          </p>
          <button 
            onClick={() => speakSentence("أهلاً بكِ يا ملكة نفرتيتي، كيف يمكنني مساعدتكِ في تعلم المصرية اليوم؟")} 
            style={{ background: '#1e293b', color: 'white', padding: '10px 20px', borderRadius: '10px', border: '1px solid #f59e0b', cursor: 'pointer' }}
          >
            🔊 اسمعي صوتها الآن
          </button>
        </div>
      )}
    </div>
  );
}

    {/* زر الصوت السحري */}
    <button 
      onClick={() => {
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel(); // مسح أي صوت قديم معلق
          const speech = new SpeechSynthesisUtterance("أهلاً بكِ يا جلالة الملكة نفرتيتي. أنا هنا مكرسة لخدمتكِ، سأعلمكِ أصول اللهجة المصرية حتى تتقنيها كأهلها.");
          speech.lang = 'ar-EG'; // اللهجة المصرية
          speech.rate = 0.8;    // سرعة هادئة تليق بالملوك
          speech.pitch = 1.1;   // نبرة رقيقة واضحة
          window.speechSynthesis.speak(speech);
        } else {
          alert("عذراً يا ملكة، متصفحك يحتاج لتحديث لدعم الصوت الملكي.");
        }
      }} 
      style={{
        background: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
        color: 'black',
        padding: '15px 40px',
        borderRadius: '50px',
        border: 'none',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 10px 20px rgba(245,158,11,0.3)',
        transition: 'transform 0.2s'
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      🔊 اضغطي هنا لتنطق جميناي
    </button>
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
