import React from 'react';

import type { Metadata } from 'next';

import { PostsPage } from '@/components/pages/PostsPage';
import { getAllBlogPostPreviews } from '@/utils/posts';

export default async function PostPage() {
	const posts = await getAllBlogPostPreviews();

	return <PostsPage posts={posts} />;
}

export const metadata: Metadata = {
	title: 'Posts | juiceo.me',
};
