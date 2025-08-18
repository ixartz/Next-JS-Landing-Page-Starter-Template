import { TopNav } from '@/layout/TopNav';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const HeroWithVideo = () => (
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
      <div className="relative flex min-h-[800px] items-center">
        <Section yPadding="py-20" maxWidthClass="max-w-[1800px]">
          <div className="text-center">
            <h1 className="whitespace-pre-line text-6xl font-bold leading-hero drop-shadow-sm">
              <span className="mb-6 text-5xl text-[#6DA0CA]">Introducing</span>
              {'\n'}
              <span className="text-white">kiyânaw Transcribe</span>
            </h1>
            <div className="mt-4 text-xl text-white drop-shadow-sm">
              Transcription software designed for Indigenous Languages.
            </div>

            {/* Video Section */}
            <div className="mt-12">
              <div className="mx-auto mb-8 w-full px-4">
                <div className="relative">
                  {/* YouTube Video Embed */}
                  <div
                    className="relative mx-auto overflow-hidden rounded-lg shadow-2xl"
                    style={{ aspectRatio: '16/9', width: 'min(1050px, 66vw)' }}
                  >
                    <iframe
                      className="h-full w-full"
                      src="https://www.youtube.com/embed/D_AA6A0GKm0"
                      title="kiyânaw Transcribe Introduction"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Public beta badge */}
                  <div className="absolute -top-3 left-4 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
                    PUBLIC BETA
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://bundle.kiyanaw.net/"
                target="_blank"
                className="inline-block rounded-md bg-kiyanaw-500 px-6 py-4 text-xl font-extrabold text-white hover:bg-kiyanaw-600"
              >
                Try it now
              </a>
              <a
                href="#projects"
                className="inline-block rounded-md border-2 border-white px-6 py-4 text-xl font-extrabold text-white hover:bg-white hover:text-gray-900"
              >
                Explore Projects
              </a>
            </div>
          </div>
        </Section>
      </div>
    </div>
  </div>
);

export { HeroWithVideo };
