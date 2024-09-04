'use client';

import { useState, type PropsWithChildren } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Typography } from '@/components/Typography';

export interface PostHeaderProps {
	title: string;
	description: string;
}

export const PostHeader = (props: PostHeaderProps) => {
	return (
		<Container>
			<Typography variant="h1">
				{props.title.split('').map((char, index) => (
					<AnimatedCharacter position={index}>{char}</AnimatedCharacter>
				))}
			</Typography>
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

const AnimatedCharacter = (props: PropsWithChildren<{ position: number }>) => {
	const [startPos] = useState<number>(() => {
		const random = Math.floor(Math.random() * 100);
		return -50 + random;
	});
	return (
		<motion.span
			style={{
				display: 'inline-block',
				whiteSpace: 'pre',
			}}
			initial={{
				opacity: 0,
				y: startPos,
			}}
			animate={{
				opacity: 1,
				y: 0,
			}}
			transition={{
				delay: props.position * 0.03,
			}}
		>
			{props.children}
		</motion.span>
	);
};
