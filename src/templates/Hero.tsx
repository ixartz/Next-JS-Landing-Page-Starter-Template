import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-primary-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Experience 5-Star Waste Management with\n'}
            <span className="text-secondary-100">
              Platinum Waste Concierge Collectors
            </span>
          </>
        }
        description="Let us handle your trash, while you focus more on living"
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Get Free Quote</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
