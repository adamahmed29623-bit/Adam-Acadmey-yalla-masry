/**
 * @file layout.tsx
 * @description الهيكل الملكي الأساسي لأكاديمية نفرتيتي - نسخة نهائية مستقرة متوافقة مع معايير DOM
 */

import React from 'react';

export const metadata = {
  title: 'أكاديمية نفرتيتي الملكية',
  description: 'منصة استعادة المجد الفكري والسيادة الملكية',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: '#050a15',
          color: 'white',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* شريط التنقل الملكي العلوي */}
        <nav
          style={{
            backgroundColor: 'rgba(10, 15, 26, 0.98)',
            backdropFilter: 'blur(12px)',
            padding: '1.2rem 6%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '2px solid #f59e0b',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
          }}
        >
          {/* الشعار */}
          <div
            style={{
              color: '#f59e0b',
              fontSize: '1.8rem',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ fontSize: '2.2rem' }}>🏺</span>
            نفرتيتي الملكية
          </div>

          {/* القائمة */}
          <ul
            style={{
              display: 'flex',
              gap: '2.5rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              alignItems: 'center',
            }}
          >
            <li style={navLinkStyle}>الرئيسية</li>
            <li style={navLinkStyle}>الدروس</li>
            <li style={navLinkStyle}>المعلمات</li>
            <li
              style={{
                ...navLinkStyle,
                color: '#050a15',
                backgroundColor: '#f59e0b',
                padding: '8px 20px',
                borderRadius: '12px',
                fontWeight: 'bold',
              }}
            >
              المتجر 🛒
            </li>
          </ul>
        </nav>

        {/* محتوى الصفحة الرئيسي */}
        <main
          style={{
            flex: 1,
            width: '100%',
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '2rem 6%',
            boxSizing: 'border-box',
          }}
        >
          {children}
        </main>

        {/* التذييل الملكي */}
        <footer
          style={{
            textAlign: 'center',
            padding: '2rem',
            borderTop: '1px solid rgba(245, 158, 11, 0.1)',
            color: 'rgba(255,255,255,0.4)',
            fontSize: '0.8rem',
          }}
        >
          © ٢٠٢٦ أكاديمية نفرتيتي • صرح السيادة الفكرية
        </footer>
      </body>
    </html>
  );
}

const navLinkStyle: React.CSSProperties = {
  cursor: 'pointer',
  fontSize: '1rem',
  whiteSpace: 'nowrap',
};
