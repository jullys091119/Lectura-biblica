/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",      // carpeta donde se guardará el service worker
  register: true,      // se registrará automáticamente
  skipWaiting: true,   // para que el service worker activo se actualice sin esperar
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,    // opcional, mantiene tu app rápida
};

module.exports = withPWA(nextConfig);
