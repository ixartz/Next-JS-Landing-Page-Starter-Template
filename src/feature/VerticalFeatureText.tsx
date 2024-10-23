import className from 'classnames';

type IVerticalFeatureTextProps = {
  title: string;
  description: string;
};

const VerticalFeatureText = (props: IVerticalFeatureTextProps) => {
  const verticalFeatureTextClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    'justify-center',
  );

  return (
    <div className={verticalFeatureTextClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-900">{props.title}</h3>
        <div className="mt-6 text-xl leading-9 text-gray-500">
          {props.description}
        </div>
      </div>
    </div>
  );
};

export { VerticalFeatureText };
