'use client';

import styled from 'styled-components';

import { Typography } from '@/components/Typography';

export interface PostHeaderProps {
	title: string;
	description: string;
}

export const PostHeader = (props: PostHeaderProps) => {
	return (
		<Container>
			<Typography variant="h1">{props.title}</Typography>
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
	background-color: ${(props) => props.theme.colors.background.page};
`;
