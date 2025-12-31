"use client";
import React from 'react';
import Link from 'next/link';

export default function RoyalDashboard() {
  return (
    <div style={{ backgroundColor: '#002366', minHeight: '100vh', color: '#fff', textAlign: 'center', padding: '40px 20px' }}>
      
      {/* الهوية الملكية للأكاديمية */}
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ color: '#D4AF37', fontSize: '2.8rem', textShadow: '0 0 10px rgba(212,175,55,0.5)' }}>
          Royal Control Panel
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#D4AF37' }}>تلميذ النيل: تحتمس القوي</p>
      </div>

      {/* ممرات الأكاديمية (الروابط) */}
      <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <Link href="/challenges" style={linkStyle}>
          <button style={buttonStyle}>⚔️ التحديات الملكية (تحتمس والقوي)</button>
        </Link>

        <Link href="/teachers" style={linkStyle}>
          <button style={buttonStyle}>🏺 مجمع كبار المعلمين</button>
        </Link>

        <Link href="/booking" style={linkStyle}>
          <button style={buttonStyle}>📅 حجز جلسة لغة ملكية</button>
        </Link>

        <Link href="/stats" style={linkStyle}>
          <button style={{...buttonStyle, borderColor: '#4CAF50'}}>📊 إحصائيات التقدم الفرعوني</button>
        </Link>

      </div>
    </div>
  );
}

// التنسيقات المصححة لضمان نجاح الـ Build
const buttonStyle: React.CSSProperties = {
  width: '100%',
  padding: '20px',
  borderRadius: '50px',
  background: 'rgba(255, 255, 255, 0.07)',
  border: '2px solid #D4AF37',
  color: '#fff',
  fontSize: '1.2rem',
  cursor: 'pointer',
  transition: '0.3s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const linkStyle = { textDecoration: 'none' };
