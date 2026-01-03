'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-100 p-8 text-center font-sans">
      <h1 className="text-4xl font-black text-slate-900 mb-4">Your Royal Roadmap 🏺</h1>
      <p className="text-amber-800 font-bold mb-8 italic">!Finish Level 1 to unlock your FREE Royal Cartouche</p>
      
      <div className="max-w-md mx-auto space-y-12">
        {/* Level 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-yellow-500">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Level 1: The Royal Accent</h2>
          <Link href="/challenges">
            <button className="bg-slate-800 text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-600 transition-all">
              Start Now
            </button>
          </Link>
        </div>

        {/* Levels 2 & 3 (Locked) */}
        <div className="opacity-50 pointer-events-none bg-gray-200 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-2">Level 2: Palace Conversations</h2>
          <span className="text-sm">🔒 Locked</span>
        </div>
      </div>
    </div>
  );
}
