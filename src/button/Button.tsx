import clsx from 'clsx';

type IButtonProps = {
  classname?: string;
  children: any;
  variation?: 'primary' | 'secondary' | 'multi-select' | any;
};

const Button = (props: IButtonProps) => {
  const { classname, variation = 'primary' } = props;
  return (
    <div
      className={clsx(
        'mx-auto flex w-fit justify-center text-lg',
        classname,
        variation === 'primary'
          ? 'rounded-md border border-black px-8 py-2'
          : '',
        variation === 'multi-select'
          ? 'hover:border-invert cursor-pointer rounded-md border'
          : '',
        variation === 'solid' ? 'rounded-md bg-primary-200' : '',
      )}
    >
      {props.children}
    </div>
  );
};

export { Button };
