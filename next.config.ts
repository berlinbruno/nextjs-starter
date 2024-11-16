/** @type {import('next').NextConfig} */
import { NextConfig } from 'next';

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  scope: '/',
  cacheOnFrontendNav: true,
  aggressiveFrontEndNavCaching: true,
  cacheStartUrl: true,
  reloadOnOnline: true,
  swcMinify: true,
  fallbacks: {
    document: '/offline',
  },
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

module.exports = withPWA(nextConfig);
