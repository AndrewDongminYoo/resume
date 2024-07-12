/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["app", "components", "lib"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "file.o-lens.com",
      },
      {
        protocol: "https",
        hostname: "file.dev.o-lens.com",
      },
    ],
  },
};

export default nextConfig;
