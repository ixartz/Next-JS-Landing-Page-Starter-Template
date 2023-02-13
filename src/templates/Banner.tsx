import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Une demande spéciale ?"
      subtitle="N'hésitez pas à me contacter !"
      button={
        <Link href="tel:0617328806">
          <a>
            <Button>📞 06.17.32.88.06</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
