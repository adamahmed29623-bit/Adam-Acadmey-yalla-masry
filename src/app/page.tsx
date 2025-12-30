import data from '../public/academy-details.json';

export default function HomePage() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{data.welcome_section.title}</h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#fff' }}>
        {data.welcome_section.intro_text}
      </p>
      
      {/* فيديو الترحيب الملكي */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '30px 0' }}>
        <div style={{ borderRadius: '20px', overflow: 'hidden', border: '4px solid #D4AF37', boxShadow: '0 0 20px rgba(212,175,55,0.5)' }}>
          <iframe 
            width="315" 
            height="560" 
            src="https://www.youtube.com/embed/TNtIUkPaG30" 
            frameBorder="0" 
            allowFullScreen>
          </iframe>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <button className="royal-btn">ابدأ الرحلة الملكية</button>
      </div>

      {/* عرض الأقسام */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px' }}>
        {data.sections.map((section) => (
          <div key={section.id} className="royal-card">
            <img src={`/images/icons/${section.icon}`} alt={section.name} style={{ width: '60px', marginBottom: '10px' }} />
            <h3 style={{ fontSize: '1.1rem', margin: '0', color: '#002366' }}>{section.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
