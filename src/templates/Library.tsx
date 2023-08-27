import { Section } from '@/layout/Section';
import { TopNav } from '@/layout/TopNav';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { LibraryDataTable } from './LibraryDataTable';

const Library = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <TopNav></TopNav>
    <Section title="Learner library">
      <p className="text-center">
        A (non-exhaustive) collection of resources for language learners,
        largely focused around the Cree language.
      </p>
    </Section>
    <LibraryDataTable></LibraryDataTable>
    <Footer />
  </div>
);

export { Library };
