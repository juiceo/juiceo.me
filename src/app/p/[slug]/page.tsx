import React from 'react';

import 'highlight.js/styles/github-dark-dimmed.css';
import '@/components/mdx/mdx.css';

import { NextPage } from 'next';
import type { Metadata, ResolvingMetadata } from 'next';

import { NavBar } from '@/components/NavBar';
import { PostBody } from '@/components/PostBody';
import { PostFooter } from '@/components/PostFooter';
import { PostHeader } from '@/components/PostHeader';
import { PostLayout } from '@/components/PostLayout';
import { PostTOC } from '@/components/PostTOC';
import { getAllBlogPostPreviews, getCompiledBlogPost } from '@/utils/posts';

export type PostPageProps = {
	params: Promise<{
		slug: string;
	}>;
};

const PostPage: NextPage<PostPageProps> = async ({ params }) => {
	const { slug } = await params;
	const { post, headings } = await getBlogPost(slug);

	return (
		<div>
			<NavBar />
			<div
				style={{
					position: 'relative',
					zIndex: 5,
					paddingBottom: '200px',
				}}
			>
				<PostHeader title={post.frontmatter.title} description={post.frontmatter.description} />
				<PostLayout>
					<div style={{ minWidth: 0 }}>
						<PostBody publishedDate={post.frontmatter.publishedDate}>{post.content}</PostBody>
						<PostFooter />
					</div>
					{!!headings.length && <PostTOC headings={headings} />}
				</PostLayout>
			</div>
		</div>
	);
};

export const dynamicParams = false;
export const generateStaticParams = async () => {
	const posts = await getAllBlogPostPreviews();

	return posts.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = async (
	{ params }: PostPageProps,
	parent: ResolvingMetadata,
): Promise<Metadata> => {
	const { slug } = await params;
	const { post } = await getCompiledBlogPost(slug);

	return {
		title: post.frontmatter.title,
		description: post.frontmatter.description,
		//TODO: Add more stuff here
	};
};

const getBlogPost = async (slug: string) => {
	const { post, headings } = await getCompiledBlogPost(slug);

	return { post, headings };
};

export default PostPage;
