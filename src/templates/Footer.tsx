import { Link as ScrollLink } from 'react-scroll';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { FooterLogo } from './FooterLogo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter logo={<FooterLogo />}>
        <li>
          <ScrollLink
            to="hero"
            smooth={true}
            duration={1000}
            className="cursor-pointer"
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about-us"
            smooth={true}
            duration={1000}
            className="cursor-pointer"
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={1000}
            className="cursor-pointer"
          >
            Contact
          </ScrollLink>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
