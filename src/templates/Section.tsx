import { Button } from '../button/Button';

const SelectionGroup = () => {
  const options = ['Sell-side M&A', 'Financing', 'Strategic Advisory'];

  return (
    <div className="mb-4 mt-8 flex flex-wrap gap-2">
      {options.map((option, ind) => {
        return (
          <Button
            variation="multi-select"
            classname="w-full whitespace-nowrap flex-1 min-w-[250px] p-3"
            key={option + ind}
          >
            <h3 className="invert"> {option}</h3>
          </Button>
        );
      })}
    </div>
  );
};

export const OurServicesSection = () => {
  return (
    <div className="bg-primary-1050 p-8">
      <h1 className="invert">
        Learn how Syncap can help you achieve your strategic objectives faster
        and with optimized value.
      </h1>
      <SelectionGroup />
      <div>
        <input
          type="checkbox"
          className="form-checkbox size-5 bg-transparent"
          title="I would like to receive a complimentary preliminary valuation assessment report."
        ></input>
      </div>
      <Button variation="primary" classname="invert">
        Schedule an Initial Consultation
      </Button>
    </div>
  );
};
