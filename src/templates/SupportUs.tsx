import { Section } from '@/layout/Section';

import { Coffee } from './Coffee';

const SupportUs = () => (
  <div className="rounded-md bg-green-100 text-center">
    <Section>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:pb-12 sm:text-left">
        <div>
          <h2
            id="support"
            className="pb-4 text-center text-3xl font-bold text-emerald-800"
          >
            Support Us!
          </h2>
          <div className="text-center text-base text-emerald-700">
            <strong>All our projects are free to use</strong> and developed{' '}
            <strong>
              solely on our free time and commmunity contributions
            </strong>
            . Every dollar donated goes towards the development of these
            projects, and is reported in an open fashion. We appreciate your
            support 🙏
          </div>
        </div>
      </div>
      <div className="pb-4 text-center">
        <Coffee></Coffee>
      </div>
    </Section>
  </div>
);

export { SupportUs };
