"use client";
import React from 'react';
import Link from 'next/link';

export default function Challenges() {
  return (
    <div style={{ backgroundColor: '#002366', minHeight: '100vh', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: '#D4AF37' }}>نظام التحديات الملكية</h1>
      
      <div style={{ border: '2px solid #D4AF37', borderRadius: '20px', padding: '20px', margin: '20px auto', maxWidth: '600px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#D4AF37' }}>
          <span>تحتمس القوي</span>
          <span>نقاط النيل: 1325</span>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '15px', marginTop: '20px', textAlign: 'right' }}>
          <p style={{ color: '#90EE90' }}>بائع الطماطم: صباح الخير يا ريس، محتاج حاجة؟</p>
          <p>تحتمس: صباح النور، عايز كيلو طماطم لو سمحت.</p>
        </div>
      </div>

      <Link href="/">
        <button style={{ marginTop: '20px', color: '#D4AF37', background: 'none', border: 'none', cursor: 'pointer' }}>
          ⬅️ العودة للوحة التحكم
        </button>
      </Link>
    </div>
  );
}
