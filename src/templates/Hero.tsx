import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo />}>
        <li>
          <Link href="/get-started">Get Started</Link>
        </li>
        <li>
          <Link href="/sign-in">Sign In</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Supercharge Your Deal Team with\n'}
            <span className="text-primary-500">AI-Powered Workflow</span>
          </>
        }
        description={
          <>
            <p className="mb-8">
              SynCap AI enables faster, more consistent investment evaluations
              <br />
              and company tracking aligned with your strategic thesis.
            </p>
            <p>Reclaim 4 hours per deal, every week.</p>
          </>
        }
        button={
          <Link href="" legacyBehavior>
            <Button xl>Get Started Now</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
