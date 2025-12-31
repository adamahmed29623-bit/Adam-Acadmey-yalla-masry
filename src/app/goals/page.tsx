"use client";
import React, { CSSProperties } from 'react';
import { useRouter } from 'next/navigation';

export default function GoalsPage() {
  const router = useRouter();

  const containerStyle: CSSProperties = {
    backgroundColor: '#4169E1',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center'
  };

  const goals = [
    { id: 1, title: 'إتقان اللهجة المصرية', icon: '🗣️' },
    { id: 2, title: 'فهم الثقافة والقيم', icon: '🏺' },
    { id: 3, title: 'الاحتراف العملي', icon: '💼' }
  ];

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#D4AF37', marginBottom: '30px' }}>ما هو هدفك الملكي اليوم؟</h1>
      <div style={{ display: 'grid', gap: '20px', width: '100%', maxWidth: '400px' }}>
        {goals.map(goal => (
          <button 
            key={goal.id} 
            onClick={() => router.push('/placement-test')} // ينتقل للمحطة الثالثة: المستوى
            style={goalBtnStyle}
          >
            <span style={{ fontSize: '24px', marginLeft: '10px' }}>{goal.icon}</span>
            {goal.title}
          </button>
        ))}
      </div>
    </div>
  );
}

const goalBtnStyle: CSSProperties = {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: '#fff',
  padding: '20px',
  borderRadius: '15px',
  border: '2px solid #D4AF37',
  fontSize: '1.2rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
