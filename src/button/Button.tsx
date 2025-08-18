import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
  disabled?: boolean;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': !props.disabled,
    'btn-disabled': props.disabled,
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
            @apply text-white bg-kiyanaw-500;
          }

          .btn-primary:hover {
            @apply bg-kiyanaw-600;
          }

          .btn-disabled {
            @apply text-gray-400 bg-gray-600 cursor-not-allowed;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
