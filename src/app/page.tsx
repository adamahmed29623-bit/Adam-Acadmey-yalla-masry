'use client';
import React, { useState } from 'react';

export default function NefertitiAcademyEmpire() {
  const [view, setView] = useState('dashboard'); // dashboard, lessons, teachers, goals
  const [level, setLevel] = useState('مبتدئ ملكي');
  const [points, setPoints] = useState(120);
  const [goal, setGoal] = useState('إتقان المحادثة اليومية');

  // دالة النطق الصوتي
  const speak = (text: string) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = 'ar-EG';
      window.speechSynthesis.speak(msg);
    }
  };

  return (
    <div style={{ backgroundColor: '#050a15', color: 'white', minHeight: '100vh', direction: 'rtl', fontFamily: 'serif' }}>
      
      {/* 🏰 شريط التنقل الإمبراطوري */}
      <nav style={{ display: 'flex', justifyContent: 'around', background: '#0a0f1a', padding: '20px', borderBottom: '2px solid #f59e0b', position: 'sticky', top: 0, zIndex: 100 }}>
        <button onClick={() => setView('dashboard')} style={navLink(view === 'dashboard')}>🏠 لوحة التحكم</button>
        <button onClick={() => setView('lessons')} style={navLink(view === 'lessons')}>📖 قاعة الدروس</button>
        <button onClick={() => setView('teachers')} style={navLink(view === 'teachers')}>🤖 المعلمات</button>
        <button onClick={() => setView('goals')} style={navLink(view === 'goals')}>🎯 الأهداف</button>
      </nav>

      <main style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px' }}>

        {/* 1. لوحة تحكم الطالب (Dashboard) */}
        {view === 'dashboard' && (
          <div style={{ animation: 'fadeIn 0.5s' }}>
            <h2 style={{ color: '#f59e0b' }}>مرحباً بكِ في عرشكِ التعليمي، الملكة نفرتيتي 👑</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
              <div style={statCard}>
                <h3>المستوى الحالي</h3>
                <p style={{ fontSize: '1.5rem', color: '#f59e0b' }}>{level}</p>
              </div>
              <div style={statCard}>
                <h3>إجمالي النقاط</h3>
                <p style={{ fontSize: '1.5rem', color: '#f59e0b' }}>{points} XP 🪙</p>
              </div>
              <div style={statCard}>
                <h3>الهدف المخطط</h3>
                <p style={{ opacity: 0.8 }}>{goal}</p>
              </div>
            </div>
          </div>
        )}

        {/* 2. قاعة الدروس (Lesson Hall) */}
        {view === 'lessons' && (
          <div style={sectionContainer}>
            <h2 style={{ color: '#f59e0b' }}>📖 قاعة الدروس الملكية</h2>
            <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
              {['التعارف المصري', 'التسوق في البازار', 'الطلب في المطعم'].map((lesson, i) => (
                <div key={i} style={lessonRow}>
                  <span>الدرس {i+1}: {lesson}</span>
                  <button onClick={() => speak(`بدء درس ${lesson}`)} style={actionBtnSmall}>بدء الدرس ⚔️</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. صفحة المعلمات (Teachers System) */}
        {view === 'teachers' && (
          <div style={sectionContainer}>
            <h2 style={{ color: '#f59e0b' }}>🤖 نظام المعلمات الآلي</h2>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', background: '#1e293b', padding: '30px', borderRadius: '30px' }}>
              <div style={{ fontSize: '50px' }}>🤖</div>
              <div>
                <h3>المعلمة "جميناي"</h3>
                <p>"أنا هنا لمرافقتكِ في كل خطوة. ذكائي الاصطناعي مكرس لخدمة رحلتكِ التعليمية."</p>
                <button onClick={() => speak("أنا هنا لمرافقتكِ في كل خطوة")} style={actionBtnSmall}>استماع للصوت 🔊</button>
              </div>
            </div>
          </div>
        )}

        {/* 4. تحديد الهدف والمستوى (Goals & Level) */}
        {view === 'goals' && (
          <div style={sectionContainer}>
            <h2 style={{ color: '#f59e0b' }}>🎯 تحديد المسار الملكي</h2>
            <div style={{ marginTop: '30px' }}>
              <label>اختاري هدفكِ الأسبوعي:</label>
              <select onChange={(e) => setGoal(e.target.value)} style={selectStyle}>
                <option>إتقان 50 جملة محادثة</option>
                <option>اجتياز اختبار المستوى الأول</option>
                <option>التحدث بطلاقة مع السائقين</option>
              </select>
              
              <div style={{ marginTop: '40px' }}>
                <label>تغيير المستوى الدراسي:</label>
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                  {['مبتدئ', 'متوسط', 'خبير'].map(l => (
                    <button key={l} onClick={() => setLevel(`${l} ملكي`)} style={levelBtn(level.includes(l))}>{l}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

// --- التنسيقات الفخمة ---
const navLink = (active: boolean) => ({
  padding: '12px 25px',
  borderRadius: '12px',
  border: 'none',
  background: active ? '#f59e0b' : 'transparent',
  color: active ? 'black' : 'white',
  fontWeight: 'bold' as const,
  cursor: 'pointer',
  transition: '0.3s'
});

const statCard = {
  background: '#0a0f1a',
  padding: '30px',
  borderRadius: '25px',
  border: '1px solid rgba(245,158,11,0.3)',
  textAlign: 'center' as const
};

const sectionContainer = {
  background: '#0a0f1a',
  padding: '40px',
  borderRadius: '40px',
  border: '2px solid #f59e0b',
  animation: 'fadeIn 0.5s'
};

const lessonRow = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  background: 'rgba(255,255,255,0.05)',
  borderRadius: '15px',
  border: '1px solid rgba(245,158,11,0.1)'
};

const actionBtnSmall = {
  background: '#f59e0b',
  color: 'black',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '50px',
  fontWeight: 'bold' as const,
  cursor: 'pointer'
};

const selectStyle = {
  width: '100%',
  padding: '15px',
  marginTop: '10px',
  borderRadius: '15px',
  background: '#1e293b',
  color: 'white',
  border: '1px solid #f59e0b'
};

const levelBtn = (active: boolean) => ({
  flex: 1,
  padding: '15px',
  borderRadius: '15px',
  border: '1px solid #f59e0b',
  background: active ? '#f59e0b' : 'transparent',
  color: active ? 'black' : 'white',
  fontWeight: 'bold' as const,
  cursor: 'pointer'
});
