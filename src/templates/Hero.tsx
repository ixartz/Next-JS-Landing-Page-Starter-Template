import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  // bg should be a gradient from dark to light top to bottom
  <Background color="">
    {/* bg-gradient-to-b from-yellow-100 to-white */}
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          {/* <Link href="/">
            <Button>Request for Demo</Button>
          </Link> */}
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={<>{'Respond to RFPs in hours, \n not weeks.'}</>}
        description="Apply to more RFPs in less time."
        button={
          <Link href="https://calendly.com/rahuldey700/demo-nucleus">
            <Button xl>Request for Demo</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
