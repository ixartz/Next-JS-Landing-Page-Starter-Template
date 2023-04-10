import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  max?: boolean;
  grey?: boolean;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={` mx-auto
 ${props.max ? `max-w-screen-lg` : ''}
 ${props.grey ? `bg-heliotrope-70` : ''}
    ${props.yPadding ? props.yPadding : 'py-3'}`}
  >
    {(props.title || props.description) && (
      <div
        className="px-12 text-center md:px-0 py-20 grid md:grid-cols-12 gap-8
      pb-14
      "
      >
        <div className="md:col-span-4">
          <h1 className="pb-6 leading-normal font-sans font-bold text-lg text-heliotrope-400 md:text-left">
            About us
          </h1>
          {props.title && (
            <h2 className="text-2xl leading-normal font-sans text-gray-900 font-bold pb-4 md:text-left">
              {props.title}
            </h2>
          )}
        </div>
        {props.description && (
          <div className="mt-4 text-base md:px-20 font-lato leading-[183%] md:col-span-8 md:text-left">
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
