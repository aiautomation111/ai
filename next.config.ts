/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: "/",   // مهم جداً لتصليح روابط الـ CSS والـ JS
  basePath: "",        // تأكد إنه فاضي
};

module.exports = nextConfig;
