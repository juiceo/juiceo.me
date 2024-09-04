'use client';

import { PropsWithChildren } from 'react';

import Link from 'next/link';
import { RiInformationLine, RiLink } from 'react-icons/ri';
import slug from 'slug';
import styled from 'styled-components';

import { Typography } from '@/components/Typography';

import styles from './mdx.module.css';

export const h1 = (props: PropsWithChildren<{}>) => {
	const titleSlug = slug(props.children?.toString() ?? '');
	return (
		<Link className={styles.hashLink} href={`#${titleSlug}`}>
			<div className={styles.hashLinkIcon}>
				<RiLink size={24} />
			</div>
			<div className={styles.hashLinkPos} id={titleSlug} />
			<Typography
				variant="h2"
				color="accent"
				disableMargin
				style={{ marginTop: '4rem', marginBottom: '2rem' }}
			>
				{props.children}
			</Typography>
		</Link>
	);
};

export const h2 = (props: PropsWithChildren<{}>) => {
	const titleSlug = slug(props.children?.toString() ?? '');
	return (
		<Link className={styles.hashLink} href={`#${titleSlug}`}>
			<div className={styles.hashLinkIcon}>
				<RiLink size={24} />
			</div>
			<div className={styles.hashLinkPos} id={titleSlug} />
			<Typography variant="h3" color="primary">
				{props.children}
			</Typography>
		</Link>
	);
};

export const h3 = (props: PropsWithChildren<{}>) => (
	<Typography variant="h3" color="primary">
		{props.children}
	</Typography>
);

export const ul = styled.ul`
	padding-left: 32px;
	padding-top: 16px;
	list-style: circle;
`;
export const li = styled.li`
	margin-bottom: 8px;
`;
export const br = styled.br``;

export const p = (props: PropsWithChildren) => {
	return <Typography variant="body">{props.children}</Typography>;
};

export const strong = styled.strong`
	color: ${(props) => props.theme.colors.text.accent};
`;

export const img = (props: PropsWithChildren<any>) => (
	<>
		<img
			{...props}
			alt={props.alt}
			className={`${styles.image} w-full rounded-lg border-gray-700 border-2`}
		/>
		<span className={`${styles.imageCaption} text-xs text-center mt-1 w-full block`}>
			{props.alt}
		</span>
	</>
);

export const blockquote = (props: PropsWithChildren<{}>) => {
	return (
		<aside className={styles.blockQuote}>
			{props.children}
			<div className={styles.blockQuoteIcon}>
				<RiInformationLine size={36} />
			</div>
		</aside>
	);
};

const StyledA = styled.a`
	color: ${(props) => props.theme.colors.text.accent};
	text-decoration: underline;
`;

export const a = (props: PropsWithChildren<{}>) => (
	<StyledA target="_blank" rel="noopener noreferrer" {...props} />
);

export const em = styled.em`
	opacity: 0.75;
`;
