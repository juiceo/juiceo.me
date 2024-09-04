// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			backgroundPage: string;
			backgroundPageDark: string;
			textPrimary: string;
			textSecondary: string;
			textBody: string;
			info: string;
			accent: string;
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
