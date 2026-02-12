import type { NextConfig } from "next";

const basePath = process.env.GITHUB_ACTIONS ? "/yurutto-ippo" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
