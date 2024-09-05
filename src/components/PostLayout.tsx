'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

export interface PostLayoutProps {}

export const PostLayout = (props: PropsWithChildren<PostLayoutProps>) => {
	return (
		<Outer>
			<Inner>{props.children}</Inner>
		</Outer>
	);
};

const Outer = styled.div`
	width: 100%;
	max-width: ${(props) => props.theme.layout.contentMaxWidth};
	margin: 0 auto;
	padding-left: 16px;
	padding-right: 16px;
`;

const Inner = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr auto;
	grid-gap: 32px;
	padding-top: 32px;

	@media screen and (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;
