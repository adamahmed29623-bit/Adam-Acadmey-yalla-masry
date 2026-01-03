'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-slate-900 text-white shadow-xl">
      <div className="font-bold text-xl">Yalla Masry 👑</div>
      <div className="flex gap-8"> {/* gap-8 سيحل مشكلة التداخل فوراً */}
        <Link href="/instructors" className="hover:text-yellow-400">المعلمات</Link>
        <Link href="/challenges" className="hover:text-yellow-400">التحديات</Link>
        <a href="https://your-shopify-link" className="hover:text-yellow-400">المتجر 🏺</a>
      </div>
    </nav>
  );
}
