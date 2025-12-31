"use client";
import React, { CSSProperties } from 'react';
import { useRouter } from 'next/navigation';

export default function AcademyHome() {
  const router = useRouter();

  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '40px',
    backgroundColor: '#4169E1',
    minHeight: '100vh',
    direction: 'rtl'
  };

  const navItems = [
    { title: 'ميدان التحديات', path: '/challenges', icon: '⚔️' },
    { title: 'متجر المكافآت', path: '/store', icon: '🎁' },
    { title: 'الفصل الدراسي', path: '/classroom', icon: '📚' },
    { title: 'جناح الخليج', path: '/gulf-wing', icon: '🌍' },
    { title: 'حجز الجلسات', path: '/booking', icon: '📅' }
  ];

  return (
    <div style={gridStyle}>
      <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#D4AF37' }}>لوحة التحكم الملكية</h1>
        <p style={{ color: '#fff' }}>يا فخر الأكاديمية، أهلاً بك في منزلك</p>
      </div>

      {navItems.map(item => (
        <div key={item.path} onClick={() => router.push(item.path)} style={cardStyle}>
          <span style={{ fontSize: '40px' }}>{item.icon}</span>
          <h3 style={{ color: '#D4AF37' }}>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}

const cardStyle: CSSProperties = {
  background: 'rgba(255, 255, 255, 0.1)',
  border: '2px solid #D4AF37',
  padding: '30px',
  borderRadius: '20px',
  textAlign: 'center',
  cursor: 'pointer',
  transition: '0.3s'
};
