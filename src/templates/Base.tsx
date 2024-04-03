import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { About } from './About';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { SupportUs } from './SupportUs';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <SupportUs />
    <VerticalFeatures />
    <About />
    <Footer />
  </div>
);

export { Base };
