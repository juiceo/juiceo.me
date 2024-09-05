'use client';

import { intlFormat } from 'date-fns';
import Link from 'next/link';
import styled from 'styled-components';

import { Typography } from '@/components/Typography';
import { BlogPostPreview } from '@/utils/posts';

export interface PostsPageProps {
	posts: BlogPostPreview[];
}

export const PostsPage = (props: PostsPageProps) => {
	const { posts } = props;
	return (
		<Wrapper>
			<Header>
				<Typography variant="h1" color="accent">
					Posts
				</Typography>
				<Typography variant="h3" color="tertiary">
					I write about my observations on technology, programming and life
				</Typography>
			</Header>
			<PostsList>
				{posts.map((post) => (
					<PostItem key={post.slug} post={post} />
				))}
			</PostsList>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	overflow: hidden;
	padding-bottom: 200px;
`;

const Header = styled.div`
	text-align: center;
	padding-left: ${(props) => props.theme.spacing(4)};
	padding-right: ${(props) => props.theme.spacing(4)};
	max-width: ${(props) => props.theme.layout.contentMaxWidth};
	width: 100%;
	margin: 0 auto;
	padding-top: 100px;
	padding-bottom: 100px;
`;

const PostsList = styled.div`
	margin: 0 auto;
	max-width: ${(props) => props.theme.layout.contentMaxWidth};
	width: 100%;
	padding-left: ${(props) => props.theme.spacing(2)};
	padding-right: ${(props) => props.theme.spacing(2)};
`;

const PostItemWrapper = styled(Link)`
	width: 100%;
	background: transparent;
	display: block;
	padding: ${(props) => props.theme.spacing(2)};
	margin-bottom: ${(props) => props.theme.spacing(2)};

	& h2 {
		transition: color 0.2s ease;
	}

	&:hover h2 {
		color: ${(props) => props.theme.colors.text.accent};
	}
`;

export type PostItemProps = {
	post: BlogPostPreview;
};

const PostItem = (props: PostItemProps) => {
	const { post } = props;
	return (
		<PostItemWrapper href={`/p/${post.slug}`}>
			<Typography variant="body" disableMargin>
				{intlFormat(
					post.publishedDate,
					{
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					},
					{ locale: 'en-US' },
				)}{' '}
			</Typography>
			<Typography variant="h2" disableMargin>
				{post.title}
			</Typography>
			<Typography variant="body">{post.description}</Typography>
		</PostItemWrapper>
	);
};
