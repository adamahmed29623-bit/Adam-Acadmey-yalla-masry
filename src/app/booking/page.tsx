"use client";
import React, { CSSProperties, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BookingPage() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState('');

  const containerStyle: CSSProperties = {
    backgroundColor: '#4169E1',
    minHeight: '100vh',
    padding: '40px',
    textAlign: 'center' as const,
    direction: 'rtl',
    color: '#fff'
  };

  const bookingCard: CSSProperties = {
    backgroundColor: 'rgba(0, 35, 102, 0.5)',
    border: '2px solid #D4AF37',
    borderRadius: '30px',
    padding: '40px',
    maxWidth: '600px',
    margin: '0 auto',
    boxShadow: '0 15px 40px rgba(0,0,0,0.4)'
  };

  const sessions = [
    { id: 1, time: '10:00 AM', type: 'جلسة صباحية - إشراق النيل' },
    { id: 2, time: '04:00 PM', type: 'جلسة المساء - سحر اللوتس' },
    { id: 3, time: '09:00 PM', type: 'مجلس الحكماء - سهرة ملكية' }
  ];

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#D4AF37', fontSize: '2.5rem', marginBottom: '10px' }}>📅 حجز الجلسات الملكية</h1>
      <p style={{ marginBottom: '40px' }}>اختر موعد لقاء المعلمة لتبدأ رحلة السحر</p>

      <div style={bookingCard}>
        <div style={{ fontSize: '50px', marginBottom: '20px' }}>🪷</div>
        <h3 style={{ color: '#D4AF37', marginBottom: '25px' }}>المواعيد المتاحة لهذا الأسبوع</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {sessions.map(session => (
            <div 
              key={session.id} 
              onClick={() => setSelectedDate(session.time)}
              style={{
                ...sessionItemStyle,
                borderColor: selectedDate === session.time ? '#D4AF37' : 'rgba(212, 175, 55, 0.3)',
                backgroundColor: selectedDate === session.time ? 'rgba(212, 175, 55, 0.2)' : 'transparent'
              }}
            >
              <span style={{ fontWeight: 'bold' }}>{session.time}</span>
              <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>{session.type}</span>
            </div>
          ))}
        </div>

        <button 
          disabled={!selectedDate}
          onClick={() => alert('تم إرسال طلب الحجز للمملكة بنجاح! 👑')}
          style={{
            ...confirmBtnStyle,
            opacity: selectedDate ? 1 : 0.5,
            cursor: selectedDate ? 'pointer' : 'not-allowed'
          }}
        >
          تأكيد الحجز الملكي
        </button>
        
        <button 
          onClick={() => router.push('/academy')}
          style={{ background: 'none', border: 'none', color: '#fff', marginTop: '20px', cursor: 'pointer', textDecoration: 'underline' }}
        >
          العودة للوحة التحكم
        </button>
      </div>
    </div>
  );
}

const sessionItemStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 25px',
  borderRadius: '15px',
  border: '1px solid',
  cursor: 'pointer',
  transition: '0.3s'
};

const confirmBtnStyle: CSSProperties = {
  width: '100%',
  marginTop: '30px',
  padding: '15px',
  borderRadius: '50px',
  border: 'none',
  backgroundColor: '#D4AF37',
  color: '#002366',
  fontWeight: 'bold',
  fontSize: '1.2rem'
};
