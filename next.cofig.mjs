/** @type {import('next').NextConfig} */
const nextConfig = {
    /* هذا السطر هو السر: يخبر Vercel أن يسمح للمكتبة بالعمل داخل صفحات الأكاديمية */
    transpilePackages: ['lucide-react'],
};

export default nextConfig;
