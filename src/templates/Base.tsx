import { RecentAdditions } from '@/components/RecentAdditions';
import { Meta } from '@/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';

import { About } from './About';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { SupportUs } from './SupportUs';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <RecentAdditions />
      <VerticalFeatures />
      <About />
      <SupportUs />
      <Footer />
    </div>
  );
};

export { Base };
