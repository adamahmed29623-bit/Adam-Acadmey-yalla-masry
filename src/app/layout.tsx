// src/app/layout.tsx
import './globals.css'; // التأكد من وجود الملف لحل خطأ Module not found

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, background: '#050a15' }}>
        {/* شريط التنقل الملكي العلوي لربط كل الصفحات */}
        <nav style={{ background: '#0a0f1a', padding: '15px 50px', display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #f59e0b' }}>
          <div style={{ color: '#f59e0b', fontSize: '1.5rem', fontWeight: 'bold' }}>يالا مصري 🏺</div>
          <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, color: 'white' }}>
            <li style={{ cursor: 'pointer' }}>الرئيسية</li>
            <li style={{ cursor: 'pointer' }}>الدروس</li>
            <li style={{ cursor: 'pointer' }}>المعلمات</li>
            <li style={{ cursor: 'pointer', color: '#f59e0b' }}>المتجر 🛒</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
