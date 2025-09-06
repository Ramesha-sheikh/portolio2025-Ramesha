import Image from "next/image";
import Script from "next/script";


import BlogHeader from "@/components/blog/BlogHeader";
import SkipToMain from "@/components/SkipToMain";
import SocialLinks from "@/components/SocialLinks";
import AppHead, { Meta } from "@/components/AppHead";
import Footer from "@/components/Footer";
import markdownToHtml from "@/utils/markdownToHtml";
import { getAllPosts, getPostBySlug } from "@/utils/api";
import PostBody from "@/components/blog/PostBody";
import Tag from "@/components/blog/Tag";
import DateTime from "@/components/DateTime";
import HeadCategory from "@/components/blog/HeadCategory";

export interface MdxMeta extends Meta {
  title: string;
  datetime: string;
  excerpt: string;
  slug: string;
  category: string;
  coverImage?: string;
  tags?: string[];
  content: string;
  coverImageWidth?: string;
  coverImageHeight?: string;
  featured: boolean;
  language: "English" | "Myanmar";
}

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "datetime",
    "description",
    "slug",
    "author",
    "content",
    "ogImage",
    "ogImageAlt",
    "coverImage",
    "coverImageWidth",
    "coverImageHeight",
    "category",
    "tags",
    "type",
  ]);

  const content = await markdownToHtml(
    Array.isArray(post.content) ? post.content.join("\n") : post.content || ""
  );
  const postUrl = `${process.env.NEXT_PUBLIC_URL}/blog/posts/${post.slug}`;

  return (
    <>
      {/* Facebook Plugin for comment & share */}
      <div id="fb-root"></div>
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v13.0&appId=3098460656840262&autoLogAppEvents=1"
        nonce="BwXXZ73U"
      />

      <AppHead
        title={`${post.title} - Humaiza Naz`}
        url={postUrl}
        meta={{ ...post }}
      />

      <div className="bg-bglight dark:bg-bgdark">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <BlogHeader />
          <SocialLinks />
          <main id="main" className="blog-main">
            <article className="blog-section">
              <h1 className="font-semibold md:font-bold text-3xl md:text-4xl">
                {post.title}
              </h1>
              <div className="mt-2 mb-1 italic text-marrsdark dark:text-carrigreen">
                <DateTime datetime={Array.isArray(post.datetime) ? post.datetime.join(", ") : post.datetime} />
              </div>
              <HeadCategory category={Array.isArray(post.category) ? post.category.join(", ") : post.category} />
              {post.tags && (
                <div className="my-2">
                  {(Array.isArray(post.tags) ? post.tags : [post.tags]).map((tag: string) => (
                    <Tag tag={tag} key={tag} />
                  ))}
                </div>
              )}
              {post.coverImage && (
                <div className="bg-cardlight dark:bg-carddark">
                  <Image
                    src={Array.isArray(post.coverImage) ? post.coverImage[0] : post.coverImage}
                    alt={
                      Array.isArray(post.coverImageAlt)
                        ? post.coverImageAlt.join(", ")
                        : post.coverImageAlt || "Picture"
                    }
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    priority
                    width={Number(post.coverImageWidth) || 1200}
                    height={Number(post.coverImageHeight) || 700}
                  />
                </div>
              )}
              <PostBody content={content} />

              {/* Facebook Share Button */}
              <div
                className="fb-share-button my-4"
                data-href={postUrl}
                data-layout="button"
                data-size="large"
              >
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    postUrl
                  )}&amp;src=sdkpreparse`}
                  className="fb-xfbml-parse-ignore"
                >
                  Share
                </a>
              </div>
            </article>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
