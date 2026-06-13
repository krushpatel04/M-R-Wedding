import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/M-R-Wedding",
  assetPrefix: "/M-R-Wedding",
  images: { unoptimized: true },
};

export default nextConfig;
