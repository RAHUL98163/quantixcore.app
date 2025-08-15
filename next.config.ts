import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enforce a static export for the build
  output: 'export',
};

export default nextConfig;
