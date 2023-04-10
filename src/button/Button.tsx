import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  return (
    <div className={btnClass}>
      <p className="px-10 py-2 "> {props.children}</p>

      <style jsx>
        {`
          .btn {
            @apply inline-block  text-center rounded-full font-sans;
          }

          .btn-base {
            @apply text-[16px] font-semibold;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6 leading-none;
          }

          .btn-primary {
            @apply text-white bg-heliotrope-400;
          }

          .btn-primary:hover {
            @apply bg-heliotrope-500;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
