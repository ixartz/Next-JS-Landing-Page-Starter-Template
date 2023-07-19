import Link from "next/link";

import { Background } from "../background/Background";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";

const Logo = () => (
  <img src="/logo.png" alt="logo" className="pl-5 w-auto h-7" />
);
const Hero = () => (
  <Background color="bg-[#FFFF] ">
    <Section max top>
      <NavbarTwoColumns logo={<Logo />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a></a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pb-14 md:py-20" max top>
      <HeroOneButton
        title={
          <>
            {`Kami Mulai Bergerak, `}
            <span className="text-heliotrope-400">Bergerak</span>
            {` Bersama Kami\n`}
          </>
        }
        description="Bergabung dalam lobi untuk bermain bersama dan bertemu teman basket baru di kota kamu."
      />
    </Section>
  </Background>
);

export { Hero };
