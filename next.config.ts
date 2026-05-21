import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the site can be hosted on GitHub Pages (no server needed)
  output: "export",
  distDir: "dist",
  trailingSlash: true,
  // Pin the workspace root so Turbopack doesn't misinfer it (e.g. as src/app)
  turbopack: {
    root: __dirname,
  },
  // next/image optimization requires a server, so we disable it for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
