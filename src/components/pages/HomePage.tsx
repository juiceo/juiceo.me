'use client';

import React, { PropsWithChildren, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { range } from 'lodash';
import { createPortal } from 'react-dom';
import { RiGithubFill, RiLinkedinFill, RiRssFill } from 'react-icons/ri';
import styled from 'styled-components';
import { useMediaQuery } from 'usehooks-ts';

import { Typography } from '@/components/Typography';

export const HomePage = () => {
	return (
		<Wrapper>
			<Foreground>
				<Typography variant="h1" color="accent" style={{ textShadow: '0 0 8px #2f2d2e' }}>
					juiceo.me
				</Typography>
				<MobileNav />
			</Foreground>
			<Background>
				<BackgroundGrid />
			</Background>
		</Wrapper>
	);
};

const MobileNav = () => {
	const visible = useMediaQuery('(max-width: 768px)', {
		initializeWithValue: false,
		defaultValue: false,
	});
	return (
		<motion.div
			animate={{ height: visible ? 'auto' : 0 }}
			transition={{
				delay: visible ? 0 : 0.5,
			}}
		>
			<AnimatePresence>
				{visible && (
					<>
						<MobileNavItem position={1} label="Blog" href="/posts" />
						<MobileNavItem position={2} label="GitHub" href="https://github.com/juiceo" />
						<MobileNavItem
							position={3}
							label="LinkedIn"
							href="https://linkedin.com/li/juusolappalainen1"
						/>
					</>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

const MobileNavItem = (props: { position: number; label: string; href: string }) => {
	const { position, label, href } = props;
	return (
		<motion.a
			href={href}
			target={href.startsWith('/') ? '_self' : '_blank'}
			rel="noreferrer noopener"
			initial={{
				x: -50,
				opacity: 0,
			}}
			animate={{
				x: 0,
				opacity: 1,
				transition: {
					delay: position * 0.15,
				},
			}}
			exit={{
				opacity: 0,
				filter: 'blur(10px)',
			}}
		>
			<Typography variant="h3" color="accent" disableMargin>
				{label}
			</Typography>
		</motion.a>
	);
};

const BackgroundGrid = () => {
	return (
		<BackgroundGridWrapper>
			{range(400).map((i) => {
				return (
					<BackgroundGridItem key={i}>
						{i === 248 && <PostsItem key={i} />}
						{i === 213 && <LinkedInItem key={i} />}
						{i === 214 && <GitHubItem key={i} />}
					</BackgroundGridItem>
				);
			})}
		</BackgroundGridWrapper>
	);
};

const TooltipItem = (props: PropsWithChildren<{ label: string; href: string }>) => {
	const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
	return (
		<TooltipItemWrapper
			onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
			onMouseOut={() => setMousePos(null)}
			aria-label={props.label}
			href={props.href}
			target={props.href.startsWith('/') ? '_self' : '_blank'}
			rel="noreferrer noopener"
		>
			{props.children}
			{mousePos &&
				createPortal(
					<Tooltip
						key={`tooltip-${props.label}`}
						label={props.label}
						x={mousePos.x}
						y={mousePos.y}
					/>,
					document.body,
				)}
		</TooltipItemWrapper>
	);
};

const GitHubItem = () => {
	return (
		<TooltipItem label="GitHub" href="https://github.com/juiceo">
			<RiGithubFill size={20} />
		</TooltipItem>
	);
};

const LinkedInItem = () => {
	return (
		<TooltipItem label="LinkedIn" href="https://linkedin.com/in/juusolappalainen1">
			<RiLinkedinFill size={20} />
		</TooltipItem>
	);
};

const PostsItem = () => {
	return (
		<TooltipItem label="Blog" href="/posts">
			<RiRssFill size={20} />
		</TooltipItem>
	);
};

const Tooltip = (props: { label: string; x: number; y: number }) => {
	const { label, x, y } = props;
	return (
		<TooltipWrapper
			style={{
				top: y,
				left: x,
			}}
		>
			<TooltipLabel initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				{label}
			</TooltipLabel>
			<TooltipBar />
		</TooltipWrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	position: relative;
	overflow: hidden;
`;

const Foreground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: ${(props) => props.theme.spacing(4)};
	z-index: 5;
	pointer-events: none;

	@media screen and (max-width: 768px) {
		pointer-events: initial;
	}
`;

const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transform: scale(4);
	transition: transform 0.3s ease;

	@media screen and (max-width: 768px) {
		pointer-events: none;
	}
`;

const BackgroundGridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(20, minmax(30px, 3vw));
	grid-template-rows: repeat(20, minmax(30px, 3vw));
	grid-gap: 1px;
	transform: skewX(-48deg) skewY(14deg) scaleX(2) rotate(7.51416748046875deg) scale(0.426953125);
`;

const BackgroundGridItem = styled.div`
	background: #2f2d2e;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transition: all 0.2s ease;

	&:hover {
		background: ${(props) => props.theme.colors.text.accent};
	}
`;

const TooltipItemWrapper = styled.a`
	transition: all 0.5s ease;
	opacity: 1;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${(props) => props.theme.colors.text.primary};

	@media screen and (max-width: 768px) {
		opacity: 0;
		pointer-events: none;
		filter: blur(10px);
	}
`;

const TooltipWrapper = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 100;
	transform: translateY(-105%) translateX(-50%);
	pointer-events: none;
`;

const TooltipLabel = styled(motion.p)`
	font-size: 1.2rem;
	color: ${(props) => props.theme.colors.text.accent};
	user-select: none;
	padding: 8px;
	text-shadow: 0 0 8px #2f2d2e;
`;

const TooltipBar = styled.div`
	width: 2px;
	background: ${(props) => props.theme.colors.background.page};
	height: 150px;
`;
