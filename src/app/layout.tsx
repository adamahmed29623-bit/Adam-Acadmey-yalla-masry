export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <nav className="bg-blue-900 p-4 text-white flex justify-between items-center">
          <div className="text-xl font-black">Yalla Masry 👑</div>
          <div className="flex gap-4">
            <a href="/instructors">المعلمات</a>
            <a href="/challenges">التحديات</a>
            <a href="https://your-shopify-link" className="text-yellow-400 font-bold">المتجر 🏺</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
