'use client';

import type { PropsWithChildren } from 'react';

import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/lib/GlobalStyle';
import { darkTheme } from '@/lib/themes';

export const ThemeProvider = (props: PropsWithChildren) => {
	return (
		<SCThemeProvider theme={darkTheme}>
			<GlobalStyle />
			{props.children}
		</SCThemeProvider>
	);
};
