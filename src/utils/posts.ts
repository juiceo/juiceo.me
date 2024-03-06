import path from "path";
import fs from "fs";
import { extractHeadings, Heading } from "extract-md-headings";
import slugify from "slug";
import { CompileMDXResult, compileMDX } from "next-mdx-remote/rsc";
import * as MDXComponents from "@/components/mdx/mdx.components";
import fm from "front-matter";

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

  if (!post.frontmatter.publishedDate) {
    throw new Error(`Post with slug ${slug} not found`);
  }

  return {
    post,
    headings,
  };
};

export const getAllBlogPostPreviews = async (): Promise<BlogPostPreview[]> => {
  const postsDirPath = path.join(process.cwd(), "src", "posts");

  const fileNames = fs.readdirSync(postsDirPath);

  const previews = fileNames.map((fileName) => {
    const file = fs.readFileSync(path.join(postsDirPath, fileName), "utf8");
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

  return previews.filter((p) => !!p.publishedDate);
};

export const getSlugFromFilename = (fileName: string) => {
  return fileName.replace(".mdx", "");
};
