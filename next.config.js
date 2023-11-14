/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
  images: {
    remotePatterns: [
        {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**/*',
      }
    ],
  }
}

module.exports = nextConfig
