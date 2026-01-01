"use client";
import { useState } from 'react';
import { processChallenge } from '../../lib/gemini'; // استدعاء المساعد الذكي
export default function ChallengesPage() {
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [language, setLanguage] = useState("en"); // افتراضياً للطالب الأمريكي/الأوروبي

  // مصفوفة الأوامر المترجمة (الجسر اللغوي)
  const translations = {
    en: { instruction: "Challenge: How do you ask for 2kg of Tomatoes?", btn: "Submit Answer", placeholder: "Type in Egyptian Arabic..." },
    zh: { instruction: "挑战：你如何 cross 2公斤西红柿？", btn: "提交回答", placeholder: "用埃及阿拉伯语输入..." },
    ur: { instruction: "چیلنج: آپ 2 کلو ٹماٹر کیسے مانگیں گے؟", btn: "جواب جمع کریں", placeholder: "مصری عربی میں لکھیں..." }
  };

  const handleSubmit = async () => {
    setFeedback("Wait... Royal Tutor is checking... ⏳");
    
    // إرسال الإجابة لـ Gemini للتصحيح بلغة الطالب
    const result = await processChallenge(
      userAnswer, 
      language, 
      "Grocery Store: Asking for 2kg of tomatoes"
    );
    setFeedback(result);
  };

  return (
    <div className="p-8 text-center bg-gold-gradient min-h-screen">
      <h1 className="text-3xl font-bold mb-6">🏛️ Nile Challenges</h1>
      
      {/* اختيار لغة الأوامر (للطالب) */}
      <select 
        onChange={(e) => setLanguage(e.target.value)}
        className="mb-8 p-2 rounded border-2 border-yellow-600"
      >
        <option value="en">English (USA/Europe)</option>
        <option value="zh">Chinese (中国)</option>
        <option value="ur">Urdu (اردو)</option>
      </select>

      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-2xl">
        {/* تعليمات التحدي تظهر بلغة الطالب */}
        <p className="text-xl mb-4 font-semibold text-blue-900">
          {translations[language].instruction}
        </p>

        {/* زر النطق المصري الثابت */}
        <button 
          onClick={() => alert("Playing Egyptian Audio: 'عايز اتنين كيلو طماطم'")}
          className="bg-blue-500 text-white px-4 py-2 rounded-full mb-4 hover:bg-blue-700"
        >
          🔊 Listen to Native Egyptian
        </button>

        <input 
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder={translations[language].placeholder}
          className="w-full p-3 border-2 border-gray-300 rounded mb-4"
        />

        <button 
          onClick={handleSubmit}
          className="bg-green-600 text-white w-full py-3 rounded-lg font-bold hover:bg-green-700 transition"
        >
          {translations[language].btn}
        </button>

        {/* رد Gemini المترجم للغة الطالب مع شرح "عايز/عايزة" */}
        {feedback && (
          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-left text-gray-800">
            <p className="whitespace-pre-wrap">{feedback}</p>
          </div>
        )}
      </div>
    </div>
  );
}
