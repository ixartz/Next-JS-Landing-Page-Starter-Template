import Image from 'next/image';
import Link from 'next/link';

import { SupportButton } from '@/button/SupportButton';

const Coffee = () => {
  return (
    <div className="text-center">
      <Link target="_blank" href="https://www.buymeacoffee.com/kiyanaw">
        <SupportButton>
          <div className="flex flex-row p-4">
            <div className="pr-3">
              <Image
                src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                alt="Buy me a coffee"
                width={20}
                height={20}
              />
            </div>
            <div>Buy me a coffee →</div>
          </div>
        </SupportButton>
      </Link>
    </div>
  );
};

export { Coffee };
