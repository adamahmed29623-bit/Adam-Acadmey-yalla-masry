import "./globals.css";
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-blue-50">
        {/* شريط التنقل الملكي - يربط كل ما ضاع منكِ */}
        <nav className="bg-blue-900 text-white p-4 shadow-xl flex justify-between items-center">
          <div className="font-black text-xl">Yalla Masry 👑</div>
          <div className="flex gap-4 text-sm font-bold">
            <Link href="/student-dashboard">Dashboard</Link>
            <Link href="/challenges">Challenges</Link>
            <Link href="/teachers">Teachers</Link>
            <a href="https://admin.shopify.com" target="_blank" className="text-yellow-400">Store 🏺</a>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
