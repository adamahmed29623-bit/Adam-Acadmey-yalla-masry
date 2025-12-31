import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "أكاديمية نفرتيتي الملكية",
  description: "مملكة اللهجة المصرية: قوة السحر والإبداع",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, padding: 0, fontFamily: 'serif' }}>
        {children}
      </body>
    </html>
  );
}
