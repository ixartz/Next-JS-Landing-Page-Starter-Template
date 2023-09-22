import Link from 'next/link';

import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';

import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Header = () => (
  <Background color="bg-gray-100">
    <Section yPadding="pt-8 pb-4">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/terms">利用規約</Link>
        </li>
        <li>
          <Link href="/privacy">プライバシーポリシー</Link>
        </li>
        <li>
          <Link href="/contact">お問い合わせ</Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
);

export { Header };
