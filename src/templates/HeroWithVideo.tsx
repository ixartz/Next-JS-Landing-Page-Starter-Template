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
        <Section yPadding="py-20">
          <div className="text-center">
            <h1 className="whitespace-pre-line text-6xl font-bold leading-hero drop-shadow-sm">
              <span className="mb-6 text-5xl text-[#6DA0CA]">Introducing</span>
              {'\n'}
              <span className="text-white">kiyânaw Transcribe</span>
            </h1>
            <div className="mt-4 text-xl text-white drop-shadow-sm">
              Watch the video for Transcription software designed for Indigenous
              Languages.
            </div>

            {/* Video Section */}
            <div className="mt-12">
              <div className="mx-auto mb-8 max-w-4xl">
                <div className="relative">
                  {/* Faux video player */}
                  <div className="relative mx-auto h-80 w-[600px] overflow-hidden rounded-lg bg-gray-900 shadow-2xl md:h-[400px] md:w-[700px] lg:h-[450px] lg:w-[800px]">
                    {/* Video placeholder background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white bg-opacity-90 shadow-lg transition-all hover:scale-110 hover:bg-opacity-100 md:h-20 md:w-20">
                        <svg
                          className="ml-1 h-6 w-6 text-gray-800 md:h-8 md:w-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute bottom-4 right-4 rounded bg-black bg-opacity-75 px-2 py-1 text-xs text-white">
                      2:34
                    </div>
                  </div>

                  {/* Public beta badge */}
                  <div className="absolute -top-3 left-4 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
                    PUBLIC BETA
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
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
