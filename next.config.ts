import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mr-wedding",
  assetPrefix: "/mr-wedding",
  images: { unoptimized: true },
};

export default nextConfig;
