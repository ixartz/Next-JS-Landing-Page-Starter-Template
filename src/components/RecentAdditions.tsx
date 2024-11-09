import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';

import libraryData from '@/data/library-data.json';
import { Section } from '@/layout/Section';
import { LibraryIcon } from '@/templates/LibraryIcon';

interface LibraryItem {
  title: string;
  description: string;
  language: string;
  level: string;
  author: string;
  content: string[];
  tags: string[];
  category: string;
  source: string;
  type: string;
  created: string;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const RecentAdditions = () => {
  const recentItems = (libraryData as LibraryItem[])
    .sort(
      (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime(),
    )
    .slice(0, 3);

  const mostRecentDate = recentItems[0]?.created;

  return (
    <div className="bg-gray-50">
      <Section>
        <div className="mx-auto max-w-screen-lg px-3">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
            Recent Learner Library Additions
          </h2>
          {mostRecentDate && (
            <div className="mb-8 text-center">
              <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20">
                Updated{' '}
                {formatDistanceToNow(new Date(mostRecentDate), {
                  addSuffix: true,
                })}
              </span>
            </div>
          )}
          <div className="mb-8 grid gap-8 md:grid-cols-3">
            {recentItems.map((item: LibraryItem) => (
              <Link
                key={item.created}
                href={item.source}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="grow">
                  <div className="mb-2 flex items-start gap-3">
                    <div className="mt-1 shrink-0">
                      <LibraryIcon type={item.type} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-700">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mb-4 line-clamp-3 text-gray-600">
                    {item.description}
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between pt-4 text-sm text-gray-500">
                  <span className="font-medium">{item.language}</span>
                  <span>Added {formatDate(item.created)}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/library"
              className="inline-block rounded-lg bg-primary-500 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-600"
            >
              Go to Library →
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export { RecentAdditions };
