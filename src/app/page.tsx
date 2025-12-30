"use client";
import React, { useState } from 'react';

export default function NefertitiAcademy() {
  const [activeTab, setActiveTab] = useState('dashboard'); // التحكم في الصفحة الظاهرة

  return (
    <div style={{ backgroundColor: '#002366', minHeight: '100vh', color: '#fff', fontFamily: 'serif' }}>
      
      {/* شريط التنقل العلوي الملكي */}
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px', background: 'rgba(0,0,0,0.2)', borderBottom: '2px solid #D4AF37' }}>
        <button onClick={() => setActiveTab('dashboard')} style={activeTab === 'dashboard' ? activeTabStyle : tabStyle}>لوحة التحكم</button>
        <button onClick={() => setActiveTab('challenges')} style={activeTab === 'challenges' ? activeTabStyle : tabStyle}>التحديات الملكية</button>
        <button onClick={() => setActiveTab('booking')} style={activeTab === 'booking' ? activeTabStyle : tabStyle}>حجز الدروس</button>
      </nav>

      <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
        
        {/* 1. عرض لوحة التحكم */}
        {activeTab === 'dashboard' && (
          <div id="dashboard-view">
            <h1 style={{ color: '#D4AF37', textAlign: 'center', fontSize: '2.5rem' }}>Royal Control Panel</h1>
            <p style={{ textAlign: 'center' }}>تلميذ النيل: <span style={{ color: '#D4AF37' }}>تحتمس القوي</span></p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px' }}>
              <button style={buttonStyle}>📚 Mastered Lessons Library</button>
              <button style={{...buttonStyle, borderColor: '#FF4C4C'}}>🔄 Words Needing Review (12)</button>
              <button style={buttonStyle}>📊 Progress Statistics</button>
            </div>
          </div>
        )}

        {/* 2. عرض نظام التحديات (كما في صورتك) */}
        {activeTab === 'challenges' && (
          <div id="challenges-view">
             <div style={{ border: '2px solid #D4AF37', borderRadius: '20px', padding: '20px', background: 'rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                   <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#D4AF37' }}>تحتمس القوي</span>
                   <span style={{ background: '#D4AF37', color: '#002366', padding: '5px 15px', borderRadius: '10px' }}>نقاط النيل: 1325</span>
                </div>
                <div style={{ background: '#004080', padding: '15px', borderRadius: '15px', marginBottom: '10px' }}>
                   <p style={{ color: '#90EE90' }}>بائع الطماطم: صباح الخير يا ريس، محتاج حاجة؟</p>
                </div>
                <div style={{ background: '#2E8B57', padding: '15px', borderRadius: '15px', textAlign: 'right' }}>
                   <p>تحتمس: صباح النور، عايز كيلو طماطم لو سمحت.</p>
                </div>
             </div>
             
             {/* لوحة الصدارة مصغرة بالأسفل */}
             <div style={{ marginTop: '30px', borderTop: '1px solid #D4AF37', paddingTop: '20px' }}>
                <h3 style={{ textAlign: 'center' }}>لوحة صدارة الأهرامات</h3>
                <div style={leaderboardStyle}>👑 1. الملكة حتشبسوت - 1500</div>
                <div style={{...leaderboardStyle, backgroundColor: 'rgba(212, 175, 55, 0.2)'}}>👤 3. أنت (تحتمس) - 1200</div>
             </div>
          </div>
        )}

        {/* 3. عرض نظام الحجز */}
        {activeTab === 'booking' && (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#D4AF37' }}>📅 حجز درس فرعوني خاص</h2>
            <div style={{ background: '#fff', color: '#002366', padding: '20px', borderRadius: '20px', marginTop: '20px' }}>
               <p style={{ fontWeight: 'bold' }}>السبت، 29 نوفمبر 2025</p>
               <div style={{ background: '#D4AF37', padding: '10px', borderRadius: '10px', marginTop: '10px', color: '#000' }}>
                  10:00 صباحاً - مقدمة في الهيروغليفية
               </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// التنسيقات
const tabStyle = { background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '1.1rem' };
const activeTabStyle = { ...tabStyle, color: '#D4AF37', fontWeight: 'bold', borderBottom: '2px solid #D4AF37' };
const buttonStyle = { width: '100%', padding: '15px', borderRadius: '50px', background: 'rgba(255,255,255,0.05)', border: '2px solid #D4AF37', color: 'white', cursor: 'pointer' };
const leaderboardStyle = { padding: '10px', borderBottom: '1px solid rgba(212,175,55,0.2)', display: 'flex', justifyContent: 'space-between' };
