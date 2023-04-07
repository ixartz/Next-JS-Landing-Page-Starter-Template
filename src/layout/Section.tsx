import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-lg mx-auto ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.title || props.description) && (
      <div className="px-10 text-center bg-heliotrope-70 py-20 ">
        <h1 className="pb-6 leading-normal font-sans font-bold text-lg text-heliotrope-400">
          About us
        </h1>
        {props.title && (
          <h2 className="text-2xl leading-normal font-sans text-gray-900 font-bold pb-4">
            {props.title}
          </h2>
        )}
        {props.description && (
          <div className="mt-4 text-base md:px-20 font-lato leading-[183%]">
            <span className="text-heliotrope-400">Playard</span>
            {props.description}
          </div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
