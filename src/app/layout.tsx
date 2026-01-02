import "./globals.css";
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-900 text-white p-5 shadow-2xl flex justify-between items-center sticky top-0 z-50">
          <div className="text-2xl font-black tracking-tighter">Yalla Masry 👑</div>
          <div className="flex gap-6 font-bold text-sm">
            <Link href="/student-dashboard" className="hover:text-yellow-400">Dashboard</Link>
            <Link href="/challenges" className="hover:text-yellow-400">Challenges</Link>
            <Link href="/teachers" className="hover:text-yellow-400">Teachers</Link>
            <a href="https://your-store-link.myshopify.com" target="_blank" className="bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-xs">Shop Now 🏺</a>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
