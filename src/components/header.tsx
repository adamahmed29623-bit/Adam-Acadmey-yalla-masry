import { Crown } from 'lucide-react';

export const RoyalHeader = () => (
  <header className="p-8 flex justify-between items-center border-b border-yellow-500/20 bg-[#0a192f]">
    <div className="flex items-center gap-3">
      <Crown className="text-yellow-500 w-10 h-10 shadow-lg" />
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-600">
        أكاديمية يلا مصري
      </h1>
    </div>
    <div className="text-right">
      <p className="text-yellow-400 text-sm">أهلاً بكِ يا جلالة الملكة</p>
      <p className="text-xl font-serif text-white">نفرتيتي</p>
    </div>
  </header>
);
