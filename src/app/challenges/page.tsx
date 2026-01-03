'use client'; // ضروري جداً لتفعيل الأزرار والتفاعل

import { useState } from 'react';

// البيانات التي أرسلتِها سابقاً بتنسيق ملكي منظم
const challengesData = [
  {
    id: 1,
    goal: "travel",
    title: "تحدي السفر: ميدان التحرير 🚕",
    sentence: "انا عايز اروح ميدان التحرير",
    translation: "I want to go to Tahrir Square",
    questions: [
      {
        question: "اطلب من سائق التاكسي يوديك الفندق",
        options: ["انا عايز الفندق", "خدنى الفندق", "انا عايز اروح الفندق"],
        correct: 2
      }
    ]
  },
  {
    id: 2,
    goal: "work",
    title: "تحدي العمل: مقابلة المدير 👔",
    sentence: "انا عايز مقابله مع المدير",
    translation: "I want to meet the manager",
    questions: [
      {
        question: "اسأل عن مواعيد العمل",
        options: ["ايه مواعيد العمل", "مواعيد العمل ايه", "متى العمل"],
        correct: 0
      }
    ]
  }
];

export default function ChallengesPage() {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [message, setMessage] = useState("");

  const handleAnswer = (index: number) => {
    if (index === challengesData[currentChallenge].questions[0].correct) {
      setMessage("أحسنت يا بطل النيل! إجابة ملكية صحيحة 👑");
    } else {
      setMessage("حاول مرة أخرى، حتى العظماء يخطئون.. ركز في اللهجة المصرية 🏺");
    }
    setShowResult(true);
  };

  const nextChallenge = () => {
    if (currentChallenge < challengesData.length - 1) {
      setCurrentChallenge(currentChallenge + 1);
      setShowResult(false);
    } else {
      setMessage("مبروك! لقد أتممت المستوى الأول بنجاح. اذهب للمتجر لاستلام مكافئتك!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 text-right" dir="rtl">
      <h1 className="text-3xl font-black text-blue-900 mb-8 border-b-4 border-yellow-500 pb-2 inline-block">
        تحديات الأكاديمية الملكية 🏛️
      </h1>

      <div className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-blue-100 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-yellow-600 mb-4">{challengesData[currentChallenge].title}</h2>
        <div className="bg-blue-900 text-white p-6 rounded-2xl mb-6">
          <p className="text-2xl mb-2 font-black italic">"{challengesData[currentChallenge].sentence}"</p>
          <p className="text-blue-200">{challengesData[currentChallenge].translation}</p>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-bold text-slate-700 mb-4">
            {challengesData[currentChallenge].questions[0].question}
          </p>
          {challengesData[currentChallenge].questions[0].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full p-4 text-right bg-slate-100 hover:bg-yellow-100 border-2 border-slate-200 rounded-xl transition-all font-bold"
            >
              {index + 1}. {option}
            </button>
          ))}
        </div>

        {showResult && (
          <div className="mt-8 p-6 bg-yellow-50 rounded-2xl border-2 border-yellow-200 text-center animate-bounce">
            <p className="text-xl font-black text-blue-900 mb-4">{message}</p>
            <button 
              onClick={nextChallenge}
              className="bg-blue-900 text-white px-8 py-2 rounded-full font-bold"
            >
              التحدي التالي ➡️
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
