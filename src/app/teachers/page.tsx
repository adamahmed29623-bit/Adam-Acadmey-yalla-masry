"use client";
import { useState } from 'react';

// بيانات المعلمات بنظام الشرائح
const teacherData = [
  {
    id: 1,
    name: "أ/ أميرة (Amira)",
    title: "خبير اللهجة المصرية العامية",
    bio: "أساعدك تتكلم زي المصريين في الشارع والسوق بطلاقة.",
    languages: ["English", "Arabic"],
    price: "$20",
    image: "/teachers/amira.jpg",
    tags: ["Market Specialist", "Slang Guru"]
  },
  {
    id: 2,
    name: "أ/ نورهان (Norhan)",
    title: "متخصصة تأسيس ومحادثة",
    bio: "معي ستتعلم أساسيات اللغة المصرية بأسلوب ملكي راقٍ.",
    languages: ["English", "French", "Arabic"],
    price: "$25",
    image: "/teachers/norhan.jpg",
    tags: ["Beginner Friendly", "Grammar"]
  }
];

export default function TeacherSlides() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-10">🏛️ Choose Your Royal Tutor</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {teacherData.map((teacher) => (
          <div key={teacher.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden border-b-4 border-yellow-600 flex flex-col">
            {/* الجزء العلوي (صورة المعلمة) */}
            <div className="h-48 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
               <div className="w-24 h-24 bg-white rounded-full border-4 border-yellow-500 overflow-hidden">
                  {/* هنا تضعين صورة المعلمة لاحقاً */}
                  <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
               </div>
            </div>

            {/* تفاصيل الشريحة */}
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800">{teacher.name}</h2>
              <p className="text-yellow-600 font-semibold mb-3">{teacher.title}</p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{teacher.bio}</p>
              
              <div className="flex justify-center gap-2 mb-4">
                {teacher.tags.map(tag => (
                  <span key={tag} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center border-t pt-4">
                <span className="text-2xl font-bold text-green-700">{teacher.price}<span className="text-sm text-gray-400">/hr</span></span>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-xl font-bold transition transform active:scale-95">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
