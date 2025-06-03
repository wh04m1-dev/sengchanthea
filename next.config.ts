import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.freshnewsasia.com",
      },
      {
        protocol: "https",
        hostname: "www.rupp.edu.kh",
      },
      {
        protocol: "https",
        hostname: "d1.awsstatic.com",
      },
      {
        protocol: "https",
        hostname: "vmware.gallerycdn.vsassets.io",
      },
    ],
    unoptimized: process.env.NODE_ENV === "development",
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
