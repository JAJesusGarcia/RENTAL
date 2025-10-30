/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [90],
    localPatterns: [
      {
        pathname: '/**',
        search: '',
      },
    ],
  },
}

export default nextConfig