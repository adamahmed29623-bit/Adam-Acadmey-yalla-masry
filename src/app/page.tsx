"use client";
import React, { useState, useMemo } from 'react';
import { db } from '@/lib/firebase/config';
import { collection, query, orderBy } from 'firebase/firestore';
import { useCollection } from '@/hooks/useCollection';
import { useDoc } from '@/hooks/useDoc';
// استدعاء وظائف المعلمة Gemini التي أعددتِها
import { askRoyalTeacher, processChallenge } from '@/lib/gemini'; 

export default function FinalRoyalAcademy() {
  const [activeTab, setActiveTab] = useState('home');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiFeedback, setAiFeedback] = useState("");

  // 1. ربط بياناتك الحقيقية من الفايربيس
  const { data: userData } = useDoc<any>(null); 
  const challengesQuery = useMemo(() => query(collection(db, 'challenges'), orderBy('createdAt', 'desc')), []);
  const { data: realChallenges } = useCollection<any>(challengesQuery);

  // 2. وظيفة التفاعل مع المعلمة Gemini
  const handleAskTeacher = async (question: string) => {
    setAiLoading(true);
    const response = await askRoyalTeacher(question);
    setAiFeedback(response);
    setAiLoading(false);
  };

  return (
    <div style={royalLayout}>
      {/* شريط التنقل الملكي */}
      <nav style={navStyle}>
        <div style={logoStyle}>🏺 نفرتيتي الملكية</div>
        <div style={navLinks}>
          <button onClick={() => setActiveTab('home')} style={activeTab === 'home' ? activeBtn : inactiveBtn}>العرش</button>
          <button onClick={() => setActiveTab('challenges')} style={activeTab === 'challenges' ? activeBtn : inactiveBtn}>قاعة التحديات</button>
        </div>
        <div style={xpBadge}>XP {userData?.points || 1250} ✨</div>
      </nav>

      <main style={container}>
        {/* العرش: فيديو حتشبسوت + ذكاء Gemini */}
        {activeTab === 'home' && (
          <div style={fadeIn}>
            <div style={videoWrapper}>
              <iframe 
                src="https://www.youtube.com/embed/TNtIUkPaG30?autoplay=1&mute=1&loop=1&playlist=TNtIUkPaG30"
                style={bgVideo}
              ></iframe>
              <div style={videoOverlay}>
                <h1 style={mainTitle}>أهلاً بكِ في عرشك، نفرتيتي</h1>
                <div style={geminiChatBox}>
                  <p style={{color: '#D4AF37'}}>اسألي المعلمة Gemini عن أي شيء في مملكتك:</p>
                  <input 
                    type="text" 
                    placeholder="اكتبي سؤالك هنا..." 
                    onKeyDown={(e) => e.key === 'Enter' && handleAskTeacher(e.currentTarget.value)}
                    style={geminiInput}
                  />
                  {aiLoading ? <p>جاري استشارة الحكماء...</p> : <p style={feedbackStyle}>{aiFeedback}</p>}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* قاعة التحديات الحقيقية */}
        {activeTab === 'challenges' && (
          <div style={grid}>
            {realChallenges?.map((ch) => (
              <div key={ch.id} style={royalCard} onClick={() => processChallenge("إجابة تجريبية", "Arabic", ch.title)}>
                <h3 style={{color: '#D4AF37'}}>{ch.title}</h3>
                <p>{ch.description}</p>
                <button style={actionBtn}>ابدئي التحدي</button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

// التنسيقات (مختصرة للفخامة)
const royalLayout: React.CSSProperties = { background: '#05050a', minHeight: '100vh', color: '#fff', fontFamily: 'serif' };
const navStyle: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', padding: '20px 50px', borderBottom: '2px solid #D4AF37' };
const logoStyle: React.CSSProperties = { color: '#D4AF37', fontSize: '1.8rem', fontWeight: 'bold' };
const navLinks: React.CSSProperties = { display: 'flex', gap: '30px' };
const activeBtn: React.CSSProperties = { background: 'none', border: 'none', color: '#D4AF37', borderBottom: '2px solid #D4AF37', cursor: 'pointer' };
const inactiveBtn: React.CSSProperties = { background: 'none', border: 'none', color: '#fff', cursor: 'pointer' };
const xpBadge: React.CSSProperties = { color: '#D4AF37', border: '1px solid #D4AF37', padding: '5px 15px', borderRadius: '20px' };
const container: React.CSSProperties = { padding: '50px' };
const videoWrapper: React.CSSProperties = { position: 'relative', height: '80vh', borderRadius: '40px', overflow: 'hidden' };
const bgVideo: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 };
const videoOverlay: React.CSSProperties = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' };
const mainTitle: React.CSSProperties = { fontSize: '3rem', color: '#D4AF37', marginBottom: '30px' };
const geminiChatBox: React.CSSProperties = { background: 'rgba(0,0,0,0.7)', padding: '30px', borderRadius: '20px', border: '1px solid #D4AF37', width: '500px' };
const geminiInput: React.CSSProperties = { width: '100%', padding: '10px', marginTop: '10px', background: '#111', border: '1px solid #333', color: '#fff', borderRadius: '10px' };
const feedbackStyle: React.CSSProperties = { marginTop: '15px', fontSize: '0.9rem', color: '#ccc', lineHeight: '1.6' };
const grid: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' };
const royalCard: React.CSSProperties = { background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '20px', border: '1px solid #D4AF37', textAlign: 'center' };
const actionBtn: React.CSSProperties = { marginTop: '20px', background: '#D4AF37', color: '#000', padding: '10px 20px', borderRadius: '10px', border: 'none', fontWeight: 'bold' };
const fadeIn: React.CSSProperties = { animation: 'fadeIn 1s' };
