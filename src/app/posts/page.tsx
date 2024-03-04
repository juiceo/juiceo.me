import React from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import { PostHeader } from "@/components/PostHeader";
import fm from "front-matter";
import Link from "next/link";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { posts } = await getAllPosts();

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

export const getAllPosts = async () => {
  const postsDirPath = path.join(process.cwd(), "src", "posts");

  const fileNames = fs.readdirSync(postsDirPath);

  const posts = fileNames.map((fileName) => {
    const file = fs.readFileSync(path.join(postsDirPath, fileName), "utf8");
    const frontMatter = fm<{
      title: string;
      description: string;
      publishedDate: string;
    }>(file);

    return {
      slug: fileName.replace(".mdx", ""),
      ...frontMatter.attributes,
    };
  });

  return {
    posts,
  };
};
