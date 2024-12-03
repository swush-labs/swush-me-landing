/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This is necessary for static export
  images: {
    unoptimized: true, // This can help with image loading on GitHub Pages
  },
  basePath: process.env.NODE_ENV === 'production' ? '/swush-me-landing' : '', // Adjusts the base path for production
}

module.exports = nextConfig