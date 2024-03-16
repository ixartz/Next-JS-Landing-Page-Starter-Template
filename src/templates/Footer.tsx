import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  // background should be a gradient from transparent to white
  <Background color="bg-gradient-to-b from-transparent to-[#F6F5F5]">
    <Section>
      <CenteredFooter logo={<Logo />}>
        <></>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
