/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["images.unsplash.com", "cdn.pixabay.com", "images.pexel.com"],
  },
};

export default nextConfig
