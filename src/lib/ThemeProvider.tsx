'use client';

import type { PropsWithChildren } from 'react';

import { Poppins, Source_Code_Pro } from 'next/font/google';
import {
	createGlobalStyle,
	DefaultTheme,
	ThemeProvider as SCThemeProvider,
} from 'styled-components';

export const poppins = Poppins({ subsets: ['latin'], weight: ['500', '300'] });
export const sourceCodePro = Source_Code_Pro({
	subsets: ['latin'],
	weight: ['400'],
});

const darkTheme: DefaultTheme = {
	colors: {
		backgroundPage: '#1B2021',
		backgroundPageDark: 'hsl(210, 30%, 8%)',
		textPrimary: 'hsl(0, 10%, 100%)',
		textSecondary: 'hsl(218, 10.6%, 64.9%)',
		textBody: 'hsl(213, 26.8%, 83.9%)',
		info: 'hsl(230, 100%, 69%)',
		accent: 'hsl(0, 100%, 76%)',
	},
	layout: {
		contentMaxWidth: '1024px',
	},
	fonts: {
		heading: `${poppins.style.fontFamily}, sans-serif`,
		body: `${poppins.style.fontFamily}, sans-serif`,
		mono: `${sourceCodePro.style.fontFamily}, monospace`,
	},
};

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        background: ${(props) => props.theme.colors.backgroundPage};
        height: 100%;
    }

    body {
        margin: 0;
        color: ${(props) => props.theme.colors.textPrimary};
        font-family: ${(props) => props.theme.fonts.body};
        height: 100%;
    }
`;

export const ThemeProvider = (props: PropsWithChildren) => {
	return <SCThemeProvider theme={darkTheme}>{props.children}</SCThemeProvider>;
};
