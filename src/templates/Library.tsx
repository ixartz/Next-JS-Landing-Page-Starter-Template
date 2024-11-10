'use server';

import { Section } from '@/layout/Section';
import { TopNav } from '@/layout/TopNav';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { LibraryDataTable } from './LibraryDataTable';

const Library = () => (
  <div className="text-gray-600 antialiased">
    <Meta
      title={`${AppConfig.title} - Learner Library`}
      description={AppConfig.description}
    />
    <TopNav></TopNav>
    <Section title="Learner library">
      <p className="text-center">
        A (non-exhaustive) collection of resources for language learners,
        largely focused around the Cree language.
      </p>
      <p className="text-center">
        <a
          href="https://bony-carp-8ee.notion.site/1395c08efb7380a8a755db790933a656"
          target="_blank"
          className="text-primary-600 hover:text-primary-900"
        >
          <strong>Did we miss something? Submit it here!</strong>
        </a>
      </p>
    </Section>
    <LibraryDataTable></LibraryDataTable>
    <Footer />
  </div>
);

export { Library };
