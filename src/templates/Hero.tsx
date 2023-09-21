import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns
        logo={<Logo xl />}
        // eslint-disable-next-line react/no-children-prop
        children={
          <>
            <li>
              <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
                GitHub
              </Link>
            </li>
            <li>
              <Link href="/">Sign in</Link>
            </li>
          </>
        }
      ></NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Ex Actuarial\n'}
            <span className="text-primary-500">Software Engineer</span>
          </>
        }
        description="Hi! My name is Lucky and this is my frontend and android development portfolio."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>See My Portfolio</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
