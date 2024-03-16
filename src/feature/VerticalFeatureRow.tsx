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
    'p-4 border-[2px] rounded-md shadow-xl sm:h-[400px] flex flex-row justify-between items-center bg-white',
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="align-start flex w-full flex-col items-start justify-start text-center sm:w-1/2 sm:px-6">
        <h3 className="px-4 text-left text-2xl text-gray-900">{props.title}</h3>
        <div className="mt-2 px-4 text-left text-xl leading-9">
          {props.description}
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center rounded-md p-6 sm:h-full sm:w-1/2">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
