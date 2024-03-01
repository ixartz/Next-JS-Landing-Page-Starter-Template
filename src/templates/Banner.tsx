import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Ready to power up your deal workflow?"
      subtitle="Connect with us to get started"
      button={
        <Link href="" legacyBehavior>
          <Button>Schedule Intro Call</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
