import type { ReactNode } from 'react';

import { Grid } from '@/grideffect/GridEffect';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

const Background = (props: IBackgroundProps) => (
  <div className={props.color}>
    <Grid columns={40} />
    {props.children}
  </div>
);

export { Background };
