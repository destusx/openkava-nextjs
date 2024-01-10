/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'openkava-nestjs-production.up.railway.app',
            },
        ],
    },
    env: {
        BASE_URL: process.env.BASE_URL,
    },
};

const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.ts'
);

module.exports = withNextIntl(nextConfig);
