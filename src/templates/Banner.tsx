import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Você está procurando um profissional para criar landing pages eficazes para o seu negócio?"
      subtitle="Se sim, você está no lugar certo!"
      button={
        <Link href="https://api.whatsapp.com/send/?phone=5531994308479">
          <Button>Entre em contato</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
