import { HomeHighlights } from '@/components/HomeHighlights';
import { Meta } from '@/layout/Meta';
import type { BlogMeta } from '@/lib/blog';
import { AppConfig } from '@/utils/AppConfig';

import { About } from './About';
import { Footer } from './Footer';
import { HeroWithVideo } from './HeroWithVideo';
import { SupportUs } from './SupportUs';
import { VerticalFeatures } from './VerticalFeatures';

interface BaseProps {
  latestBlog?: BlogMeta | null;
}

const Base = ({ latestBlog }: BaseProps) => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <HeroWithVideo />
      <HomeHighlights latestBlog={latestBlog} />
      <VerticalFeatures />
      <About />
      <SupportUs />
      <Footer />
    </div>
  );
};

export { Base };
