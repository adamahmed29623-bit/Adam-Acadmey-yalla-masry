"use client";
import React, { CSSProperties } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    // الانتقال التلقائي للمحطة التالية (تحديد الأهداف)
    router.push('/goals');
  };

  const cardStyle: CSSProperties = {
    border: '3px solid #D4AF37',
    padding: '40px',
    borderRadius: '30px',
    textAlign: 'center' as const,
    width: '100%',
    maxWidth: '500px',
    background: 'rgba(0,0,0,0.5)',
    boxShadow: '0 0 20px #D4AF37'
  };

  return (
    <div style={{ backgroundColor: '#4169E1', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={cardStyle}>
        <div style={{ fontSize: '70px', marginBottom: '10px' }}>🎭</div>
        <h2 style={{ color: '#D4AF37' }}>سجل لدخول مملكة اللهجة المصرية</h2>
        <h3 style={{ color: '#fff', fontStyle: 'italic', marginBottom: '30px' }}>قوة السحر والإبداع</h3>
        
        <input type="text" placeholder="الاسم الملكي" style={inputStyle} />
        <input type="password" placeholder="كلمة السر" style={inputStyle} />
        
        <button onClick={handleLogin} style={loginBtnStyle}>فتح بوابات المملكة</button>
      </div>
    </div>
  );
}

const inputStyle: CSSProperties = { display: 'block', width: '100%', margin: '15px 0', padding: '15px', borderRadius: '15px', border: '1px solid #D4AF37' };
const loginBtnStyle: CSSProperties = { width: '100%', backgroundColor: '#D4AF37', color: '#002366', padding: '15px', border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' };
