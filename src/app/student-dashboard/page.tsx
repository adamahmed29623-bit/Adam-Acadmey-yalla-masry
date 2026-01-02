"use client";
import React from 'react';

export default function StudentDashboard() {
  const stats = [
    { label: "Nile Points", value: "550 Pt", icon: "🏺" },
    { label: "Rank", value: "Royal Prince", icon: "👑" }
  ]; // تأكدي أن هذا السطر ينتهي هنا ولا يوجد قوس زائد بعده

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Welcome, Royal Student! 👑</h1>
      
      {/* قسم الهدية المجانية من Shopify */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-3xl p-8 text-white shadow-2xl mb-10 text-center border-4 border-white">
          <h2 className="text-2xl font-black mb-2">🎁 SPECIAL GIFT FROM NEFERTITI!</h2>
          <p className="mb-6 font-bold text-blue-900">Get your Custom Royal Cartouche for FREE (3 Days Only)!</p>
          <a 
            href="https://admin.shopify.com" 
            target="_blank"
            className="inline-block bg-blue-900 text-white font-black px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            CLAIM MY FREE GIFT
          </a>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-3xl shadow-lg border-b-4 border-yellow-500 text-center">
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-gray-500 text-sm font-bold uppercase">{stat.label}</div>
            <div className="text-2xl font-black text-blue-900">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
