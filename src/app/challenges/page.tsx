"use client";
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#002366', minHeight: '100vh', color: '#fff', textAlign: 'center', padding: '20px', fontFamily: 'serif' }}>
      
      {/* قسم العنوان والترحيب */}
      <div style={{ marginBottom: '40px' }}>
         <h1 style={{ color: '#D4AF37', fontSize: '2.8rem', fontWeight: 'bold' }}>Royal Control Panel</h1>
         <p style={{ fontSize: '1.2rem' }}>تلميذ النيل: <span style={{ color: '#D4AF37' }}>تحتمس القوي</span></p>
      </div>

      {/* قائمة الخيارات الملكية */}
      <div style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <Link href="/challenges" style={{ textDecoration: 'none' }}>
          <button style={buttonStyle}>⚔️ التحديات الملكية</button>
        </Link>

        <Link href="/booking" style={{ textDecoration: 'none' }}>
          <button style={buttonStyle}>📅 حجز درس فرعوني</button>
        </Link>

        <button style={{ ...buttonStyle, borderColor: '#FF4C4C' }}>🔄 مراجعة الكلمات (12)</button>
        
        <button style={buttonStyle}>📊 إحصائيات التقدم</button>
      </div>

      <style jsx>{`
        button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 15px rgba(212, 175, 55, 0.3);
          background: rgba(212, 175, 55, 0.1) !important;
          transition: 0.3s;
        }
      `}</style>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  width: '100%',
  padding: '16px',
  borderRadius: '50px',
  border: '2px solid #D4AF37',
  background: 'rgba(255, 255, 255, 0.05)',
  color: '#fff',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
