import className from 'classnames';
import { motion } from 'framer-motion';
import { useState } from 'react';

type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const [pdr, setPdr] = useState(0);

  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
    'shadow-button': true,
  });

  return (
    <div
      className={btnClass}
      onMouseEnter={() => setPdr(10)}
      onMouseLeave={() => setPdr(0)}
    >
      <div className="flex flex-row items-center justify-between">
        <motion.div
          initial={{ paddingRight: 0 }}
          animate={{ paddingRight: pdr }}
          transition={{ duration: 0.3 }}
        >
          {props.children}
        </motion.div>
        <div>
          <svg
            className="ml-2 size-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-black;
          }

          .btn-primary:hover {
            @apply bg-black;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
