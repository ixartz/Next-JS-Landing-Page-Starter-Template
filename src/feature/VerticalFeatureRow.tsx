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
  badge?: {
    text: string;
    color: 'green' | 'blue' | 'yellow' | 'red' | 'purple' | 'gray';
  };
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-24',
    'flex',
    'flex-wrap',
    'items-start',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();
  const target = props.blank ? '_blank' : '_self';

  const buttonText: string = props.targetText
    ? props.targetText
    : 'Check it out';

  const getBadgeClasses = (color: string) => {
    const baseClasses =
      'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium';
    const colorClasses = {
      green: 'bg-green-100 text-green-800',
      blue: 'bg-blue-100 text-blue-800',
      yellow: 'bg-yellow-100 text-yellow-800',
      red: 'bg-red-100 text-red-800',
      purple: 'bg-purple-100 text-purple-800',
      gray: 'bg-gray-100 text-gray-800',
    };
    return `${baseClasses} ${colorClasses[color as keyof typeof colorClasses]}`;
  };

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-left sm:w-1/2 sm:px-6">
        <div className="flex items-center gap-3">
          <h3 className="text-3xl font-semibold text-gray-900">
            {props.title}
          </h3>
          {props.badge && (
            <span className={getBadgeClasses(props.badge.color)}>
              {props.badge.text}
            </span>
          )}
        </div>
        <div className="mt-6 py-6 text-xl leading-9">{props.description}</div>
        {props.target && (
          <Link target={target} href={{ pathname: props.target }}>
            <Button>{`${buttonText} →`}</Button>
          </Link>
        )}
        {props.comingSoon && <Button>Coming soon...</Button>}
      </div>

      <div className="w-full px-6 sm:w-1/2">
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
