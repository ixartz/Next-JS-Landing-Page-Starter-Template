import className from 'classnames';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export function useIsVisible(ref: any) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry) setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

type IVerticalFeatureRowProps = {
  title: string;
  description: React.ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const ref = useRef<HTMLDivElement>(null);
  // const [show, setShow] = useState(false);
  const show = useIsVisible(ref);
  // useLayoutEffect(() => {
  //   const topPos = ref?.current?.getBoundingClientRect().top || 0;
  //   const onScroll = () => {
  //     const scrollPos = window.scrollY + window.innerHeight;
  //     console.log(scrollPos, topPos, show);
  //     if (topPos < scrollPos) {
  //       setShow(true);
  //     }
  //   };
  //   window.addEventListener('scroll', onScroll);

  //   return () => window.removeEventListener('scroll', onScroll);
  // }, []);

  const router = useRouter();

  return (
    <div
      className={className(
        'my-20',
        'flex',
        'flex-wrap',
        'items-center',
        'transition-all',
        'duration-700',
        'ease-in',

        {
          'flex-row-reverse': props.reverse,
        },
        show ? 'opacity-100' : 'opacity-10 translate-y-20',
      )}
      ref={ref}
    >
      <div className="w-full text-left sm:w-1/2">
        <h3 className="text-2xl font-semibold text-gray-900 md:text-3xl">
          {props.title}
        </h3>
        <div className="mt-6 text-lg leading-9 md:text-xl">
          {props.description}
        </div>
      </div>
      <div className="w-full p-6 sm:w-1/2 md:pl-16">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
