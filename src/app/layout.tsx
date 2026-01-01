import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // استدعاء الهيدر الذي وضعناه في components

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nefertiti Royal Academy",
  description: "A unique identity for learning Egyptian Arabic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* الهيدر يظهر هنا ليكون ثابتاً في كل الصفحات */}
        <Header /> 
        
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        
        {/* يمكنك إضافة Footer ملكي هنا مستقبلاً */}
      </body>
    </html>
  );
}
