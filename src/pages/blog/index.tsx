import type { GetStaticProps } from 'next';

import { BlogCard } from '@/components/BlogCard';
import { Meta } from '@/layout/Meta';
import { Section } from '@/layout/Section';
import { TopNav } from '@/layout/TopNav';
import { type BlogMeta, getAllPostsMeta } from '@/lib/blog';
import { Footer } from '@/templates/Footer';
import { AppConfig } from '@/utils/AppConfig';

interface BlogIndexProps {
  posts: BlogMeta[];
}

const BlogIndex = ({ posts }: BlogIndexProps) => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta
        title={`${AppConfig.title} - Blog`}
        description="Updates, stories, and insights from our journey building language learning tools and resources for Indigenous languages."
      />
      <TopNav />

      <Section
        title="Blog"
        description="Updates, stories, and insights from our journey building language learning tools and resources for Indigenous languages."
      >
        {posts.length === 0 ? (
          <div className="py-12 text-center">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Coming Soon
            </h3>
            <p className="mx-auto max-w-2xl text-gray-600">
              We&apos;re preparing to share updates, stories, and insights from
              our language learning journey. Check back soon for our first
              posts!
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </Section>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  const posts = getAllPostsMeta();

  return {
    props: {
      posts,
    },
  };
};

export default BlogIndex;
