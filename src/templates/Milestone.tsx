type IMilestoneProps = {
  time?: string;
  title: string;
  description: string;
  complete?: boolean;
  start?: boolean;
  end?: boolean;
  right?: boolean;
};

const Milestone = (props: IMilestoneProps) => {
  const complete = !!props.complete;
  const checkComplete = complete ? 'text-emerald-500' : '';
  const lineComplete = complete ? 'bg-emerald-500' : '';
  const alignRight = props.right ? 'end' : 'start md:text-end';
  const textComplete = complete ? 'text-emerald-600 font-black' : 'font-black';

  return (
    <li>
      {!props.start && <hr className={lineComplete} />}
      <div className="daisy-timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-5 w-5 ${checkComplete}`}
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className={`daisy-timeline-${alignRight} mb-10`}>
        <time className="font-mono italic">{props.time}</time>
        <div className={`text-lg ${textComplete}`}>{props.title}</div>
        {props.description}
      </div>
      {!props.end && <hr className={lineComplete} />}
    </li>
  );
};

export { Milestone };
