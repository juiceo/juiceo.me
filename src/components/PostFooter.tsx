'use client';

import Image from 'next/image';
import Link from 'next/link';
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri';
import styled from 'styled-components';

export const PostFooter = () => {
	return (
		<Wrapper>
			<Avatar>
				<Image width={200} height={200} src="/images/juuso.jpg" alt="Me" />
			</Avatar>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					flex: 1,
				}}
			>
				<Title>About the writer</Title>
				<Text>
					{`Hi 👋 I'm Juuso, a full-stack engineer based in Helsinki, Finland with a special interest in topics related to software quality, scalability and developer productivity. I write mostly because I find it fun, but I also find it very awesome that you've read this far. Thanks for your time!`}
				</Text>
				<div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
					<IconLink href={'https://github.com/juiceo'} target="_blank" rel="noopener noreferrer">
						<RiGithubFill size={24} />
					</IconLink>
					<IconLink
						href={'https://www.linkedin.com/in/juiceo'}
						target="_blank"
						rel="noopener noreferrer"
					>
						<RiLinkedinFill size={24} />
					</IconLink>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.footer`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	max-width: ${(props) => props.theme.layout.contentMaxWidth};
	margin: 0 auto;
	padding-left: 16px;
	padding-right: 16px;
	gap: 16px;

	@media screen and (max-width: 600px) {
		flex-direction: column;
	}
`;

const Avatar = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	overflow: hidden;
	position: relative;
	border-color: ${(props) => props.theme.colors.text.accent};
	border-width: 4px;
	border-style: solid;

	& img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const Title = styled.h4`
	color: ${(props) => props.theme.colors.text.accent};
	margin: 0;
`;

const Text = styled.p`
	font-size: 1rem;
	color: ${(props) => props.theme.colors.text.secondary};
`;

const IconLink = styled(Link)`
	color: ${(props) => props.theme.colors.text.primary};
`;
