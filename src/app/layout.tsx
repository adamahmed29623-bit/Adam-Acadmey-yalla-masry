import React from 'react';
import './globals.css'; // تأكدي أن هذا الملف موجود أو احذفي السطر

export const metadata = {
  title: 'أكاديمية نفرتيتي الملكية',
  description: 'مملكة اللهجة المصرية - قوة السحر والإبداع',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#002366' }}>
        {/* هذا هو المكان الذي ستظهر فيه الـ 14 صفحة التي بناها النظام */}
        {children}
      </body>
    </html>
  );
}
