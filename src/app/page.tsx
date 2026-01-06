"use client";
import React, { useState, useMemo } from 'react';
import { db } from '@/lib/firebase/config';
import { collection, query, orderBy, doc } from 'firebase/firestore';
import { useCollection } from '@/hooks/useCollection';
import { useDoc } from '@/hooks/useDoc';

export default function RoyalDashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [showGemini, setShowGemini] = useState(false); // للتحكم في نافذة المعلمة Gemini

  // 1. جلب بيانات "الملكة" (نفرتيتي) أو الطالب من Firebase
  const { data: userData } = useDoc<any>(null); // استبدلي null بمرجع المستخدم الفعلي

  // 2. جلب التحديات الحقيقية من قاعدة البيانات
  const challengesQuery = useMemo(() => query(collection(db, 'challenges'), orderBy('createdAt', 'desc')), []);
  const { data: realChallenges, isLoading: loadingChallenges } = useCollection<any>(challengesQuery);

  return (
    <div style={royalLayout}>
      {/* --- الشريط العلوي الملكي --- */}
      <nav style={navStyle}>
        <div style={logoStyle}>🏺 نفرتيتي الملكية</div>
        <div style={navLinks}>
          <button onClick={() => setActiveTab('home')} style={activeTab === 'home' ? activeBtn : inactiveBtn}>العرش</button>
          <button onClick={() => setActiveTab('goals')} style={activeTab === 'goals' ? activeBtn : inactiveBtn}>المسارات</button>
          <button onClick={() => setActiveTab('challenges')} style={activeTab === 'challenges' ? activeBtn : inactiveBtn}>قاعة التحديات</button>
        </div>
        <div style={xpBadge}>XP {userData?.points || 1250} ✨</div>
      </nav>

      {/* --- المحتوى الديناميكي --- */}
      <main style={container}>
        
        {/* قسم العرش مع فيديو حتشبسوت الملهم */}
        {activeTab === 'home' && (
          <section style={fadeIn}>
            <div style={videoWrapper}>
              <iframe 
                src="https://www.youtube.com/embed/TNtIUkPaG30?autoplay=1&mute=1&loop=1&playlist=TNtIUkPaG30&controls=0"
                style={bgVideo}
                allow="autoplay"
              ></iframe>
              <div style={videoOverlay}>
                <h1 style={mainTitle}>أهلاً بكِ في عرشك، نفرتيتي</h1>
                <p style={subTitle}>"نحن لا نبني مشروعاً، نحن نعيد صياغة الهوية"</p>
                <div style={progressBox}>
                  <p style={{color:'#D4AF37', marginBottom:'10px'}}>تقدم الهوية الملكية</p>
                  <div style={barBase}><div style={barFill}></div></div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* قسم المسارات الملكية */}
        {activeTab === 'goals' && (
          <section style={gridSection}>
            <h2 style={tabHeader}>المسارات الملكية لإتقان اللهجة</h2>
            <div style={grid}>
              {['إتقان اللهجة المصرية', 'فهم الثقافة والقيم', 'الاحتراف العملي'].map((title, i) => (
                <div key={i} style={royalCard}>
                  <div style={{fontSize:'40px'}}>🏺</div>
                  <h3 style={{color:'#D4AF37', marginTop:'15px'}}>{title}</h3>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* قسم التحديات الحقيقية المرتبطة بـ Firebase */}
        {activeTab === 'challenges' && (
          <section style={fadeIn}>
            <h2 style={tabHeader}>قاعة توت عنخ آمون السرية</h2>
            {loadingChallenges ? (
              <p>جاري فتح السجلات الملكية...</p>
            ) : (
              <div style={stack}>
                {realChallenges?.map((ch) => (
                  <div key={ch.id} style={challengeRow}>
                    <span>🔓 {ch.title}</span>
                    <span style={{color:'#D4AF37'}}>+{ch.xpReward || 50} XP</span>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </main>

      {/* --- المعلمة Gemini (المساعدة الذكية) --- */}
      <div style={geminiFloatingBtn} onClick={() => setShowGemini(!showGemini)}>
        <span style={{fontSize:'24px'}}>✨</span>
      </div>

      {showGemini && (
        <div style={geminiWindow}>
          <div style={geminiHeader}>المعلمة Gemini (المستشارة الملكية)</div>
          <div style={geminiBody}>
            <p style={{fontSize:'0.9rem'}}>كيف يمكنني مساعدتكِ في إدارة مملكتكِ اليوم يا نفرتيتي؟</p>
          </div>
          <input type="text" placeholder="اسألي المعلمة..." style={geminiInput} />
        </div>
      )}
    </div>
  );
}

// --- التنسيقات الفخمة (The Royal Stylesheet) ---
const royalLayout: React.CSSProperties = { background: '#05050a', minHeight: '100vh', color: '#fff', fontFamily: 'serif' };
const navStyle: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 50px', borderBottom: '2px solid #D4AF37', background: 'rgba(0,0,0,0.9)', sticky: 'top' as any, zIndex: 100 };
const logoStyle: React.CSSProperties = { color: '#D4AF37', fontSize: '1.6rem', fontWeight: 'bold' };
const navLinks: React.CSSProperties = { display: 'flex', gap: '30px' };
const activeBtn: React.CSSProperties = { background: 'none', border: 'none', color: '#D4AF37', borderBottom: '2px solid #D4AF37', cursor: 'pointer', paddingBottom: '5px' };
const inactiveBtn: React.CSSProperties = { background: 'none', border: 'none', color: '#fff', cursor: 'pointer' };
const xpBadge: React.CSSProperties = { background: 'rgba(212,175,55,0.2)', padding: '8px 20px', borderRadius: '30px', border: '1px solid #D4AF37', color: '#D4AF37', fontWeight: 'bold' };
const container: React.CSSProperties = { padding: '40px 20px' };
const videoWrapper: React.CSSProperties = { position: 'relative', height: '70vh', borderRadius: '40px', overflow: 'hidden', border: '1px solid rgba(212,175,55,0.3)' };
const bgVideo: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 };
const videoOverlay: React.CSSProperties = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to top, #05050a, transparent)' };
const mainTitle: React.CSSProperties = { fontSize: '3.5rem', color: '#D4AF37', textAlign: 'center' };
const subTitle: React.CSSProperties = { fontSize: '1.2rem', fontStyle: 'italic', color: '#ccc', margin: '20px 0' };
const progressBox: React.CSSProperties = { background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '20px', width: '300px', border: '1px solid rgba(212,175,55,0.2)' };
const barBase: React.CSSProperties = { width: '100%', height: '8px', background: '#000', borderRadius: '10px' };
const barFill: React.CSSProperties = { width: '70%', height: '100%',
