import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Effortless waste management starts here"
      subtitle="Get your Free Quote"
      button={
        <Button scrollTo="contact" duration="850">
          Get Started
        </Button>
      }
    />
  </Section>
);

export { Banner };
