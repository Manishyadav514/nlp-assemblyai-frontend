// next.config.js without PWA
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

module.exports = nextConfig;
