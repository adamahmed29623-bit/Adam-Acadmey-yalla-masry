"use client";
import React from 'react';

export default function StudentDashboard() {
  const stats = [
    { label: "Nile Points", value: "550 Pt", icon: "🏺" },
    { label: "Rank", value: "Royal Prince", icon: "👑" }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Welcome, Royal Student! 👑</h1>
      
      {/* عرض الهدية المجانية من Shopify */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-3xl p-8 text-white shadow-2xl mb-10 text-center border-4 border-white">
          <h2 className="text-2xl font-black mb-2">🎁 EXCLUSIVE ROYAL GIFT!</h2>
          <p className="mb-6 font-bold text-blue-900">Queen Nefertiti grants you a FREE Custom Hieroglyphic Cartouche for 3 Days Only!</p>
          <a 
            href="https://admin.shopify.com" 
            target="_blank"
            className="inline-block bg-blue-900 text-white font-black px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            CLAIM MY FREE GIFT NOW
          </a>
      </div>

      {/* إحصائيات الطالب */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-2xl shadow-md text-center border-b-4 border-yellow-500">
            <div className="text-3xl mb-1">{stat.icon}</div>
            <div className="text-xs text-gray-500 font-bold uppercase">{stat.label}</div>
            <div className="text-xl font-black text-blue-900">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
