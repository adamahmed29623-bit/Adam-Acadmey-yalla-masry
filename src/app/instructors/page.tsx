import academyData from '../../data/academyData.json';
import PharaohAvatar from '../../components/PharaohAvatar';

export default function InstructorsPage() {
  return (
    <div className="p-8 bg-blue-50 min-h-screen text-center">
      <h1 className="text-3xl font-black text-blue-900 mb-12">معلمات الأكاديمية الملكية 👑</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {academyData.instructors.map(instructor => (
          <div key={instructor.id} className="bg-white p-6 rounded-3xl shadow-xl border-b-4 border-yellow-500">
            <PharaohAvatar src={instructor.avatar} />
            <h2 className="text-2xl font-bold mt-4">{instructor.name}</h2>
            <p className="text-yellow-700 font-bold mb-4">{instructor.specialty}</p>
            <div className="bg-blue-900 text-white p-4 rounded-xl mb-4">
              {instructor.schedule.map(slot => (
                <div key={slot.day}>{slot.day}: {slot.time}</div>
              ))}
            </div>
            <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-full font-black">حجز حصة ملكية</button>
          </div>
        ))}
      </div>
    </div>
  );
}
