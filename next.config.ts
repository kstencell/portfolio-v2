import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // enables `next export`
  trailingSlash: true, // makes /about → /about/
};

export default nextConfig;
