"use client";
import React, { useState } from 'react';

export default function RoyalClassroom() {
  return (
    <div className="min-h-screen bg-blue-900 text-white p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* شاشة الفيديو (أو رابط الاجتماع) */}
        <div className="lg:col-span-2 bg-black rounded-3xl aspect-video flex items-center justify-center border-4 border-yellow-600 shadow-2xl relative">
          <p className="text-yellow-500 font-bold">Waiting for Teacher Amira... 🎥</p>
          <div className="absolute bottom-4 left-4 bg-red-600 px-4 py-1 rounded-full text-xs animate-pulse">
            LIVE SESSION
          </div>
        </div>

        {/* لوحة المعلومات الجانبية */}
        <div className="bg-white text-blue-900 rounded-3xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2">📖 Today's Lesson</h2>
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-xl border-l-4 border-yellow-600">
              <p className="font-bold text-sm text-yellow-800">Topic:</p>
              <p className="font-medium text-lg">Buying Vegetables (At the Market)</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-600">
              <p className="font-bold text-sm text-green-800">Current Challenge:</p>
              <p className="text-sm">How to ask for 0.25kg of Tomatoes? 🍅</p>
            </div>
          </div>

          <button className="w-full mt-10 bg-blue-700 text-white py-4 rounded-2xl font-bold hover:bg-blue-800 transition">
            Enter Zoom/Meet Class
          </button>
        </div>

      </div>
    </div>
  );
}
