/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'vercel.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
}

module.exports = nextConfig
