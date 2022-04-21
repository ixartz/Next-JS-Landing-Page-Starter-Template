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
      <NavbarTwoColumns logo={<Logo xl />}></NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The modern way of\n'}
            <span className="text-primary-500">Life Insurance Business</span>
          </>
        }
        description="We create our own Network."
        button={
          <Link href="https://www.zurich.co.id/id-id">
            <a>
              <Button xl>Powered by Zurich</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);
export { Hero };
