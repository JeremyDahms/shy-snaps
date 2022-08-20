/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'shysnapsphotos.s3.us-west-1.amazonaws.com'],
  },
  env: {
    serverUrl: 'http://localhost:8080',
  },
};

module.exports = nextConfig;
