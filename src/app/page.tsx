"use client";
import React from 'react';
import Link from 'next/link';

export default function RoyalAcademyHome() {
  return (
    <div style={containerStyle}>
      {/* قسم الهوية الملكية */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>Royal Control Panel</h1>
        <p style={subtitleStyle}>تلميذ النيل: تحتمس القوي</p>
      </div>

      {/* ممرات الأكاديمية الـ 14 (الروابط المصححة) */}
      <div style={gridStyle}>
        
        {/* الربط بالمسارات التي بناها Netlify بنجاح */}
        <Link href="/challenges" style={linkStyle}>⚔️ التحديات الملكية</Link>
        <Link href="/booking" style={linkStyle}>📅 حجز جلسة فرعوني</Link>
        <Link href="/dashboard" style={linkStyle}>🏺 لوحة تحكم المعلمين</Link>
        <Link href="/classroom" style={linkStyle}>🏛️ الفصل الدراسي</Link>
        <Link href="/store" style={linkStyle}>🎁 متجر المكافآت</Link>
        <Link href="/student-dashboard" style={linkStyle}>📊 لوحة تحكم الطالب</Link>
        <Link href="/gulf-wing" style={linkStyle}>🌊 جناح الخليج</Link>
        <Link href="/login" style={linkStyle}>🔑 تسجيل الدخول (المصحح)</Link>
        <Link href="/signup" style={linkStyle}>📝 التسجيل الجديد</Link>
        <Link href="/welcome" style={linkStyle}>📜 صفحة الترحيب</Link>

      </div>
    </div>
  );
}

// التنسيقات الملكية (CSS in JS)
const containerStyle: React.CSSProperties = {
  backgroundColor: '#002366',
  minHeight: '100vh',
  color: '#fff',
  fontFamily: 'serif',
  padding: '40px 20px',
  textAlign: 'center'
};

const headerStyle = { marginBottom: '40px' };
const titleStyle = { color: '#D4AF37', fontSize: '2.5rem', textShadow: '2px 2px 4px #000' };
const subtitleStyle = { color: '#D4AF37', fontSize: '1.2rem' };

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '20px',
  maxWidth: '900px',
  margin: '0 auto'
};

const linkStyle: React.CSSProperties = {
  display: 'block',
  padding: '20px',
  border: '2px solid #D4AF37',
  borderRadius: '50px',
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 'bold',
  background: 'rgba(212, 175, 55, 0.1)',
  transition: '0.3s'
};
