/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname,
    };
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ap-northeast-1.graphassets.com',
        pathname: '/**',
      },
    ],
    domains: ['media.graphassets.com'],
  },
  experimental: {
    appDir: true,
  },
  server: {
    port: 3001,
  },
}

module.exports = nextConfig 