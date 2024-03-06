import React from "react";
import Head from "next/head";
import { PostHeader } from "@/components/PostHeader";
import { PostBody } from "@/components/PostBody";
import { PostTOC } from "@/components/PostTOC";
import { PostLayout } from "@/components/PostLayout";
import { getAllPostSlugs, getCompiledBlogPost } from "@/utils/posts";
import { NextPage } from "next";

export type PostPageProps = {
  params: {
    slug: string;
  };
};

const PostPage: NextPage<PostPageProps> = async ({ params }) => {
  const { post, headings } = await getBlogPost(params.slug);

  return (
    <>
      <Head>
        <title>{post.frontmatter.title as string}</title>
      </Head>

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
    </>
  );
};

export const dynamicParams = false;
export const generateStaticParams = async () => {
  const slugs = await getAllPostSlugs();

  return slugs.map((slug) => ({ slug }));
};

const getBlogPost = async (slug: string) => {
  const { post, headings } = await getCompiledBlogPost(slug);

  return { post, headings };
};

export default PostPage;
