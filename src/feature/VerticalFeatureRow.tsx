import className from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from '@/button/Button';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  target?: string;
  targetText?: string;
  comingSoon?: boolean;
  blank?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();
  const target = props.blank ? '_blank' : '_self';

  const buttonText: string = props.targetText
    ? props.targetText
    : 'Check it out';

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-900">{props.title}</h3>
        <div className="mt-6 pb-6 text-xl leading-9">{props.description}</div>
        {props.target && (
          <Link target={target} href={{ pathname: props.target }}>
            <Button>{`${buttonText} →`}</Button>
          </Link>
        )}
        {props.comingSoon && <Button>Coming soon...</Button>}
      </div>

      <div className="w-full p-6 sm:w-1/2">
        <img
          className="rounded-xl"
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
        />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
