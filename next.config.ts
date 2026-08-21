import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Both of these used to be `true`, which hid two real bugs until they
  // reached the live site. A build that cannot fail is not a check.
};

export default nextConfig;
