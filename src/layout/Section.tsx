import type { ReactNode } from 'react';

type ISectionProps = {
  title?: ReactNode;
  description?: string;
  yPadding?: string;
  bgColor?: string;
  children: ReactNode;
  noPadding?: boolean;
};

const Section = (props: ISectionProps) => (
  <div className={`${props.bgColor ? `bg-${props.bgColor}` : ''}`}>
    <div
      className={`mx-auto flex max-w-screen-lg flex-col items-center ${
        props.noPadding ? '' : 'px-8'
      } ${props.yPadding ? props.yPadding : 'py-16'}`}
    >
      {(props.title || props.description) && (
        <div className="mb-12 text-center">
          {props.title && (
            <div className="text-3xl font-semibold text-gray-900 xl:text-4xl">
              {props.title}
            </div>
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
  </div>
);

export { Section };
