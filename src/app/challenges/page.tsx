"use client";
import React from 'react';
import Link from 'next/link';

export default function ChallengesPage() {
  const roadmap = [
    { id: 1, title: "Level 1: The Royal Accent", type: "Pronunciation 🗣️", status: "Unlocked" },
    { id: 2, title: "Level 2: Palace Conversations", type: "Dialogue 💬", status: "Locked" },
    { id: 3, title: "Level 3: Scribe's Mission", type: "Writing ✍️", status: "Locked" }
  ];

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <h1 className="text-3xl font-black text-blue-900 text-center mb-8">Your Royal Roadmap 🏺</h1>
      
      {/* عرض الخرطوش الملكي كحافز للبدء */}
      <div className="bg-yellow-500 p-6 rounded-2xl mb-8 shadow-xl text-center">
        <p className="font-bold text-blue-900">Finish Level 1 to unlock your FREE Royal Cartouche! 🎁</p>
      </div>

      <div className="space-y-4">
        {roadmap.map((step) => (
          <div key={step.id} className={`p-6 rounded-2xl border-4 ${step.status === 'Unlocked' ? 'border-blue-900 bg-white' : 'border-gray-300 bg-gray-100 opacity-70'}`}>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-xs font-black text-yellow-600 uppercase">{step.type}</span>
                <h2 className="text-xl font-bold text-blue-900">{step.title}</h2>
              </div>
              {step.status === 'Unlocked' ? (
                <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-bold">Start Now</button>
              ) : (
                <span className="text-2xl">🔒</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
