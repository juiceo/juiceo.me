import type { Metadata } from 'next';

import { StyledComponentsRegistry } from '@/lib/StyledComponentsRegistry';
import { ThemeProvider } from '@/lib/ThemeProvider';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
	title: 'juiceo.me',
	description: "Juuso's personal website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
			</head>
			<body>
				<SpeedInsights />
				<Analytics />
				<StyledComponentsRegistry>
					<ThemeProvider>{children}</ThemeProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
