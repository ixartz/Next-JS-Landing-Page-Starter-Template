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
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h4 className="mb-2 font-bold text-gray-900">Library Growing</h4>
        <p className="mb-4 text-sm text-gray-600">
          Resources for Indigenous language learning including videos, audio,
          books, and tools.
        </p>
        <div className="text-right">
          <Link
            href="/library"
            className="text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
          >
            Explore Library →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
      <Link
        href={latestItem.source}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:opacity-80"
      >
        <div className="mb-3 flex items-start gap-3">
          <div className="shrink-0 rounded-lg bg-primary-50 p-2">
            <div className="scale-150">
              <LibraryIcon type={latestItem.type} />
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                {latestItem.language}
              </span>
              <span className="text-xs text-gray-500">
                Added {format(new Date(latestItem.created), 'MMM d, yyyy')}
              </span>
            </div>
            <h4 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900">
              {latestItem.title}
            </h4>
          </div>
        </div>

        <p className="mb-3 line-clamp-2 text-sm text-gray-600">
          {latestItem.description || 'No description'}
        </p>

        <div className="text-sm font-medium text-primary-600">
          View Resource →
        </div>
      </Link>

      <div className="mt-4 border-t pt-3 text-right">
        <Link
          href="/library"
          className="text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
        >
          Browse All Resources →
        </Link>
      </div>
    </div>
  );
};

export { LibraryLatest };
