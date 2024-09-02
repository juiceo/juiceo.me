import React from 'react';

import Head from 'next/head';

import { PostsPage } from '@/components/pages/PostsPage';
import { getAllBlogPostPreviews } from '@/utils/posts';

export default async function PostPage({ params }: { params: { slug: string } }) {
	const posts = await getAllBlogPostPreviews();

	return (
		<>
			<Head>
				<title>Posts | juiceo.me</title>
			</Head>
			<PostsPage posts={posts} />
		</>
	);
}
