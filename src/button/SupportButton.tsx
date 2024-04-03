import className from 'classnames';
import type { ReactNode } from 'react';

type IButtonProps = {
  xl?: boolean;
  children: ReactNode;
};

const SupportButton = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  return (
    <div className={btnClass}>
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
            @apply text-white bg-emerald-600;
          }

          .btn-primary:hover {
            @apply bg-emerald-700;
          }
        `}
      </style>
    </div>
  );
};

export { SupportButton };
