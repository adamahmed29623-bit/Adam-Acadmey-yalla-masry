"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const sections = [
    { title: "رواق المعلمات", path: "/teachers", desc: "نخبة الصفوة لتعليمكِ" },
    { title: "ديوان التحديات", path: "/challenges", desc: "اختبري مهاراتكِ الملكية" },
    { title: "لوحة التحكم", path: "/dashboard", desc: "تابعي تقدمكِ يا سمو الأميرة" },
    { title: "ديوان القرآن", path: "/quran", desc: "بركة الأكاديمية ونورها" }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'radial-gradient(circle at center, #001d3d 0%, #000814 100%)', 
      color: 'white', 
      direction: 'rtl',
      fontFamily: 'sans-serif',
      padding: '40px 20px'
    }}>
      {/* الشعار الملكي بسيط ومستقل */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div style={{ fontSize: '50px', marginBottom: '10px' }}>👑</div>
        <h1 style={{ fontSize: '3rem', fontWeight: '900', fontStyle: 'italic', margin: '0' }}>أكاديمية يلا مصري</h1>
        <p style={{ color: '#ffc300', fontSize: '1.5rem', fontWeight: 'bold', marginTop: '10px' }}>حيث يبدأ رقي "نوف"</p>
      </div>

      {/* شبكة الأقسام */}
      <div style={{ 
        maxWidth: '1000px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '25px' 
      }}>
        {sections.map((sec, i) => (
          <div 
            key={i}
            onClick={() => router.push(sec.path)}
            style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              border: '1px solid rgba(255, 195, 0, 0.2)', 
              padding: '35px', 
              borderRadius: '40px', 
              cursor: 'pointer',
              textAlign: 'center',
              transition: '0.3s'
            }}
          >
            <h3 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '10px' }}>{sec.title}</h3>
            <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>{sec.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
