import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Footer = () => (
  <Background color="bg-primary-10">
    <Section>
      <div className="flex w-full justify-between py-5">
        <div className="flex flex-col gap-10">
          <img
            src="/assets/images/syncap_logo.png"
            alt="logo"
            className="w-28"
          />
          <div className="flex flex-col gap-2">
            <p>© 2024 Syncap. All rights reserved</p>
            <span className="flex gap-2">
              <Link href="/tos">
                <p>Terms of Service</p>
              </Link>
              |
              <Link href="/privacy">
                <p>Privacy Policy</p>
              </Link>
            </span>
          </div>
        </div>
        {/* Right */}
        <div className="flex gap-5 whitespace-nowrap">
          {/* <div className="flex-1">
            <h1 className="mb-4 font-medium">Platform</h1>
            <div className="flex flex-col gap-2">
              <Link href="/platform/owners">
                <p>Bussiness Owners</p>
              </Link>
              <Link href="/platform/advisors">
                <p>Advisors</p>
              </Link>
              <Link href="/platform/buyers-investors">
                <p>Buyers & Investors</p>
              </Link>
              <Link href="/platform/intermediaries">
                <p>Intermediaries</p>
              </Link>
            </div>
          </div> */}
          <div className="flex-1">
            <h1 className="mb-4 font-medium">Legal</h1>
            <div className="flex flex-col gap-2">
              <Link href="/tos">
                <p>Terms of Service</p>
              </Link>
              <Link href="/privacy">
                <p>Privacy Policy</p>
              </Link>
            </div>
          </div>
          {/* <div className="flex-1">
            <h1 className="mb-4 font-medium">Company</h1>
            <div className="flex flex-col gap-2">
              <Link href="/about">
                <p>About Us</p>
              </Link>
              <Link href="/connect">
                <p>Connect</p>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </Section>
  </Background>
);

export { Footer };
