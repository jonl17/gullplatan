/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.prismic.io'],
    loader: 'imgix',
    path: '',
  },
}

module.exports = nextConfig
