import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
};

const HeroOneButton = ({ title, description }: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-6xl font-bold leading-hero text-white">
      {title}
    </h1>
    <div className="mt-4 text-xl text-white">{description}</div>
  </header>
);

export { HeroOneButton };
