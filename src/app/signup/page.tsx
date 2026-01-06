"use client";

import React, { useState, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { initializeFirebase } from '@/lib/firebase/config'; // الربط الاحترافي الجديد
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, BookUser, HeartHandshake, Loader2, Sparkles } from 'lucide-react';

const PHARAONIC_ALIASES = ["أخناتون", "نفرتيتي", "حتشبسوت", "رمسيس", "كليوباترا", "توت عنخ آمون", "إيمحوتب", "تحتمس"];

const getRandomAlias = () => PHARAONIC_ALIASES[Math.floor(Math.random() * PHARAONIC_ALIASES.length)];

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<'student' | 'teacher' | 'parent'>('student');
  const [goal, setGoal] = useState('');
  const [level, setLevel] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [randomAlias, setRandomAlias] = useState('');

  const router = useRouter();
  const { auth, firestore } = initializeFirebase();

  useEffect(() => {
    setRandomAlias(getRandomAlias());
  }, []);

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    if (!goal || !level) return;
    if (!firestore || !auth) return;
    
    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      await updateProfile(user, { displayName: name });

      // إنشاء وثيقة المستخدم في قاعدة البيانات الملكية
      const userDocRef = doc(firestore, 'users', user.uid);
      await setDoc(userDocRef, {
        id: user.uid,
        email: user.email,
        name: name,
        alias: randomAlias,
        role: role,
        registrationDate: new Date().toISOString(),
        nilePoints: 100, // هدية الترحيب الملكية
        goal: goal,
        level: level,
        badges: ['first_login'],
      });
      
      router.push('/'); // التوجه فوراً للعرش الملكي

    } catch (error: any) {
      console.error("Signup Error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#05050a] flex items-center justify-center p-4 font-serif rtl" dir="rtl">
      <Card className="w-full max-w-3xl bg-white/5 border-[#D4AF37]/30 backdrop-blur-xl text-white rounded-[40px] shadow-2xl overflow-hidden">
        <div className="bg-[#D4AF37]/10 py-4 text-center border-b border-[#D4AF37]/20 text-[#D4AF37] text-sm font-bold flex items-center justify-center gap-2">
          <Sparkles size={16} /> انضمي إلى سلالة متعلمي اللهجة المصرية
        </div>
        
        <CardHeader className="text-center pt-8">
          <CardTitle className="text-4xl font-black text-[#D4AF37]">أنشئي حسابكِ الملكي</CardTitle>
          <CardDescription className="text-gray-400 text-lg">
            لقبكِ المقترح في المملكة: <span className="text-white font-bold underline decoration-[#D4AF37]">{randomAlias}</span>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSignup} className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
            
            {/* القسم الأول: البيانات الشخصية */}
            <div className="space-y-5">
              <div className="space-y-2">
                <Label className="text-[#D4AF37] mr-2">الاسم بالكامل</Label>
                <Input className="bg-black/40 border-white/10 rounded-2xl h-12 focus:border-[#D4AF37]" placeholder="مثال: نفرتيتي المصرية" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label className="text-[#D4AF37] mr-2">البريد الإلكتروني</Label>
                <Input className="bg-black/40 border-white/10 rounded-2xl h-12 focus:border-[#D4AF37]" type="email" placeholder="queen@nile.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label className="text-[#D4AF37] mr-2">كلمة السر الملكية</Label>
                <Input className="bg-black/40 border-white/10 rounded-2xl h-12 focus:border-[#D4AF37]" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
            </div>

            {/* القسم الثاني: الرتبة والأهداف */}
            <div className="space-y-5">
              <div className="space-y-2">
                <Label className="text-[#D4AF37] mr-2">أنا في هذه المملكة...</Label>
                <RadioGroup value={role} onValueChange={(value) => setRole(value as any)} className="flex gap-3 pt-2">
                  <Label htmlFor="r-student" className={`flex flex-1 flex-col items-center gap-2 cursor-pointer rounded-2xl border-2 p-4 transition-all ${role === 'student' ? 'border-[#D4AF37] bg-[#D4AF37]/10' : 'border-white/5 bg-white/5 opacity-50'}`}>
                    <User className="h-6 w-6" /> <span className="text-xs">تلميذ</span>
                    <RadioGroupItem value="student" id="r-student" className="sr-only" />
                  </Label>
                  <Label htmlFor="r-teacher" className={`flex flex-1 flex-col items-center gap-2 cursor-pointer rounded-2xl border-2 p-4 transition-all ${role === 'teacher' ? 'border-[#D4AF37] bg-[#D4AF37]/10' : 'border-white/5 bg-white/5 opacity-50'}`}>
                    <BookUser className="h-6 w-6" /> <span className="text-xs">معلمة</span>
                    <RadioGroupItem value="teacher" id="r-teacher" className="sr-only" />
                  </Label>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label className="text-[#D4AF37] mr-2">هدفي من التعلم</Label>
                <Select value={goal} onValueChange={setGoal}>
                  <SelectTrigger className="bg-black/40 border-white/10 rounded-2xl h-12">
                    <SelectValue placeholder="لماذا تريدين اللهجة المصرية؟" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0a0a15] text-white border-[#D4AF37]/30">
                    <SelectItem value="social">محادثات اجتماعية</SelectItem>
                    <SelectItem value="business">لهجة بيزنس</SelectItem>
                    <SelectItem value="media">أفلام وأغاني</SelectItem>
                    <SelectItem value="travel">سفر وسياحة</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-[#D4AF37] mr-2">مستواي الحالي</Label>
                <Select value={level} onValueChange={setLevel}>
                  <SelectTrigger className="bg-black/40 border-white/10 rounded-2xl h-12">
                    <SelectValue placeholder="كيف تقيمين نفسكِ؟" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0a0a15] text-white border-[#D4AF37]/30">
                    <SelectItem value="beginner">مبتدئة</SelectItem>
                    <SelectItem value="intermediate">متوسطة</SelectItem>
                    <SelectItem value="advanced">متقدمة</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="md:col-span-2 pt-4">
              <Button type="submit" className="w-full bg-[#D4AF37] text-black font-black py-7 rounded-2xl hover:bg-white hover:scale-[1.02] transition-all shadow-xl shadow-[#D4AF37]/10" disabled={isLoading}>
                {isLoading ? <Loader2 className="animate-spin" /> : 'إعلان الانضمام للأكاديمية 📜'}
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>
              لديكِ حساب ملكي؟{' '}
              <Link href="/login" className="font-bold text-[#D4AF37] hover:underline">سجلي الدخول من هنا</Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
