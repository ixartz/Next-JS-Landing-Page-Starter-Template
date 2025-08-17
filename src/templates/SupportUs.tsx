import { Section } from '@/layout/Section';

import { Coffee } from './Coffee';

const SupportUs = () => (
  <div className="rounded-md bg-green-100 text-center">
    <Section>
      <div className="text-center">
        <h2 id="support" className="pb-4 text-3xl font-bold text-emerald-800">
          Support Us!
        </h2>
        <div className="text-base text-emerald-700">
          <strong>All our projects are free to use</strong>! . Every dollar
          donated goes towards the development of language projects. <br />
          We appreciate your support 🙏
        </div>
      </div>
      <div className="pb-4 pt-8 text-center">
        <Coffee></Coffee>
      </div>
    </Section>
  </div>
);

export { SupportUs };
