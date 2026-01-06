"use client";

import React from 'react';
import { notFound } from 'next/navigation';
import quranData from '@/lib/quran-data.json';
import quranFull from '@/lib/quran-full.json';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, BookOpen, Share2, Printer } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type SurahInfo = {
    id: number;
    name: string;
    englishName: string;
    numberOfAyahs: number;
    revelationType: string;
};

type Ayah = {
    number: number;
    text: string;
    numberInSurah: number;
};

type SurahContent = {
    name: string;
    ayahs: Ayah[];
};

type QuranFullData = {
    [key: string]: SurahContent;
};

const surahInfos: SurahInfo[] = quranData.surahs;
const surahContents: QuranFullData = quranFull as QuranFullData;

export default function SurahDetailPage({ params }: { params: { id: string } }) {
    const surahId = parseInt(params.id, 10);
    const surahInfo = surahInfos.find(s => s.id === surahId);
    const surahContent = surahContents[surahId.toString()];

    if (!surahInfo || !surahContent) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#05050a] text-white p-4 md:p-12 font-serif rtl" dir="rtl">
            <div className="max-w-4xl mx-auto">
                
                {/* شريط التحكم العلوي */}
                <div className="flex justify-between items-center mb-10">
                    <Link href="/quran" passHref>
                        <Button variant="outline" className="border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black rounded-full px-6 transition-all flex gap-2">
                            <ArrowRight size={18} />
                            العودة للرواق
                        </Button>
                    </Link>
                    <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#D4AF37]"><Share2 size={18}/></Button>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#D4AF37]"><Printer size={18}/></Button>
                    </div>
                </div>

                {/* ترويسة السورة الملكية */}
                <div className="relative mb-12 p-8 md:p-12 rounded-[40px] bg-white/5 border border-[#D4AF37]/20 text-center overflow-hidden backdrop-blur-md">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <BookOpen size={120} className="text-[#D4AF37]" />
                    </div>
                    
                    <p className="text-[#D4AF37] font-bold tracking-widest mb-4 flex justify-center items-center gap-2">
                        <span className="w-8 h-[1px] bg-[#D4AF37]/30"></span>
                        {surahInfo.revelationType === 'Meccan' ? 'سُورة مكيّة' : 'سُورة مدنيّة'}
                        <span className="w-8 h-[1px] bg-[#D4AF37]/30"></span>
                    </p>
                    
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl">
                        {surahInfo.name}
                    </h1>
                    
                    <p className="text-gray-400 text-xl italic">{surahInfo.englishName}</p>
                    
                    <div className="mt-8 flex justify-center gap-6 text-sm font-bold">
                        <div className="bg-[#D4AF37]/10 px-4 py-2 rounded-xl text-[#D4AF37] border border-[#D4AF37]/20">
                            رقم السورة: {surahInfo.id}
                        </div>
                        <div className="bg-[#D4AF37]/10 px-4 py-2 rounded-xl text-[#D4AF37] border border-[#D4AF37]/20">
                            عدد الآيات: {surahInfo.numberOfAyahs}
                        </div>
                    </div>
                </div>

                {/* محتوى الآيات */}
                <div className="bg-white/5 rounded-[50px] p-8 md:p-16 border border-white/5 shadow-2xl relative">
                    {/* زخرفة إسلامية بسيطة في الزوايا */}
                    <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37]/20 rounded-tl-2xl"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37]/20 rounded-br-2xl"></div>

                    <div className="space-y-12 text-center">
                        {/* البسملة */}
                        {surahId !== 1 && surahId !== 9 && (
                            <div className="mb-16">
                                <p className="text-4xl md:text-5xl font-serif text-[#D4AF37] drop-shadow-md">
                                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                                </p>
                                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6"></div>
                            </div>
                        )}

                        {/* سرد الآيات */}
                        <div className="leading-[3.5rem] md:leading-[4.5rem] text-3xl md:text-4xl font-serif text-gray-100 text-justify" style={{ textJustify: 'inter-word' }}>
                            {surahContent.ayahs.map((ayah, index) => (
                                <React.Fragment key={ayah.number}>
                                    <span className="hover:text-[#D4AF37] transition-colors duration-300">
                                        {ayah.text}
                                    </span>
                                    <span className="inline-flex items-center justify-center w-10 h-10 mx-3 text-sm font-bold border border-[#D4AF37]/40 rounded-full text-[#D4AF37] bg-[#D4AF37]/5 align-middle transform translate-y-[-4px]">
                                        {ayah.numberInSurah}
                                    </span>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>

                {/* تذييل الصفحة */}
                <div className="mt-12 text-center text-gray-500 text-sm">
                    <p>أكاديمية نفرتيتي - رواق القرآن الكريم</p>
                </div>
            </div>
        </div>
    );
}
