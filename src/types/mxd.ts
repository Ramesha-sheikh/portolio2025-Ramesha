// src/types/mdx.ts
export interface MdxMeta {
  coverImage: string;
  coverImageAlt: string;
  slug: string;
  title: string;
  excerpt: string;
  datetime: string;
  featured: boolean;
  date: string; // Add date property to match BlogSection's requirement
}
