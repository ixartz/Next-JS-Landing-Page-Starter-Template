import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li className="hidden md:block">
          <Link href="https://linktr.ee/yazilimcukurova" target="_blank">
            Üyelik İçin Tıkla
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Yazılıma İlgi Duyuyorsan,\n'}
            <span className="text-primary-800">Doğru Yerdesin! 🚀</span>
          </>
        }
        description="Geleceği kodlayan, inovasyona yön veren bir topluluk..."
        button={
          <Link href="https://linktr.ee/yazilimcukurova" target="_blank">
            <Button xl>Aramıza Katıl 🤩</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
