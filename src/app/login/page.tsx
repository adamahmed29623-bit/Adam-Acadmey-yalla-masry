"use client";
import React, { useState, CSSProperties } from 'react';

export default function LoginPage() {
  const [role, setRole] = useState('student');

  // تعريف الستايل بشكل صارم ليرضي نظام التشفير
  const cardStyle: CSSProperties = {
    border: '3px solid #D4AF37',
    padding: '40px',
    borderRadius: '30px',
    textAlign: 'center', // هذا هو الجزء الذي كان يسبب الخطأ
    width: '100%',
    maxWidth: '500px',
    background: 'rgba(0,0,0,0.5)',
    boxShadow: '0 0 20px #D4AF37'
  };

  return (
    <div style={{ backgroundColor: '#4169E1', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <div style={cardStyle}>
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontSize: '80px' }}>🎭</span> {/* قناع توت عنخ آمون */}
        </div>

        <h2 style={{ color: '#D4AF37', fontSize: '1.8rem' }}>سجل لدخول مملكة اللهجة المصرية</h2>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '30px' }}>قوة السحر والإبداع</h3>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '25px' }}>
          <button onClick={() => setRole('teacher')} style={role === 'teacher' ? activeBtn : inactiveBtn}>المعلمات</button>
          <button onClick={() => setRole('parent')} style={role === 'parent' ? activeBtn : inactiveBtn}>أولياء الأمور</button>
        </div>

        <input type="text" placeholder="الاسم الملكي" style={inputStyle} />
        <input type="password" placeholder="كلمة السر" style={inputStyle} />
        
        <button style={loginBtnStyle}>فتح بوابات المملكة</button>
      </div>
    </div>
  );
}

// الستايلات التكميلية
const inputStyle: CSSProperties = { display: 'block', width: '100%', margin: '15px 0', padding: '15px', borderRadius: '15px', border: '1px solid #D4AF37' };
const loginBtnStyle: CSSProperties = { width: '100%', backgroundColor: '#D4AF37', color: '#002366', padding: '15px', border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' };
const activeBtn: CSSProperties = { backgroundColor: '#D4AF37', color: '#002366', padding: '10px 20px', borderRadius: '25px', border: 'none', fontWeight: 'bold' };
const inactiveBtn: CSSProperties = { backgroundColor: 'transparent', color: '#D4AF37', padding: '10px 20px', borderRadius: '25px', border: '1px solid #D4AF37' };
