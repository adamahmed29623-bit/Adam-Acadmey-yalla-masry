'use client';
import React, { useState } from 'react';

export default function NefertitiAcademyFull() {
  const [page, setPage] = useState('home'); // home, challenges, lessons
  const [points, setPoints] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [aiSpeech, setAiSpeech] = useState('أهلاً بكِ في أكاديمية يالا مصري. أنا معلمتكِ الآلية، جاهزة لرحلة اليوم.');

  // 🔊 محرك النطق الملكي
  const speak = (text: string) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-EG'; 
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleChallenge = (isCorrect: boolean) => {
    if (isCorrect) {
      setPoints(prev => prev + 20);
      setFeedback('🏰 مذهل! إجابة ملكية صحيحة تليق بفخامتكِ.');
      setAiSpeech("لقد أتقنتِ نغمة الأدب المصري الرفيع في هذا الموقف!");
    } else {
      setFeedback('⚠️ المحاولة فخر للملكات، جربي مرة أخرى.');
    }
  };

  return (
    <div style={{ backgroundColor: '#050a15', color: 'white', minHeight: '100vh', direction: 'rtl', fontFamily: 'serif' }}>
      
      {/* 1. الشريط العلوي الملكي (التنقل بين الصفحات الثلاث) */}
      <header style={{ padding: '20px', textAlign: 'center', borderBottom: '2px solid #f59e0b', background: '#0a0f1a' }}>
        <h1 style={{ color: '#f59e0b', margin: '0 0 10px 0' }}>أكاديمية يالا مصري 🏺</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '15px' }}>
          <button onClick={() => setPage('home')} style={navBtnStyle(page === 'home')}>🏠 الرئيسية</button>
          <button onClick={() => setPage('challenges')} style={navBtnStyle(page === 'challenges')}>⚔️ التحديات</button>
          <button onClick={() => setPage('lessons')} style={navBtnStyle(page === 'lessons')}>📖 الدروس</button>
        </div>
        <div style={{ color: '#f59e0b', fontWeight: 'bold' }}>رصيد الفخامة: {points} XP 🪙</div>
      </header>

      <main style={{ maxWidth: '800px', margin: '30px auto', padding: '0 20px' }}>

        {/* --- الصفحة الأولى: الرئيسية ومعلمة جميناي --- */}
        {page === 'home' && (
          <section style={{ textAlign: 'center', animation: 'fadeIn 0.5s' }}>
            <div style={{ background: '#0f172a', padding: '30px', borderRadius: '30px', border: '1px solid #f59e0b' }}>
              <div style={{ fontSize: '50px', marginBottom: '10px' }}>🤖</div>
              <h2 style={{ color: '#f59e0b' }}>المعلمة الملكية (جميناي)</h2>
              <div style={{ background: '#1e293b', padding: '20px', borderRadius: '20px', position: 'relative', marginTop: '15px' }}>
                <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>"{aiSpeech}"</p>
                <button onClick={() => speak(aiSpeech)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '24px' }}>🔊</button>
              </div>
              <button onClick={() => setPage('challenges')} style={{ marginTop: '30px', padding: '15px 40px', background: '#f59e0b', border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' }}>بداية التعلم 🚀</button>
            </div>
          </section>
        )}

        {/* --- الصفحة الثانية: التحديات التفاعلية --- */}
        {page === 'challenges' && (
          <section style={{ animation: 'fadeIn 0.5s' }}>
            <div style={{ background: 'linear-gradient(180deg, #0f172a, #050a15)', padding: '40px', borderRadius: '40px', border: '2px solid #f59e0b', textAlign: 'center' }}>
              <h2 style={{ color: '#f59e0b' }}>تحدي الموقف: "في التاكسي" 🚕</h2>
              <p style={{ fontSize: '1.5rem', margin: '20px 0' }}>"أنا عايز اروح الفندق لو سمحت"</p>
              <button onClick={() => speak("أنا عايز اروح الفندق لو سمحت")} style={{ background: '#1e293b', border: 'none', color: 'white', padding: '10px 20px', borderRadius: '50px', cursor: 'pointer', marginBottom: '30px' }}>🔊 اسمعي النطق</button>
              
              <div style={{ display: 'grid', gap: '15px' }}>
                <button onClick={() => handleChallenge(false)} style={choiceStyle}>1. وديني الفندق بسرعة</button>
                <button onClick={() => handleChallenge(true)} style={{...choiceStyle, backgroundColor: '#f59e0b', color: 'black'}}>2. انا عايز اروح الفندق لو سمحت ✅</button>
              </div>
              {feedback && <p style={{ marginTop: '20px', fontWeight: 'bold', color: feedback.includes('أحسنت') ? '#4ade80' : '#f87171' }}>{feedback}</p>}
            </div>
          </section>
        )}

        {/* --- الصفحة الثالثة: قاعة الدروس --- */}
        {page === 'lessons' && (
          <section style={{ textAlign: 'center', animation: 'fadeIn 0.5s' }}>
            <div style={{ background: '#0a0f1a', padding: '50px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h2 style={{ color: '#f59e0b' }}>خريطة رحلة نفرتيتي 🏺</h2>
              <p>المستوى الأول: أساسيات التعامل الراقي</p>
              <div style={{ width: '100%', height: '10px', background: '#1e293b', borderRadius: '5px', marginTop: '20px', overflow: 'hidden' }}>
                <div style={{ width: '35%', height: '100%', background: '#f59e0b' }}></div>
              </div>
              <p style={{ opacity: 0.5, marginTop: '10px' }}>تم إنجاز 35% من الرحلة الملكية</p>
            </div>
          </section>
        )}

      </main>
    </div>
  );
}

// تنسيقات مساعدة
const navBtnStyle = (active: boolean) => ({
  padding: '10px 20px',
  borderRadius: '12px',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: active ? '#f59e0b' : '#1e293b',
  color: active ? 'black' : 'white',
  fontWeight: 'bold' as const,
  transition: '0.3s'
});

const choiceStyle = {
  padding: '20px',
  borderRadius: '20px',
  border: '1px solid #334155',
  background: 'rgba(30, 41, 59, 0.5)',
  color: 'white',
  cursor: 'pointer',
  fontWeight: 'bold' as const
};
