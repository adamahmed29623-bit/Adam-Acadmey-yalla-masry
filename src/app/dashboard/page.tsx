
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Users, BookOpen, Calendar, 
  Settings, Bell, Search, Plus, Star, Crown 
} from 'lucide-react';

export default function TeacherDashboard() {
  const [activeSlide, setActiveSlide] = useState('stats');

  return (
    <div className="min-h-screen bg-[#000814] text-white flex font-sans">
      
      {/* القائمة الجانبية للوحة التحكم */}
      <aside className="w-64 bg-[#001d3d] border-l border-white/5 p-8 flex flex-col gap-10">
        <div className="flex items-center gap-3 text-amber-500 font-black italic">
          <Crown size={24} /> ديوان الإدارة
        </div>
        
        <nav className="space-y-4">
          {[
            { id: 'stats', label: 'الإحصائيات', icon: LayoutDashboard },
            { id: 'lessons', label: 'إدارة الدروس', icon: BookOpen },
            { id: 'students', label: 'قائمة الملكات', icon: Users },
            { id: 'schedule', label: 'الجدول الزمني', icon: Calendar },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSlide(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold transition-all ${
                activeSlide === item.id ? 'bg-amber-500 text-[#000814]' : 'text-slate-400 hover:bg-white/5'
              }`}
            >
              <item.icon size={20} /> {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* المحتوى المتغير بناءً على الشريحة المختارة */}
      <main className="flex-1 p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-black italic">أهلاً بكِ، يا فخر الأكاديمية</h2>
          <div className="flex gap-4">
             <div className="bg-[#001d3d] p-3 rounded-full border border-white/5"><Bell size={20}/></div>
             <div className="bg-amber-500 w-12 h-12 rounded-full border-2 border-white/10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1544717297-fa95b3ee51f3?w=100" alt="Admin" />
             </div>
          </div>
        </header>

        {activeSlide === 'stats' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#001d3d] p-8 rounded-[3rem] border border-white/5">
              <Star className="text-amber-500 mb-4" />
              <div className="text-slate-500 font-bold italic">إجمالي الطالبات</div>
              <div className="text-5xl font-black mt-2">1,250</div>
            </div>
            {/* أضيفي المزيد من البطاقات هنا بناءً على شرائحكِ */}
          </motion.div>
        )}

        {activeSlide === 'lessons' && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-black italic">إدارة منهج رحلة نوف</h3>
              <button className="bg-amber-500 text-[#000814] px-6 py-3 rounded-xl font-black flex items-center gap-2">
                <Plus size={20}/> إضافة درس جديد
              </button>
            </div>
            <div className="bg-[#001d3d] rounded-[3rem] border border-white/5 p-8">
               <p className="text-slate-500 italic">هنا يتم عرض تسلسل الدروس والملفات المرفقة...</p>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
