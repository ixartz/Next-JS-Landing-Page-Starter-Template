import { format } from 'date-fns';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { Meta } from '@/layout/Meta';
import { Section } from '@/layout/Section';
import { TopNav } from '@/layout/TopNav';
import {
  type BlogMeta,
  getAllPostsMeta,
  getPostBySlug,
  getPostSlugs,
} from '@/lib/blog';
import { Footer } from '@/templates/Footer';
import { AppConfig } from '@/utils/AppConfig';

interface BlogPostProps {
  post: {
    meta: BlogMeta;
    mdxSource: any;
  };
  relatedPosts: BlogMeta[];
}

const BlogPost = ({ post, relatedPosts }: BlogPostProps) => {
  const { meta, mdxSource } = post;

  return (
    <div className="text-gray-600 antialiased">
      <Meta
        title={`${meta.title} - ${AppConfig.title}`}
        description={meta.excerpt}
        canonical={`https://kiyanaw.net/blog/${meta.slug}`}
      />
      <TopNav />

      <Section>
        <div className="mx-auto max-w-4xl px-3">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <Link
              href="/blog"
              className="text-primary-600 hover:text-primary-900"
            >
              ← Back to Blog
            </Link>
          </nav>

          {/* Article Header */}
          <header className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              {meta.title}
            </h1>

            <div className="flex items-center justify-center gap-4 text-gray-600">
              <span className="font-medium">{meta.author}</span>
              <span>•</span>
              <time dateTime={meta.date}>
                {format(new Date(meta.date), 'MMMM d, yyyy')}
              </time>
            </div>

            {meta.excerpt && (
              <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-700">
                {meta.excerpt}
              </p>
            )}
          </header>

          <div className="mb-8 mt-4">
            <hr />
          </div>

          {/* Article Content */}
          <article className="prose-primary prose prose-lg mx-auto max-w-none">
            <MDXRemote {...mdxSource} />
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 border-t border-gray-200 pt-8">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                More Posts
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {relatedPosts.slice(0, 2).map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="block rounded-lg bg-gray-50 p-6 transition-colors hover:bg-gray-100"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {relatedPost.title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-gray-600">
                      {relatedPost.excerpt}
                    </p>
                    <div className="mt-3 text-sm text-gray-500">
                      {format(new Date(relatedPost.date), 'MMM d, yyyy')}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPostSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;
  const { meta, content } = getPostBySlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ],
    },
  });

  // Get related posts (other posts, excluding current one)
  const allPosts = getAllPostsMeta();
  const relatedPosts = allPosts
    .filter((post) => post.slug !== slug)
    .slice(0, 2);

  return {
    props: {
      post: {
        meta,
        mdxSource,
      },
      relatedPosts,
    },
  };
};

export default BlogPost;
