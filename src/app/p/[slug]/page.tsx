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
import { PostTOC } from "@/components/PostTOC";
import { PostLayout } from "@/components/PostLayout";
import slugify from "slug";
import { NavBar } from "@/components/NavBar";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log("SLUG", params);
  const data = await getBlogPost(params.slug);

  if (!data) {
    return <h1>Not found!</h1>;
  }

  const { post, headings } = data;

  return (
    <>
      <Head>
        <title>{post.frontmatter.title as string}</title>
      </Head>
      <NavBar />
      <PostWrapper>
        <PostHeader
          title={post.frontmatter.title}
          description={post.frontmatter.description}
        />
        <PostLayout>
          <PostBody publishedDate={post.frontmatter.publishedDate}>
            {post.content}
          </PostBody>
          <PostTOC headings={headings} />
        </PostLayout>
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
  const headings = extractHeadings(filePath).map((heading) => ({
    ...heading,
    slug: slugify(heading.title),
  }));

  const post = await compileMDX<{
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

  return {
    post,
    headings,
  };
};
