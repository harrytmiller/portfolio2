/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio2',
  assetPrefix: '/portfolio2',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;