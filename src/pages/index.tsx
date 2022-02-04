import { Banner } from '../templates/Banner';
import { Base } from '../templates/Base';
import { Hero } from '../templates/Hero';
import { VerticalFeatures } from '../templates/VerticalFeatures';

const Index = () => (
  <Base>
    <Hero />
    <VerticalFeatures />
    <Banner />
  </Base>
);

export default Index;
