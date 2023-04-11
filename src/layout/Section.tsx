import { ReactNode } from "react";

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  max?: boolean;
  top?: boolean;
  grey?: boolean;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <>
    <div
      className={`mx-auto
      text-center
 ${props.grey ? `bg-heliotrope-70` : ""}`}
    >
      {(props.title || props.description) && (
        <div
          className={`px-12 text-center md:px-0 py-20 grid md:grid-cols-12 gap-8 mx-auto
 max-w-screen-lg ${props.yPadding ? props.yPadding : "py-3"}      `}
        >
          <div className="md:col-span-5">
            <h1 className="pb-3 leading-normal font-sans font-bold md:text-[24px] text-lg text-heliotrope-400 md:text-left">
              About us
            </h1>
            {props.title && (
              <h2 className=" text-[24px] md:text-[40px] leading-normal font-sans text-gray-900 font-bold  md:text-left">
                {props.title}
              </h2>
            )}
          </div>
          {props.description && (
            <div
              className="
           text-[16px]
           md:text-2xl
            font-lato leading-[160%] md:col-span-7 md:text-left"
            >
              <span className="text-heliotrope-400">Playard</span>
              {props.description}
            </div>
          )}
        </div>
      )}
    </div>
    <div
      className={` mx-auto
 ${props.top ? "pt-3" : "pt-20 md:pt-44"}
 ${props.max ? `max-w-screen-lg` : ""}
    `}
    >
      {props.children}
    </div>
  </>
);

export { Section };
