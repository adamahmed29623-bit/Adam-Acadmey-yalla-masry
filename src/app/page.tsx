const academyData = {
  "name": "أكاديمية نفرتيتي الملكية",
  "vision": "بناء جيل يفتخر بهويته ولغته",
  "theme": {
    "primary": "#002366",
    "secondary": "#D4AF37",
    "accent": "#FFD700"
  },
  "sections": [
    { "id": "quran", "title": "القرآن الكريم", "icon": "/images/icons/icon_quran.png" },
    { "id": "dialect", "title": "اللهجة المصرية", "icon": "/images/icons/icon_dialect.png" },
    { "id": "kids", "title": "أشبال الأكاديمية", "icon": "/images/icons/icon_kids.png" },
    { "id": "museum", "title": "المتحف الملكي", "icon": "/images/icons/icon_museum.png" }
  ]
};

export default function HomePage() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', minHeight: '100vh' }}>
      
      {/* عنوان الترحيب الملكي */}
      <h1 style={{ fontSize: '2.8rem', marginBottom: '10px' }}>
        {academyData.welcome_section.title}
      </h1>
      
      <p style={{ textAlign: 'center', fontSize: '1.3rem', color: '#fff', marginBottom: '30px', fontWeight: 'bold' }}>
        {academyData.welcome_section.intro_text}
      </p>
      
      {/* فيديو الترحيب (YouTube Shorts) */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <div style={{ 
          borderRadius: '25px', 
          overflow: 'hidden', 
          border: '5px solid #D4AF37', 
          boxShadow: '0 0 30px rgba(212,175,55,0.6)',
          width: 'fit-content'
        }}>
          <iframe 
            width="315" 
            height="560" 
            src="https://www.youtube.com/embed/TNtIUkPaG30" 
            title="Welcome Video"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>

      {/* زر البدء الفخم */}
      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <button className="royal-btn" style={{ fontSize: '1.5rem', cursor: 'pointer' }}>
          ابدأ الرحلة الملكية
        </button>
      </div>

      {/* عرض أقسام الأكاديمية */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
        gap: '20px',
        paddingBottom: '50px' 
      }}>
        {academyData.sections.map((section) => (
          <div key={section.id} className="royal-card">
            {/* ملاحظة: الصور والأيقونات يجب أن تظل في مجلد public/images لتظهر للمتصفح */}
            <img 
              src={`/images/icons/${section.icon}`} 
              alt={section.name} 
              style={{ width: '70px', height: '70px', marginBottom: '15px', objectFit: 'contain' }} 
            />
            <h3 style={{ fontSize: '1.2rem', margin: '0', color: '#002366', fontWeight: 'bold' }}>
              {section.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
