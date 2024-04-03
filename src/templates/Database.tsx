import Link from 'next/link';

import { Button } from '@/button/Button';
import { VerticalFeatureRow } from '@/feature/VerticalFeatureRow';
import { Section } from '@/layout/Section';
import { TopNav } from '@/layout/TopNav';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { SupportUs } from './SupportUs';
import { UnderDevelopment } from './UnderDevelopment';

const Database = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <TopNav></TopNav>

    <UnderDevelopment />

    <Section
      title="kiyânaw Database"
      description="kiyânaw Database provides learner-driven deep context exploration within real-world language. By indexing content from transcriptions and other published materials, learners are able to search for words, partial words, or phrases that support their current learning context. Initially being development for nêhiyawêwin (Plains Cree Y-dialect), kiyânaw Database holds the vision of being able to support learners of any Indigenous language."
    >
      <div className="text-center">
        <Link target="_blank" href="https://transcribe.kiyanaw.net/stats">
          <Button>{`Explore kiyânaw Database now →`}</Button>
        </Link>
      </div>

      <VerticalFeatureRow
        title="High frequency words"
        description="When analysis (spell-checking) is available for a language, advanced indexing becomes possible, allowing us to keep a list of high-frequency words. Studying these lists can help to speed the advance our comprehension and fluency."
        image="/assets/images/database-high-frequency.png"
        imageAlt="High frequency words"
        target="https://transcribe.kiyanaw.net/stats"
        targetText="Try it now"
        blank
      />
      <VerticalFeatureRow
        title="Explore in-context"
        description="Rather than just simple word lists or dictionaries, learners can explore for words within their current study domain and see & hear them used in-context. Links to existing transcriptions and other media let learners hear real language from fluent speakers, used correctly, in-context."
        image="/assets/images/database-distribution.png"
        imageAlt="Search and explore in-context"
        reverse
        target="https://transcribe.kiyanaw.net/stats/lemma/itw%C3%AAw"
        targetText="Example distribution for itwêw"
        blank
      />
      <VerticalFeatureRow
        title="Powerful search"
        description="Being able to find words, partial words, or phrases adjacent to the materials we're currently studying as learners is extremely powerful. kiyânaw Database allows for powerful partial and advanced search to support the learner's journey."
        image="/assets/images/database-search.png"
        imageAlt="Powerful search features"
        target="https://transcribe.kiyanaw.net/stats"
        targetText="Try it"
        blank
      />
    </Section>
    <Section title="Roadmap" description="Coming soon...">
      <p></p>
    </Section>

    <SupportUs />

    <Footer />
  </div>
);

export { Database };
