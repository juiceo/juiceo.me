import type { NextConfig } from 'next';

import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.unsplash.com',
				port: '',
			},
		],
	},
	compiler: {
		styledComponents: true,
	},
};

export default nextConfig;

initOpenNextCloudflareForDev();
