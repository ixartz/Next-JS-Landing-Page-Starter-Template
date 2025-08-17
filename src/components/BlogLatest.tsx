import { format } from 'date-fns';
import Link from 'next/link';

import type { BlogMeta } from '@/lib/blog';

interface BlogLatestProps {
  latestPost: BlogMeta | null;
}

const BlogLatest = ({ latestPost }: BlogLatestProps) => {
  if (!latestPost) {
    return (
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h4 className="mb-2 font-bold text-gray-900">Blog Coming Soon</h4>
        <p className="mb-4 text-sm text-gray-600">
          Updates, stories, and insights from our language learning journey.
        </p>
        <div className="text-right">
          <span className="text-sm font-medium text-gray-400">
            Stay tuned...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
      <Link
        href={`/blog/${latestPost.slug}`}
        className="block hover:opacity-80"
      >
        <div className="mb-3 flex items-center gap-3">
          <img
            src="/assets/images/aaron.jpg"
            alt={latestPost.author}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <div className="text-sm font-medium text-gray-900">
              {latestPost.author}
            </div>
            <div className="text-xs text-gray-500">
              {format(new Date(latestPost.date), 'MMM d, yyyy')}
            </div>
          </div>
        </div>
        <h4 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900">
          {latestPost.title}
        </h4>
        <p className="mb-3 line-clamp-2 text-sm text-gray-600">
          {latestPost.excerpt}
        </p>
        <div className="text-sm font-medium text-primary-600">Read more →</div>
      </Link>

      <div className="mt-4 border-t pt-3 text-right">
        <Link
          href="/blog"
          className="text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
        >
          View All Posts →
        </Link>
      </div>
    </div>
  );
};

export { BlogLatest };
