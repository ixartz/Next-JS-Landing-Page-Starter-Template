import clsx from 'clsx';

type IButtonProps = {
  classname?: string;
  children: any;
  variation?: 'primary' | 'secondary' | any;
};

const Button = (props: IButtonProps) => {
  const { classname, variation = 'primary' } = props;
  return (
    <div
      className={clsx(
        'mx-auto flex w-fit justify-center px-8 py-2 text-lg',
        classname,

        variation === 'primary' ? 'rounded-md border border-black' : '',
      )}
    >
      {props.children}
    </div>
  );
};

export { Button };
