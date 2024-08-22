// Import using ES module syntax
// import withPWA from "next-pwa";

// Your Next.js configuration

// const withPWA = require("next-pwa").default({
//   dest: "public",
//   disable: process.env.NODE_ENV === "development",
//   runtimeCaching: [
//     {
//       urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
//       handler: "CacheFirst",
//       options: {
//         cacheName: "google-fonts",
//         expiration: {
//           maxEntries: 4,
//           maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
//         },
//       },
//     },
//     {
//       urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/.*/i,
//       handler: "CacheFirst",
//       options: {
//         cacheName: "static-resources",
//         expiration: {
//           maxEntries: 20,
//           maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
//         },
//       },
//     },
//     {
//       urlPattern: /\.(?:png|jpg|jpeg|svg|gif|ico)$/i,
//       handler: "CacheFirst",
//       options: {
//         cacheName: "images",
//         expiration: {
//           maxEntries: 60,
//           maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
//         },
//       },
//     },
//     {
//       urlPattern: /^\/(?!api\/).*/i,
//       handler: "NetworkFirst",
//       options: {
//         cacheName: "pages",
//         expiration: {
//           maxEntries: 50,
//           maxAgeSeconds: 24 * 60 * 60, // 1 day
//         },
//       },
//     },
//   ],
// });

// export default withPWA({
//   ...nextConfig,
// });

// const nextConfig = {};

// const withPWA = require("next-pwa")({
//   dest: "public", // Specify the output directory for the service worker
//   disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
// });

// module.exports = withPWA({
//   reactStrictMode: true,
//   // ...nextConfig,
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
});

module.exports = withPWA(nextConfig);
