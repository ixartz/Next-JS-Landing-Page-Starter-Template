import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ArrowTopRightIcon, CaretDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { Button } from '@/components/Button';
import {
  TypographyB2,
  TypographyH3,
  TypographyH6,
  TypographyP1,
} from '@/components/Text';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { MeetingLink } from '../utils/AppConfig';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-grey-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo />}>
        <div className="mr-10 flex gap-5">
          {' '}
          <Menu>
            <MenuButton>
              <div
                className="flex cursor-pointer items-center gap-1"
                // onMouseOver={() => setShow}
              >
                <TypographyH6 text="Platform" />
                <CaretDownIcon />
              </div>
            </MenuButton>
            <MenuItems
              anchor="bottom"
              className="flex flex-col gap-3 border bg-white p-2"
            >
              <MenuItem as="div">
                <Link href="/platform/advisors">
                  <TypographyH6 text="Advisors" />
                </Link>
              </MenuItem>
              <MenuItem as="div">
                <Link href="/platform/owners">
                  <TypographyH6 text="Bussiness Owners" />
                </Link>
              </MenuItem>
              <MenuItem as="div">
                <Link href="/platform/buyers-investors">
                  <TypographyH6 text="Buyer & Investors" />
                </Link>
              </MenuItem>
              <MenuItem as="div">
                <Link href="/platform/intermediaries">
                  <TypographyH6 text="Intermediaries" />
                </Link>{' '}
              </MenuItem>
            </MenuItems>{' '}
          </Menu>{' '}
          {/* <h2 className="cursor-pointer ">
            <a>Pricing</a>
          </h2> */}
          <Link href="/platform/intermediaries">
            <TypographyH6 text="Company" />
          </Link>
        </div>
        <Link href="/platform/intermediaries">
          <TypographyH6 text="Connect" />
        </Link>
        <Button variant="solid" className="invert">
          <Link href={'/login'}>
            <TypographyB2 text="Member Sign In" />
          </Link>
        </Button>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-10 md:pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <TypographyH3
              text={`Supercharge Deal-making with\n AI-Powered Advisory Platform`}
            />
            {/* <span className="text-primary-500">AI-Powered Workflow</span> */}
          </>
        }
        description={
          <TypographyP1
            className="text-black text-opacity-50"
            text={`Syncap helps you get the deal done with the best partner
                leveraging our industry-leading process management platform and
                top-notch M&A bankers network`}
          />
        }
        button={
          <Button className="mx-auto">
            <a href={MeetingLink} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center">
                <TypographyB2 text="Get started" />
                <ArrowTopRightIcon className="ml-2 size-5" />
              </div>
            </a>
          </Button>
        }
      />
      <img src={'assets/images/figure-hero-1.png'} alt="hero-figure-1" />
    </Section>
  </Background>
);

export { Hero };
