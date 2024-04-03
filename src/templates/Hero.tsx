import Link from 'next/link';

import { TopNav } from '@/layout/TopNav';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-gray-100">
    <TopNav></TopNav>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Building our\n'}
            <span className="text-primary-500">Language Bundle</span>
          </>
        }
        description="As adult language learners, we must take our language learning journey into our own hands. Come with us."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Download Your Free Theme</Button>
          </Link>
        }
      />
      <img
        alt="Summer 2023 as we paddle to Stanley Mission"
        src={'/assets/images/paddling.png'}
      ></img>
    </Section>
  </Background>
);

export { Hero };
