import { MeetingLink } from '@/utils/AppConfig';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo />}>
        <a
          className="whitespace-nowrap"
          target="_blank"
          rel="noopener noreferrer"
          href={MeetingLink}
        >
          Book a Demo
        </a>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-10 md:pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Supercharge Your Deal Team with\n'}
            <span className="text-primary-500">AI-Powered Workflow</span>
          </>
        }
        description={
          <div className="text-lg md:text-xl">
            <p className="mb-8">
              SynCap AI enables faster, more consistent investment evaluations
              <br />
              and company tracking aligned with your strategic thesis.
            </p>
            <p>Reclaim 4 hours per deal, every week.</p>
          </div>
        }
        button={
          <a href={MeetingLink} target="_blank" rel="noopener noreferrer">
            <Button xl>Schedule a Call</Button>
          </a>
        }
      />
    </Section>
  </Background>
);

export { Hero };
