"use client";

import React, { useState, useEffect } from 'react';
import { Star, Zap, Trophy, ShieldCheck, Flame, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Confetti from 'react-confetti';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChallengeGame() {
  const [solved, setSolved] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const { toast } = useToast();

  // تحديث حجم الشاشة للقصاصات الملونة (Confetti)
  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const handleCorrectAnswer = () => {
    if (solved) return;

    setSolved(true);
    setShowConfetti(true);

    // تحديث نقاط النيل في النظام الملكي
    const currentPoints = parseInt(localStorage.getItem('nilePoints') || '100');
    const newPoints = currentPoints + 50; // مكافأة أكبر للتحديات الملكية
    localStorage.setItem('nilePoints', newPoints.toString());

    // تنبيه باقي أجزاء الأكاديمية (اللوحة الرئيسية) بتحديث النقاط
    window.dispatchEvent(new StorageEvent('storage', {
        key: 'nilePoints',
        newValue: newPoints.toString(),
    }));

    toast({
        title: "🎊 نصر ملكي جديد!",
        description: "لقد أضفتِ 50 نقطة نيل إلى خزائنكِ.",
    });

    setTimeout(() => setShowConfetti(false), 6000);
  };

  return (
    <div className="min-h-screen bg-[#05050a] flex items-center justify-center p-4 md:p-8 font-serif rtl" dir="rtl">
      {showConfetti && (
        <Confetti 
          width={windowSize.width} 
          height={windowSize.height} 
          recycle={false} 
          numberOfPieces={400} 
          colors={['#D4AF37', '#FFF1C1', '#AA891F', '#ffffff']}
        />
      )}

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white/5 backdrop-blur-2xl p-8 md:p-12 rounded-[50px] border-2 border-[#D4AF37]/30 shadow-[0_0_80px_rgba(212,175,55,0.1)] max-w-2xl w-full text-center overflow-hidden"
      >
        {/* شارة المستوى في الزاوية */}
        <div className="absolute top-6 right-8 flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full border border-[#D4AF37]/20">
          <Flame className="text-[#D4AF37] animate-pulse" size={16} />
          <span className="text-[#D4AF37] text-xs font-black">تحدي المبتدئين</span>
        </div>

        <Zap className="mx-auto text-[#D4AF37] mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" size={60} />
        
        <p className="text-[#D4AF37] text-sm mb-2 font-bold tracking-[0.2em] uppercase">المهمة الحالية</p>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-10 leading-relaxed">
          ما هي الكلمة المصرية التي تعني <br/>
          <span className="text-[#D4AF37] underline decoration-dashed decoration-1 underline-offset-8">"How are you?"</span>
        </h2>
        
        <div className="grid grid-cols-1 gap-4">
          {[
            { id: 0, text: 'إزيك؟', correct: true },
            { id: 1, text: 'فينك؟', correct: false },
            { id: 2, text: 'إيه ده؟', correct: false }
          ].map((ans) => (
            <motion.button 
              key={ans.id}
              whileHover={{ scale: solved ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                if (ans.correct) {
                  handleCorrectAnswer();
                } else if (!solved) {
                  toast({ 
                    variant: 'destructive', 
                    title: "محاولة غير موفقـة", 
                    description: "ركزي يا ملكة، يمكنكِ فعلها!" 
                  });
                }
              }}
              disabled={solved}
              className={`group relative p-6 rounded-[25px] font-bold text-xl border-2 transition-all duration-300 ${
                solved && ans.correct 
                ? 'bg-[#D4AF37] border-[#D4AF37] text-black shadow-[0_0_30px_rgba(212,175,55,0.4)]' 
                : 'bg-white/5 border-white/10 text-gray-300 hover:border-[#D4AF37]/50 hover:bg-white/10'
              } ${solved && !ans.correct ? 'opacity-30' : ''}`}
            >
              <div className="flex justify-between items-center">
                <span>{ans.text}</span>
                {solved && ans.correct && <ShieldCheck size={24} />}
              </div>
            </motion.button>
          ))}
        </div>

        {/* لوحة النتائج بعد الحل */}
        <AnimatePresence>
          {solved && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-10 pt-8 border-t border-white/10"
            >
              <div className="flex justify-center gap-4 mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-[#D4AF37] mb-2">
                    <Trophy size={20} />
                  </div>
                  <span className="text-[10px] text-gray-500 font-bold tracking-tighter uppercase">الجائزة</span>
                  <span className="text-sm font-black">+50 نقطة</span>
                </div>
              </div>

              <Link href="/simulation">
                <button className="flex items-center justify-center gap-2 w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-[#D4AF37] transition-all group">
                  الانتقال للتحدي التالي
                  <ArrowRight size={20} className="group-hover:translate-x-[-4px] transition-transform" />
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
