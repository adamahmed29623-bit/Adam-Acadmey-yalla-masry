"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { initializeFirebase } from '@/lib/firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { Loader2, GraduationCap, ShieldCheck, Users } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const { auth, firestore } = initializeFirebase();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // الرتبة الافتراضية
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth) return;
    setLoading(true);
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // التأكد من رتبة المستخدم في قاعدة البيانات (Firestore)
      const userDoc = await getDoc(doc(firestore, 'users', user.uid));
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        // التوجيه بناءً على الرتبة
        if (userData.role === 'teacher') router.push('/teacher-dashboard');
        else if (userData.role === 'parent') router.push('/parent-dashboard');
        else router.push('/'); // التلميذ يذهب للعرش (الرئيسية)
      } else {
        router.push('/'); 
      }
    } catch (err: any) {
      setError("تأكد من بياناتك الملكية واختيار الرتبة الصحيحة");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#05050a] flex items-center justify-center p-4 font-serif rtl" dir="rtl">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-[#D4AF37]/30 p-8 rounded-[40px] shadow-2xl">
        
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🏺</div>
          <h1 className="text-3xl font-bold text-[#D4AF37]">بوابات الأكاديمية</h1>
          <p className="text-gray-400 mt-2">اختر رتبتك لتدخل إلى ديوانك</p>
        </div>

        {/* نظام اختيار الرتبة (تلميذ، معلمة، ولي أمر) */}
        <div className="flex justify-around mb-8 gap-2">
          {[
            { id: 'student', label: 'تلميذ', icon: <GraduationCap size={20}/> },
            { id: 'teacher', label: 'معلمة', icon: <ShieldCheck size={20}/> },
            { id: 'parent', label: 'ولي أمر', icon: <Users size={20}/> }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setRole(item.id)}
              className={`flex-1 flex flex-col items-center py-3 rounded-2xl border transition-all ${
                role === item.id 
                ? 'bg-[#D4AF37] text-black border-[#D4AF37]' 
                : 'bg-white/5 text-gray-400 border-white/10 hover:border-[#D4AF37]/50'
              }`}
            >
              {item.icon}
              <span className="text-xs mt-1 font-bold">{item.label}</span>
            </button>
          ))}
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-[#D4AF37] mb-2 mr-2 text-sm">البريد الإلكتروني</label>
            <input
              type="email"
              required
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-[#D4AF37] outline-none transition-all"
              placeholder="الملكة@نفرتيتي.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-[#D4AF37] mb-2 mr-2 text-sm">كلمة السر</label>
            <input
              type="password"
              required
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-[#D4AF37] outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-400 text-center text-xs bg-red-400/10 py-2 rounded-xl">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#D4AF37] text-black font-black py-4 rounded-2xl hover:bg-white transition-all shadow-[0_10px_20px_rgba(212,175,55,0.2)] flex justify-center items-center"
          >
            {loading ? <Loader2 className="animate-spin" /> : 'دخول إلى المملكة'}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6 text-sm">
          ليس لديكِ حساب؟ <Link href="/signup" className="text-[#D4AF37] font-bold hover:underline">أنشئي حساباً الآن</Link>
        </p>
      </div>
    </div>
  );
}
