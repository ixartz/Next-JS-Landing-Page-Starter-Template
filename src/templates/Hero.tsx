import { TopNav } from '@/layout/TopNav';

import { Background } from '../background/Background';
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
          <header className="text-center">
            <h1 className="whitespace-pre-line text-6xl font-bold leading-hero text-white drop-shadow-sm">
              Revitalizing Indigenous Languages —{'\n'}
              <span className="text-[#6DA0CA]"> Together.</span>
            </h1>
            <div className="mt-4 text-xl text-white drop-shadow-sm">
              Free tools and resources to help learners & communities.
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://transcribe.kiyanaw.net/"
                target="_blank"
                className="inline-block rounded-md bg-kiyanaw-500 px-6 py-4 text-xl font-extrabold text-white hover:bg-kiyanaw-600"
              >
                Start Transcribing
              </a>
              <a
                href="#projects"
                className="inline-block rounded-md border-2 border-white px-6 py-4 text-xl font-extrabold text-white hover:bg-white hover:text-gray-900"
              >
                Explore Projects
              </a>
            </div>
          </header>
        </Section>
      </div>
    </div>
  </div>
);

export { Hero };
