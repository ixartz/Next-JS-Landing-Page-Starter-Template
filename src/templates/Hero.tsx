import { Link as ScrollLink } from 'react-scroll';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background
    color="bg-primary-100"
    videoSrc="/assets/images/PWCC_web.mp4"
    height="h-[75hv]"
  >
    <Section id="hero" yPadding="py-6">
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

    <Section yPadding="pt-96 mt-16 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-secondary-100"></span>
          </>
        }
        description="Discover Premium Waste Management with Platinum Waste Concierge Collectors"
        button={
          <div>
            <Button scrollTo="contact" duration="2000" xl>
              Get Free Quote
            </Button>
          </div>
        }
      />
    </Section>
  </Background>
);

export { Hero };
