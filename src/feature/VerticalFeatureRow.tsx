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
      <div
        className={`${
          props.reverse ? 'order-last md:order-first' : ''
        } md:col-span-8 grid`}
      >
        <h1
          className=" font-sans  text-gray-900 font-bold md:text-left leading-[148%]
        text-[24px] md:text-[40px]
        "
        >
          {props.title}
        </h1>
        <div
          className="pt-3 md:pt-4 font-lato   mb-8 leading-normal md:text-left
           text-[16px]
           md:text-2xl
        "
        >
          {props.description}
        </div>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
