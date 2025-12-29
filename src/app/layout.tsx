import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEFERTITI ROYAL ACADEMY | أكاديمية نفرتيتي الملكية",
  description: "المكان الأول لصناعة النخبة والرفعة",
  icons: {
    icon: "/favicon.ico", // تأكدي من وضع أيقونة ملكية في مجلد public لاحقاً
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#000814] text-white">
        {children}
      </body>
    </html>
  );
}
