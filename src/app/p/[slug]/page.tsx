import React from "react";
import { PostHeader } from "@/components/PostHeader";
import { PostBody } from "@/components/PostBody";
import { PostTOC } from "@/components/PostTOC";
import { PostLayout } from "@/components/PostLayout";
import { getAllBlogPostPreviews, getCompiledBlogPost } from "@/utils/posts";
import { NextPage } from "next";
import { Footer } from "@/components/Footer";
import { AnimatedGradients } from "@/components/Gradients";
import type { Metadata, ResolvingMetadata } from "next";

export type PostPageProps = {
  params: {
    slug: string;
  };
};

const PostPage: NextPage<PostPageProps> = async ({ params }) => {
  const { post, headings } = await getBlogPost(params.slug);

  return (
    <div>
      <AnimatedGradients />
      <div
        style={{
          position: "relative",
          zIndex: 5,
          paddingBottom: "300px",
        }}
      >
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
      </div>
      <Footer />
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
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { slug } = params;
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
