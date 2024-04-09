import { Section } from '@/layout/Section';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { GenerateInfoFeatures } from './GenerateInfoFeatures';
import { Hero } from './Hero';
import { IntegrationAndSecurity } from './IntegrationAndSecurity';
import { OrganizeInfoFeatures } from './OrganizeInfoFeatures';
import { OurServicesSection } from './Section';

interface Prop {
  icon: string;
  title: string;
  description: string;
}
export const ValuePropBlock = ({ icon, title, description }: Prop) => {
  return (
    <div className="block rounded-lg border p-4 text-center">
      <img
        src={icon}
        alt={title}
        className="mx-auto mb-2 aspect-square w-1/4"
      />
      <h3 className="mb-2 font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Base = () => (
  <div className="text-gray-700 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <OurServicesSection />
    <Section
      title="Superior Approach =
Optimized Transaction Outcomes"
    >
      <div className="flex sm:flex-col lg:flex-row lg:gap-4">
        <ValuePropBlock
          icon="/assets/images/tailored_process_illustration.png"
          title="Tailored, Advisor-led Process"
          description="Navigate discretely, at your own pace, maintaining full control over every phase."
        />
        <ValuePropBlock
          icon="/assets/images/streamlined_platform_illustration.png"
          title="Streamlined Deal Management Platform"
          description="Achieve peak efficiency through a structured, step-by-step, guided process."
        />
        <ValuePropBlock
          icon="/assets/images/optimized_matching_illustration.png"
          title="Optimized Buyer &
          Investor Matching"
          description="Maximize your valuation by closing with the buyer or investor(s) optimized for synergies."
        />
      </div>
    </Section>
    <OrganizeInfoFeatures />
    <GenerateInfoFeatures />
    <IntegrationAndSecurity />
    <Banner />
    <Footer />
  </div>
);

export { Base };
