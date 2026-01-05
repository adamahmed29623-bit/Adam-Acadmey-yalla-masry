"use client";

import React, { useState, useEffect } from 'react';

/**
 * أكاديمية نفرتيتي الملكية - نسخة مطورة ومتوافقة مع React & Vercel
 * تم إصلاح أخطاء الـ Console وتنسيق محرك الصوت.
 */

export default function App() {
  const [points, setPoints] = useState(0);
  const [currentChallenge] = useState(0);
  const [feedback, setFeedback] = useState({ show: false, isCorrect: false, msg: "" });
  const [micStatus, setMicStatus] = useState("اضغطي باستمرار للتسجيل");
  const [isVoiceInitialized, setIsVoiceInitialized] = useState(false);

  const challenges = [
    {
      title: "الدرس الأول: التحية والسؤال عن الحال",
      arabic: "إزيك عامل إيه؟",
      english: "How are you?",
      dialogue: [
        { name: "منى", text: "إزيك يا هبة عاملة إيه؟", color: "text-yellow-500", border: "border-yellow-500" },
        { name: "هبة", text: "الحمد لله، إنتي اللي عاملة إيه النهاردة؟", color: "text-blue-400", border: "border-blue-400" }
      ],
      question: "عندما تقابلين صديقتكِ في قصر النيل، ماذا تقولين للسؤال عن حالها بلهجة مصرية أصيلة؟",
      options: [
        { text: "كيف حالكِ اليوم؟", correct: false, feedback: "هذه لغة عربية فصحى يا عزيزتي، نحن هنا في رحاب العامية المصرية." },
        { text: "إزيك عاملة إيه؟", correct: true, feedback: "أحسنتِ أيتها الحسناء! هذه هي التحية المصرية التي تفتح القلوب." },
        { text: "إيه الأخبار؟", correct: false, feedback: "تعبير صحيح، لكنه يُستخدم عادة لسؤال شخص لم تريْه منذ مدة عن أخباره." }
      ],
      audioText: "إزيك يا هبة عاملة إيه؟ .. الحمد لله، إنتي اللي عاملة إيه النهاردة؟"
    }
  ];

  const current = challenges[currentChallenge];

  // تفعيل محرك الصوت
  const initVoice = () => {
    if (!isVoiceInitialized) {
      const msg = new SpeechSynthesisUtterance("");
      window.speechSynthesis.speak(msg);
      setIsVoiceInitialized(true);
    }
  };

  const playLessonAudio = () => {
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(current.audioText);
    const voices = window.speechSynthesis.getVoices();
    const arabicVoice = voices.find(v => v.lang.includes('ar-EG')) || voices.find(v => v.lang.includes('ar'));
    
    if (arabicVoice) speech.voice = arabicVoice;
    speech.lang = 'ar-EG';
    speech.rate = 0.8;
    window.speechSynthesis.speak(speech);
  };

  const checkAnswer = (option) => {
    setFeedback({
      show: true,
      isCorrect: option.correct,
      msg: option.feedback
    });

    const notifyText = option.correct ? "أحسنتِ أيتها الحسناء" : "حاولي مرة أخرى أيتها الجميلة";
    const msg = new SpeechSynthesisUtterance(notifyText);
    msg.lang = 'ar-EG';
    window.speechSynthesis.speak(msg);

    if (option.correct) {
      setPoints(prev => prev + 100);
    }
  };

  const handleMicStart = () => setMicStatus("جيمناي تستمع لنبرتكِ الملكية...");
  const handleMicEnd = () => {
    setMicStatus("نطق ملكي متقن! أضيفي 100 نقطة");
    setPoints(prev => prev + 100);
    setTimeout(() => alert("تم الإتقان أيتها الملكة!"), 500);
  };

  const getRank = () => {
    if (points >= 200) return "ملكة النيل 👑";
    if (points >= 100) return "أميرة فرعونية 🛡️";
    return "زائرة ملكية";
  };

  return (
    <div 
      className="min-h-screen text-white p-4 md:p-8 flex flex-col items-center selection:bg-yellow-500/30" 
      onClick={initVoice}
      style={{ background: 'radial-gradient(circle, #001a4d 0%, #000b21 100%)' }}
    >
      <header className="text-center mb-10">
        <h1 className="text-5xl md:text-7xl font-bold text-[#D4AF37] mb-2 drop-shadow-lg font-serif">
          أكاديمية نفرتيتي الملكية
        </h1>
        <p className="text-blue-200 tracking-widest font-bold">
          بوابة عبور الملكات إلى سحر اللهجة المصرية
        </p>
      </header>

      <div className="w-full max-w-3xl space-y-6">
        <div className="border-2 border-[#D4AF37] bg-[#002366]/90 p-5 rounded-3xl flex justify-between items-center shadow-2xl sticky top-4 z-50">
          <div className="flex items-center gap-4">
            <span className="text-4xl animate-bounce">🏺</span>
            <div>
              <p className="text-xs text-blue-300 font-bold uppercase">رصيد الفخر الملكي</p>
              <p className="text-3xl font-black text-white">
                {points} <span className="text-[#D4AF37]">نقاط نيل</span>
              </p>
            </div>
          </div>
          <div className="px-6 py-2 rounded-full border-2 border-[#D4AF37] text-[#D4AF37] font-black bg-blue-900/50">
            {getRank()}
          </div>
        </div>

        <main className="bg-white/10 backdrop-blur-xl border-2 border-[#D4AF37] rounded-[2.5rem] p-6 md:p-12 space-y-12 shadow-2xl">
          <section className="text-center space-y-4">
            <h2 className="text-3xl font-black text-[#D4AF37]">{current.title}</h2>
            <div className="flex justify-center items-center gap-6 text-2xl bg-white/5 py-4 rounded-2xl border border-white/10">
              <span className="font-bold">{current.arabic}</span>
              <span className="text-[#D4AF37]">➜</span>
              <span className="italic text-blue-200">{current.english}</span>
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-xl font-bold text-[#D4AF37] border-r-4 border-[#D4AF37] pr-4">
              الحوار التعليمي (منى وهبة)
            </h3>
            <div className="space-y-4 bg-black/30 p-8 rounded-3xl">
              {current.dialogue.map((line, idx) => (
                <div key={idx} className={`p-4 rounded-2xl border-r-4 bg-white/5 ${line.border}`}>
                  <span className={`${line.color} font-black ml-2`}>{line.name}:</span> {line.text}
                </div>
              ))}
            </div>
            <button 
              onClick={playLessonAudio}
              className="w-full py-4 rounded-2xl text-xl font-black bg-gradient-to-r from-[#bf953f] to-[#D4AF37] text-[#002366] hover:scale-[1.02] active:scale-95 transition-all shadow-lg"
            >
              🔊 نطق الحوار بصوت المعلمة جيمناي
            </button>
          </section>

          <section className="mt-12 space-y-8 border-t border-white/10 pt-10">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🛡️</span>
              <h3 className="text-2xl font-black text-[#D4AF37]">تحدي الذكاء الملكي</h3>
            </div>
            <p className="text-xl leading-relaxed">{current.question}</p>
            <div className="grid gap-4">
              {current.options.map((opt, idx) => (
                <button 
                  key={idx}
                  onClick={() => checkAnswer(opt)}
                  className="p-5 rounded-2xl border-2 border-white/20 hover:border-[#D4AF37] hover:bg-white/5 transition-all text-right text-xl font-medium"
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </section>

          {feedback.show && (
            <section className="mt-10 space-y-8 transition-all duration-500">
              <div className={`p-8 rounded-3xl border-2 relative shadow-2xl text-center ${feedback.isCorrect ? 'border-green-500 bg-green-500/10' : 'border-red-500 bg-red-500/10'}`}>
                <div className="absolute -top-5 right-6 bg-[#D4AF37] text-[#002366] px-4 py-1 text-sm font-black rounded-lg">
                  المعلمة جيمناي
                </div>
                <p className={`text-2xl font-bold leading-relaxed ${feedback.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                  {feedback.isCorrect ? "✨ " : "⚠️ "}{feedback.msg}
                </p>
              </div>

              <div className="text-center space-y-6 py-6">
                <p className="text-[#D4AF37] text-2xl font-black animate-pulse">
                  "يلا أيتها الفرعونة.. انطقي هذه الجملة بصوتكِ"
                </p>
                <button 
                  onMouseDown={handleMicStart}
                  onMouseUp={handleMicEnd}
                  className="w-28 h-28 rounded-full border-4 border-[#D4AF37] flex items-center justify-center text-5xl bg-blue-900/40 hover:scale-110 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                >
                  🎤
                </button>
                <p className="text-lg text-blue-300 font-bold">{micStatus}</p>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
