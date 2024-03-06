import React from "react";
import Head from "next/head";
import { PostHeader } from "@/components/PostHeader";
import Link from "next/link";
import { getAllBlogPostPreviews } from "@/utils/posts";

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

      <PostHeader title={"ALL POSTS"} description="Here's everything I have" />
      {posts.map((post) => (
        <Link href={`/p/${post.slug}`} key={post.slug}>
          {post.title}
        </Link>
      ))}
    </>
  );
}
