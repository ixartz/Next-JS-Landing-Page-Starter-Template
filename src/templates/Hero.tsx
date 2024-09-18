import { Link as ScrollLink } from 'react-scroll';

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
          <ScrollLink
            to="about-us"
            smooth={true}
            duration={1000}
            className="cursor-pointer"
          >
            About Us
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={2000}
            className="cursor-pointer"
          >
            Contact
          </ScrollLink>
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
          <Button scrollTo="contact" duration="2000" xl>
            Get Free Quote
          </Button>
        }
      />
    </Section>
  </Background>
);

export { Hero };
