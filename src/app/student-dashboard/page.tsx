"use client";
import React from 'react';

export default function StudentDashboard() {
  const stats = [
    { label: "Nile Points", value: "550 Pt", icon: "🏺" },
    { label: "Rank", value: "Royal Prince", icon: "👑" }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Welcome, Royal Student! 👑</h1>
      
      {/* قسم الإحصائيات */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-3xl shadow-lg border-b-4 border-yellow-500">
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-gray-500 text-sm font-bold uppercase">{stat.label}</div>
            <div className="text-2xl font-black text-blue-900">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* عرض الهدية المجانية (الخرطوش الملكي) */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2">🎁 Special Royal Gift!</h2>
          <p className="mb-6 opacity-90">Get your Custom Hieroglyphic Cartouche for FREE (Limited Time Offer: 3 Days Only!)</p>
          <a 
            href="https://admin.shopify.com" 
            target="_blank"
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-black px-8 py-3 rounded-full transition transform active:scale-95"
          >
            Claim My Free Gift Now
          </a>
        </div>
        <div className="absolute right-[-20px] top-[-20px] text-9xl opacity-10 uppercase font-black">Egypt</div>
      </div>
    </div>
  );
}
