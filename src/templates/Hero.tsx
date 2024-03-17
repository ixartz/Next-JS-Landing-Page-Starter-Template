import Link from 'next/link';

import { Grid } from '@/grideffect/GridEffect';

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
    <div className="relative">
      <Grid columns={40} />
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            {/* <Link href="/">
              <Button>Request a Demo</Button>
            </Link> */}
          </li>
        </NavbarTwoColumns>
      </Section>
      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {'Respond to RFPs in hours,\n'}
              <span className="font-bold">not weeks.</span>
            </>
          }
          description="Designed for small businesses"
          button={
            <Link href="https://calendly.com/rahuldey700/demo-nucleus">
              <Button xl>Request a Demo</Button>
            </Link>
          }
        />
      </Section>
    </div>
  </Background>
);

export { Hero };
