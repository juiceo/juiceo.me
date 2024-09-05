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
			page: '#1B2021',
			pageDark: 'hsl(210, 30%, 8%)',
		},
		text: {
			primary: 'hsl(0, 10%, 100%)',
			secondary: 'hsl(213, 26.8%, 83.9%)',
			tertiary: 'hsl(218, 10.6%, 64.9%)',
			accent: 'hsl(0, 100%, 76%)',
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
