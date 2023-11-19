import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'LandingHub\n\n'}
            <span className="text-primary-500">Landing pages</span>
          </>
        }
        description="Páginas de vendas modernas e rápidas para o seu negócio."
        button={
          <Link href="/contato">
            <Button xl>Entre em contato</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
