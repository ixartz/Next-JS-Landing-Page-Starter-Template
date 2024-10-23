import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import Contact from './Contact';
import { Footer } from './Footer';
import { Hero } from './Hero';
// import { Sponsors } from './Sponsors';
import { VerticalFeatures } from './VerticalFeatures';
import { Work } from './Works';

const Base = () => (
  <div className="font-roboto-serif text-primary-800 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    {/* <Sponsors /> */}
    <VerticalFeatures />
    <Work />
    <Contact />
    <Banner />
    <Footer />
  </div>
);

export { Base };
