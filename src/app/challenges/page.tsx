"use client";
import { useState } from 'react';
import { processChallenge } from '../../lib/gemini'; // المسار الذي نجح معكِ

const challengesData = [
  {
    id: 1,
    title: "🛒 Grocery Challenge (Bananas)",
    instruction: "How do you ask for 1kg of Bananas in Egyptian?",
    hint: "Use 'Ayyez' (Male) or 'Ayza' (Female).",
    reward: 50
  },
  {
    id: 2,
    title: "🍅 Market Challenge (Tomatoes)",
    instruction: "How do you ask for 0.25kg of Tomatoes?",
    hint: "0.25kg is called 'Rob'e Kilo'.",
    reward: 50
  }
];

export default function ChallengesPage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const currentChallenge = challengesData[currentIdx];

  const handleVerify = async () => {
    setFeedback("Checking with the Royal Tutor... ⏳");
    const result = await processChallenge(answer, "English", currentChallenge.title);
    setFeedback(result);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-2xl rounded-3xl mt-10 text-right">
      <div className="flex justify-between items-center mb-6">
        <span className="text-yellow-600 font-bold">🏆 +{currentChallenge.reward} Pt</span>
        <h1 className="text-2xl font-bold text-green-900">Yalla Masry Academy</h1>
      </div>

      <div className="bg-green-50 p-6 rounded-2xl mb-6 border-2 border-green-200">
        <h2 className="text-xl font-bold mb-2 text-green-800">{currentChallenge.title}</h2>
        <p className="text-gray-700 mb-4">{currentChallenge.instruction}</p>
        <p className="text-sm text-blue-600 italic">💡 Hint: {currentChallenge.hint}</p>
      </div>

      <textarea 
        className="w-full p-4 border-2 border-gray-100 rounded-2xl mb-4 h-32 outline-none focus:border-green-500"
        placeholder="اكتب إجابتك بالعامية المصرية هنا..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button 
        onClick={handleVerify}
        className="w-full bg-green-700 text-white py-4 rounded-2xl font-bold hover:bg-green-800 transition shadow-lg"
      >
        أرسل الإجابة وقيمها الملكية
      </button>

      {feedback && (
        <div className="mt-8 p-6 bg-blue-50 border-r-4 border-blue-500 rounded-xl">
          <p className="whitespace-pre-wrap text-gray-800 leading-relaxed">{feedback}</p>
        </div>
      )}
    </div>
  );
}
