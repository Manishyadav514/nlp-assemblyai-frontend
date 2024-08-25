/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public", // PWA assets directory
  disable: process.env.NODE_ENV === "development",
  register: true, // next-pwa registers the service worker
  skipWaiting: true,
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export", // static export
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

module.exports = withPWA(nextConfig);
