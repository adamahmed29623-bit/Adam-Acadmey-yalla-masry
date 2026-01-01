"use client";
import { useState } from 'react';
import { processChallenge } from '../../lib/gemini'; // المسار الذي نجح في Vercel

export default function ChallengesPage() {
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [points, setPoints] = useState(0);

  const handleSubmit = async () => {
    if (!userAnswer.trim()) return;
    
    setFeedback("Wait... Royal Tutor is checking... ⏳");
    
    try {
      // إرسال التحدي لـ Gemini (المعلم الملكي)
      const result = await processChallenge(
        userAnswer, 
        "English", 
        "Grocery Store: Asking for 0.25kg Tomatoes"
      );
      
      setFeedback(result);
      // إضافة النقاط الذهبية كما في خطتك
      if (result.toLowerCase().includes("correct") || result.includes("برافو")) {
        setPoints(prev => prev + 50);
      }
    } catch (error) {
      setFeedback("The Nile is quiet. Try again, Royal Student.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* رأس الصفحة الملكي */}
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border-t-4 border-yellow-600">
        <div className="p-6 flex justify-between items-center bg-yellow-50">
          <h1 className="text-2xl font-bold text-blue-900">👑 Yalla Masry</h1>
          <div className="text-center">
            <span className="block text-yellow-600 font-bold text-xl">{points} Pt</span>
            <span className="text-xs text-gray-500 font-bold">نقاطك الذهبية</span>
          </div>
        </div>

        <div className="p-8">
          <div className="bg-green-800 text-white p-6 rounded-2xl mb-6 relative">
            <h2 className="text-xl font-bold mb-2">!تحدي الكتابة اليومي</h2>
            <p className="text-lg">كيف تطلب "ربع كيلو طماطم" من البائع في السوق؟</p>
            <span className="absolute bottom-2 right-4 text-yellow-400 text-sm font-bold">مكافأة: +50 نقطة</span>
          </div>

          <textarea 
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-full p-4 border-2 border-gray-200 rounded-2xl mb-4 text-right focus:border-green-600 transition outline-none"
            placeholder="...اكتب إجابتك هنا باللغة العربية"
            rows={3}
          />

          <button 
            onClick={handleSubmit}
            className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-2xl font-bold text-lg shadow-lg transform active:scale-95 transition"
          >
            أرسل الإجابة وقَيِّمها
          </button>

          {feedback && (
            <div className="mt-8 p-6 bg-blue-50 border-r-4 border-blue-500 rounded-xl animate-fade-in text-right">
              <p className="text-gray-800 leading-relaxed whitespace-pre-wrap font-medium">
                {feedback}
              </p>
            </div>
          )}
        </div>
      </div>
      
      <p className="text-center mt-6 text-gray-400 text-sm">© 2026 Yalla Masry Academy - Speak Like Royalty</p>
    </div>
  );
}
