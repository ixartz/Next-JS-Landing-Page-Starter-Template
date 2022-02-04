import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

export const Header = () => (
  <Section yPadding="py-6">
    <NavbarTwoColumns logo={<Logo xl />}>
      {/* <li>
          <Link href="https://github.com/ezphotos/ezphotos">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li> */}
    </NavbarTwoColumns>
  </Section>
);

const Hero = () => (
  <Background color="bg-gray-100">
    <Header />
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Photobooth Rentals\n'}
            <span className="text-primary-500">Austin, Texas</span>
          </>
        }
        description="The EZ way to get pictures of your friends"
        button={
          <Link href="/contact">
            <a>
              <Button xl>Reserve Today</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
