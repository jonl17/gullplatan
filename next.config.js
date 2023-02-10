/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gullplatan.cdn.prismic.io',
        port: '',
        pathname: '/gullplatan/**',
      },
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
        port: '',
        pathname: '/gullplatan/**',
      },
    ],
  },
}

module.exports = nextConfig
