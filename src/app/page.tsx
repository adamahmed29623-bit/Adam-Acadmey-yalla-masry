'use client';
import React, { useState } from 'react';

export default function NefertitiAcademyPro() {
  const [points, setPoints] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [aiStatus, setAiStatus] = useState('ترحيب');

  const teacherDialog = {
    ترحيب: "أهلاً بكِ في رحاب الأكاديمية يا جلالة الملكة. أنا رفيقتكِ الآلية، صُممتُ لأعلمكِ رقي اللهجة المصرية كما طلبتِ تماماً. هل نبدأ بتحدي اليوم؟",
    صح: "🏰 إجابة ملكية مبهرة! لقد استوعبتِ نغمة الأدب المصري الرفيع. (+20 نقطة)",
    خطأ: "⚠️ لا بأس يا ملكة، العظمة تأتي من المحاولة. الجملة تحتاج لمسة من الرقة المصرية، جربي مرة أخرى.",
    نطق: "أنا عايز اروح الفندق لو سمحت"
  };

  const playVoice = (text: string) => {
    if ('speechSynthesis' in window) {
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = 'ar-EG';
      msg.rate = 0.9;
      window.speechSynthesis.speak(msg);
    }
  };

  const handleAction = (isCorrect: boolean) => {
    if (isCorrect) {
      setPoints(prev => prev + 20);
      setAiStatus('صح');
      setFeedback('أحسنتِ! تم إضافة النقاط لرصيد فخامتكِ.');
    } else {
      setAiStatus('خطأ');
      setFeedback('حاولي مرة أخرى، فالإتقان يحتاج صبراً ملكياً.');
    }
  };

  return (
    <div style={{ backgroundColor: '#050a15', color: 'white', minHeight: '100vh', direction: 'rtl', fontFamily: 'serif' }}>
      <header style={{ padding: '40px 20px', textAlign: 'center', borderBottom: '2px solid #f59e0b', background: '#0a0f1a' }}>
        <h1 style={{ color: '#f59e0b', fontSize: '2.5rem', margin: 0 }}>أكاديمية يالا مصري 🏺</h1>
        <div style={{ marginTop: '15px', display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(245,158,11,0.1)', padding: '10px 25px', borderRadius: '50px', border: '1px solid #f59e0b' }}>
          <span style={{ fontSize: '20px' }}>🪙</span>
          <span style={{ fontWeight: 'bold', color: '#f59e0b' }}>رصيد الفخامة: {points} XP</span>
        </div>
      </header>

      <main style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
        <section style={{ backgroundColor: '#0f172a', borderRadius: '30px', padding: '30px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
            {/* تم تصحيح الخطأ هنا ✅ */}
            <div style={{ width: '60px', height: '60px', backgroundColor: '#f59e0b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px' }}>🤖</div>
            <div>
              <h3 style={{ margin: 0, color: '#f59e0b' }}>المعلمة الملكية (جميناي)</h3>
              <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.5 }}>نظام تفاعلي ذكي</p>
            </div>
          </div>
          <div style={{ background: '#1e293b', padding: '25px', borderRadius: '20px', fontSize: '1.2rem', lineHeight: '1.6', position: 'relative' }}>
             {aiStatus === 'ترحيب' && teacherDialog.ترحيب}
             {aiStatus === 'صح' && teacherDialog.صح}
             {aiStatus === 'خطأ' && teacherDialog.خطأ}
             <button onClick={() => playVoice(teacherDialog.نطق)} style={{ position: 'absolute', left: '15px', bottom: '10px', cursor: 'pointer', background: 'none', border: 'none', fontSize: '24px' }}>🔊</button>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(180deg, #0a0f1a 0%, #050a15 100%)', padding: '40px', borderRadius: '40px', border: '2px solid #f59e0b', textAlign: 'center' }}>
          <h2 style={{ color: '#f59e0b' }}>تحدي الموقف الملكي 🚕</h2>
          <div style={{ margin: '40px 0' }}>
            <p style={{ fontSize: '1.8rem', fontWeight: 'black' }}>"أنا عايز اروح الفندق لو سمحت"</p>
          </div>
          <div style={{ display: 'grid', gap: '15px' }}>
            <button onClick={() => handleAction(false)} style={btnStyle}>1. وديني الفندق بسرعة</button>
            <button onClick={() => handleAction(true)} style={{...btnStyle, backgroundColor: '#f59e0b', color: 'black'}}>2. انا عايز اروح الفندق لو سمحت ✅</button>
          </div>
          {feedback && <p style={{ marginTop: '20px', fontWeight: 'bold', color: aiStatus === 'صح' ? '#4ade80' : '#f87171' }}>{feedback}</p>}
        </section>
      </main>
    </div>
  );
}

const btnStyle = {
  padding: '18px',
  borderRadius: '20px',
  border: '1px solid #334155',
  background: 'rgba(30, 41, 59, 0.5)',
  color: 'white',
  cursor: 'pointer',
  fontSize: '1.1rem',
  fontWeight: 'bold' as const
};
