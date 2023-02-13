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
        <li className={'hidden md:block'}>
          <Link href="tel:0617328806">
            <a>
              <Button>📞 Commander maintenant !</Button>
            </a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="sm:pt-10 md:pt-20 sm:pb-20 md:pb-32">
      <HeroOneButton
        title={
          <>
            {'Le '}
            <span className="text-primary-500">food truck</span>
            {' ultime pour les amateurs de cuisine '}
            <span className="text-primary-500">française</span>
            {' et '}
            <span className="text-primary-500">italienne</span>
            {'.'}
          </>
        }
        description="La nourriture de rue de qualité supérieure, chez vous ou sur le pouce."
        button={
          <Link href="tel:0617328806">
            <a>
              <Button xl>📞 Commander maintenant !</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
