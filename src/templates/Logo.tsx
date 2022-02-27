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

<img style={{margin: '0 1rem 0 0'}} src='https://imagedelivery.net/DkWRuOXLqG7yv3ocO1mt8w/3e83c2ad-3c15-4f2c-315d-c835f9e61b00/public' alt='logo' height={size} width={size}/>

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
