import clsx from 'clsx';

interface TyppgraphyProps {
  text: string;
  className?: string;
}
export function TypographyH3(props: TyppgraphyProps) {
  return (
    <h1
      className={clsx(
        props.className,
        'scroll-m-20 text-2xl font-medium leading-tight tracking-tight md:text-3xl lg:text-4xl xl:text-5xl',
      )}
    >
      {props.text}
    </h1>
  );
}

export function TypographyH4(props: TyppgraphyProps) {
  return (
    <h1
      className={clsx(
        props.className,
        'scroll-m-20 text-4xl tracking-tight lg:text-5xl',
      )}
    >
      {props.text}
    </h1>
  );
}

export function TypographyH6(props: TyppgraphyProps) {
  return (
    <h1 className={clsx(props.className, 'scroll-m-20 text-xl tracking-tight')}>
      {props.text}
    </h1>
  );
}

export function TypographyP1(props: TyppgraphyProps) {
  return (
    <p
      className={clsx(
        props.className,
        'text-xl leading-7 [&:not(:first-child)]:mt-6',
      )}
    >
      {props.text}
    </p>
  );
}

export function TypographyP2(props: TyppgraphyProps) {
  return (
    <p
      className={clsx(
        props.className,
        'text-lg leading-7 [&:not(:first-child)]:mt-6',
      )}
    >
      {props.text}
    </p>
  );
}

export function TypographyB2(props: TyppgraphyProps) {
  return (
    <p
      className={clsx(
        props.className,
        'text-lg font-medium leading-7 [&:not(:first-child)]:mt-6',
      )}
    >
      {props.text}
    </p>
  );
}
