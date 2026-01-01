"use client";
import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center border-b-2 border-yellow-500">
      {/* شعار الأكاديمية */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">👑</span>
        <h1 className="text-xl font-bold text-blue-900">Yalla Masry</h1>
      </div>

      {/* روابط التنقل */}
      <nav className="hidden md:flex gap-6 font-medium">
        <Link href="/" className="hover:text-yellow-600">Home</Link>
        <Link href="/challenges" className="hover:text-yellow-600">Challenges</Link>
        <Link href="/leaderboard" className="hover:text-yellow-600">Ranking</Link>
      </nav>

      {/* مبدل اللغات للطلاب الأجانب */}
      <div className="flex items-center gap-3">
        <select className="bg-gray-50 border border-gray-300 text-sm rounded-lg p-2 focus:ring-yellow-500">
          <option value="en">English (US/EU)</option>
          <option value="zh">Chinese (中国)</option>
          <option value="ur">Urdu (اردو)</option>
        </select>
        <button className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-bold">
          Login
        </button>
      </div>
    </header>
  );
}
