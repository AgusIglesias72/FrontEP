/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
    domains: ['d3ugyf2ht6aenh.cloudfront.net'],
  },
  reactStrictMode: true,
  env: {
    AUTH_TOKEN: process.env.AUTH_TOKEN,
  },
}

module.exports = nextConfig
