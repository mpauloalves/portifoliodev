/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true, // Para compatibilidade com GitHub Pages
  },
  trailingSlash: true,
  output: 'export', // Para static export
  distDir: 'out',
  // Configurações para SEO e Performance
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Configurações experimentais
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
