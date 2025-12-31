import React from 'react';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ backgroundColor: '#4169E1', margin: 0, color: '#fff', fontFamily: 'serif' }}>
        
        {/* التاج الملكي: اسم الأكاديمية بالذهب والأبيض */}
        <header style={{ 
          padding: '30px', 
          textAlign: 'center', 
          borderBottom: '3px double #D4AF37',
          background: 'linear-gradient(to bottom, rgba(0,0,30,0.4), transparent)'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '10px' }}>👑</div>
          <h1 style={{ 
            margin: 0, 
            fontSize: '2.5rem', 
            fontWeight: 'bold',
            // تأثير اللون الذهبي المتداخل مع الأبيض
            background: 'linear-gradient(to bottom, #FFFFFF 0%, #D4AF37 50%, #FFFFFF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0px 4px 10px rgba(0,0,0,0.3)'
          }}>
            أكاديمية نفرتيتي الملكية
          </h1>
          <p style={{ color: '#D4AF37', letterSpacing: '2px', marginTop: '10px', fontWeight: 'bold' }}>
            مملكة اللهجة المصرية • قوة السحر والإبداع
          </p>
        </header>

        {/* الحاوية المركزية لترتيب الكلام */}
        <main style={{ 
          maxWidth: '900px', 
          margin: '40px auto', 
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          {children}
        </main>

      </body>
    </html>
  );
}رلعهخه اى 
