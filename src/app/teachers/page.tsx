"use client";
import React, { CSSProperties } from 'react';
import { useRouter } from 'next/navigation';

export default function TeachersPage() {
  const router = useRouter();

  // الحاوية الرئيسية بالأزرق الملكي
  const containerStyle: CSSProperties = {
    backgroundColor: '#4169E1',
    minHeight: '100vh',
    padding: '40px 20px',
    direction: 'rtl' as const,
    color: '#ffffff'
  };

  // بطاقة المعلمة (طبق الأصل من الصورة)
  const teacherCard: CSSProperties = {
    border: '3px solid #D4AF37',
    borderRadius: '35px',
    padding: '0',
    background: 'rgba(0, 35, 102, 0.4)',
    maxWidth: '850px',
    margin: '0 auto',
    overflow: 'hidden',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: 'center' as const, color: '#D4AF37', marginBottom: '30px', fontSize: '2.5rem' }}>
        🏛️ معلمات أكاديمية نفرتيتي
      </h1>

      <div style={teacherCard}>
        {/* الجزء العلوي: الهوية الملكية */}
        <div style={{ padding: '30px', borderBottom: '2px solid #D4AF37', textAlign: 'center' as const }}>
          <div style={lotusCircle}>🪷</div>
          <h2 style={{ color: '#ffffff', fontSize: '2rem', margin: '10px 0' }}>المعلمة: أريج السحر</h2>
          <p style={{ color: '#D4AF37', fontSize: '1.2rem', margin: '0' }}>خيرة معلمات اللهجة والقيم</p>
          <div style={statusBadge}>الحالة: نشطة 🟢</div>
          <h3 style={{ marginTop: '15px' }}>200 ج.م / ساعة</h3>
        </div>

        {/* الجزء الأوسط: فيديو التعريف (العنصر الجاذب) */}
        <div style={{ padding: '20px', backgroundColor: 'rgba(0,0,0,0.3)' }}>
           <h4 style={{ color: '#D4AF37', marginBottom: '15px' }}>🎥 عرض القوة السحرية للمعلمة:</h4>
           <div style={videoBox}>
             <span style={{ fontSize: '60px' }}>▶️</span>
             <p>اضغط لمشاهدة رسالة المعلمة للطلاب</p>
           </div>
        </div>

        {/* الجزء السفلي: المواعيد والوصف */}
        <div style={{ padding: '30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={infoBox}>
            <h4 style={{ color: '#D4AF37' }}>📜 نبذة شخصية:</h4>
            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
              متخصصة في غرس حب اللهجة المصرية في نفوس الصغار بأسلوب ملكي فريد يجمع بين المرح والتعليم السحري.
            </p>
          </div>
          <div style={infoBox}>
            <h4 style={{ color: '#D4AF37' }}>📅 المواعيد المتاحة:</h4>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
               <button style={timeBtn}>11:30 ص</button>
               <button style={timeBtn}>05:00 م</button>
               <button style={timeBtn}>08:00 م</button>
            </div>
          </div>
        </div>

        {/* زر الحجز النهائي */}
        <button 
          onClick={() => router.push('/booking')} 
          style={bookBtn}
        >
          حجز جلسة ملكية مع المعلمة
        </button>
      </div>
    </div>
  );
}

// ستايلات العناصر الملكية
const lotusCircle: CSSProperties = { width: '100px', height: '100px', borderRadius: '50%', border: '3px solid #D4AF37', margin: '0 auto 15px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '50px', background: 'rgba(212, 175, 55, 0.2)' };
const statusBadge: CSSProperties = { backgroundColor: '#28a745', color: '#fff', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', fontSize: '0.9rem', marginTop: '10px' };
const videoBox: CSSProperties = { width: '100%', height: '350px', backgroundColor: '#000', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', border: '1px solid #D4AF37' };
const infoBox: CSSProperties = { background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '20px', border: '1px solid rgba(212, 175, 55, 0.2)' };
const timeBtn: CSSProperties = { padding: '8px 15px', backgroundColor: 'transparent', color: '#D4AF37', border: '1px solid #D4AF37', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' };
const bookBtn: CSSProperties = { width: '100%', padding: '20px', border: 'none', backgroundColor: '#D4AF37', color: '#002366', fontWeight: 'bold', fontSize: '1.4rem', cursor: 'pointer', transition: '0.3s' };
