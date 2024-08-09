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
        ],
    },
};

export default nextConfig;
