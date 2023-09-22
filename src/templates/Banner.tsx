import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Chat with me!"
      subtitle="Feel free to use this form to reach out for any business inquiries."
      button={
        <Link href="#Navbar">
          <Button>Back to the Top</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
