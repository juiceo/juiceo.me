import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        background: ${(props) => props.theme.colors.background.page};
        height: 100%;
    }

    body {
        margin: 0;
        color: ${(props) => props.theme.colors.text.primary};
        font-family: ${(props) => props.theme.fonts.body};
        height: 100%;
    }


	a {
		text-decoration: none;
	}
`;
