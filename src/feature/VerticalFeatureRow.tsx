import { ReactNode } from 'react';

import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string | ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'flex',
    'flex-wrap',
    'items-center',
    'text-center px-6 md:px-12  grid md:grid-cols-12 gap-8',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <img
        src={`${router.basePath}${props.image}`}
        alt={props.imageAlt}
        className="w-full mx-auto md:col-span-4 "
      />
      <div className="order-last md:order-first md:col-span-8 grid">
        <h1 className=" font-sans text-2xl text-gray-900 font-bold md:text-left	md:text-[56px] leading-[148%]">
          {props.title}
        </h1>
        <div className="pt-3 md:pt-4 font-lato text-base  mb-8 leading-normal md:text-left	md:text-[24px]	">
          {props.description}
        </div>
      </div>
      {/* <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div> */}
    </div>
  );
};

export { VerticalFeatureRow };
