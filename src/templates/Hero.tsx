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
        <li>
          <a target="_blank" href="https://transcribe.kiyanaw.net">
            Transcribe
          </a>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Language learning resources for\n'}
            <span className="text-primary-500">Indigenous Languages</span>
          </>
        }
        description="We are a grass-roots group of dedicated language learners, and we've compiled some of our projects and resources here in the hopes they might help you learn too."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Download Your Free Theme</Button>
          </Link>
        }
      />
      <img src={'/assets/images/paddling.png'}></img>
    </Section>
  </Background>
);

export { Hero };
