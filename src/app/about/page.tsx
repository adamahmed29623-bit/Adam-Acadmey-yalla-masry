import React from 'react';

export default function AboutAcademy() {
  return (
    <div className="max-w-4xl mx-auto p-12 text-center">
      <h1 className="text-4xl font-black text-blue-900 mb-6">Nefertiti Royal Academy 🏛️</h1>
      <p className="text-xl text-gray-600 mb-12 italic">
        "Creating a unique identity for language mastery, not just a publishing project."
      </p>

      <div className="grid md:grid-cols-2 gap-8 text-left">
        <div className="bg-yellow-50 p-8 rounded-2xl border-l-4 border-yellow-500">
          <h3 className="font-bold text-blue-900 mb-2">Our Royal Method</h3>
          <p>We teach Egyptian Arabic through real-life scenarios: Audio, Dialogue, and Interactive Challenges.</p>
        </div>
        <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-900">
          <h3 className="font-bold text-blue-900 mb-2">Global Reach</h3>
          <p>Designed specifically for American, European, Chinese, and Urdu-speaking students.</p>
        </div>
      </div>
      
      <div className="mt-16 p-8 border-t border-gray-100">
        <p className="text-sm text-gray-400">© 2026 Nefertiti Royal Academy. All Rights Reserved.</p>
      </div>
    </div>
  );
}
