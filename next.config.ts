import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'src/styles'),
      path.join(__dirname, 'src/styles/utils'),
    ],
  },
  /* config options here */
};

export default nextConfig;
