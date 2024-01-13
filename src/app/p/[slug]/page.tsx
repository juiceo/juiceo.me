// pages/[slug].tsx

import React from "react";
import Head from "next/head";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { H1, H2, H3, H4, H5, H6 } from "@/components/mdx/typography";
import path from "path";

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
    <div>
      <Head>
        <title>{post.frontmatter.title as string}</title>
      </Head>
      <h1>{post.frontmatter.title}</h1>
      {post.content}
    </div>
  );
}

export const getBlogPost = async (slug: string) => {
  const filePath = path.join(process.cwd(), "src", "posts", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }
  const file = fs.readFileSync(
    path.join(process.cwd(), "src", "posts", `${slug}.mdx`)
  );
  return compileMDX<{ title: string }>({
    source: file,
    options: {
      parseFrontmatter: true,
    },
    components: {
      h1: H1,
      h2: H2,
      h3: H3,
      h4: H4,
      h5: H5,
      h6: H6,
    },
  });
};
