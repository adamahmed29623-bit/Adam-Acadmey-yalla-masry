"use client";
import React, { CSSProperties } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();

  const containerStyle: CSSProperties = {
    backgroundColor: '#4169E1', // الأزرق الملكي المعتمد بدلاً من الكحلي
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    direction: 'rtl'
  };

  const cardStyle: CSSProperties = {
    border: '3px solid #D4AF37',
    padding: '40px',
    borderRadius: '30px',
    textAlign: 'center', // تصحيح لتجنب خطأ TextAlign
    width: '100%',
    maxWidth: '500px',
    background: 'rgba(0,0,0,0.5)',
    boxShadow: '0 0 20px #D4AF37'
  };

  const handleSignup = () => {
    // بعد التسجيل بنجاح، نوجه التلميذ مباشرة لصفحة "الأهداف" لتبدأ الرحلة
    router.push('/goals');
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ color: '#D4AF37', fontSize: '1.8rem' }}>انضم لمملكة اللهجة المصرية</h2>
        <p style={{ color: '#fff', marginBottom: '25px' }}>كن جزءاً من قوة السحر والإبداع</p>

        <input type="text" placeholder="الاسم الملكي الكامل" style={inputStyle} />
        <input type="email" placeholder="البريد الإلكتروني" style={inputStyle} />
        <input type="password" placeholder="كلمة السر الملكية" style={inputStyle} />
        
        <select style={inputStyle}>
          <option value="">نوع العضوية</option>
          <option value="student">تلميذ</option>
          <option value="parent">ولي أمر</option>
          <option value="teacher">معلمة</option>
        </select>

        <button onClick={handleSignup} style={signupBtnStyle}>إنشاء الهوية الملكية</button>
      </div>
    </div>
  );
}

const inputStyle: CSSProperties = {
  display: 'block',
  width: '100%',
  margin: '15px 0',
  padding: '15px',
  borderRadius: '15px',
  border: '1px solid #D4AF37',
  fontSize: '1rem',
  backgroundColor: '#fff'
};

const signupBtnStyle: CSSProperties = {
  width: '100%',
  backgroundColor: '#D4AF37',
  color: '#002366',
  padding: '15px',
  border: 'none',
  borderRadius: '50px',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  cursor: 'pointer',
  marginTop: '10px'
};
