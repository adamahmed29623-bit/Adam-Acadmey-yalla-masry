'use client';
import React, { useState } from 'react';

export default function NefertitiAcademyProfessional() {
  const [step, setStep] = useState('login'); // login, target, dashboard
  const [view, setView] = useState('main'); // main, museum, simulation, store
  const [user, setUser] = useState({ email: '', role: 'طالب' });
  const [target, setTarget] = useState('');
  const [points, setPoints] = useState(120);

  // 🔊 محرك الصوت المصري الملكي
  const speak = (text: string) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = 'ar-EG';
      msg.rate = 0.85;
      window.speechSynthesis.speak(msg);
    }
  };

  // 1. بوابة الدخول الاحترافية
  if (step === 'login') {
    return (
      <div style={fullScreen}>
        <div style={authCard}>
          <h1 style={goldText}>يالا مصري 🏺</h1>
          <p style={{opacity: 0.7}}>بوابة الدخول للأكاديمية</p>
          <input type="email" placeholder="البريد الإلكتروني" style={inputStyle} />
          <input type="password" placeholder="كلمة المرور" style={inputStyle} />
          <select style={inputStyle} onChange={(e) => setUser({...user, role: e.target.value})}>
            <option value="طالب">طالب / تلميذ</option>
            <option value="ولي أمر">ولي أمر</option>
            <option value="معلمة">معلمة</option>
          </select>
          <button onClick={() => setStep('target')} style={goldBtn}>دخول ملكي ⚔️</button>
        </div>
      </div>
    );
  }

  // 2. سؤال الهدف المخصص
  if (step === 'target') {
    return (
      <div style={fullScreen}>
        <div style={authCard}>
          <h2 style={goldText}>ما هو هدفكِ يا ملكة؟</h2>
          <div style={{display: 'grid', gap: '10px', marginTop: '20px'}}>
            {['سياحة', 'عمل', 'ثقافة'].map(t => (
              <button key={t} onClick={() => {setTarget(t); setStep('dashboard'); speak(`أهلاً بكِ، سنركز على هدف ال${t}`);}} style={choiceBtn}>{t}</button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 3. لوحة التحكم المتكاملة (Navigation)
  return (
    <div style={{ backgroundColor: '#050a15', minHeight: '100vh', color: 'white', direction: 'rtl' }}>
      <nav style={navBar}>
        <h2 style={goldText}>يالا مصري</h2>
        <div style={{display:'flex', gap:'15px'}}>
          <button onClick={() => setView('main')} style={navLink}>الرئيسية</button>
          <button onClick={() => {setView('museum'); speak("مرحباً بكِ في متحفكِ الملكي");}} style={navLink}>🏛️ المتحف</button>
          <button onClick={() => {setView('simulation'); speak("جاهزة للمحاكاة؟");}} style={navLink}>🎮 المحاكاة</button>
          <button onClick={() => {setView('store'); speak("سوق الذهب مفتوح");}} style={navLink}>🛒 المتجر</button>
        </div>
        <div style={{color:'#f59e0b', fontWeight:'bold'}}>{points} XP 🪙</div>
      </nav>

      <main style={{ padding: '40px' }}>
        {/* المحتوى حسب الزر المضغوط */}
        {view === 'main' && (
          <div style={{textAlign:'center'}}>
            <h1>لوحة التحكم: {user.role} 👑</h1>
            <div style={infoBox}>
               <p>هدفكِ: {target} | الرتبة: خبير ملكي</p>
               <button onClick={() => speak("جميناي هنا لخدمتكِ، هل نبدأ درس اليوم؟")} style={goldBtn}>تحدثي مع جميناي 🤖</button>
            </div>
          </div>
        )}

        {view === 'museum' && (
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px'}}>
            <div style={itemCard}><h3>بردية الترحيب</h3><p>"إزيك يا مصر"</p><button onClick={() => speak("إزيك يا مصر")} style={smallBtn}>🔊 نطق</button></div>
            <div style={itemCard}><h3>بردية الطلب</h3><p>"عايز واحد شاي"</p><button onClick={() => speak("عايز واحد شاي لو سمحت")} style={smallBtn}>🔊 نطق</button></div>
          </div>
        )}

        {view === 'simulation' && (
          <div style={contentCard}>
            <h2>محاكاة: في المطعم 🍽️</h2>
            <p>السياق: اطلبي الحساب من النادل بالهجة المصرية.</p>
            <button onClick={() => speak("الحساب يا ريس لو سمحت")} style={goldBtn}>بدء تسجيل صوتك 🎤</button>
          </div>
        )}

        {view === 'store' && (
          <div style={{display:'flex', gap:'20px'}}>
            <div style={itemCard}><h3>حصة زووم</h3><p>السعر: 100 XP</p><button onClick={() => {setPoints(points-100); speak("تم الشراء");}} style={smallBtn}>شراء 🛒</button></div>
          </div>
        )}
      </main>
    </div>
  );
}

// التنسيقات الفخمة (CSS in JS)
const fullScreen = { backgroundColor: '#050a15', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' };
const authCard = { background: '#0a0f1a', padding: '50px', borderRadius: '40px', border: '2px solid #f59e0b', textAlign: 'center' as const, width: '400px' };
const inputStyle = { width: '100%', padding: '12px', borderRadius: '10px', marginBottom: '15px', border: '1px solid #f59e0b', background: '#050a15', color: 'white' };
const goldBtn = { padding: '15px 30px', background: '#f59e0b', border: 'none', borderRadius: '12px', fontWeight: 'bold' as const, cursor: 'pointer' };
const goldText = { color: '#f59e0b', margin: 0 };
const choiceBtn = { padding: '15px', background: '#1e293b', border: '1px solid #f59e0b', color: 'white', borderRadius: '10px', cursor: 'pointer' };
const navBar = { background: '#0a0f1a', padding: '15px 40px', display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #f59e0b', alignItems: 'center' };
const navLink = { background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1rem' };
const infoBox = { background: '#0a0f1a', padding: '30px', borderRadius: '20px', border: '1px solid #f59e0b', marginTop: '20px' };
const contentCard = { background: '#0a0f1a', padding: '40px', borderRadius: '30px', border: '2px solid #f59e0b' };
const itemCard = { background: '#1e293b', padding: '20px', borderRadius: '20px', border: '1px solid #f59e0b', textAlign: 'center' as const };
const smallBtn = { background: '#f59e0b', color: 'black', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' as const };
