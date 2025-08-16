import { Section } from '@/layout/Section';
import type { BlogMeta } from '@/lib/blog';

import { BlogLatest } from './BlogLatest';
import { LibraryLatest } from './LibraryLatest';

interface HomeHighlightsProps {
  latestBlog?: BlogMeta | null;
}

const HomeHighlights = ({ latestBlog }: HomeHighlightsProps) => {
  return (
    <div className="bg-primary-100 pb-8">
      <Section yPadding="py-12 pb-16">
        <div className="mx-auto max-w-screen-lg px-3">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
            What&apos;s New
          </h2>

          <div className="grid gap-12 pb-6 md:grid-cols-2">
            <div>
              <BlogLatest latestPost={latestBlog || null} />
            </div>
            <div>
              <LibraryLatest />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export { HomeHighlights };
