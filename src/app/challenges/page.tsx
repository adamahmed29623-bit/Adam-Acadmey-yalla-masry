"use client";
import { useState } from 'react';
import { royalChallenges } from '../../data/challenges';
import { processChallenge } from '../../lib/gemini';

export default function RoyalExam Page() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [totalPoints, setTotalPoints] = useState(0);

  const challenge = royalChallenges[currentStep];

  const handleSubmission = async () => {
    setFeedback("Royal Tutor is evaluating... ⏳");
    const result = await processChallenge(userAnswer, "English", challenge.instruction);
    setFeedback(result);
    
    // إذا كانت الإجابة مقبولة (محاكاة للنجاح)
    if (!result.includes("Error")) {
      setTotalPoints(prev => prev + challenge.points);
    }
  };

  const nextChallenge = () => {
    if (currentStep < royalChallenges.length - 1) {
      setCurrentStep(prev => prev + 1);
      setUserAnswer("");
      setFeedback("");
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto bg-gold-gradient min-h-screen">
      <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-full shadow-lg">
        <span className="font-bold text-yellow-700">🏆 Level 1</span>
        <span className="text-xl font-bold text-blue-900">Points: {totalPoints} Pt</span>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-2xl border-t-4 border-yellow-500">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Challenge {challenge.id}: {challenge.category}</h2>
        <p className="text-lg text-blue-700 mb-6 font-semibold">{challenge.instruction}</p>
        
        <button className="mb-6 flex items-center gap-2 text-blue-600 font-bold">
          🔊 Listen to Native Egyptian
        </button>

        <textarea 
          className="w-full p-4 border-2 border-gray-100 rounded-2xl mb-4 bg-gray-50"
          placeholder="Type your answer in Egyptian..."
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />

        <button 
          onClick={handleSubmission}
          className="w-full bg-blue-900 text-white py-4 rounded-2xl font-bold hover:bg-blue-800 transition shadow-lg"
        >
          Check Answer
        </button>

        {feedback && (
          <div className="mt-8 p-6 bg-yellow-50 rounded-2xl border-r-4 border-yellow-400 text-right">
            <p className="whitespace-pre-wrap">{feedback}</p>
            <button onClick={nextChallenge} className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full font-bold">
              Next Challenge ➔
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
