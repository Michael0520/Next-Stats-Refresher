/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["images.unsplash.com", "cdn.pixabay.com", "images.pexel.com"],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
};

export default nextConfig
