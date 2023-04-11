import { ReactNode } from "react";

import { Button } from "../button/Button";

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center px-12 md:px-0  grid md:grid-cols-12 gap-8">
    <img
      src="/mainLanding.png"
      alt="logo"
      className="w-full order-first md:order-last mx-auto md:col-span-4 "
    />
    <div className="order-last md:order-first md:col-span-8 grid">
      <h1 className="pt-10 font-sans text-2xl text-gray-900 font-bold md:text-left	md:text-[56px] leading-[148%]">
        {props.title}
      </h1>
      <div className="pt-3 md:pt-4 font-lato text-base  mb-8 leading-normal md:text-left	md:text-[24px]	">
        {props.description}
      </div>
      <div className="text-center md:text-left">
        <Button>Daftar Sekarang</Button>
      </div>
    </div>
  </header>
);

export { HeroOneButton };
