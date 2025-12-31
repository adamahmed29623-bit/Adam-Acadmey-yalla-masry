"use client";
import React, { CSSProperties } from 'react';
import { useRouter } from 'next/navigation';

export default function PlacementPage() {
  const router = useRouter();

  return (
    <div style={{ backgroundColor: '#4169E1', minHeight: '100vh', padding: '40px', textAlign: 'center'as const, direction: 'rtl' }}>
      <h1 style={{ color: '#D4AF37' }}>أين تقف في مملكتنا؟</h1>
      <p style={{ color: '#fff' }}>اختر رتبتك الحالية لنفتح لك الأبواب المناسبة</p>
      
      <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <button onClick={() => router.push('/challenges')} style={levelBtn}>🌱 مبتدئ (تلميذ النيل)</button>
        <button onClick={() => router.push('/challenges')} style={levelBtn}>🛡️ متوسط (محارب الكلمات)</button>
        <button onClick={() => router.push('/challenges')} style={levelBtn}>👑 متقدم (حكيم القصر)</button>
      </div>
    </div>
  );
}

const levelBtn: CSSProperties = {
  width: '300px',
  padding: '15px',
  borderRadius: '50px',
  border: 'none',
  backgroundColor: '#D4AF37',
  color: '#002366',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  cursor: 'pointer'
};
