import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { GenerateInfoFeatures } from './GenerateInfoFeatures';
import { Hero } from './Hero';
import { IntegrationAndSecurity } from './IntegrationAndSecurity';
import { OrganizeInfoFeatures } from './OrganizeInfoFeatures';

const Base = () => (
  <div className="text-gray-700 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <OrganizeInfoFeatures />
    <GenerateInfoFeatures />
    <IntegrationAndSecurity />
    <Banner />
    <Footer />
  </div>
);

export { Base };
