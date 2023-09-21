import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="m-4 flex flex-wrap justify-between">
    <div className="">
      {' '}
      <Link href="/">{props.logo}</Link>
    </div>

    <ul className="flex items-center space-x-4 text-xl font-medium text-gray-800 ">
      {props.children}
    </ul>
  </div>
);

export { NavbarTwoColumns };
