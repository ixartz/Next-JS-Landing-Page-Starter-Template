import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex w-full items-center justify-between">
    <Link href="/" className="w-32 md:w-full">
      {props.logo}
    </Link>
    <nav>
      <div className="text-md flex  items-center gap-5 whitespace-nowrap font-medium text-gray-800 md:text-xl">
        {props.children}
      </div>
    </nav>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
