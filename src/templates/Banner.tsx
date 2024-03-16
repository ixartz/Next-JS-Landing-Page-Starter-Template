import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="We are currently accepting early users for our beta"
      subtitle=""
      button={
        <Link href="https://calendly.com/rahuldey700/demo-nucleus">
          <Button>Request for Demo</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
