import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex justify-between ">
    <div className="">
      <Link href="/">{props.logo}</Link>
    </div>
    <div className="hidden md:mr-16 md:flex md:items-center md:space-x-4 ">
      <Link href="/">
        <svg width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      </Link>

      <Link href="/">
        <svg width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </Link>

      <Link href="/">
        <img
          className="w-8"
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABIElEQVR4nO2WMW7CQBBF3wE4AC1FQkONFNsox6CjSklDQ50iLcdIlRvkAlwAKXdIT4eYKJKLaCS8BssaL/lP2m521l9//q5B5IUNbN1M9IebhDiiHTA54vg3jhyAGTACNsB3rkJeXP02VyFLV79O1BctziwjhKxc/Wuivmpx5iJCyJurf891tI7AQ137BJxzFWL1bfXLrmcR1peQE/ABjOvaR+Az4crgwr4Hphf2zIGvXMI+Sex7zmm0LGDdTPSHm4Q4oh0wOeKIdsDkiKPLC9325S4iX/ayQ88q0avSaDUQHW5T2B1370hxZZ+mAGd1ay2u6FUpIw1EZ8J0azmiHbCh3Vp/0b8WPThyN6NlEoIcMY0W8Zkwhd0R7YDJEUEsP1ALr2Y1TsHVAAAAAElFTkSuQmCC"
        />
      </Link>

      <Link href="/">
        <img
          className="w-12"
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACgklEQVR4nO2ZPWsUQRjHf1EjRO0sLiRGTGfjl1GxvC8g2iiEcILv4GsdmyhWIrJFhFQhlY1FSKMSXxK9NFr4FY4bWXgCx7LP3c6+zGzw+cHAcTcz+///57m52T0wDMMwDMMwDMMwjKLMAteBFWAN2IjU1kTDNaBDIE4BO4BrWdsRbUE4A/xogemD1gfOEZgFYK8F5ndFS6NcAW7kvH8W+BnR/J5oyJJqvVxnAOtywZ4SQoxK2AcWFfPp5+/rDODPyIVvtaASNPM3R/r8rsv8MWCQEbCc029RhMXa8JYz/QaivTIdRUhPCaHfoPlfivme0r+Ws8HcGEG3A+4JfaXsl8aMmWs6AAc8UkLYjWw+WABOCWGhpsOSVvZ3CowNFoADHjdwYvwuc2S5W3B80AAc8ES5cfpS0vx8znz3POYIHoADnubM0fEM4Zti/r6nligBOOCZEsLnAmO/KsIflNARLQAHPFdC+FTC/MOSGqIG4ICuEsJ2Tt9t5eDSrXD9qAEkwLQy50ngtRxXB/L6hNJ3WuY6VAEkY8yX4Sjw5rAEkOSYPwJcBWYKXG9G+qZjqlZC8ACSHPNTwAv5/OOEG5TTwAfp+yonBN9KCBpAoqz8y0y/9D79ogQzGtKlzHMHJ2OrVEKwAJKC5kfbvjxpWp/wHKFKCEECSJSyXymxafmEUOTr0HgASQDzVUJoNIAkoPmyIdQSwKzHd361QfMHbdVjT0i1V+Y4MIy88mUqYSjaa+FvC1betxJSzbXxriUr71MJb+sM4EKLVr5oJaSaG2Mq8soXqYT/xrwLHUI386vQljZUHsA0wnn5UyLdaDaBrUhtUzQsiSbDMAzDMAzDMAzDYDL/AMUjs6hxbW8VAAAAAElFTkSuQmCC"
        />
      </Link>
    </div>
  </div>
);

export { NavbarTwoColumns };
