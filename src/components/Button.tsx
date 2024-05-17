import clsx from 'clsx';

type IButtonProps = {
  className?: string;
  children: any;
  variant?: 'primary' | 'secondary' | 'checkbox' | any;
  onClick?: any;
  textColor?: string;
};

const Button = (props: IButtonProps) => {
  const {
    className,
    variant = 'primary',
    onClick,
    textColor = 'text-primary-1050',
  } = props;
  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-fit cursor-pointer rounded-sm px-4 py-3',
        className,
        textColor,
        variant === 'primary' ? 'border border-black' : '',
        variant === 'secondary' ? 'bg-primary-200' : '',
        variant === 'outline' ? 'border-gray border' : '',
        variant === 'checkbox'
          ? 'hover:border-invert cursor-pointer border'
          : '',
        variant === 'solid' ? 'bg-primary-1050' : '',
      )}
    >
      {props.children}
    </button>
  );
};

export { Button };
