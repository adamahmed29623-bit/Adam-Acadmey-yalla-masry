"use client";
import React, { CSSProperties } from 'react';
import { useRouter } from 'next/navigation';

export default function RoyalLandingPage() {
  const router = useRouter();

  // تنسيق الحاوية الرئيسية بالأزرق الملكي
  const containerStyle: CSSProperties = {
    backgroundColor: '#4169E1', 
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
    color: '#ffffff',
    direction: 'rtl',
    overflowX: 'hidden'
  };

  const heroSection: CSSProperties = {
    border: '4px double #D4AF37',
    padding: '50px 30px',
    borderRadius: '40px',
    background: 'rgba(0, 35, 102, 0.3)',
    boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)',
    maxWidth: '800px',
    width: '90%'
  };

  return (
    <div style={containerStyle}>
      <div style={heroSection}>
        {/* أيقونة ملكية تعبر عن نفرتيتي أو توت */}
        <div style={{ fontSize: '80px', marginBottom: '20px' }}>👑</div>
        
        <h1 style={{ fontSize: '3.5rem', color: '#D4AF37', margin: '10px 0', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          أكاديمية نفرتيتي الملكية
        </h1>
        
        <h2 style={{ fontSize: '1.8rem', fontWeight: 'lighter', marginBottom: '30px', letterSpacing: '2px' }}>
          مملكة اللهجة المصرية: قوة السحر والإبداع
        </h2>

        <p style={{ fontSize: '1.3rem', lineHeight: '1.8', marginBottom: '40px', color: '#f0f0f0' }}>
          أهلاً بكِ في مهد اللغة والجمال. انضمي إلينا لتكتشفي أسرار اللهجة المصرية 
          في رحلة تجمع بين الأصالة والتميز الملكي.
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={() => router.push('/signup')} 
            style={primaryBtn}
          >
            ابدأ رحلتك الملكية الآن
          </button>
          
          <button 
            onClick={() => router.push('/login')} 
            style={secondaryBtn}
          >
            تسجيل دخول الأعضاء
          </button>
        </div>
      </div>

      {/* تذييل الصفحة الملكي */}
      <footer style={{ marginTop: '50px', color: '#D4AF37', fontSize: '0.9rem' }}>
        © 2025 أكاديمية نفرتيتي - جميع الحقوق محفوظة للمملكة
      </footer>
    </div>
  );
}

// أزرار التحكم الملكية
const primaryBtn: CSSProperties = {
  backgroundColor: '#D4AF37',
  color: '#002366',
  padding: '18px 45px',
  borderRadius: '50px',
  border: 'none',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  cursor: 'pointer',
  transition: '0.3s',
  boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
};

const secondaryBtn: CSSProperties = {
  backgroundColor: 'transparent',
  color: '#D4AF37',
  padding: '18px 45px',
  borderRadius: '50px',
  border: '2px solid #D4AF37',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  cursor: 'pointer',
  transition: '0.3s'
};
