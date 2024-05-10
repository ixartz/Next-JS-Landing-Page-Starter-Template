import clsx from 'clsx';

type IButtonProps = {
  className?: string;
  children: any;
  variant?: 'primary' | 'secondary' | 'checkbox' | any;
  onClick?: any;
};

const Button = (props: IButtonProps) => {
  const { className, variant = 'primary', onClick } = props;
  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-fit cursor-pointer',
        className,
        variant === 'primary' ? 'rounded-sm border border-black px-4 py-3' : '',
        variant === 'outline' ? 'border-gray rounded-sm border px-4 py-3' : '',
        variant === 'checkbox'
          ? 'hover:border-invert cursor-pointer rounded-sm border'
          : '',
        variant === 'solid' ? 'rounded-sm bg-primary-200 px-4 py-3' : '',
      )}
    >
      {props.children}
    </button>
  );
};

export { Button };
