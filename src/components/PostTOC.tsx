'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { Heading } from 'extract-md-headings';
import { throttle } from 'lodash';
import styled from 'styled-components';

export interface PostTOCProps {
	headings: Heading[];
}

export const PostTOC = (props: PostTOCProps) => {
	const { headings } = props;

	const [activeHeadingId, setActiveHeadingId] = useState<string | null>(null);
	const filteredHeadings = useMemo(
		() => headings.filter((heading) => heading.level <= 2),
		[headings],
	);

	const getActiveHeading = useCallback(() => {
		const activeHeadings = filteredHeadings.filter((heading) => {
			const id = heading.slug;
			const el = document.getElementById(id);
			const pos = el?.getBoundingClientRect().top;
			return !!pos && pos < 100;
		});

		return activeHeadings.pop()?.id?.toString() ?? null;
	}, [filteredHeadings]);

	useEffect(() => {
		const handleScroll = throttle(() => {
			setActiveHeadingId(getActiveHeading());
		}, 200);

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [getActiveHeading]);

	return (
		<Container>
			<Label>Table of contents</Label>
			<TOCList>
				{filteredHeadings.map((heading) => (
					<PostTOCItem
						heading={heading}
						isActive={activeHeadingId === heading.id.toString()}
						key={heading.id}
					/>
				))}
			</TOCList>
		</Container>
	);
};

const PostTOCItem = (props: { heading: Heading; isActive?: boolean }) => {
	const { heading } = props;

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		document.getElementById(heading.slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<a href={`#${heading.slug}`} key={heading.id} onClick={handleClick}>
			<TOCListItem $level={heading.level} $active={props.isActive}>
				{heading.title}
			</TOCListItem>
		</a>
	);
};

const Container = styled.nav`
	position: sticky;
	top: 100px;
	align-self: start;
	min-width: 0;
	width: 240px;

	@media screen and (max-width: 900px) {
		display: none;
	}
`;

const Label = styled.h6`
	text-transform: uppercase;
	margin-bottom: 1em;
	color: ${(props) => props.theme.colors.text.primary};
	letter-spacing: 2px;
`;

const TOCList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 8px;
`;

const TOCListItem = styled.p.attrs<{ $level: number; $active?: boolean }>((props) => ({
	$level: props.$level,
	$active: props.$active ?? false,
}))`
	transition: color 0.2s ease;
	line-height: 1.25em;
	font-size: ${(props) => (props.$level === 1 ? '0.9rem' : '0.8rem')};
	margin-left: ${(props) => (props.$level === 2 ? '1rem' : '0')};
	color: ${(props) => (props.$active ? '#FF8484' : props.theme.colors.text.secondary)};
	margin: 0;
`;
