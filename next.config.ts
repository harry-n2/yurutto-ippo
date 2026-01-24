import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/yurutto-ippo",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
