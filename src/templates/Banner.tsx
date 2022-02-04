import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="February Special!!"
      subtitle="Mention GRAND OPENING for 15% off your next order"
      button={
        <Link href="/contact">
          <a>
            <Button>Book Today</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
