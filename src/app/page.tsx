"use client";
import React from 'react';

// البيانات ثابتة هنا لضمان عدم حدوث خطأ "Module not found"
const academyData = {
  name: "أكاديمية نفرتيتي الملكية",
  theme: { primary: "#002366", secondary: "#D4AF37" },
  sections: [
    { id: 1, title: "Mastered Lessons", icon: "📚" },
    { id: 2, title: "Words Needing Review", icon: "🔄", count: 12 },
    { id: 3, title: "Progress Statistics", icon: "📊" }
  ]
};

export default function RoyalDashboard() {
  return (
    <div style={{ backgroundColor: '#002366', minHeight: '100vh', color: '#fff', fontFamily: 'serif', padding: '20px' }}>
      
      {/* 1. نظام التحديات (تحتمس القوي) */}
      <div style={cardStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <span style={{ color: '#D4AF37', fontWeight: 'bold' }}>تحتمس القوي</span>
          <span>نقاط النيل: 1325</span>
        </div>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '15px' }}>
          <p style={{ color: '#90EE90' }}>بائع الطماطم: صباح الخير يا ريس، محتاج حاجة؟</p>
          <p style={{ color: '#D4AF37', textAlign: 'right' }}>تحتمس: صباح النور، عايز كيلو طماطم لو سمحت</p>
        </div>
      </div>

      {/* 2. لوحة صدارة الأهرامات */}
      <div style={{ ...cardStyle, borderColor: '#D4AF37' }}>
        <h3 style={{ textAlign: 'center', color: '#D4AF37' }}>لوحة صدارة الأهرامات</h3>
        <div style={leaderboardItem}>👑 1. الملكة حتشبسوت - 1500</div>
        <div style={{ ...leaderboardItem, backgroundColor: 'rgba(212, 175, 55, 0.3)' }}>👤 3. تحتمس القوي - 1200</div>
        <div style={leaderboardItem}>🌸 4. نفرتيتي الرشيقة - 980</div>
      </div>

      {/* 3. حجز درس فرعوني */}
      <div style={{ ...cardStyle, backgroundColor: '#fff', color: '#002366' }}>
        <h3 style={{ color: '#002366' }}>📅 حجز درس فرعوني خاص</h3>
        <div style={bookingSlot}>
          <p>10:00 صباحاً - مقدمة في الهيروغليفية</p>
          <small>المعلم: أحمد الحكيم</small>
        </div>
      </div>

      <style jsx>{`
        button:hover { transform: scale(1.05); transition: 0.3s; }
      `}</style>
    </div>
  );
}

// التنسيقات (Styles)
const cardStyle = {
  border: '2px solid rgba(212, 175, 55, 0.5)',
  borderRadius: '25px',
  padding: '20px',
  marginBottom: '20px',
  background: 'rgba(255,255,255,0.05)'
};

const leaderboardItem = {
  padding: '10px',
  borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
  display: 'flex',
  justifyContent: 'space-between'
};

const bookingSlot = {
  background: '#D4AF37',
  padding: '10px',
  borderRadius: '15px',
  color: '#002366',
  fontWeight: 'bold'
};
