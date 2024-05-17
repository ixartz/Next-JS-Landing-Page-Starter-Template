import { ArrowTopRightIcon, CheckIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import { useState } from 'react';

import { CheckBox, CheckBoxButton } from '@/components/Checkbox';

import { Button } from '../components/Button';

const SelectionGroup = () => {
  const options = [
    'Sellling a Business',
    'Buying a Business',
    'Raising Capital',
  ];
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [withReport, setWithReport] = useState(false);

  const handleSelection = (option: any) => {
    const foundItem = selectedOptions.indexOf(option);
    const updator = selectedOptions.slice();
    if (foundItem === -1) {
      updator.push(option);
    }

    if (foundItem > -1) updator.splice(foundItem, 1);
    setSelectedOptions(updator);
  };

  return (
    <div className="mb-4 mt-8 flex flex-col gap-2">
      <div className="flex flex-wrap gap-4 lg:flex-nowrap">
        {options.map((option, ind) => {
          const selected = selectedOptions.includes(option);
          return (
            <>
              <CheckBoxButton
                variation="checkbox"
                classname={clsx(
                  'min-w-[250px] flex-1  whitespace-nowrap p-3',
                  selected && 'bg-gray-200/20',
                )}
                key={option + ind}
                onSelect={() => {
                  handleSelection(option);
                }}
              >
                <div className={clsx('flex items-center justify-between')}>
                  <h3 className="invert"> {option}</h3>
                  {selected && <CheckIcon color="white" />}
                </div>
              </CheckBoxButton>
            </>
          );
        })}
      </div>
      <CheckBox
        onSelect={() => {
          setWithReport(!withReport);
        }}
        selected={withReport}
        label="I would like to receive a complimentary preliminary valuation assessment report."
      />
    </div>
  );
};

export const OurServicesSection = () => {
  return (
    <div className="mx-0 w-full bg-primary-1050">
      <div className="mx-auto w-full max-w-screen-lg p-8">
        <h2 className="text-lg font-medium text-gray-100">
          Learn how Syncap can help you achieve your strategic objectives <br />{' '}
          with speed, control, and optimized value.
        </h2>
        <SelectionGroup />
        <div className="flex justify-start">
          <Button
            className="flex items-center whitespace-nowrap"
            variant="secondary"
          >
            <p className="font-medium">Schedule an Initial Consultation</p>
            <ArrowTopRightIcon className="ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};
