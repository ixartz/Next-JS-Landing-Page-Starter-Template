import className from 'classnames';
import { Link as ScrollLink } from 'react-scroll';

type IButtonProps = {
  xl?: boolean;
  children: string;
  id?: string;
  scrollTo?: string;
  duration?: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
    'cursor-pointer': true,
  });

  const buttonContent = (
    <div id={props.id} className={btnClass}>
      {props.children}
      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-testBlue-100;
          }

          .btn-primary:hover {
            @apply bg-testBlue-200;
          }
        `}
      </style>
    </div>
  );

  if (props.scrollTo) {
    return (
      <ScrollLink
        to={props.scrollTo}
        smooth={true}
        duration={props.duration}
        className={btnClass}
      >
        {buttonContent}
      </ScrollLink>
    );
  }

  return (
    <div id={props.id} className={btnClass}>
      {buttonContent}
    </div>
  );
};

export { Button };
