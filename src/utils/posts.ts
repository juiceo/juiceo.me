import path from "path";
import fs from "fs";
import { extractHeadings, Heading } from "extract-md-headings";
import slugify from "slug";
import { CompileMDXResult, compileMDX } from "next-mdx-remote/rsc";
import * as MDXComponents from "@/components/mdx/mdx.components";

export type BlogPostFrontMatter = {
  title: string;
  description: string;
  publishedDate: string;
};

export type BlogPost = CompileMDXResult<BlogPostFrontMatter>;

export const getCompiledBlogPost = async (
  slug: string
): Promise<{ post: BlogPost; headings: Heading[] }> => {
  const filePath = path.join(process.cwd(), "src", "posts", `${slug}.mdx`);

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
    },
    components: MDXComponents,
  });

  return {
    post,
    headings,
  };
};

export const getAllPostSlugs = async () => {
  const dirPath = path.join(process.cwd(), "src", "posts");
  const fileNames = fs.readdirSync(dirPath);

  return fileNames.map((fileName) => {
    return fileName.replace(".mdx", "");
  });
};
