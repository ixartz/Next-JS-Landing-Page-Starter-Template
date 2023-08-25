import Link from 'next/link';

import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';
import { Section } from './Section';

const TopNav = () => (
  <Section yPadding="py-6">
    <NavbarTwoColumns logo={<Logo xl />}>
      <li>
        <a target="_blank" href="https://transcribe.kiyanaw.net">
          Transcribe
        </a>
      </li>
      <li>
        <Link href="#">Library</Link>
      </li>
      <li>
        <a target="_blank" href="https://bloomfield.kiyanaw.net">
          Bloomfield
        </a>
      </li>
      <li>
        <Link href="#about">About</Link>
      </li>
    </NavbarTwoColumns>
  </Section>
);

export { TopNav };
