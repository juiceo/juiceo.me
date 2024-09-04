'use client';

import { useEffect, useState } from 'react';

import { throttle } from 'lodash';
import Link from 'next/link';
import styled from 'styled-components';

export const NavBar = () => {
	const [scrollPos, setScrollPos] = useState(0);
	const [windowHeight, setWindowHeight] = useState(1000);

	useEffect(() => {
		const handleScroll = throttle(() => {
			setScrollPos(window.scrollY);
		}, 10);

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		setWindowHeight(window.innerHeight);
	}, []);

	return (
		<>
			<NavBarWrapperTop>
				<NavBarInner />
			</NavBarWrapperTop>
			<NavBarWrapperScrolled $visible={scrollPos > windowHeight}>
				<NavBarInner />
			</NavBarWrapperScrolled>
		</>
	);
};

const NavBarInner = () => {
	return (
		<Wrapper>
			<NavLink href="/">
				<NavTitle>juiceo.me</NavTitle>
			</NavLink>
			<Divider />
			<NavSection style={{ flex: 1 }}>
				<NavLink href="/posts">All posts</NavLink>
			</NavSection>
			<NavSection style={{ flex: 0 }}></NavSection>
		</Wrapper>
	);
};

const Wrapper = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	gap: 16px;
	height: 40px;
	margin: 0 auto;
	max-width: ${(props) => props.theme.layout.contentMaxWidth};
	color: ${(props) => props.theme.colors.text.secondary};
`;

const NavLink = styled(Link)`
	color: ${(props) => props.theme.colors.text.secondary};
	text-decoration: none;
	transition: color 0.2s ease;
	&:hover {
		color: ${(props) => props.theme.colors.text.primary};
	}
`;

const NavSection = styled.div`
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: '16px',
`;

const NavTitle = styled.h1`
	font-size: 1rem;
`;

const Divider = styled.div`
	height: 50%;
	width: 2px;
	background: ${(props) => props.theme.colors.text.secondary};
`;

const NavBarWrapperTop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
	padding-left: 32px;
	padding-right: 32px;
	padding-top: 16px;
`;

const NavBarWrapperScrolled = styled.div.attrs<{ $visible: boolean }>((props) => ({
	$visible: props.$visible,
}))`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
	background: ${(props) => props.theme.colors.background.pageDark};
	transform: ${(props) => (props.$visible ? 'translateY(0)' : 'translateY(-100px)')};
	transition: transform 0.2s ease;
	padding-left: 32px;
	padding-right: 32px;
`;
