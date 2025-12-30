"use client";
import React from 'react';
import Link from 'next/link';

export default function RoyalPortal() {
  return (
    <div style={{
      backgroundColor: '#002366', 
      minHeight: '100vh',
      color: '#fff',
      fontFamily: 'serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      {/* 1. شعار الأكاديمية (البردية والتاج) */}
      <div style={{ marginTop: '20px', marginBottom: '40px' }}>
         <h1 style={{ color: '#D4AF37', fontSize: '2.5rem', fontWeight: 'bold' }}>
           Royal Control Panel
         </h1>
         <p style={{ color: '#fff', fontSize: '1.2rem' }}>
           Current Level: <span style={{ color: '#D4AF37' }}>تلميذ النيل</span>
         </p>
      </div>

      {/* 2. أزرار الأقسام (كل زر يفتح صفحة مستقلة) */}
      <div style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* زر مكتبة الدروس */}
        <button style={mainButtonStyle}>
          <span style={iconStyle}>📚</span>
          Mastered Lessons Library
        </button>

        {/* زر التحديات الملكية (ينقل الطالب لصفحة التحدي) */}
        <Link href="/challenges" style={{ textDecoration: 'none' }}>
          <button style={{...mainButtonStyle, borderColor: '#D4AF37', background: 'rgba(212, 175, 55, 0.1)'}}>
            <span style={iconStyle}>⚔️</span>
            التحديات الملكية (تحتمس)
          </button>
        </Link>

        {/* زر الكلمات التي تحتاج مراجعة */}
        <button style={{...mainButtonStyle, borderColor: '#FF4C4C'}}>
          <span style={iconStyle}>🔄</span>
          Words Needing Review (12)
        </button>

        {/* زر حجز الدروس */}
        <Link href="/booking" style={{ textDecoration: 'none' }}>
          <button style={mainButtonStyle}>
            <span style={iconStyle}>📅</span>
            حجز درس فرعوني خاص
          </button>
        </Link>

      </div>

      <style jsx>{`
        button:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(212, 175, 55, 0.4) !important;
          transition: 0.3s ease;
        }
      `}</style>
    </div>
  );
}

// التنسيقات الملكية للأزرار
const mainButtonStyle = {
  width: '100%',
  padding: '18px 25px',
  borderRadius: '50px',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '2px solid #D4AF37',
  color: '#fff',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  display: 'flex',
  align-items: 'center',
  cursor: 'pointer',
  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
};

const iconStyle = {
  marginRight: '15px',
  fontSize: '1.5rem',
  background: 'rgba(255,255,255,0.1)',
  padding: '8px',
  borderRadius: '12px'
};
