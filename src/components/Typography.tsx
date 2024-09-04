import type { PropsWithChildren } from 'react';

import styled, { useTheme, type DefaultTheme } from 'styled-components';

export type TypographyProps = {
	variant: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
	color?: keyof DefaultTheme['colors']['text'];
	textAlign?: 'left' | 'center' | 'right';
	disableMargin?: boolean;
	style?: React.CSSProperties;
};

export const Typography = (props: PropsWithChildren<TypographyProps>) => {
	const { variant, color, textAlign, style: _style } = props;
	const theme = useTheme();

	const elementMap = {
		h1: H1,
		h2: H2,
		h3: H3,
		body: Body,
		caption: Caption,
	};

	const Element = elementMap[props.variant];

	const style = {
		color: color ? theme.colors.text[color] : undefined,
		textAlign,
		margin: props.disableMargin ? 0 : undefined,
		..._style,
	};

	return <Element style={style}>{props.children}</Element>;
};

const H1 = styled.h1`
	font-size: 2.5rem;
	color: ${(props) => props.theme.colors.text.primary};
	font-weight: 500;
`;

const H2 = styled.h2`
	font-size: 2rem;
	color: ${(props) => props.theme.colors.text.primary};
	font-weight: 500;
`;

const H3 = styled.h3`
	font-size: 1.5rem;
	color: ${(props) => props.theme.colors.text.primary};
	font-weight: 500;
`;

const Body = styled.p`
	font-size: 1rem;
	color: ${(props) => props.theme.colors.text.secondary};
	font-weight: 400;
	line-height: 1.5em;
`;

const Caption = styled.p`
	font-size: 0.75rem;
	color: ${(props) => props.theme.colors.text.tertiary};
	font-weight: 400;
`;
