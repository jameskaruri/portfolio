import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  allowedDevOrigins: ["192.168.100.4", 'jamesnderitu.co.ke'],
};

export default nextConfig;