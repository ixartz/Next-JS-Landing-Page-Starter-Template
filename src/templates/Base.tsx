import { Section } from '@/layout/Section';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { FourMainFeatures } from './FourMainFeatures';
import { Hero } from './Hero';
import { IntegrationAndSecurity } from './IntegrationAndSecurity';
import { OurServicesSection } from './Section';

interface Prop {
  icon: string;
  title: string;
  description: string;
}
export const ValuePropBlock = ({ icon, title, description }: Prop) => {
  return (
    <div className="block rounded-lg border p-4 text-center lg:w-1/3">
      <img
        src={icon}
        alt={title}
        className="mx-auto mb-2 aspect-square w-1/4 max-w-[64px]"
      />
      <p className="mb-2 text-xl font-bold">{title}</p>
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
      title={
        <>
          <h1>
            Superior Approach = <br />
            Optimized Transaction Outcomes
          </h1>
        </>
      }
    >
      <div className="flex flex-col gap-4 lg:flex-row">
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
    <FourMainFeatures />
    <IntegrationAndSecurity />
    <Section
      title={
        <>
          <h1>Your Data, Secure and Sovereign</h1>
        </>
      }
    >
      <div className="flex flex-col gap-4  lg:flex-row">
        <ValuePropBlock
          icon="/assets/images/tailored_process_illustration.png"
          title="End-to-end Encrypted Workspace"
          description="Protects your data within a secure, private workplace"
        />
        <ValuePropBlock
          icon="/assets/images/streamlined_platform_illustration.png"
          title="SOC 2 Compliance"
          description="Ensures data security to safeguard your company’s interests"
        />
        <ValuePropBlock
          icon="/assets/images/optimized_matching_illustration.png"
          title="Controlled Access"
          description="Restricts sensitive information access to qualified and approved prospective buyers/investors only"
        />
      </div>
    </Section>
    <Banner />
    <Footer />
  </div>
);

export { Base };
