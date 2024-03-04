import { MeetingLink } from '@/utils/AppConfig';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Ready to power up your investment workflow?"
      subtitle="Connect with us to get started"
      button={
        <a target="_blank" rel="noopener noreferrer" href={MeetingLink}>
          <Button>Schedule Intro Call</Button>
        </a>
      }
    />
  </Section>
);

export { Banner };
