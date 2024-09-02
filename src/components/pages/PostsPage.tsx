import { intlFormat } from 'date-fns';
import Link from 'next/link';

import { BlogPostPreview } from '@/utils/posts';

import styles from './PostsPage.module.css';

export interface PostsPageProps {
	posts: BlogPostPreview[];
}

export const PostsPage = (props: PostsPageProps) => {
	const { posts } = props;
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<h1 className={styles.title}>Blog</h1>
				<p className={styles.subtitle}>
					I write about my observations on technology, programming and life
				</p>
			</div>
			<div className={styles.posts}>
				{posts.map((post) => (
					<Link href={`/p/${post.slug}`} key={post.slug} className={styles.post}>
						<p className={styles.postDate}>
							{intlFormat(
								post.publishedDate,
								{
									year: 'numeric',
									month: 'long',
									day: 'numeric',
								},
								{ locale: 'en-US' },
							)}{' '}
						</p>
						<h2 className={styles.postTitle}>{post.title}</h2>
						<p className={styles.postDescription}>{post.description}</p>
					</Link>
				))}
			</div>
		</div>
	);
};
