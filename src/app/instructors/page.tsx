'use client';
import academyData from '../../data/academyData.json';
import PharaohAvatar from '../../components/PharaohAvatar';

export default function InstructorsPage() {
  return (
    <div className="min-h-screen bg-stone-50 p-6 md:p-12">
      <h1 className="text-4xl font-black text-center text-slate-900 mb-16 flex justify-center gap-4">
         معلمات الأكاديمية الملكية 👑
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {academyData.instructors.map(instructor => (
          <div key={instructor.id} className="bg-white rounded-3xl p-8 shadow-2xl border-t-8 border-amber-500 transform hover:scale-105 transition-all">
            <div className="flex flex-col items-center">
              <PharaohAvatar src={instructor.avatar} />
              <h2 className="text-3xl font-bold mt-6 text-slate-800">{instructor.name}</h2>
              <span className="bg-amber-100 text-amber-900 px-4 py-1 rounded-full text-sm font-bold mt-2">
                {instructor.specialty}
              </span>
            </div>

            <div className="mt-8 space-y-3 bg-slate-50 p-4 rounded-2xl">
              <h3 className="font-bold text-slate-500 border-b pb-2 italic text-center">المواعيد الملكية</h3>
              {instructor.schedule.map(slot => (
                <div key={slot.day} className="flex justify-between text-slate-700 font-medium">
                  <span>{slot.day}</span>
                  <span className="text-blue-900">{slot.time}</span>
                </div>
              ))}
            </div>

            <button className="w-full mt-8 bg-slate-900 text-white py-4 rounded-2xl font-black text-xl hover:bg-amber-600 shadow-lg">
              حجز حصة ملكية 🏺
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
