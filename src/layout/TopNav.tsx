import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';

import { Logo } from '@/templates/Logo';

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex shrink-0 items-center">
              <Link href="/" className="flex items-center gap-2">
                <Logo />
              </Link>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link
              href="/#projects"
              className="text-base font-medium text-primary-600 hover:text-primary-900"
            >
              Projects
            </Link>
            <Link
              href="/library"
              className="text-base font-medium text-primary-600 hover:text-primary-900"
            >
              Learner Library
            </Link>
            <Link
              href="/#about"
              className="text-base font-medium text-primary-600 hover:text-primary-900"
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <Button
              isIconOnly
              variant="light"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-primary-600 hover:bg-gray-100 hover:text-primary-900"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="/#projects"
            className="block rounded-md px-3 py-2 text-base font-medium text-primary-600 hover:bg-gray-50 hover:text-primary-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/library"
            className="block rounded-md px-3 py-2 text-base font-medium text-primary-600 hover:bg-gray-50 hover:text-primary-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Learner Library
          </Link>
          <Link
            href="/#about"
            className="block rounded-md px-3 py-2 text-base font-medium text-primary-600 hover:bg-gray-50 hover:text-primary-900"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export { TopNav };
