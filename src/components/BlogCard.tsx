import { format } from 'date-fns';
import Link from 'next/link';

import type { BlogMeta } from '@/lib/blog';

interface BlogCardProps {
  post: BlogMeta;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const cardClasses = featured
    ? 'flex h-full flex-col rounded-lg bg-white p-8 shadow-lg transition-shadow hover:shadow-xl'
    : 'flex h-full flex-col rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg';

  const titleClasses = featured
    ? 'text-2xl font-bold text-gray-900 mb-3'
    : 'text-xl font-bold text-gray-900 mb-2';

  return (
    <Link href={`/blog/${post.slug}`} className={cardClasses}>
      <div className="grow">
        <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
          <span>{post.author}</span>
          <span>•</span>
          <time dateTime={post.date}>
            {format(new Date(post.date), 'MMM d, yyyy')}
          </time>
        </div>

        <h3 className={titleClasses}>{post.title}</h3>

        <p
          className={`text-gray-600 ${
            featured ? 'text-base' : 'text-sm'
          } line-clamp-3`}
        >
          {post.excerpt}
        </p>
      </div>

      <div className="mt-4 flex items-center font-medium text-primary-600">
        Read more →
      </div>
    </Link>
  );
};

export { BlogCard };
