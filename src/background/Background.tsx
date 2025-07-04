import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color?: string; // make it optional
};

const Background = ({ children, color = 'bg-white' }: IBackgroundProps) => (
  <div className={`${color} transition-colors duration-300 dark:bg-gray-900`}>
    {children}
  </div>
);

export { Background };
