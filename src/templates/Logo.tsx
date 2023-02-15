import Image from 'next/image';

import SvgLogo from '../../public/assets/images/svg/logoChezLulu.svg';
import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <div className="pr-2 pb-2 inline-flex">
        <Image src={SvgLogo} alt="Logo Chez Lulu" width={size} height={size} />
      </div>

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
