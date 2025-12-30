"use client";
import React from 'react';

export default function RoyalDashboard() {
  return (
    <div style={{
      backgroundColor: '#002366', 
      minHeight: '100vh',
      color: '#fff',
      fontFamily: 'serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      {/* الجزء العلوي: البردية الملكية */}
      <div style={{ marginBottom: '40px' }}>
         <h1 style={{ color: '#D4AF37', fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '10px' }}>
           Royal Control Panel
         </h1>
         <p style={{ fontSize: '1.3rem', color: '#fff' }}>
           تلميذ النيل: <span style={{ color: '#D4AF37' }}>تحتمس القوي</span>
         </p>
      </div>

      {/* حاوية الأزرار الرئيسية */}
      <div style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* زر مكتبة الدروس */}
        <button style={mainButtonStyle}>
          <span style={iconContainerStyle}>📚</span>
          Mastered Lessons Library
        </button>

        {/* زر الكلمات التي تحتاج مراجعة */}
        <button style={{...mainButtonStyle, borderColor: '#FF4C4C'}}>
          <span style={iconContainerStyle}>🔄</span>
          Words Needing Review (12)
        </button>

        {/* زر إحصائيات التقدم */}
        <button style={mainButtonStyle}>
          <span style={iconContainerStyle}>📊</span>
          Progress Statistics
        </button>

      </div>

      {/* ستايل التفاعل (Hover) */}
      <style jsx>{`
        button {
          transition: all 0.3s ease;
        }
        button:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(212, 175, 55, 0.4) !important;
          background: rgba(212, 175, 55, 0.1) !important;
        }
      `}</style>
    </div>
  );
}

// التنسيقات المصححة (لتجنب أخطاء الفيرسيل)
const mainButtonStyle: React.CSSProperties = {
  width: '100%',
  padding: '15px 25px',
  borderRadius: '50px',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '2px solid #D4AF37',
  color: '#fff',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center', // تم تصحيح الخطأ هنا (كان align-items)
  cursor: 'pointer',
  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
};

const iconContainerStyle: React.CSSProperties = {
  marginRight: '15px',
  fontSize: '1.5rem',
  background: 'rgba(255,255,255,0.1)',
  padding: '8px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
