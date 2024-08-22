import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export", // static export
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

const pwaConfig = withPWA({
  dest: "public", // PWA assets dir
  disable: process.env.NODE_ENV === "development",
  register: true, // next-pwa registers the service worker
  skipWaiting: true,
});

export default pwaConfig(nextConfig);
