"use client";
import React, { useState, CSSProperties } from 'react';

export default function RoyalDashboard() {
  const [currentSection, setCurrentSection] = useState('home'); // للتحكم في الأقسام داخل الصفحة

  return (
    <div style={mainBackground}>
      {/* 1. التاج (Header) - القائمة العلوية المرتبة */}
      <nav style={navBarStyle}>
        <div style={logoStyle}>🏺 نفرتيتي الملكية</div>
        <div style={navLinksContainer}>
          <button onClick={() => setCurrentSection('home')} style={navLink}>الرئيسية</button>
          <button onClick={() => setCurrentSection('goals')} style={navLink}>أهدافي</button>
          <button onClick={() => setCurrentSection('challenges')} style={navLink}>التحديات</button>
        </div>
        <div style={pointsBadge}>XP 1250 ✨</div>
      </nav>

      {/* 2. محتوى الصفحة المتغير */}
      <main style={contentArea}>
        {currentSection === 'home' && (
          <div style={sectionFadeIn}>
            <h1 style={royalTitle}>أهلاً بكِ في عرشك، نفرتيتي</h1>
            <p style={sloganStyle}>"نحن لا نبني مشروعاً، نحن نعيد صياغة الهوية"</p>
            <div style={progressCard}>
              <span>تقدم الهوية الملكية</span>
              <div style={progressBarContainer}>
                <div style={progressBarFill}></div>
              </div>
            </div>
          </div>
        )}

        {currentSection === 'goals' && (
          <div style={sectionFadeIn}>
            <h2 style={sectionTitle}>المسارات الملكية</h2>
            <div style={gridStyle}>
              {['إتقان اللهجة', 'فهم الثقافة', 'الاحتراف العملي'].map((goal, i) => (
                <div key={i} style={goalCard}>
                  <div style={{fontSize: '30px'}}>🏺</div>
                  <h3>{goal}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentSection === 'challenges' && (
          <div style={sectionFadeIn}>
            <h2 style={sectionTitle}>تحديات اليوم</h2>
            <div style={challengeList}>
              <div style={challengeItem}>🔓 تحدي النطق السحري <span style={goldText}>+50 XP</span></div>
              <div style={challengeItem}>🔒 لغز الهوية المصرية <span style={grayText}>(مغلق)</span></div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// --- التنسيقات الملكية (الترتيب الفخم) ---

const mainBackground: CSSProperties = {
  background: 'radial-gradient(circle at center, #1a1a2e 0%, #05050a 100%)',
  minHeight: '100vh',
  color: '#fff',
  fontFamily: 'serif',
};

const navBarStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 50px',
  background: 'rgba(255, 255, 255, 0.02)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
  position: 'sticky',
  top: 0,
  zIndex: 100
};

const logoStyle: CSSProperties = { color: '#D4AF37', fontSize: '1.5rem', fontWeight: 'bold' };
const navLinksContainer: CSSProperties = { display: 'flex', gap: '30px' };
const navLink: CSSProperties = { background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '1.1rem' };
const pointsBadge: CSSProperties = { background: 'rgba(212, 175, 55, 0.1)', padding: '8px 15px', borderRadius: '20px', border: '1px solid #D4AF37', color: '#D4AF37' };

const contentArea: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '60px 20px',
  textAlign: 'center'
};

const royalTitle: CSSProperties = { fontSize: '3.5rem', color: '#D4AF37', marginBottom: '10px' };
const sloganStyle: CSSProperties = { fontSize: '1.2rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', marginBottom: '40px' };

const progressCard: CSSProperties = { background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '20px', width: '100%', maxWidth: '500px', border: '1px solid rgba(212, 175, 55, 0.1)' };
const progressBarContainer: CSSProperties = { width: '100%', height: '8px', background: '#111', borderRadius: '10px', marginTop: '10px', overflow: 'hidden' };
const progressBarFill: CSSProperties = { width: '65%', height: '100%', background: 'linear-gradient(90deg, #D4AF37, #f1c40f)' };

const gridStyle: CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', width: '100%', maxWidth: '900px' };
const goalCard: CSSProperties = { padding: '30px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(212, 175, 55, 0.2)', cursor: 'pointer' };

const sectionFadeIn: CSSProperties = { animation: 'fadeIn 0.5s ease-in' };
const sectionTitle: CSSProperties = { color: '#D4AF37', fontSize: '2rem', marginBottom: '30px' };
const challengeList: CSSProperties = { width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '15px' };
const challengeItem: CSSProperties = { padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', textAlign: 'right', display: 'flex', justifyContent: 'space-between', borderRight: '4px solid #D4AF37' };
const goldText: CSSProperties = { color: '#D4AF37' };
const grayText: CSSProperties = { color: '#666' };
