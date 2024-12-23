/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "10.145.12.242",
      },
    ],
  },
};

export default nextConfig;
