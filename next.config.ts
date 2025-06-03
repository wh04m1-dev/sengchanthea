import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "image.freshnewsasia.com",
      "www.rupp.edu.kh",
      "d1.awsstatic.com",
      "vmware.gallerycdn.vsassets.io",
    ],
    unoptimized: true,
  },
};

export default nextConfig;
