import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { CaretDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { TypographyH6 } from '@/components/Text';

export const NavbarMenu = () => (
  <Menu as="div" className="relative">
    <MenuButton className="flex items-center gap-1">
      <TypographyH6 text="Platform" />
      <CaretDownIcon />
    </MenuButton>
    <MenuItems className="absolute z-10 mt-2 w-full rounded-md border border-gray-200 bg-white p-4 shadow-lg md:-left-7 md:w-[40rem] md:transform-none">
      <div className="grid grid-cols-2 gap-4">
        <MenuItem as="div">
          {({ focus }) => (
            <Link
              href="/platform/advisors"
              className={`flex flex-col p-3 ${focus ? 'rounded-md bg-gray-100' : ''}`}
            >
              <TypographyH6 text="Advisors" className="mb-1 font-semibold" />
              <p className="hidden text-wrap text-sm leading-tight text-gray-600 md:block">
                Create, market, and sell your knowledge and expertise
              </p>
            </Link>
          )}
        </MenuItem>
        <MenuItem as="div">
          {({ focus }) => (
            <Link
              href="/platform/owners"
              className={`flex flex-col p-3 ${focus ? 'rounded-md bg-gray-100' : ''}`}
            >
              <TypographyH6
                text="Business Owners"
                className="mb-1 font-semibold"
              />
              <p className="hidden text-wrap text-sm leading-tight text-gray-600 md:block">
                Earn recurring revenue by delighting your audience with an
                exclusive experience
              </p>
            </Link>
          )}
        </MenuItem>
        <MenuItem as="div">
          {({ focus }) => (
            <Link
              href="/platform/buyers-investors"
              className={`flex flex-col p-3 ${focus ? 'rounded-md bg-gray-100' : ''}`}
            >
              <TypographyH6
                text="Buyers & Investors"
                className="mb-1 font-semibold"
              />
              <p className="hidden text-wrap text-sm leading-tight text-gray-600 md:block">
                Turn podcast listeners into paying customers
              </p>
            </Link>
          )}
        </MenuItem>
        <MenuItem as="div">
          {({ focus }) => (
            <Link
              href="/platform/intermediaries"
              className={`flex flex-col p-3 ${focus ? 'rounded-md bg-gray-100' : ''}`}
            >
              <TypographyH6
                text="Intermediaries"
                className="mb-1 font-semibold"
              />
              <p className="hidden text-wrap text-sm leading-tight text-gray-600 md:block">
                Build and monetize a thriving community you own
              </p>
            </Link>
          )}
        </MenuItem>
      </div>
    </MenuItems>
  </Menu>
);

export default NavbarMenu;
