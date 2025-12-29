import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "أكاديمية يلا مصري | Yalla Masry Academy",
  description: "بوابة الرقي والفخامة",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* ربط مكتبة الأيقونات مباشرة عبر CDN (مثل نظام الفاير بيس) */}
        <script src="https://unpkg.com/lucide@latest"></script>
        <style>{`
          body {
            margin: 0;
            background-color: #000814;
            color: white;
            font-family: sans-serif;
          }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
