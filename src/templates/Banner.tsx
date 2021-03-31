import React from 'react';

import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      subtitle="Start your Free Trial."
      button={(
        <Link href="/">
          <a>
            <Button>Get Started</Button>
          </a>
        </Link>
      )}
    />
  </Section>
);

export { Banner };
