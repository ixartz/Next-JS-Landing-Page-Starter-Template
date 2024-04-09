import type { ReactNode } from 'react';

type ISectionProps = {
  title?: ReactNode;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`mx-auto flex max-w-screen-lg flex-col items-center px-8 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-3xl font-semibold text-gray-900 xl:text-4xl">
            {props.title}
          </h2>
        )}
        {props.description && (
          <div className="mt-4 text-lg md:px-20 md:text-xl">
            {props.description}
          </div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
