import type { ReactNode } from 'react';

type ITimelineProps = {
  children: ReactNode;
};

const Timeline = (props: ITimelineProps) => {
  return (
    <ul className="daisy-timeline daisy-timeline-vertical daisy-timeline-snap-icon max-md:daisy-timeline-compact">
      {props.children}
    </ul>
  );
};

export { Timeline };
