import { format } from 'date-fns';
import Link from 'next/link';

import libraryData from '@/data/library-data.json';
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

const LibraryLatest = () => {
  // Get the most recent library item
  const latestItem = (libraryData as LibraryItem[]).sort(
    (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime(),
  )[0];

  if (!latestItem) {
    return (
      <div className="flex h-full flex-col rounded-lg bg-white p-8 shadow-lg">
        <div className="grow">
          <h3 className="mb-3 text-2xl font-bold text-gray-900">
            Learner Library
          </h3>
          <p className="text-base text-gray-600">
            Discover resources for Indigenous language learning including
            videos, audio, books, and interactive tools.
          </p>
        </div>
        <div className="mt-4 text-right">
          <Link
            href="/library"
            className="font-medium text-primary-600 transition-colors hover:text-primary-700"
          >
            Explore Library →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full">
      <div className="mb-4">
        <h2 className="mb-2 text-lg font-semibold text-gray-900">
          Latest Library Addition
        </h2>
      </div>

      <Link
        href={latestItem.source}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col rounded-lg bg-white p-8 shadow-lg transition-shadow hover:shadow-xl"
      >
        <div className="grow">
          <div className="mb-3 flex items-start gap-3">
            <div className="mt-1 shrink-0">
              <LibraryIcon type={latestItem.type} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {latestItem.title}
            </h3>
          </div>

          <p className="mb-4 line-clamp-3 text-base text-gray-600">
            {latestItem.description}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <span className="font-medium">{latestItem.language}</span>
            <span>
              Added {format(new Date(latestItem.created), 'MMM d, yyyy')}
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center font-medium text-primary-600">
          View Resource →
        </div>
      </Link>

      <div className="mt-4 text-right">
        <Link
          href="/library"
          className="font-medium text-primary-600 transition-colors hover:text-primary-700"
        >
          Browse All Resources →
        </Link>
      </div>
    </div>
  );
};

export { LibraryLatest };
