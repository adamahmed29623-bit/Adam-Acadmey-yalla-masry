export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{
        backgroundImage: "url('/images/brand/welcome_telegram.png')", // خلفية البرقية
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        margin: 0,
        fontFamily: 'serif'
      }}>
        {/* الهيدر الملكي */}
        <header style={{ padding: '20px', textAlign: 'center' }}>
          <img src="/images/brand/academy_logo.png" alt="Logo" style={{ width: '120px' }} />
        </header>

        <main>{children}</main>
        
        <footer style={{ textAlign: 'center', padding: '20px', color: '#D4AF37' }}>
          © أكاديمية نفرتيتي الملكية - سحر الحضارة المصرية
        </footer>
      </body>
    </html>
  );
}
