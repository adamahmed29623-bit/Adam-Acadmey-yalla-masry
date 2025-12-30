import data from '../public/academy-details.json';

export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', color: '#002366', padding: '20px' }}>
      {/* عنوان الترحيب */}
      <h1 style={{ color: '#D4AF37', fontSize: '2.5rem' }}>{data.welcome_section.title}</h1>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{data.welcome_section.intro_text}</p>

      {/* فيديو الترحيب (يوتيوب شورتس) */}
      <div style={{ margin: '30px auto', maxWidth: '315px' }}>
        <iframe 
          width="315" 
          height="560" 
          src="https://www.youtube.com/embed/TNtIUkPaG30" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          style={{ borderRadius: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
        ></iframe>
      </div>

      {/* أقسام الأكاديمية (الأيقونات الأربعة) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', padding: '20px' }}>
        {data.sections.map((section) => (
          <div key={section.id} style={{
            background: 'rgba(255, 255, 255, 0.8)',
            padding: '15px',
            borderRadius: '10px',
            border: '2px solid #D4AF37'
          }}>
            <img src={`/images/icons/${section.icon}`} alt={section.name} style={{ width: '50px' }} />
            <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{section.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
