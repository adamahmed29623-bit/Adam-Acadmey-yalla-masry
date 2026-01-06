"use client";

import React, { useState, useMemo } from 'react';
import quranData from '@/lib/quran-data.json';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { BookOpen, Search, Star, Sparkles, Compass, Map } from 'lucide-react';
import Link from 'next/link';

const { surahs } = quranData;

// تصميم بطاقة السورة بروح ملكية
const SurahCard = ({ surah }: { surah: typeof surahs[0] }) => (
    <Link href={`/quran/${surah.id}`} passHref>
        <div className="group relative bg-white/5 border border-[#D4AF37]/20 hover:border-[#D4AF37] p-6 rounded-[30px] transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm overflow-hidden cursor-pointer h-full">
            {/* زخرفة خلفية خفيفة */}
            <div className="absolute -top-4 -left-4 text-[#D4AF37]/10 group-hover:text-[#D4AF37]/20 transition-colors">
                <BookOpen size={80} />
            </div>
            
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <span className="bg-[#D4AF37] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                        {surah.id}
                    </span>
                    <Star className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors font-serif">
                    {surah.name}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{surah.englishName}</p>
                
                <div className="flex items-center gap-2 text-[10px] text-[#D4AF37]/80 font-bold bg-[#D4AF37]/5 px-3 py-1 rounded-full w-fit">
                    <span>{surah.revelationType === 'Meccan' ? '🕋 مكية' : '🕌 مدنية'}</span>
                    <span className="w-1 h-1 bg-[#D4AF37] rounded-full"></span>
                    <span>{surah.numberOfAyahs} آية</span>
                </div>
            </div>
        </div>
    </Link>
);

export default function QuranPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSurahs = useMemo(() => {
        if (!searchTerm) return surahs;
        const lowercasedTerm = searchTerm.toLowerCase();
        return surahs.filter(surah =>
            surah.name.toLowerCase().includes(lowercasedTerm) ||
            surah.englishName.toLowerCase().includes(lowercasedTerm) ||
            surah.id.toString() === searchTerm
        );
    }, [searchTerm]);

    return (
        <div className="min-h-screen bg-[#05050a] text-white p-6 md:p-12 font-serif rtl" dir="rtl">
            
            {/* القائمة العلوية للتنقل بين المعالم (المسجد، المتحف، المحاكاة) */}
            <nav className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 mb-16">
                {[
                    { name: 'رواق القرآن', icon: <BookOpen size={18}/>, active: true, link: '/quran' },
                    { name: 'بيت الصلاة (المسجد)', icon: <Compass size={18}/>, active: false, link: '/mosque' },
                    { name: 'المتحف الملكي', icon: <Sparkles size={18}/>, active: false, link: '/museum' },
                    { name: 'مركز المحاكاة', icon: <Map size={18}/>, active: false, link: '/simulation' },
                ].map((item) => (
                    <Link key={item.name} href={item.link}>
                        <button className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all ${
                            item.active 
                            ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold shadow-lg' 
                            : 'bg-white/5 text-gray-400 border-white/10 hover:border-[#D4AF37]/50'
                        }`}>
                            {item.icon} {item.name}
                        </button>
                    </Link>
                ))}
            </nav>

            {/* عنوان القسم */}
            <div className="text-center mb-12">
                <div className="inline-block p-3 rounded-full bg-[#D4AF37]/10 mb-4">
                   <BookOpen className="text-[#D4AF37]" size={40} />
                </div>
                <h1 className="text-5xl font-black text-[#D4AF37] mb-4">رواق القرآن الكريم</h1>
                <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    تلاوة، تدبر، وحفظ لآيات الله البينات في رحاب أكاديمية نفرتيتي الملكية.
                </p>
            </div>

            {/* محرك البحث الملكي */}
            <div className="relative mb-16 max-w-xl mx-auto">
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#D4AF37]" />
                <input
                    type="text"
                    placeholder="ابحث عن اسم السورة أو رقمها..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pr-12 pl-6 focus:border-[#D4AF37] outline-none transition-all text-right backdrop-blur-md"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* شبكة السور */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {filteredSurahs.map(surah => (
                    <SurahCard key={surah.id} surah={surah} />
                ))}
            </div>

            {/* في حال عدم وجود نتائج */}
            {filteredSurahs.length === 0 && (
                <div className="text-center py-20 bg-white/5 rounded-[40px] border border-dashed border-white/10">
                    <p className="text-gray-500">لا توجد سورة بهذا الاسم في سجلاتنا الملكية.</p>
                </div>
            )}
        </div>
    );
}
