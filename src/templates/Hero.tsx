import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-gradient-to-r from-cyan-500 to-blue-5000">
    <Section yPadding="pt-64 pb-64">
      <HeroOneButton
        title={
          <>
            {'LandingHub\n\n'}
            <span className="text-primary-700">
              Páginas de vendas modernas e rápidas para o seu negócio.
            </span>
          </>
        }
        description=""
        button={
          <Link href="https://api.whatsapp.com/send/?phone=5531994308479">
            <Button xl>Entre em contato</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
