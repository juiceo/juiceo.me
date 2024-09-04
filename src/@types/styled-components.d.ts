import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			text: {
				primary: string;
				secondary: string;
				tertiary: string;
				accent: string;
			};
			background: {
				page: string;
				pageDark: string;
			};
			status: {
				info: string;
			};
		};
		layout: {
			contentMaxWidth: string;
		};
		fonts: {
			heading: string;
			body: string;
			mono: string;
		};
	}
}
