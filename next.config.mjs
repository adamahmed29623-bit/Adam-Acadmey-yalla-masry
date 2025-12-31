/** @type {import('next').NextConfig} */
const nextConfig = {
  // إعدادات لضمان التوافق مع Netlify و Vercel
  reactStrictMode: true,
  swcMinify: true,
  // السماح برفع الصور الملكية من مصادر خارجية إذا لزم الأمر
  images: {
    domains: ['netlify.app', 'vercel.app'],
  },
};

export default nextConfig;
