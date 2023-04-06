import { ReactNode } from 'react';

import { Button } from '../button/Button';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center px-12">
    <img src="/mainLanding.png" alt="logo" className="w-full h-half" />
    <h1 className="pt-10 font-sans text-2xl text-gray-900 font-bold ">
      {props.title}
    </h1>
    <div className="pt-3 font-lato text-base  mb-8 leading-normal 	">
      {props.description}
    </div>
    <Button>Daftar Sekarang</Button>
  </header>
);

export { HeroOneButton };
