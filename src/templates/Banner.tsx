import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Invest Now"
      subtitle="Powered by Proteksi 8"
      button={
        <Link href="https://wa.me/6287888596616?text=Saya%20tertarik%20dengan%20produk%20Proteksi%208">
          <a>
            <Button>Contact Now</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
