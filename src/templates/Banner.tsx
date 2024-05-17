import { ArrowTopRightIcon } from '@radix-ui/react-icons';

import { Button } from '../components/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title={
        <>
          <h2 className="font-semibold">
            Learn How Syncap Can Be Your Strategic Growth Partner
          </h2>
        </>
      }
      subtitle="Whether you are ready to sell, raise, or looking for answers, we’ll guide you with data and expertise specific to your industry"
      button={
        <Button
          className="flex items-center whitespace-nowrap"
          variant="primary"
        >
          <p className="font-medium">Schedule an Initial Consultation</p>
          <ArrowTopRightIcon className="ml-1" />
        </Button>
      }
      image="/assets/images/bannerCTA.png"
      imageAlt="Learn How Syncap Can Be Your Strategic Growth Partner"
    />
  </Section>
);

export { Banner };
