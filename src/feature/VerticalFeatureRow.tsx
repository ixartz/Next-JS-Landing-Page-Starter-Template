import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
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

  return (
    <div className={verticalFeatureClass}>
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
