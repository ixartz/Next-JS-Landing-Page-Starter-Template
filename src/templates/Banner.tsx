import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Check Availability"
      subtitle="Get in touch to confirm availability for your next event"
      button={
        <Link href="/contact">
          <a>
            <Button>Reserve Today</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
