import data from '../public/academy-details.json';

export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '2.5rem' }}>{data.welcome_section.title}</h1>
      
      {/* فيديو الترحيب */}
      <div style={{ margin: '20px auto', borderRadius: '20px', overflow: 'hidden', width: 'fit-content', border: '3px solid #D4AF37' }}>
        <iframe width="315" height="560" src="https://www.youtube.com/embed/TNtIUkPaG30" frameBorder="0" allowFullScreen></iframe>
      </div>

      {/* زر دخول الأكاديمية - Royal Button */}
      <button style={{
        backgroundColor: '#D4AF37',
        color: '#002366',
        padding: '15px 40px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
        marginBottom: '40px'
      }}>
        ابدأ الرحلة الملكية
      </button>

      {/* الأقسام في شكل Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', padding: '10px' }}>
        {data.sections.map((section) => (
          <div key={section.id} style={{
            background: 'white',
            border: '2px solid #D4AF37',
            borderRadius: '15px',
            padding: '20px',
            transition: 'transform 0.3s',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            <img src={`/images/icons/${section.icon}`} alt={section.name} style={{ width: '60px', marginBottom: '10px' }} />
            <h3 style={{ fontSize: '1rem', margin: '0' }}>{section.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
