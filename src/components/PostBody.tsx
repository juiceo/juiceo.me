'use client';

import { PropsWithChildren } from 'react';

import { intlFormat } from 'date-fns';
import styled from 'styled-components';

export interface PostBodyProps {
	publishedDate: string;
}

export const PostBody = (props: PropsWithChildren<PostBodyProps>) => {
	return (
		<Container>
			<PublishedDate>
				{intlFormat(
					props.publishedDate,
					{
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					},
					{ locale: 'en-US' },
				)}
			</PublishedDate>
			<Content>{props.children}</Content>
		</Container>
	);
};

const Container = styled.main`
	transform: translateY(-150px);
	width: 100%;
	background: ${(props) => props.theme.colors.background.page};
	padding: 32px;
	border-radius: 8px;
	position: relative;
	min-width: 0;

	@media screen and (max-width: 900px) {
		padding-left: 16px;
		padding-right: 16px;
	}
`;

const PublishedDate = styled.p`
	color: ${(props) => props.theme.colors.text.tertiary};
	font-size: 1rem;
	margin-bottom: 1rem;
`;

const Content = styled.div`
	color: ${(props) => props.theme.colors.text.secondary};
	font-size: 1rem;
	line-height: 1.5rem;
`;
