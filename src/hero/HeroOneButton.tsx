import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: ReactNode;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="mb-10 whitespace-pre-line text-3xl font-medium leading-relaxed text-gray-900 md:mb-16 md:text-5xl">
      {props.title}
    </h1>
    <div className="mb-16 mt-4 text-2xl sm:mb-12">{props.description}</div>
    {props.button}
  </header>
);

export { HeroOneButton };
