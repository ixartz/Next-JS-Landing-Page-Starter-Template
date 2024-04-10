import { MeetingLink } from '@/utils/AppConfig';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Transformative Experience Leads to a Higher Altitude"
      subtitle="Whether you are ready to sell, raise, or looking for answers, we’ll guide you with data and expertise specific to your industry"
      button={
        <a target="_blank" rel="noopener noreferrer" href={MeetingLink}>
          <Button>Schedule an Initial Consultation</Button>
        </a>
      }
    />
  </Section>
);

export { Banner };
