type ITagProps = {
  text: string;
  color?: string;
};

type ITagsProps = {
  tags: Array<string>;
};

const Tag = (props: ITagProps) => {
  const color = props.color || 'lime';
  return (
    <span
      className={`bg-${color}-100 text-${color}-800 py-0.2 dark:bg- my-1 mr-2 rounded px-1.5 text-xs font-medium${color}-700 dark:text-${color}-300 inline-flex`}
    >
      {props.text}
    </span>
  );
};

const Tags = (props: ITagsProps) => (
  <div className="flex flex-wrap">
    {props.tags.map((tag) => (
      <Tag text={tag} key={tag}></Tag>
    ))}
  </div>
);

export { Tag, Tags };
