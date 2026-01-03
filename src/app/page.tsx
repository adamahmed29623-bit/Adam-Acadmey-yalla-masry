'use client';
import React, { useState } from 'react';

// بيانات التحديات التعليمية للأكاديمية (بدون استماع)
const academyChallenges = [
  {
    id: 1,
    topic: "التسوق في خان الخليلي 🛍️",
    question: "كيف تسأل عن سعر القميص باللهجة المصرية؟",
    choices: ["بكام القميص ده؟", "ما هو ثمن هذا؟", "القميص سعره إيه؟"],
    answer: "بكام القميص ده؟",
    info: "كلمة 'بكام' هي المفتاح الذهبي للسؤال عن السعر في مصر."
  },
  {
    id: 2,
    topic: "المجاملات الملكية 👑",
    question: "عندما يقول لك شخص 'نورت مصر'، ماذا ترد عليه؟",
    choices: ["شكراً جزيلاً", "مصر منورة بأهلها", "أهلاً بك"],
    answer: "مصر منورة بأهلها",
    info: "المصريون يقدرون جداً الردود التي تشمل 'أهل مصر'."
  }
];

export default function AcademyMain() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const checkResult = (choice: string) => {
    setSelected(choice);
    setIsCorrect(choice === academyChallenges[index].answer);
  };

  return (
    <div className="min-h-screen bg-[#f8f5e9] p-4 md:p-10 font-sans" dir="rtl">
      {/* رأس الصفحة الملكي */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-black text-slate-900 mb-4">أكاديمية نفرتيتي الرئيسية 🏺</h1>
        <p className="text-amber-700 font-bold tracking-widest uppercase">مسار إتقان العامية المصرية</p>
      </header>

      <div className="max-w-3xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border-8 border-double border-amber-200">
        <div className="bg-amber-400 p-6 text-center">
          <span className="bg-white/30 px-4 py-1 rounded-full text-sm font-bold text-amber-900 uppercase">
            {academyChallenges[index].topic}
          </span>
        </div>

        <div className="p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center leading-relaxed">
            {academyChallenges[index].question}
          </h2>

          <div className="grid gap-4">
            {academyChallenges[index].choices.map((choice) => (
              <button
                key={choice}
                onClick={() => checkResult(choice)}
                className={`p-5 rounded-2xl text-right font-bold transition-all border-2 ${
                  selected === choice 
                    ? (isCorrect ? 'bg-green-100 border-green-500 text-green-800' : 'bg-red-100 border-red-500 text-red-800')
                    : 'bg-stone-50 border-stone-200 hover:border-amber-400 text-slate-700'
                }`}
              >
                {choice}
              </button>
            ))}
          </div>

          {isCorrect !== null && (
            <div className={`mt-10 p-6 rounded-3xl ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} border-2`}>
              <p className="font-black text-lg mb-2">
                {isCorrect ? '✨ إجابة ملكية صحيحة!' : '❌ حاول مرة أخرى يا بطل..'}
              </p>
              <p className="text-slate-600 leading-relaxed">{academyChallenges[index].info}</p>
              
              {isCorrect && (
                <button 
                  onClick={() => { setIndex((index + 1) % academyChallenges.length); setSelected(''); setIsCorrect(null); }}
                  className="mt-6 w-full bg-slate-900 text-white py-4 rounded-2xl font-black hover:bg-amber-600 transition-colors"
                >
                  التحدي القادم ⬅️
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
