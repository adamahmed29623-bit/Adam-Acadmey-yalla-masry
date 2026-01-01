import React from 'react';

export default function AboutAcademy() {
  return (
    <div className="max-w-5xl mx-auto p-8 md:p-16">
      {/* القسم العلوي: الهوية الملكية */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-black text-blue-900 mb-6">رواق المعلومات الملكي 🏛️</h1>
        <p className="text-2xl text-yellow-600 font-serif italic">
          "Creating a unique identity for the academy, not just a publishing project."
        </p>
      </section>

      {/* القسم الثاني: الرؤية (للطلاب الأجانب) */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-4 border-blue-900">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Mission 🌍</h2>
          <p className="text-gray-700 leading-relaxed">
            Nefertiti Royal Academy is designed for American, European, and Chinese students 
            who seek to master the soul of the Egyptian dialect through a structured, 
            interactive, and royal learning experience.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-4 border-yellow-500">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">The Royal Method 👑</h2>
          <p className="text-gray-700 leading-relaxed">
            We don't just teach words; we teach culture. Our system uses:
            <ul className="list-disc ml-5 mt-3 space-y-2">
              <li>Real-life Situational Dialogues.</li>
              <li>AI-Powered Challenge Correction (Gemini).</li>
              <li>Nile Points Rewards System.</li>
            </ul>
          </p>
        </div>
      </div>

      {/* القسم الثالث: رسالة الملكة */}
      <div className="mt-16 bg-blue-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-4">Identity & Excellence</h3>
          <p className="text-lg opacity-90 italic">
            "Everything in this academy is planned for months, working on every detail to ensure 
            a premium experience for our royal students."
          </p>
        </div>
        {/* لمسة ديكور خلفية */}
        <div className="absolute right-[-20px] bottom-[-20px] text-9xl opacity-10">👑</div>
      </div>
    </div>
  );
}
