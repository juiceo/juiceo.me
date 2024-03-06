import { getAllBlogPostPreviews } from "@/utils/posts";
import { MetadataRoute } from "next";

type SitemapItem = MetadataRoute.Sitemap[number];

const BASE_URL = "https://juiceo.me";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllBlogPostPreviews();
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/posts`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map(
      (post): SitemapItem => ({
        url: `${BASE_URL}/p/${post.slug}`,
        lastModified: new Date(post.publishedDate),
        changeFrequency: "monthly",
        priority: 0.8,
      })
    ),
  ];
}
