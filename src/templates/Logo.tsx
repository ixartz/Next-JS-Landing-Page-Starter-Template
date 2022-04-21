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
      <img
        src="/assets/images/DMCLOGOOsmallest-removebg-preview.png"
        alt={props.imageAlt}
      />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
