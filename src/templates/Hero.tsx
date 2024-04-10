import { CaretDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
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
          <Popover>
            <PopoverTrigger>
              <div
                className="flex cursor-pointer items-center gap-1"
                // onMouseOver={() => setShow}
              >
                <h2>
                  <a>Platform</a>
                </h2>
                <CaretDownIcon />
              </div>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col gap-3 bg-white">
              <Link href="/platform/advisors">
                <h1>Adivosrs</h1>
              </Link>
              <Link href="/platform/owners">
                <h1>Business Owners</h1>
              </Link>
              <Link href="/platform/buyers-investors">
                <h1>Buyers & Investors</h1>
              </Link>
              <Link href="/platform/intermediaries">
                <h1>Intermediaries</h1>
              </Link>
            </PopoverContent>{' '}
          </Popover>
          <h2 className="cursor-pointer ">
            <a>Pricing</a>
          </h2>
          <h2 className="cursor-pointer ">
            <a>Company</a>
          </h2>
        </div>
        <Button>Member Sign In</Button>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-10 md:pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Supercharge Deal-making with\n AI-Powered Advisory Platform'}
            {/* <span className="text-primary-500">AI-Powered Workflow</span> */}
          </>
        }
        description={
          <div className="flex flex-col items-center">
            <div className="text-lg md:text-xl">
              <p className="mb-8">
                Syncap helps you get the deal done with the best partner
                leveraging our industry-leading process management platform and
                top-notch M&A bankers network
              </p>
            </div>
          </div>
        }
        button={
          <Button classname="mx-auto">
            <a href={MeetingLink} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center">
                Get started
                <img
                  src="/icons/learn-more.svg"
                  alt="Controlled Data Access"
                  className="aspect-square p-2 "
                />
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
