import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: ReactNode;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    {props.title}
    {props.description}
    <div className="my-10">{props.button}</div>
  </header>
);

export { HeroOneButton };
