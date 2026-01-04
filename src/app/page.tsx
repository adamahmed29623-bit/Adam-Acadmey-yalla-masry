'use client';
import React, { useState } from 'react';

export default function NefertitiAcademyUltimate() {
  const [view, setView] = useState('dashboard'); // dashboard, museum, simulation, store
  const [points, setPoints] = useState(120);

  return (
    <div style={{ backgroundColor: '#050a15', minHeight: '100vh', color: 'white', direction: 'rtl', fontFamily: 'serif' }}>
      
      {/* شريط التنقل الملكي - لربط كل شيء */}
      <nav style={{ background: '#0a0f1a', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #f59e0b', alignItems: 'center' }}>
        <h2 style={{ color: '#f59e0b', margin: 0 }}>يالا مصري 🏺</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button onClick={() => setView('dashboard')} style={navLink}>الرئيسية</button>
          <button onClick={() => setView('museum')} style={navLink}>🏛️ المتحف</button>
          <button onClick={() => setView('simulation')} style={navLink}>🎮 المحاكاة</button>
          <button onClick={() => setView('store')} style={navLink}>🛒 المتجر</button>
        </div>
        <div style={{ color: '#f59e0b', fontWeight: 'bold' }}>{points} XP 🪙</div>
      </nav>

      <main style={{ padding: '40px' }}>
        
        {/* قسم المتحف الملكي */}
        {view === 'museum' && (
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: '#f59e0b' }}>متحف المكتسبات الملكية 🏺</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px' }}>
              <div style={museumCard}>
                <h3>جملة "الفندق"</h3>
                <p>"أنا عايز اروح الفندق لو سمحت"</p>
                <small>تم الإتقان: 4 يناير 2026</small>
              </div>
              {/* تضاف هنا باقي الكلمات التي يجمعها الطالب */}
            </div>
          </div>
        )}

        {/* قسم المحاكاة الذكي */}
        {view === 'simulation' && (
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ color: '#f59e0b' }}>غرفة المحاكاة (ميدان التحرير) 🚕</h1>
            <div style={{ background: 'rgba(245,158,11,0.05)', height: '300px', borderRadius: '30px', border: '1px dashed #f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
               <p style={{ fontSize: '1.5rem' }}>[ بيئة افتراضية: السائق ينتظر ردك... ]</p>
            </div>
            <button style={{ padding: '20px 50px', borderRadius: '50px', background: '#f59e0b', border: 'none', fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer' }}>
               🎤 اضغطي للتحدث (نظام المحاكاة)
            </button>
          </div>
        )}

        {/* لوحة التحكم (الرئيسية) */}
        {view === 'dashboard' && (
          <div style={{ textAlign: 'center' }}>
            <h1>مرحباً بكِ في عرشكِ التعليمي، الملكة نفرتيتي 👑</h1>
            <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <div style={statBox}>المستوى: خبير ملكي</div>
              <div style={statBox}>الدروس المكتملة: 12</div>
              <div style={statBox}>المتجر: 5 جوائز متاحة</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

const navLink = { background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.1rem' };
const museumCard = { background: '#0a0f1a', padding: '20px', borderRadius: '20px', border: '1px solid #f59e0b', boxShadow: '0 5px 15px rgba(245,158,11,0.1)' };
const statBox = { padding: '20px 40px', background: '#1e293b', borderRadius: '15px', border: '1px solid #f59e0b', fontWeight: 'bold' };
