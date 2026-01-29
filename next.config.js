// next.config.js
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      urlPattern: /^\/$/, // cachea la página raíz
      handler: "NetworkFirst",
      options: {
        cacheName: "pages-cache",
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern: /\.(?:js|css|png|jpg|jpeg|svg|woff2)$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-resources",
        expiration: {
          maxEntries: 64,
          maxAgeSeconds: 24 * 60 * 60,
        },
      },
    },
  ],
});

module.exports = withPWA({
  reactStrictMode: true,
});
