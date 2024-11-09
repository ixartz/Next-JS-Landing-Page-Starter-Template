import { TopNav } from '@/layout/TopNav';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <div>
    <Background color="bg-gray-100">
      <TopNav />
    </Background>

    <div className="relative">
      <div className="absolute inset-0">
        <img
          alt="Summer 2023 as we paddle to Stanley Mission"
          src="/assets/images/paddling.png"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/50" />
      </div>
      <div className="relative flex min-h-[600px] items-center">
        <Section yPadding="py-20">
          <HeroOneButton
            title={
              <>
                <span className="drop-shadow-sm">{'Building our\n'}</span>
                <span className="text-[#6DA0CA] drop-shadow-sm">
                  Language Bundle
                </span>
              </>
            }
            description="As adult language learners, we often need to take our language learning journey into our own hands. Come with us."
          />
        </Section>
      </div>
    </div>
  </div>
);

export { Hero };
