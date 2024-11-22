/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  images: {
      remotePatterns: [
        {
          hostname: 'res.cloudinary.com',
        },
        {
          hostname: 'freepik.com'
        }
      ],
  },
};

export default nextConfig;
