import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const FooterLogo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-primary-100 ${fontStyle}`}>
      <img
        src="/assets/images/PWLogo.png"
        alt="Logo"
        width={size}
        height={size}
        className="mr-1"
      />

      {AppConfig.site_name}
    </span>
  );
};

export { FooterLogo };
