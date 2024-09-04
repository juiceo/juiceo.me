/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig;
