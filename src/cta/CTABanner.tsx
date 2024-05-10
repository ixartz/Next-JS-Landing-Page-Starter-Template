import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

type ICTABannerProps = {
  imageAlt: string | undefined;
  image: any;
  title: ReactNode;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => {
  const router = useRouter();
  return (
    <div className="flex rounded-md p-6 text-center sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
      <div className="w-1/2">
        <img
          className="object-contain"
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
        />
      </div>
      <div className="flex w-1/2 flex-col space-y-6 text-xl font-semibold md:text-2xl">
        <div className="text-gray-900">{props.title}</div>
        <p className="text-primary-800">{props.subtitle}</p>
        <div className="mt-3 whitespace-nowrap sm:ml-2 sm:mt-0">
          {props.button}
        </div>
      </div>
    </div>
  );
};
export { CTABanner };
