// icons.tsx
import React from 'react';

// Define common icon props
export type IconProps = {
  style?: React.CSSProperties;
  className?: string;
  size?: number | string;
};

// StarIcon component
export const StarIcon: React.FC<IconProps> = ({
  style,
  className,
  size = '48',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={className}
  >
    <path
      d="M10.5 0L12.4304 8.5696L21 10.5L12.4304 12.4304L10.5 21L8.5696 12.4304L0 10.5L8.5696 8.5696L10.5 0Z"
      fill="#003434"
    />
  </svg>
);
