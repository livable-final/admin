/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    domains: ['https://livable-final.s3.ap-northeast-2.amazonaws.com'],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'livable-final.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  // env 환경변수 load
  env: {
    API_BASE_URL: process.env.NEXT_PUBLIC_API_URL,
    ADMIN_TOKEN: process.env.NEXT_ADMIN_TOKEN,
  },
};

module.exports = nextConfig;
