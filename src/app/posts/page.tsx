import React from "react";
import Head from "next/head";
import { getAllBlogPostPreviews } from "@/utils/posts";
import { PostsPage } from "@/components/pages/PostsPage";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const posts = await getAllBlogPostPreviews();

  return (
    <>
      <Head>
        <title>All posts | juiceo.me</title>
      </Head>
      <PostsPage posts={posts} />
    </>
  );
}
