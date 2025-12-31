"use client";
import React, { CSSProperties } from 'react';
import { useRouter } from 'next/navigation';

export default function WelcomePage() {
  const router = useRouter();

  const sectionStyle: CSSProperties = {
    backgroundColor: '#4169E1',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
    color: '#fff'
  };

  return (
    <div style={sectionStyle}>
      <h1 style={{ fontSize: '3rem', color: '#D4AF37', marginBottom: '10px' }}>أكاديمية نفرتيتي الملكية</h1>
      <h2 style={{ fontSize: '1.5rem', fontStyle: 'italic', marginBottom: '40px' }}>مملكة اللهجة المصرية: قوة السحر والإبداع</h2>
      
      <p style={{ maxWidth: '600px', lineHeight: '1.8', fontSize: '1.2rem', marginBottom: '40px' }}>
        مرحباً بكِ في أول أكاديمية ملكية متخصصة في إحياء سحر اللغة المصرية. 
        هنا نصنع المبدعين ونعلم لغة النيل بأسرارها وجاذبيتها.
      </p>

      <div style={{ display: 'flex', gap: '20px' }}>
        <button onClick={() => router.push('/signup')} style={primaryBtn}>ابدأ رحلتك الملكية</button>
        <button onClick={() => router.push('/login')} style={secondaryBtn}>تسجيل دخول الأعضاء</button>
      </div>
    </div>
  );
}

const primaryBtn: CSSProperties = { backgroundColor: '#D4AF37', color: '#002366', padding: '15px 40px', borderRadius: '50px', border: 'none', fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer' };
const secondaryBtn: CSSProperties = { backgroundColor: 'transparent', color: '#D4AF37', padding: '15px 40px', borderRadius: '50px', border: '2px solid #D4AF37', fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer' };
