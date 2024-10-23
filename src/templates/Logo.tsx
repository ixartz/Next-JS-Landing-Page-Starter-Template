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
    <span
      className={`inline-flex items-center text-secondary-100 ${fontStyle}`}
    >
      <img
        src="/assets/images/PWLogo.png"
        alt="Logo"
        width={size}
        height={size}
        className="mr-3"
      />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
