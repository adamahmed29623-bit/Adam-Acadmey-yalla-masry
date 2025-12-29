import "./globals.css"; // هذا السطر هو الذي سيجلب الألوان ويضع الكتابة في المنتصف
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEFERTITI ROYAL ACADEMY",
  description: "صرح العلم والرفعة",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}
