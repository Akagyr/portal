/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/quiz',
            has: [
              {
                type: 'query',
                key: 'no-cache',
                value: '1',
              },
            ],
            destination: '/quiz',
          },
        ];
      },
};

export default nextConfig;
