"use client";
import { useState } from 'react';
import { processChallenge } from '../../lib/gemini';

export default function ChallengesPage() {
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async () => {
    setFeedback("Wait... Royal Tutor is checking... ⏳");
    const result = await processChallenge(userAnswer, "English", "Grocery Challenge");
    setFeedback(result);
  };

  return (
    <div className="p-8 text-center bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">🏛️ Nile Challenges</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-2xl">
        <p className="text-xl mb-4 font-semibold text-green-700">كيف تطلب ربع كيلو طماطم من البائع؟</p>
        <textarea 
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="w-full p-3 border-2 border-gray-200 rounded mb-4 text-right"
          placeholder="اكتب إجابتك هنا..."
        />
        <button onClick={handleSubmit} className="bg-green-600 text-white w-full py-3 rounded-lg font-bold">
          أرسل الإجابة وقيمها
        </button>
        {feedback && <div className="mt-6 p-4 bg-yellow-50 text-right">{feedback}</div>}
      </div>
    </div>
  );
}
