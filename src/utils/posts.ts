import fs from 'fs';
import path from 'path';

import { extractHeadings, Heading } from 'extract-md-headings';
import fm from 'front-matter';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import { sortBy } from 'lodash';
import { compileMDX, CompileMDXResult } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import slugify from 'slug';

import * as MDXComponents from '@/components/mdx/mdx.components';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerAliases(['jsx', 'js'], { languageName: 'javascript' });
hljs.registerAliases(['tsx', 'ts'], { languageName: 'typescript' });

export type BlogPostFrontMatter = {
	title: string;
	description: string;
	publishedDate: string;
};

export type BlogPostPreview = {
	slug: string;
} & BlogPostFrontMatter;

export type BlogPost = CompileMDXResult<BlogPostFrontMatter>;

export const getCompiledBlogPost = async (
	slug: string,
): Promise<{ post: BlogPost; headings: Heading[] }> => {
	const filePath = path.join(process.cwd(), 'src', 'posts', `${slug}.mdx`);

	if (!fs.existsSync(filePath)) {
		throw new Error(`Post with slug ${slug} not found`);
	}

	const file = fs.readFileSync(filePath);
	const headings = extractHeadings(filePath).map((heading) => ({
		...heading,
		slug: slugify(heading.title),
	}));

	const post = await compileMDX<BlogPostFrontMatter>({
		source: file,
		options: {
			parseFrontmatter: true,
			mdxOptions: {
				remarkPlugins: [],
				rehypePlugins: [rehypeHighlight],
			},
		},
		components: MDXComponents,
	});

	if (!post.frontmatter.publishedDate) {
		throw new Error(`Post with slug ${slug} not found`);
	}

	return {
		post,
		headings,
	};
};

export const getAllBlogPostPreviews = async (): Promise<BlogPostPreview[]> => {
	const postsDirPath = path.join(process.cwd(), 'src', 'posts');

	const fileNames = fs.readdirSync(postsDirPath);

	const previews = fileNames
		.filter((fileName) => fileName.includes('.mdx'))
		.map((fileName) => {
			const file = fs.readFileSync(path.join(postsDirPath, fileName), 'utf8');
			const frontMatter = fm<{
				title: string;
				description: string;
				publishedDate: string;
			}>(file);

			return {
				slug: getSlugFromFilename(fileName),
				...frontMatter.attributes,
			};
		});

	return sortBy(
		previews.filter((p) => !!p.publishedDate),
		(p) => p.publishedDate,
	).reverse();
};

export const getSlugFromFilename = (fileName: string) => {
	return fileName.replace('.mdx', '');
};
