// import { Button } from '@mui/material';
import type { ReactNode } from 'react';

type IAboutBannerProps = {
  title: string;
  description: string;
  subDescription: string;
  image: ReactNode;
};

const AboutBanner = (props: IAboutBannerProps) => (
  <div className="rounded-md bg-primary-100 p-4 text-center">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
      <div className="text-2xl font-semibold">
        <h2 id="about" className="pb-4 text-4xl font-bold text-primary-700">
          {props.title}
        </h2>
        <div className="pb-4 text-gray-800">{props.description}</div>
        <div className="text-base text-gray-700">{props.subDescription}</div>
      </div>

      <div className="whitespace-no-wrap mt-3 w-1/3 flex-none pl-6 sm:ml-2 sm:mt-0">
        {props.image}
      </div>
    </div>

    <div className="p-4 text-xl font-semibold">
      <div className="flex justify-center gap-4">
        <div className="btn btn-base btn-primary cursor-pointer">
          <a
            href="https://m.me/115148727058478"
            target="_blank"
            className="rounded-md bg-primary-500 p-3 px-5 text-white hover:bg-primary-400"
          >
            Contact me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-7 pl-3"
              style={{ display: 'inline-block' }}
            >
              <path
                fillRule="evenodd"
                d="M3.43 2.524A41.29 41.29 0 0110 2c2.236 0 4.43.18 6.57.524 1.437.231 2.43 1.49 2.43 2.902v5.148c0 1.413-.993 2.67-2.43 2.902a41.202 41.202 0 01-5.183.501.78.78 0 00-.528.224l-3.579 3.58A.75.75 0 016 17.25v-3.443a41.033 41.033 0 01-2.57-.33C1.993 13.244 1 11.986 1 10.573V5.426c0-1.413.993-2.67 2.43-2.902z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div className="btn btn-base btn-primary cursor-pointer">
          <a
            href="https://www.tiktok.com/@otipeyimisow"
            target="_blank"
            className="rounded-md bg-black p-3 px-5 text-white hover:bg-gray-800"
          >
            Find me on TikTok
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
              className="h-5 w-7 pl-3"
              style={{ display: 'inline-block' }}
            >
              <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3v178.8a162.6 162.6 0 1 1 -141.6-161v89.3a74.6 74.6 0 1 0 52.2 71.2V0h88.2a121.2 121.2 0 0 0 1.9 22.2 122.2 122.2 0 0 0 53.9 80.2 121.4 121.4 0 0 0 68.2 20.8z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export { AboutBanner };
