import React from "react";
import type { Metadata } from "next";
import "./globals.css"; // تأكدي من وجود ملف التنسيق العام

export const metadata: Metadata = {
  title: "أكاديمية نفرتيتي الملكية | إعادة صياغة الهوية",
  description: "منصة تعليمية ملكية لتعلم اللهجة المصرية بروح حتشبسوت ونفرتيتي",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* استدعاء خطوط فخمة تدعم الملوكية العربية */}
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cairo:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={bodyStyle}>
        {/* تأثير الوهج الملكي في الخلفية */}
        <div style={royalOverlay}></div>
        
        {/* المحتوى الرئيسي (الصفحات التي ندمجها) */}
        <div style={contentWrapper}>
          {children}
        </div>

        {/* تذيل الصفحة الملكي (Footer) */}
        <footer style={footerStyle}>
          <p>© 2026 أكاديمية نفرتيتي الملكية - نحن لا نبني مشروعاً، نحن نعيد صياغة الهوية</p>
        </footer>
      </body>
    </html>
  );
}

// --- التنسيقات الهيكلية النهائية ---

const bodyStyle: React.CSSProperties = {
  margin: 0,
  padding: 0,
  backgroundColor: "#05050a", // الأسود العميق
  color: "#ffffff",
  fontFamily: "'Cairo', 'Amiri', serif",
  minHeight: "100vh",
  overflowX: "hidden",
  position: "relative",
};

const royalOverlay: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  // تدرج شعاعي يعطي إضاءة خافتة في المنتصف كأنها هالة حول العرش
  background: "radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%)",
  pointerEvents: "none",
  zIndex: 1,
};

const contentWrapper: React.CSSProperties = {
  position: "relative",
  zIndex: 2, // لضمان ظهور المحتوى فوق الهالة
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "40px 20px",
  borderTop: "1px solid rgba(212, 175, 55, 0.1)",
  fontSize: "0.9rem",
  color: "rgba(212, 175, 55, 0.6)",
  background: "rgba(0, 0, 0, 0.5)",
};
