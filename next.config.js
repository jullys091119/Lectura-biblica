const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: true,
  turbopack: {},
  pwa: {
    runtimeCaching: [
      {
        urlPattern: ({ url }) => url.pathname === "/",
        handler: "CacheFirst",
        options: {
          cacheName: "start-page",
        },
      },
    ],
  },
});
