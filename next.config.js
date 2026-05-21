/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio2',
  assetPrefix: '/portfolio2',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/portfolio2',
  },
};

module.exports = nextConfig;