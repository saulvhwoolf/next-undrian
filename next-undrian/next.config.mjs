/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'undrian.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: '/proxy-images/:path*',
                destination: 'http://undrian.com/:path*', // Replace with your HTTP image source
            },
            {
                source: '/proxy-images2/:path*',
                destination: 'https://storage.googleapis.com/:path*', // Replace with your HTTP image source
            },
        ];
    },
};

export default nextConfig;
