import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yalla Masry Academy",
  description: "Connect to the throne and learn the language of Pharaohs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-blue-900">
        {/* قمنا بإزالة الـ Header مؤقتاً لحل مشكلة Module not found */}
        <main>{children}</main>
      </body>
    </html>
  );
}
