// pages/[slug].tsx

import React from "react";
import Head from "next/head";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import * as MDXComponents from "@/components/mdx/mdx.components";
import path from "path";
import { PostHeader } from "@/components/PostHeader";
import { PostBody } from "@/components/PostBody";
import { PostWrapper } from "@/components/PostWrapper";
import { extractHeadings } from "extract-md-headings";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log("SLUG", params);
  const post = await getBlogPost(params.slug);

  if (!post) {
    return <h1>Not found!</h1>;
  }

  return (
    <>
      <Head>
        <title>{post.frontmatter.title as string}</title>
      </Head>
      <PostWrapper>
        <PostHeader
          title={post.frontmatter.title}
          description={post.frontmatter.description}
        />
        <PostBody publishedDate={post.frontmatter.publishedDate}>
          {post.content}
        </PostBody>
      </PostWrapper>
    </>
  );
}

export const getBlogPost = async (slug: string) => {
  const filePath = path.join(process.cwd(), "src", "posts", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const file = fs.readFileSync(filePath);
  const headings = extractHeadings(filePath);

  console.log("HEADINGS", headings);
  return compileMDX<{
    title: string;
    description: string;
    publishedDate: string;
  }>({
    source: file,
    options: {
      parseFrontmatter: true,
    },
    components: MDXComponents,
  });
};
