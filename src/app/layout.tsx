import React from 'react';
import './globals.css';

export const metadata = {
  title: 'أكاديمية نفرتيتي الملكية',
  description: 'إتقان اللهجة المصرية برقي ملكي',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
