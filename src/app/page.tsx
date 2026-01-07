"use client";
import React from 'react';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-serif">
      <Navbar />
      <main className="flex flex-col items-center justify-center pt-20">
        <h1 className="text-6xl font-bold text-[#D4AF37] animate-pulse">NEFERTITI ACADEMY</h1>
        <p className="mt-4 text-gray-400">The Royal Gates are Opening...</p>
      </main>
    </div>
  );
}
