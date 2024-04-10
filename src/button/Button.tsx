import clsx from 'clsx';

type IButtonProps = {
  classname?: string;
  children: any;
  variation?: 'primary' | 'secondary' | 'checkbox' | any;
  onClick?: any;
};

const Button = (props: IButtonProps) => {
  const { classname, variation = 'primary', onClick } = props;
  return (
    <div
      onClick={onClick}
      className={clsx(
        'w-fit cursor-pointer',
        classname,
        variation === 'primary'
          ? 'rounded-sm border border-black px-8 py-1'
          : '',
        variation === 'checkbox'
          ? 'hover:border-invert cursor-pointer rounded-sm border'
          : '',
        variation === 'solid' ? 'rounded-sm bg-primary-200 p-2' : '',
      )}
    >
      {props.children}
    </div>
  );
};

export { Button };
