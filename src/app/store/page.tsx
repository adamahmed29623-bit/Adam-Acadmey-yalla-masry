"use client";
import React from 'react';

export default function StorePage() {
  const items = [
    { id: 1, name: "وسام توت عنخ آمون", price: 500 },
    { id: 2, name: "بردية التفوق الملكية", price: 1000 }
  ];

  return (
    <div style={{ backgroundColor: '#4169E1', minHeight: '100vh', padding: '40px', textAlign: 'center' }}>
      <h1 style={{ color: '#D4AF37' }}>🎁 متجر المكافآت الملكي</h1>
      <div style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
        {items.map(item => (
          <div key={item.id} style={{ border: '2px solid #D4AF37', padding: '20px', borderRadius: '15px', background: 'rgba(255,255,255,0.1)' }}>
            <h3>{item.name}</h3>
            <p>الثمن: {item.price} نقطة ذهبية</p>
            <button style={{ backgroundColor: '#D4AF37', color: '#002366', border: 'none', padding: '10px 20px', borderRadius: '20px', fontWeight: 'bold' }}>استبدال</button>
          </div>
        ))}
      </div>
    </div>
  );
}
