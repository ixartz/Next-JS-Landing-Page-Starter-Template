import { Section } from '@/layout/Section';
import type { BlogMeta } from '@/lib/blog';

import { BlogLatest } from './BlogLatest';
import { LibraryLatest } from './LibraryLatest';

interface HomeHighlightsProps {
  latestBlog?: BlogMeta | null;
}

const HomeHighlights = ({ latestBlog }: HomeHighlightsProps) => {
  return (
    <div className="bg-primary-100">
      <Section yPadding="py-8">
        <div className="mx-auto max-w-screen-lg px-3">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-700">
                From the Blog
              </h3>
              <BlogLatest latestPost={latestBlog || null} />
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-700">
                New in the Learner Library
              </h3>
              <LibraryLatest />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export { HomeHighlights };
