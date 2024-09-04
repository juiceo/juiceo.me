'use client';

import styled from 'styled-components';

export interface PostHeaderProps {
	title: string;
	description: string;
}

export const PostHeader = (props: PostHeaderProps) => {
	return (
		<Container>
			<Title>{props.title}</Title>
		</Container>
	);
};

const Container = styled.div`
	height: 80vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-bottom: 100px;
	padding-left: 32px;
	padding-right: 32px;
	gap: 16px;
	background-color: ${(props) => props.theme.colors.backgroundPage};
	font-family: ${(props) => props.theme.fonts.mono};
`;

const Title = styled.h1`
	color: ${(props) => props.theme.colors.textPrimary};
	font-size: 1.875rem;
	line-height: 2.25rem;
	text-align: center;
`;
