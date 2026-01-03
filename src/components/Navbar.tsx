'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-slate-900 text-white shadow-2xl">
      <div className="font-bold text-xl">Yalla Masry 👑</div>
      <div className="flex gap-10">
        <Link href="/instructors" className="hover:text-yellow-400 font-bold">المعلمات</Link>
        <Link href="/challenges" className="hover:text-yellow-400 font-bold">التحديات</Link>
        <a href="https://your-shopify-link" className="hover:text-yellow-400 font-bold">المتجر 🏺</a>
      </div>
    </nav>
  );
}
