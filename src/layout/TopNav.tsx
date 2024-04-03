import Link from 'next/link';

import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';
import { Section } from './Section';

const TopNav = () => (
  <Section yPadding="py-6">
    <NavbarTwoColumns logo={<Logo xl />}>
      <li>
        <Link href="/#projects">Projects</Link>
      </li>
      <li>
        <Link href="/library">Learner Library</Link>
      </li>
      <li>
        <Link href="/#support">Support Us</Link>
      </li>
      <li>
        <Link href="/#about">About</Link>
      </li>
    </NavbarTwoColumns>
  </Section>
);

export { TopNav };
