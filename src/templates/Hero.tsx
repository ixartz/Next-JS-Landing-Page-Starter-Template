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
          Get Early Access
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
          <div className="flex flex-col items-center">
            <div className="text-lg md:text-xl">
              <p className="mb-8">
                Syncap AI streamlines deal processes and automates the base
                layer of tasks, <br /> so you can focus on key decisions and
                connections.
              </p>
              <p>Reclaim 4+ hours every week from</p>
            </div>
            <img
              src="/assets/images/PainPoints.png"
              alt="Pain Points"
              className="aspect-ratio mt-8 max-h-[60px] w-[500px]"
            />
          </div>
        }
        button={
          <a href={MeetingLink} target="_blank" rel="noopener noreferrer">
            <Button xl>Get Early Access</Button>
          </a>
        }
      />
    </Section>
  </Background>
);

export { Hero };
