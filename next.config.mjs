/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@react-three/fiber',
      '@react-three/drei',
      'three',
    ],
  },
};

export default nextConfig;
