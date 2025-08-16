import Link from 'next/link';

import type { BlogMeta } from '@/lib/blog';

import { BlogCard } from './BlogCard';

interface BlogLatestProps {
  latestPost: BlogMeta | null;
}

const BlogLatest = ({ latestPost }: BlogLatestProps) => {
  if (!latestPost) {
    return (
      <div className="flex h-full flex-col rounded-lg bg-white p-8 shadow-lg">
        <div className="grow">
          <h3 className="mb-3 text-2xl font-bold text-gray-900">
            Blog Coming Soon
          </h3>
          <p className="text-base text-gray-600">
            We&apos;re preparing to share updates, stories, and insights from
            our language learning journey. Check back soon for our first posts!
          </p>
        </div>
        <div className="mt-4">
          <span className="font-medium text-gray-400">Stay tuned...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full">
      <div className="mb-4">
        <h2 className="mb-2 text-lg font-semibold text-gray-900">
          Latest from the Blog
        </h2>
      </div>
      <BlogCard post={latestPost} featured />
      <div className="mt-4 text-right">
        <Link
          href="/blog"
          className="font-medium text-primary-600 transition-colors hover:text-primary-700"
        >
          View All Posts →
        </Link>
      </div>
    </div>
  );
};

export { BlogLatest };
