import type { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`flex w-full flex-row items-center justify-center px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    <div className="sm:w-[70%]">
      {(props.title || props.description) && (
        <div className="mb-12 text-center">
          {props.title && (
            <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl">
              {props.title}
            </h2>
          )}
          {props.description && (
            <div className="mt-4 px-8 text-lg sm:text-xl md:px-20">
              {props.description}
            </div>
          )}
        </div>
      )}
      {props.children}
    </div>
  </div>
);

export { Section };
