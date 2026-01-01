"use client";
import React from 'react';

const students = [
  { id: 1, name: "John (USA) 🇺🇸", points: 450, rank: "Gold" },
  { id: 2, name: "Li (China) 🇨🇳", points: 400, rank: "Silver" },
  { id: 3, name: "Emma (UK) 🇬🇧", points: 350, rank: "Bronze" },
];

export default function Leaderboard() {
  return (
    <div className="p-6 bg-white rounded-3xl shadow-2xl max-w-2xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">🏆 Royal Leaderboard</h2>
      
      <div className="space-y-4">
        {students.map((student) => (
          <div key={student.id} className="flex justify-between items-center p-4 border-b-2 border-gold-200 hover:bg-yellow-50 transition">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-yellow-600">#{student.id}</span>
              <span className="text-lg font-semibold">{student.name}</span>
            </div>
            <div className="text-right">
              <span className="text-xl font-bold text-green-700">{student.points} Pt</span>
              <p className="text-xs text-gray-500">Nile Points Accumulated</p>
            </div>
          </div>
        ))}
      </div>
      
      <p className="mt-8 text-center text-gray-600 italic">
        "Keep practicing your Egyptian to reach the Throne!" 👑
      </p>
    </div>
  );
}
