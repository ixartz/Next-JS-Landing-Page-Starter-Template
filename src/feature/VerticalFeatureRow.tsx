import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string | StaticImageData;
  imageAlt: string;
  reverse?: boolean;
  height?: number;
  width?: number;
  useUrl?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <img
          src={`${
            props.useUrl ? props.image : `${router.basePath}${props.image}`
          }`}
          style={{
            border: '5rem solid white',
          }}
          alt={props.imageAlt}
          height={props.height || 420}
          width={props.width || 320}
        />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
