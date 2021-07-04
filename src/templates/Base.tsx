import { Meta } from '../layout/Meta';
import { Config } from '../utils/Config';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={Config.title} description={Config.description} />
    <Hero />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };
