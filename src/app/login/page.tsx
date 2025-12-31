"use client";
import React, { useState } from 'react';

export default function LoginPage() {
  const [role, setRole] = useState('student');

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {/* قناع توت عنخ آمون الذهبي */}
        <div style={maskContainer}>
          <span style={{ fontSize: '80px' }}>🎭</span> 
          {/* يمكنك استبدال الايموجي برابط صورة القناع الخاصة بكِ لاحقاً */}
        </div>

        <h2 style={royalTitle}>سجل لدخول مملكة اللهجة المصرية</h2>
        <h3 style={magicText}>قوة السحر والإبداع</h3>
        
        {/* اختيار الفئة */}
        <div style={roleSelector}>
          <button onClick={() => setRole('teacher')} style={role === 'teacher' ? activeBtn : inactiveBtn}>المعلمات</button>
          <button onClick={() => setRole('parent')} style={role === 'parent' ? activeBtn : inactiveBtn}>أولياء الأمور</button>
          <button onClick={() => setRole('student')} style={role === 'student' ? activeBtn : inactiveBtn}>التلاميذ</button>
        </div>

        <div style={{ margin: '20px 0' }}>
          <input type="text" placeholder="الاسم الملكي" style={inputStyle} />
          <input type="password" placeholder="كلمة السر" style={inputStyle} />
        </div>
        
        <button style={loginBtnStyle}>فتح بوابات المملكة</button>
      </div>
    </div>
  );
}

// التنسيقات الملكية المحدثة
const containerStyle = { backgroundColor: '#002366', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', fontFamily: 'serif' };
const cardStyle = { border: '3px solid #D4AF37', padding: '40px', borderRadius: '30px', textAlign: 'center', width: '100%', maxWidth: '500px', background: 'rgba(0,0,0,0.5)', boxShadow: '0 0 20px #D4AF37' };
const maskContainer = { marginBottom: '10px', filter: 'drop-shadow(0 0 10px #D4AF37)' };
const royalTitle = { color: '#D4AF37', fontSize: '1.8rem', margin: '10px 0' };
const magicText = { color: '#fff', fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '30px', letterSpacing: '1px' };
const roleSelector = { display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '25px' };
const inputStyle = { display: 'block', width: '100%', margin: '15px 0', padding: '15px', borderRadius: '15px', border: '1px solid #D4AF37', outline: 'none', fontSize: '1rem' };
const loginBtnStyle = { width: '100%', backgroundColor: '#D4AF37', color: '#002366', padding: '15px', border: 'none', borderRadius: '50px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' };
const activeBtn = { backgroundColor: '#D4AF37', color: '#002366', padding: '10px 20px', borderRadius: '25px', border: 'none', cursor: 'pointer', fontWeight: 'bold' };
const inactiveBtn = { backgroundColor: 'transparent', color: '#D4AF37', padding: '10px 20px', borderRadius: '25px', border: '1px solid #D4AF37', cursor: 'pointer' };
