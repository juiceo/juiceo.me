import { Poppins, Source_Code_Pro } from 'next/font/google';
import type { DefaultTheme } from 'styled-components';

export const poppins = Poppins({ subsets: ['latin'], weight: ['500', '400'] });
export const sourceCodePro = Source_Code_Pro({
	subsets: ['latin'],
	weight: ['400'],
});

export const darkTheme: DefaultTheme = {
	colors: {
		background: {
			page: '#1a1f2e',
			pageDark: 'hsl(222, 28%, 10%)',
		},
		text: {
			primary: 'hsl(0, 0%, 98%)',
			secondary: 'hsl(215, 20%, 80%)',
			tertiary: 'hsl(215, 15%, 75%)',
			accent: 'hsl(351, 100%, 72%)',
		},
		status: {
			info: 'hsl(230, 100%, 69%)',
		},
	},
	layout: {
		contentMaxWidth: '1024px',
	},
	spacing: (multiplier: number) => `${multiplier * 8}px`,
	fonts: {
		heading: `${poppins.style.fontFamily}, sans-serif`,
		body: `${poppins.style.fontFamily}, sans-serif`,
		mono: `${sourceCodePro.style.fontFamily}, monospace`,
	},
};
