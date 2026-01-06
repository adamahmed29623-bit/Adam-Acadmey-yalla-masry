"use client";
import React, { useState, useEffect, CSSProperties } from 'react';

export default function NefertitiRoyalAcademy() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div style={mainLayout}>
      {/* 1. التاج الملكي (Navbar) */}
      <nav style={navBarStyle}>
        <div style={logoStyle}>🏺 نفرتيتي الملكية</div>
        <div style={navLinksContainer}>
          <button onClick={() => setActiveTab('home')} style={activeTab === 'home' ? activeNavLink : navLink}>العرش</button>
          <button onClick={() => setActiveTab('goals')} style={activeTab === 'goals' ? activeNavLink : navLink}>المسارات</button>
          <button onClick={() => setActiveTab('challenges')} style={activeTab === 'challenges' ? activeNavLink : navLink}>قاعة التحديات</button>
        </div>
        <div style={xpBadge}>XP 1250 ✨</div>
      </nav>

      {/* 2. منطقة المحتوى الملكي */}
      <main style={contentArea}>
        
        {/* قسم العرش والترحيب (يحتوي على فيديو حتشبسوت) */}
        {activeTab === 'home' && (
          <div style={heroSection}>
            <div style={videoContainer}>
              {/* ربط الفيديو الذي أرسلتِه ليكون خلفية ترحيبية */}
              <iframe 
                src="https://www.youtube.com/embed/TNtIUkPaG30?autoplay=1&mute=1&loop=1&playlist=TNtIUkPaG30&controls=0"
                style={backgroundVideo}
                frameBorder="0"
                allow="autoplay; encrypted-media"
              ></iframe>
              <div style={videoOverlay}></div>
            </div>
            
            <div style={heroTextContent}>
              <h1 style={royalTitle}>أهلاً بكِ في عرشك، نفرتيتي</h1>
              <p style={sloganStyle}>"نحن لا نبني مشروعاً، نحن نعيد صياغة الهوية"</p>
              <div style={progressCard}>
                <span style={{color: '#D4AF37'}}>تقدم الهوية الملكية</span>
                <div style={progressBarBase}><div style={progressBarFill}></div></div>
              </div>
            </div>
          </div>
        )}

        {/* قسم المسارات (الأهداف) */}
        {activeTab === 'goals' && (
          <div style={sectionAnimation}>
            <h2 style={sectionHeader}>المسارات الملكية لإتقان اللهجة</h2>
            <div style={gridStyle}>
              {['إتقان اللهجة المصرية', 'فهم الثقافة والقيم', 'الاحتراف العملي'].map((title, i) => (
                <div key={i} style={goalCard}>
                  <div style={{fontSize: '40px', marginBottom: '10px'}}>🏺</div>
                  <h3 style={{color: '#D4AF37'}}>{title}</h3>
                  <p style={{fontSize: '0.8rem', color: '#ccc'}}>ابدئي رحلة السحر والبيان</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* قسم قاعة توت عنخ آمون السرية (التحديات) */}
        {activeTab === 'challenges' && (
          <div style={sectionAnimation}>
            <h2 style={sectionHeader}>تحديات اليوم الملكية</h2>
            <div style={challengeStack}>
              <div style={challengeItem}>
                <span>🔓 تحدي النطق السحري (صوت حتشبسوت)</span>
                <span style={{color: '#D4AF37'}}>+50 XP</span>
              </div>
              <div style={challengeItemDisabled}>
                <span>🔒 لغز الهوية المصرية (مغلق حالياً)</span>
                <span style={{color: '#666'}}>قريباً</span>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

// --- التنسيقات الفخمة (CSS-in-JS) ---

const mainLayout: CSSProperties = {
  background: '#05050a',
  minHeight: '100vh',
  color: '#fff',
  fontFamily: 'serif',
  overflowX: 'hidden'
};

const navBarStyle: CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '15px 40px', background: 'rgba(0,0,0,0.8)',
  borderBottom: '2px solid #D4AF37', position: 'sticky', top: 0, zIndex: 1000
};

const logoStyle: CSSProperties = { color: '#D4AF37', fontSize: '1.6rem', fontWeight: 'bold' };
const navLinksContainer: CSSProperties = { display: 'flex', gap: '30px' };
const navLink: CSSProperties = { background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '1.1rem' };
const activeNavLink: CSSProperties = { ...navLink, color: '#D4AF37', borderBottom: '2px solid #D4AF37' };
const xpBadge: CSSProperties = { background: 'rgba(212, 175, 55, 0.2)', padding: '10px 20px', borderRadius: '30px', border: '1px solid #D4AF37', color: '#D4AF37', fontWeight: 'bold' };

const contentArea: CSSProperties = { padding: '40px 20px', textAlign: 'center' };

const heroSection: CSSProperties = { position: 'relative', height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '40px', overflow: 'hidden' };
const videoContainer: CSSProperties = { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 };
const backgroundVideo: CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 };
const videoOverlay: CSSProperties = { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent, #05050a)' };

const heroTextContent: CSSProperties = { zIndex: 1, padding: '20px' };
const royalTitle: CSSProperties = { fontSize: '3.5rem', color: '#D4AF37', textShadow: '0 0 20px rgba(212,175,55,0.5)' };
const sloganStyle: CSSProperties = { fontSize: '1.4rem', fontStyle: 'italic', marginBottom: '30px' };

const progressCard: CSSProperties = { background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '25px', border: '1px solid rgba(212, 175, 55, 0.2)', width: '400px', margin: '0 auto' };
const progressBarBase: CSSProperties = { width: '100%', height: '10px', background: '#000', borderRadius: '10px', marginTop: '15px' };
const progressBarFill: CSSProperties = { width: '70%', height: '100%', background: 'linear-gradient(90deg, #D4AF37, #f1c40f)', borderRadius: '10px' };

const gridStyle: CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '40px auto' };
const goalCard: CSSProperties = { background: 'rgba(255,255,255,0.03)', padding: '40px', borderRadius: '30px', border: '1px solid rgba(212, 175, 55, 0.2)', cursor: 'pointer', transition: '0.3s' };

const sectionHeader: CSSProperties = { color: '#D4AF37', fontSize: '2.5rem', marginBottom: '40px' };
const challengeStack: CSSProperties = { display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' };
const challengeItem: CSSProperties = { width: '100%', maxWidth: '600px', padding: '25px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', borderRight: '6px solid #D4AF37' };
const challengeItemDisabled: CSSProperties = { ...challengeItem, opacity: 0.4, borderRight: '6px solid #666' };

const sectionAnimation: CSSProperties = { animation: 'fadeIn 0.8s ease-out' };
