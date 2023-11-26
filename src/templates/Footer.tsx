import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';

const Footer = () => (
  <Background color="bg-gray-300">
    <Section>
      <CenteredFooter logo={undefined} iconList={undefined}>
        <li>
          <Link href="/">Home</Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
