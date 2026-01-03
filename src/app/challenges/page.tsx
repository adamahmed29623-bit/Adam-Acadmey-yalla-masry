'use client';
import { useState } from 'react';

const challenges = [
  {
    id: 1,
    title: "تحدي الوصول: مطار القاهرة ✈️",
    scenario: "أنت الآن في المطار، وعليك طلب تاكسي للذهاب للفندق. ماذا تقول؟",
    options: ["I want a taxi", "عايز تاكسي لو سمحت", "Taxi please"],
    correct: "عايز تاكسي لو سمحت",
    hint: "في مصر نستخدم كلمة 'عايز' للتعبير عن الرغبة"
  },
  {
    id: 2,
    title: "تحدي وسط البلد: ميدان التحرير 🏛️",
    scenario: "تريد شراء 'كشري' من محل شهير، كيف تطلب الطبق الكبير؟",
    options: ["Big Koshary", "واحد كشري كبير", "Give me koshary"],
    correct: "واحد كشري كبير",
    hint: "نبدأ بالرقم 'واحد' ثم اسم الوجبة"
  }
];

export default function ChallengesPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [feedback, setFeedback] = useState('');

  const checkAnswer = (answer: string) => {
    if (answer === challenges[currentStep].correct) {
      setFeedback('✅ أحسنت يا ملك! إجابة ملكية صحيحة.');
      setTimeout(() => {
        if (currentStep < challenges.length - 1) {
          setCurrentStep(currentStep + 1);
          setFeedback('');
        } else {
          setFeedback('🏆 مبروك! لقد اجتزت المستوى الأول بنجاح.');
        }
      }, 2000);
    } else {
      setFeedback(`❌ حاول ثانية.. تذكر: ${challenges[currentStep].hint}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-10 border-b-8 border-blue-900">
        <h1 className="text-3xl font-black text-slate-900 mb-6 text-center">التحديات الملكية 🏺</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold text-amber-700 mb-2">{challenges[currentStep].title}</h2>
          <p className="text-lg text-slate-700 leading-relaxed">{challenges[currentStep].scenario}</p>
        </div>

        <div className="grid gap-4">
          {challenges[currentStep].options.map(option => (
            <button 
              key={option}
              onClick={() => checkAnswer(option)}
              className="py-4 px-6 rounded-2xl border-2 border-slate-200 font-bold hover:bg-yellow-50 hover:border-yellow-400 transition-all text-right"
            >
              {option}
            </button>
          ))}
        </div>

        {feedback && (
          <div className="mt-8 p-4 rounded-xl bg-slate-100 text-center font-bold text-blue-900 animate-bounce">
            {feedback}
          </div>
        )}
      </div>
    </div>
  );
}
