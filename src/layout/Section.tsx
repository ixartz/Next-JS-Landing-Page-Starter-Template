import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-lg mx-auto

    ${props.yPadding ? props.yPadding : 'py-3'}`}
  >
    <div
      className="
    bg-heliotrope-70
    "
    >
      {(props.title || props.description) && (
        <div className="px-12 md:px-0	 text-center  py-20 grid md:grid-cols-12 gap-8">
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
    </div>

    {props.children}
  </div>
);

export { Section };
