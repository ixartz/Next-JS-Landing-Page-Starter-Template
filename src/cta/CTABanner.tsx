import type { ReactNode } from 'react';

import { Grid } from '@/grideffect/GridEffect';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="relative flex w-full flex-col overflow-hidden rounded-md border-[2px] p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
    <Grid columns={40} />
    <div className=" flex w-full flex-col items-center justify-between sm:flex-row">
      <div className="px-4 text-xl sm:px-0 sm:text-2xl">
        <div className="text-gray-900">{props.title}</div>
        <div className="font-bold text-black">{props.subtitle}</div>
      </div>
      <div className="whitespace-no-wrap mt-3 p-4 sm:ml-2 sm:mt-0 sm:p-0">
        {props.button}
      </div>
    </div>
  </div>
);

export { CTABanner };
